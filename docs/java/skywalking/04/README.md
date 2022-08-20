---
lang: zh-CN
title: SkyWalking 源码之 javaagent
description: SkyWalking 从入门到源码贡献
prev: /java/skywalking/03/
next: /java/skywalking/05/
---

# SkyWalking 源码之 javaagent

## 环境准备

1. 下载指定版本的源代码包
2. 删除父模块的 checkstyle 插件和 webapp 模块的 node 编译插件
3. 升级 gRPC 相关的依赖到最新版本(M1 只有最新版本支持)
4. 将编译后的 apm-network 模块下的 target 目录下的 java 和 grpc-java 标记为源代码

## Agent 启动方式

1. 静态启动
2. 动态附加

- 静态启动：使用 `-javaagent` 在应用系统启动时挂载 Agent
- 动态附加：在系统运行时使用 Attach API  挂载 Agent

- 静态启动入口方法：`premain()`
- 动态附加入口方法：`agentmain()`

- 静态启动对字节码操作自由度较高，可以对字节码做任意修改，唯一要求：修改后的字节码能够通过 JVM 验证 (即符合字节码规范)
- 动态附加对字节码操作自由度极低。如：不能增减父类、不能增减接口、不能增减字段、等等。

- 静态启动应用场景：需要对字节码进行大量修改。如：APM。SkyWalking 仅支持这种方式挂载 Agent。
- 动态附加应用场景：系统诊断。如：阿里 Arthas。

## SkyWalking 原理概述

简单讲，SkyWalking 就是在我们自己的类里面插入他的监控代码。

## Agent 启动流程

> 源代码位置：`org.apache.skywalking.apm.agent.SkyWalkingAgent#premain`

1. 初始化配置
2. 加载插件
3. 定制化 Agent 行为 <Badge type="warning" text="重要" vertical="top" />
4. 启动服务 <Badge type="warning" text="重要" vertical="top" />
5. 注册「关闭钩子」

### 1. 初始化配置

#### 1.1 加载配置信息

1. `config/agent.config`
2. 系统环境变量
3. Agent 参数

> 从上往下，优先级越来越大

#### 1.2 将配置信息映射到 Config 类

通常我们加载完配置后，直接调用 Properties 即可。而 SkyWalking 并不满足于直接调用 Properties，
而是将所有的配置信息映射到了一个包含所有配置信息的类：`org.apache.skywalking.apm.agent.core.conf.Config` 中。

> 可以通过快捷键 Cmd + F12 查看 Config 类的结构

#### 1.3 配置日志

> 既然类加载的时候就配置了 LOGGER，此时为什么还要再次加载日志呢？
> 
> 因为配置文件中有一个 `Config.Logging#RESOLVER` 的配置项，可以配置日志的解析类型(JSON 和 PATTERN)。

根据配置信息重新指定日志解析器。

#### 1.4 检查 Agent 名称和 OAP Server 地址是否配置

#### 1.5 标记配置加载完成

### 2. 加载插件

#### 2.1 自定义类加载器 AgentClassLoader

调用 `registerAsParallelCapable();` 方法开启并行加载模式

> 原理就是将类加载时的锁从类加载器级别缩小到具体加载的某一个类。

类加载器的 classpath 是 `skywalking.plugin.mount` 指定的目录，默认是 `${SW_Agent}/plugins/` 目录和 `${SW_Agent}/activations/` 目录

#### 2.2 插件定义体系

##### 插件定义： `XxxInstrumentation` 

- 拦截实例方法/构造器，继承 `ClassInstanceMethodsEnhancePluginDefine`
- 拦截静态方法，继承 `ClassStaticMethodsEnhancePluginDefine`

> 其实这两个类是适配器类，都继承了 `ClassEnhancePluginDefine` 类，只是默认实现了不同的方法，减少子类的代码编写。

`AbstractClassEnhancePluginDefine` 是所有插件定义的顶级父类

- 要拦截的类使用 `XxxInstrumentation#enhanceClass` 方法指定
- 要拦截的方法使用 `XxxInstrumentation#getXxxInterceptPoints` 方法指定

##### 目标类匹配

通过 `ClassMatch` 接口实现

- 按类名匹配 `NameMatch`
- 间接匹配(模糊匹配) `IndirectMatch`, 其中两个典型实现 `PrefixMatch`(or), `MethodAnnotationMatch`(and 需要所有注解都匹配)

##### 拦截器定义

- beforeMethod
- afterMethod
- handleMethodException

操作字节码本身是比较复杂的，但是 SkyWalking 将整个逻辑抽象成了类似 AOP 的模式。

##### 插件声明

在 `resources/skywalking-plugin.def` 中定义 `插件名称=插件定义的全限定类名`，如：`dubbo=org.apache.skywalking.apm.plugin.asf.dubbo.DubboInstrumentation`

#### 2.3 插件加载流程

##### 1.PluginBootstrap 实例化所有插件

- `PluginResourcesResolver` 查找 `skywalking-plugin.def` (定义了插件名称和实现的全限定类名)
- `PluginCfg` 封装 `PluginDefine`
- `DynamicPluginLoader` 加载基于 XML 配置的插件

##### 2.PluginFinder 分类插件(根据ClassMatch)

- 命名匹配插件 (`NameMatch`)
- 间接匹配插件 (`IndirectMatch`)
- JDK 类库插件

### 3. 定制化 Agent

- 创建 ByteBuddy 实例
- 指定 ByteBuddy 要忽略的类
- 将必要的类注入到 Bootstrap ClassLoader 中

> 为什么要将一些类注入到 Bootstrap ClassLoader 中呢？因为我们需要对一些类进行字节码增强，而增强相关的逻辑类，是由 AgentClassLoader 加载的；
> 如果我们需要对一个由 Bootstrap 加载的类进行增强怎么办呢？由于「双亲委派」机制的影响，父级类加载器不能访问子级类加载器中的内容；
> 所以为了实现目的，我们可以将必要的类注入到 Bootstrap ClassLoader 中。

- 绕开 JDK9 模块系统的跨模块类访问
- 根据配置决定，是否将修改后的字节码文件保存一份到磁盘或内存中
- 细节定制: 1.指定 bytebuddy 要拦截的类; 2.指定做字节码增强的工具; 3.指定字节码增强的模式; 4.注册监听器; 5.将 Agent 安装到 Instrumentation(是和整个 JVM 黑盒世界打交道的句柄)

> 扩展： 字节码增强的模式
> 
> `REDEFINITION` 同名方法，重新定义 (类似重写)
> 
> `RETRANSFORMATION` 创建一个同名方法，然后将原方法改个名字。(这样就既保留了原来的方法的内容，又事实上替换了原来的方法)
> 
> 他们的区别就在于：是否保留变更前的内容 

## synthetic 关键字

JLS：所有存在于字节码文件中，但是不存在于源代码文件中的「构造」，都应该被 synthetic 关键字标注。

> 构造：Constructs, 可以指代 Java 类中的 Field, Method, Constructor

因此，可以理解 synthetic 为：由 Java 编译器在编译阶段自动生成的「构造」。

### Field

```java
public class FieldDemo {
    
    public String hello() {
        return "hello";
    }
    
    class FieldDemoInner {
        
        FieldDemo(FieldDemo var1) {
            this.this$0 = var1;
        }
        
        public void sayHello() {
            System.out.println(hello());
            // 其实字节码文件中如下所示
            System.out.println(this.this$0.hello());
        }
        
    }
}

public class Main {
    public static void main(String[] args) {
        fieldDemo(); // this$0  true // 
    }
    
    public static void fieldDemo() {
        Field[] fields = FieldDemo.FieldDemoInner.class.getDeclaredFields();
        for (Field field: fields) {
            System.out.println(field.getName() + " " + field.isSynthetic());
        }
    }
}
```

JVM 在编译阶段会在内部类中添加一个属性 `this$0` 指向外部类。为什么要这样做呢？

在 Java 中，一个类要调用另外一个类的方法，需要持有另外一个类的实例。内部类与外部类本质上还是不同的类，而内部类又要调用外部类的属性和方法，
所以内部类应该要持有外部类的实例，所以 JVM 在编译阶段自动在内部类中添加了 `this$0` 指向了外部类。

### Method

```java
public class MethodDemo {

    public class MethodDemoInner {

        // private MethodDemo this$0;
        private String innerName;

        // public void access$000(String name) {
        //     this.innerName = name;
        // }

        // public String access$002() {
        //     return this.innerName;
        // }

    }

    public void setInnerName(String name) {
        new MethodDemoInner().innerName = name;
        // 实际上编译器修改为如下：
        // new MethodDemoInner().access$000(string);
    }

    public String getInnerName() {
        return new MethodDemoInner().innerName;
        // 实际上编译器修改为如下：
        // return new MethodDemoInner().access$002();
    }
}

public class Main {
    public static void main(String[] args) {
        methodDemo(); // access$002  true \n access$000  true
    }

    public static void methodDemo() {
        Method[] methods = MethodDemo.MethodDemoInner.class.getDeclaredMethods();
        for (Method method: methods) {
            System.out.println(method.getName() + " " + method.isSynthetic());
        }
    }
}
```

因为不论是否是内部类，都不能访问类内部的私有成员变量。为了满足编译器的语法规范，对源代码做了如此的修改。

### Constructor

```java
public class ConstructorDemo {

    // 构造器私有了，就不能 new 了。但是这里居然不报错？
    private ConstructorDemoInner inner = new ConstructorDemoInner();

    public class ConstructorDemoInner {
        private ConstructorDemoInner() {

        }
    }

}

public class Main {
    public static void main(String[] args) {
        constructorDemo(); 
        // org.example.ConstructorDemo$ConstructorDemoInner false 2 private
        // org.example.ConstructorDemo$ConstructorDemoInner true 4096
    }

    public static void constructorDemo() {
        Constructor<?>[] constructors = ConstructorDemo.ConstructorDemoInner.class.getDeclaredConstructors();
        for (Constructor<?> constructor: constructors) {
            System.out.println(constructor.getName() + " " + constructor.isSynthetic());
            // modifier = 4096 => synthetic
            System.out.println(constructor.getModifiers());
            System.out.println(Modifier.toString(constructor.getModifiers()));
        }
    }
}
```

synthetic Constructor 就是为了解决内部类的构造方法私有，但是在外部类中调用他的构造方法。编译器会自动生成一个新的 synthetic 的构造方法。

总结：Synthetic 所做的事情，就是帮我们写了类似 JS 中的 `var that = this` 这个操作。

前面所讲的，适用于 JDK8。在 JDK 11 以后，引入了新的内部类访问控制 NBAC。

## NBAC

> Nested Based Access Control, 基于嵌套类的访问控制。

来看一个例子：

```java
public class Outer {

    public void outPublic() throws Exception {
        new Inner().innerPublic(); // 正常执行
        new Inner().reflectOuter(new Outer()); // 异常：can not access a member of class Outer with modifiers "private"
    }

    private void outPrivate() {

    }

    class Inner {

        public void innerPublic() {
            outPrivate(); // 内部类调用外部的方法，可以正常调用。synthetic 的方式桥接访问外部类的 private 方法
        }

        public void reflectOuter(Outer outer) throws Exception {
            Method method = outer.getClass().getDeclaredMethod("outPrivate");
            method.invoke(outer);
        }

    }

}

public class Main {

    public static void main(String[] args) throws Exception {
        new Outer().outPublic();
    }

}
```

在内部类里面同一个方法，不同的调用方式，结果不一样。

如果调用外部类的 `private` 方法：

1. 直接调用 => 不报错
2. 反射调用 => 报错

这存在二义性，于是在 JDK11 中引入了 NBAC 来消除这个二义性。

那么它是如何实现的呢？

通过查看 JDK 源码，发现 `Class` 类中有一个 `native` 的方法 `getNestHost0`.

NBAC 到底是个什么东西呢？

`Outer` 类里面有个 `Inner` 类。

- `Inner => NestHost = Outer.class`
- `Outer => NestMembers = [Inner.class]` members 里面就有 Inner.class

JVM 就是通过这两个方法(`getNestHost(), getNestMembers()`)来验证两个类的嵌套关系.

- Inner 的嵌套宿主：Outer
- Outer 的嵌套宿主：Outer
- Outer 的嵌套成员：Outer, Inner
- Inner 的嵌套成员：Outer, Inner

所以在 NBAC 的机制下，无论是从嵌套类去读取 NestMembers 还是从主类去读 NestMembers，他们获取的列表都是一样的。
这样设计可以快速的验证嵌套关系。(NestMembers 其实可以理解为「共同组成了嵌套关系」的成员，组成这个关系的成员中既有外部类、也有内部类)

事实上，如果按照上述的理解的话，Inner 和 Outer 更像是伙伴(Mate)关系，而不是主从关系。
因此有一个判断两个类是否是伙伴(Mate)关系的方法：`Outer.Inner.class.isNestmateOf(Outer.class);`, 结果是 `true`

## 服务加载

### 服务组织

SkyWalking 服务组织形式：

在一个服务的默认实现上使用 `@DefaultImplementor` 注解，然后在覆盖的实现上使用 `@OverrideImplementor(SamplingService.class)` 注解，value 指向默认实现。

> 覆盖默认服务的服务，一般都会继承默认服务，为什么不直接通过 `getSuperclass()` 获取呢？主要是没有通过注解的 value 传值来的方便。(而且覆盖实现也不一定直接继承，可能通过间接继承的方式)

总结：服务的组织形式：

1. 服务要实现 `BootService` 接口。
2. 如果只有一种实现，则直接实现 `BootService` 接口，不加任何注解。
3. 如果有多种实现，默认实现使用 `@DefaultImplementor` 注解，覆盖实现使用 `@OverrideImplementor` 注解，value 指向默认实现。

### 加载流程

1. SPI 加载所有 BootService 的实现
2. 根据服务的实现模式，进行服务的筛选 (只有一种实现的服务，直接加入集合; 有多种实现的服务，使用 「覆盖实现」覆盖「默认实现」)

## 插件工作原理

### 组件版本识别技术 witness

SkyWalking 采用 witnessClass 和 witnessMethods 实现版本识别。

- witnessClass 在指定类加载器下查找指定的类型，如果有多个类型，则必须同时存在
- witnessMethods 在指定类下查找指定的方法，如果有多个方法，则必须同时存在

当组件同时存在 witnessClass 指定的类和 witnessMethods 指定的方法时，插件才生效。

> 最开始的时候其实只有 witnessClass，后来为了更好的识别版本添加的 witnessMethods。
> 使用的时候也是，如果不能通过「类」的差异区分版本的话，再用 witnessMethods 通过方法区分版本。

> 在官方的插件中，witnessMethods 仅用在一个地方：用于区分 ES6 和 ES7。见源代码：`org.apache.skywalking.apm.plugin.elasticsearch.v6.define.AdapterActionFutureInstrumentation#witnessMethods`

### 工作流程

对字节码增强的核心流程在 `transform` 方法内部调用的 `define.define()` 方法内部

`define` 的流程：

1. 校验 `TypeDescription` 的合法性
2. `witness` 机制，校验当前插件是否可用
3. 字节码增强流程
4. 将记录状态的上下文 `EnhanceContext` 设置为「已增强」

### 字节码增强流程

1. 对静态方法
2. 对构造器和实例方法增强

#### 静态方法

1. 要修改原方法入参
   - JDK 核心类库的类
   - 不是 JDK 核心类库的类
2. 不修改原方法入参
    - JDK 核心类库的类
    - 不是 JDK 核心类库的类
   
四个具体的分支，总体流程都是类似的：

1. 实例化插件中定义的 Interceptor
2. 调用 beforeMethod() 方法
3. 调用原方法；如果发生异常调用 `handleMethodException()` 方法
4. 调用 afterMethod() 方法

> 其中，调用原方法时，如果要修改原方法的入参，则调用自定义的 OverrideCallable.call(args); 传入在 beforeMethod 阶段修改后的参数；
> 如果不修改原方法的入参，则调用原生的 Callable.call(); 方法。

思考：为什么在调用原方法时不使用 `method.invoke(clazz.newInstance())` 而非要使用一个 `Callable` 的引用呢？

#### 构造器和实例方法

构造器和实例方法的流程和 静态方法增强类似，只不过构建 `xxInterXx` 的时候参数多了一个类加载器，因为判断两个实例对象相等时，
首先要是同一个类加载器加载的，其次是同一份字节码。

构造器的增强方法 `onConstruct()` 方法的执行时机是在「原生的构造函数执行之后」执行

### load 方法详解

> 问题：在调用 org.apache.skywalking.apm.agent.core.plugin.loader.InterceptorInstanceLoader#load 时，如果是「实例方法」会传入一个 classLoader,
> 初始的调用位置是 transform() 方法，传入的 ClassLoader 是加载要增强的那个类的类加载器；如果是「静态方法」，调用 load 方法时是直接使用的 `@Origin` 的 class 的
> 类加载器，这个 `@Origin` 的 class 是要增强的那个类的「原生类」，他们的区别是什么？
> 是为了以防要增强的「实例方法」被增强过，被别的类加载器加载过吗？确保「实力方法」即使此时获取到的不是原生的类对象，也是无所谓吗？

思考：既然 AgentClassLoader 可以加载所有的插件里面的内容，为什么每次新的 interceptor 来的时候都要创建单独的 AgentClassLoader 呢？

要理解这个，需要首先具备类加载器的委派机制。我们先回顾一下「双亲委派」。BootstrapClassLoader - ExtClassLoader - AppClassLoader, 
AppClassLoader 加载类的时候会往上找，刚好两层，所以叫「双亲委派」。

事实上，这个链条还可以继续往下延伸 AppClassLoader - CustomClassLoaderA - CustomClassLoaderB - CustomClassLoaderC ..., 这样往上找就不止两层了，就不能叫「双亲」委派了。
因此，「双亲委派」是标准类加载器的范围内的概念；在更广域的范围内，就叫 类加载器的委派机制。

现在再回到代码中，在这个 load 方法中加载的是 interceptor, 而在 interceptor 中要做的操作就是要去改「拦截点」的字节码，在他当中调用 interceptor 中定义的方法，但是 AgentClassLoader 加载不到业务类(拦截点所在的类)的字节码，
所以可以使用类加载器的委派机制，让 AgentClassLoader 继承加载业务类的类加载器，这样就能在加载 interceptor 的类加载器中也能获取到拦截点的字节码了。
















