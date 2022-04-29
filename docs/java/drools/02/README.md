---
lang: zh-CN
title: Drools 基础语法
description: Drools 基础语法
prev: /java/drools/01
next: /java/drools/03
---

# Drools 基础篇

## 4. Drools基础语法

### 4.1 规则文件构成

在使用Drools时非常重要的一个工作就是编写规则文件，通常规则文件的后缀为 `.drl`。

**drl是Drools Rule Language的缩写**。在规则文件中编写具体的规则内容。

一套完整的规则文件内容构成如下：

| 关键字            | 描述                               |
|:---------------|:---------------------------------|
| `package`      | 包名，只限于逻辑上的管理，同一个包名下的查询或者函数可以直接调用 |
| `import`       | 用于导入类或者静态方法                      |
| `global`       | 全局变量                             |
| `function`     | 自定义函数                            |
| `query`        | 查询                               |
| `rule ... end` | 规则体                              |

> Drools支持的规则文件，除了 `drl` 形式，还有 `Excel` 文件类型的。

### 4.2 规则体语法结构

规则体是规则文件内容中的重要组成部分，是进行业务规则判断、处理业务结果的部分。

规则体语法结构如下：

```drools{1,4,6}
rule "ruleName"
    [attributes]
    when
        LHS 
    then
        RHS
end
```

**rule**：关键字，表示规则开始，参数为规则的唯一名称。

**attributes**：规则属性，是rule与when之间的参数，为可选项。

**when**：关键字，后面跟规则的条件部分。

**LHS**(Left Hand Side)：是规则的条件部分的通用名称。它由零个或多个条件元素组成。
*如果LHS为空，则它将被视为始终为true的条件元素*。  （左手边）

**then**：关键字，后面跟规则的结果部分。

**RHS**(Right Hand Side)：是规则的后果或行动部分的通用名称。 （右手边）

**end**：关键字，表示一个规则结束。

### 4.3 注释

在drl形式的规则文件中使用注释和Java类中使用注释一致，分为单行注释和多行注释。

单行注释用`//` 进行标记，多行注释以 `/*` 开始，以 `*/` 结束。如下示例：

```drools
// 规则rule1的注释，这是一个单行注释
rule "rule1"
    when
    then
        System.out.println("rule1触发");
end

/*
规则rule2的注释，
这是一个多行注释
*/
rule "rule2"
    when
    then
        System.out.println("rule2触发");
end
```

### 4.4 Pattern模式匹配

前面我们已经知道了Drools中的匹配器可以将 `Rule Base` 中的所有规则与 `Working Memory` 中的Fact对象进行模式匹配，
那么我们就需要在规则体的 `LHS` 部分定义规则并进行模式匹配。`LHS` 部分由一个或者多个条件组成，条件又称为 `pattern`。

**pattern的语法结构为：`绑定变量名:Object(Field约束)`**

其中绑定变量名可以省略，通常绑定变量名的命名一般建议以 `$` 开始。
如果定义了绑定变量名，就可以在规则体的 `RHS` 部分使用此绑定变量名来操作相应的Fact对象。

`Field约束` 部分是需要返回true或者false的0个或多个表达式。

> Field 是指 Fact 对象的成员变量

例如我们的入门案例中：

```drools{5}
//规则二：所购图书总价在100到200元的优惠20元
rule "book_discount_2"
    when
        //Order为类型约束，originalPrice为属性约束
        $order:Order(originalPrice < 200 && originalPrice >= 100)
    then
        $order.setRealPrice($order.getOriginalPrice() - 20);
        System.out.println("成功匹配到规则二：所购图书总价在100到200元的优惠20元");
end
```

通过上面的例子我们可以知道，匹配的条件为：

1. 工作内存中必须存在 `Order` 这种类型的Fact对象 —— 类型约束

2. Fact对象的 `originalPrice` 属性值必须小于200 —— 属性约束

3. Fact对象的 `originalPrice` 属性值必须大于等于100 —— 属性约束

以上条件必须同时满足当前规则才有可能被激活。

**绑定变量既可以用在对象上，也可以用在对象的属性上**。

例如上面的例子可以改为：

```drools{4,6}
// 规则二：所购图书总价在100到200元的优惠20元
rule "book_discount_2"
    when
        $order:Order($op:originalPrice < 200 && originalPrice >= 100)
    then
        System.out.println("$op=" + $op);
        $order.setRealPrice($order.getOriginalPrice() - 20);
        System.out.println("成功匹配到规则二：所购图书总价在100到200元的优惠20元");
end
```

LHS部分还可以定义多个 `pattern`，多个 `pattern` 之间可以使用 `and` 或者 `or` 进行连接，也可以不写，默认连接为`and`。

```drools{}
// 规则二：所购图书总价在100到200元的优惠20元
rule "book_discount_2"
    when
        $order:Order($op:originalPrice < 200 && originalPrice >= 100) and
        $customer:Customer(age > 20 && gender=='male')
    then
        System.out.println("$op=" + $op);
        $order.setRealPrice($order.getOriginalPrice() - 20);
        System.out.println("成功匹配到规则二：所购图书总价在100到200元的优惠20元");
end
```

### 4.5 比较操作符

Drools提供的比较操作符，如下表：

| 符号             | 说明                                   |
|:---------------|:-------------------------------------|
| `>`            | 大于                                   |
| `<`            | 小于                                   |
| `>=`           | 大于等于                                 |
| `<=`           | 小于等于                                 |
| `==`           | 等于                                   |
| `!=`           | 不等于                                  |
| `contains`     | 检查一个Fact对象的某个属性值是否包含一个指定的对象值         |
| `not contains` | 检查一个Fact对象的某个属性值是否不包含一个指定的对象值        |
| `memberOf`     | 判断一个Fact对象的某个属性是否在一个或多个集合中           |
| `not memberOf` | 判断一个Fact对象的某个属性是否不在一个或多个集合中          |
| `matches`      | 判断一个Fact对象的属性是否与提供的标准的Java正则表达式进行匹配  |
| `not matches`  | 判断一个Fact对象的属性是否不与提供的标准的Java正则表达式进行匹配 |

前6个比较操作符和Java中的完全相同，下面我们重点学习后6个比较操作符。

#### 4.5.1 语法

- **contains | not contains语法结构**

  `Object(Field[Collection/Array] contains value)`

  `Object(Field[Collection/Array] not contains value)`

- **memberOf | not memberOf语法结构**

  `Object(field memberOf value[Collection/Array])`

  `Object(field not memberOf value[Collection/Array])`

- **matches | not matches语法结构**

  `Object(field matches "正则表达式")`

  `Object(field not matches "正则表达式")`

> `contain` 是前面包含后面，`memberOf` 是后面包含前面。

#### 4.5.2 操作步骤

第一步：创建实体类，用于测试比较操作符

```java
@Data
public class ComparisonOperatorEntity {

  private String names;
  private List<String> list;

}
```

第二步：在 `/resources/rules` 下创建规则文件 `comparisonOperator.drl`

```drools{}
package comparisonOperator
import com.zmn.drools.entity.ComparisonOperatorEntity

/*
 当前规则文件用于测试Drools提供的比较操作符
*/

// 测试比较操作符 contains
rule "rule_comparison_contains"
    when
        ComparisonOperatorEntity(names contains "张三")
        ComparisonOperatorEntity(list contains names)
    then
        System.out.println("规则rule_comparison_contains触发");
end

// 测试比较操作符not contains
rule "rule_comparison_notContains"
    when
        ComparisonOperatorEntity(names not contains "张三")
        ComparisonOperatorEntity(list not contains names)
    then
        System.out.println("规则rule_comparison_notContains触发");
end

// 测试比较操作符memberOf
rule "rule_comparison_memberOf"
    when
        ComparisonOperatorEntity(names memberOf list)
    then
        System.out.println("规则rule_comparison_memberOf触发");
end

// 测试比较操作符not memberOf
rule "rule_comparison_notMemberOf"
    when
        ComparisonOperatorEntity(names not memberOf list)
    then
        System.out.println("规则rule_comparison_notMemberOf触发");
end

// 测试比较操作符matches
rule "rule_comparison_matches"
    when
        ComparisonOperatorEntity(names matches "张.*")
    then
        System.out.println("规则rule_comparison_matches触发");
end

// 测试比较操作符not matches
rule "rule_comparison_notMatches"
    when
        ComparisonOperatorEntity(names not matches "张.*")
    then
        System.out.println("规则rule_comparison_notMatches触发");
end
```

> 此案例中，在 RHS 中没有对 Fact 对象进行操作，因此省略了绑定变量名。

第三步：编写单元测试

```java{12-16}
public class DroolsTest {

  @Test
  public void test102() {

    KieServices kieServices = KieServices.Factory.get();
    // 获得 Kie 容器
    KieContainer kieContainer = kieServices.newKieClasspathContainer();
    // 从 Kie 容器对象中获取会话对象
    KieSession session = kieContainer.newKieSession();
    // Fact对象
    ComparisonOperatorEntity fact = new ComparisonOperatorEntity();
    fact.setNames("张三");
    List<String> list = new ArrayList<>();
    list.add("张三");
    fact.setList(list);
    // 事实对象加入工作内存
    session.insert(fact);
    // 激活规则，由Drools框架自动进行规则匹配。
    // 如果规则匹配成功，则执行当前规则。
    session.fireAllRules();
    // 关闭会话
    session.dispose();
  }
}
```

### 4.6 执行指定规则

通过前面的案例可以看到，我们在调用规则代码时，满足条件的规则都会被执行。那么如果我们只想执行其中的某个规则如何实现呢？

Drools给我们提供的方式是通过规则过滤器来实现执行指定规则。对于规则文件不用做任何修改，只需要修改Java代码即可，如下：

```java{25-26}
public class DroolsTest {
    
  // 测试执行指定规则
  @Test
  public void test103() {

    KieServices kieServices = KieServices.Factory.get();
    // 获得 Kie 容器
    KieContainer kieContainer = kieServices.newKieClasspathContainer();
    // 从 Kie 容器对象中获取会话对象
    KieSession session = kieContainer.newKieSession();
    // Fact对象
    ComparisonOperatorEntity fact = new ComparisonOperatorEntity();
    fact.setNames("张三");

    List<String> list = new ArrayList<>();
    list.add("张三");
    fact.setList(list);

    // 事实对象加入工作内存
    session.insert(fact);

    // 激活规则，由Drools框架自动进行规则匹配。
    // 如果规则匹配成功，则执行当前规则。
    // session.fireAllRules(new RuleNameEqualsAgendaFilter("rule_comparison_contains")); // 规则名等值匹配
    session.fireAllRules(new RuleNameStartsWithAgendaFilter("rule_")); // 规则名 头匹配

    // 关闭会话
    session.dispose();

  }

}
```

### 4.7 关键字

Drools的关键字分为：硬关键字(Hard keywords)和软关键字(Soft keywords)。

**硬关键字是我们在规则文件中定义包名或者规则名时明确不能使用的，否则程序会报错**。软关键字虽然可以使用，但是不建议使用。

硬关键字包括：`true` `false` `null`

> 如果规则名写作 `"true"` 字符串的形式，是不受影响的。

软关键字包括：`lock-on-active` `date-effective` `date-expires` `no-loop` `auto-focus` `activation-group`
`agenda-group` `ruleflow-group` `entry-point` `duration` `package` `import` `dialect` `salience`
`enabled` `attributes` `rule` `extend` `when` `then` `template` `query` `declare` `function` `global` 
`eval` `not` `in` `or` `and` `exists` `forall` `accumulate` `collect` `from` `action` `reverse` `result` 
`end` `over` `init`

比如：

```
rule true    //不可以
rule "true"  //可以
```

### 4.8 Drools内置方法

规则文件的 `RHS` 部分的主要作用是通过**插入，删除或修改工作内存中的Fact数据**，来达到控制规则引擎执行的目的。

Drools提供了一些方法可以用来操作工作内存中的数据，**操作完成后规则引擎会重新进行相关规则的匹配**，
原来没有匹配成功的规则在我们修改数据完成后有可能就会匹配成功了。

创建如下实体类：

```java
@Data
public class Student {

  private int id;
  private String name;
  private int age;

}
```

#### 4.8.1 update方法

update方法的作用是更新工作内存中的数据，并让相关的规则重新匹配。(要避免死循环)

第一步：编写规则文件 `/resources/rules/student.drl`，文件内容如下

```drools{10-11,19-20}
// 当前规则文件用于测试 Drools 的内置方法
package student
import com.zmn.drools.entity.Student

// 当前规则用于测试 update 内置方法
rule "rule_stu_age_lt_10"
    when
        $student:Student(age < 10)
    then
        $student.setAge(15);
        update($student); // update 方法用于更新 fact 对象，会导致相关规则重新匹配。本例中会匹配到下面的规则
        System.out.println("rule_stu_age_lt_10 规则触发了...");
end

rule "rule_sut_age_gt10_and_lt20"
    when
        $student:Student(age < 20 && age > 10)
    then
        $student.setAge(25);
        update($student); // 同理此处可以再次匹配到下面的规则。
        System.out.println("rule_sut_age_gt10_and_lt20 规则触发了...");
end

rule "rule_sut_age_gt20_and_lt30"
    when
        $student:Student(age < 30 && age > 20)
    then
        System.out.println("rule_sut_age_gt20_and_lt30 规则触发了...");
end
```

第二步：编写单元测试

```java
public class DroolsTest {

    // 测试内置方法
    @Test
    public void test104() {

        KieServices kieServices = KieServices.Factory.get();
        // 获得 Kie 容器
        KieContainer kieContainer = kieServices.newKieClasspathContainer();
        // 从 Kie 容器对象中获取会话对象
        KieSession session = kieContainer.newKieSession();
        // Fact对象
        Student fact = new Student();
        fact.setAge(5);

        // 事实对象加入工作内存
        session.insert(fact);

        // 激活规则，由Drools框架自动进行规则匹配。
        // 如果规则匹配成功，则执行当前规则。
        session.fireAllRules();

        // 关闭会话
        session.dispose();

    }

}
```

通过控制台的输出可以看到规则文件中定义的三个规则都触发了。

> 在更新数据时需要注意防止发生**死循环**。

#### 4.8.2 insert方法

insert方法的作用是向工作内存中插入数据，并让相关的规则重新匹配。

第一步：修改 `student.drl` 文件, 添加如下内容

```drools{6-8}
// 当前规则用于测试 insert 内置方法
rule "rule_student_age_eq_10"
    when
        $s:Student(age == 10)
    then
        Student student = new Student();
        student.setAge(5);
        insert(student); //插入数据，导致相关的规则会重新匹配
        System.out.println("rule_student_age_eq_10 规则触发了");
end
```

第二步：修改单元测试，修改初始赋值

```
fact.setAge(10);
```

通过控制台输出可以发现，四个规则都触发了，这是因为首先进行规则匹配时只有第一个规则可以匹配成功，
但是在第一个规则中向工作内存中插入了一个数据导致重新进行规则匹配，此时第二个规则可以匹配成功。

在第二个规则中进行了数据修改导致第三个规则也可以匹配成功，以此类推最终四个规则都匹配成功并执行了。

#### 4.8.3 retract方法

`retract` 方法的作用是删除工作内存中的数据，并让相关的规则重新匹配。

第一步：修改 `student.drl` 文件，添加如下内容：

```drools{6}
// 当前规则用于测试 retract 内置方法
rule "rule_student_age_eq_10_del"
    when
        $s:Student(age == 10)
    then
        retract($s); // 删除数据，导致相关的规则会重新匹配
        System.out.println("rule_student_age_eq_10_del 规则触发了");
end
```

第二步：编写单元测试

> 单元测试内容保持不变。

通过控制台输出可以发现，只有第一个规则触发了，因为在第一个规则中将工作内存中的数据删除了导致第二个规则并没有匹配成功。

## 5. 规则属性 attributes

前面我们已经知道了规则体的构成如下：

```drools{2}
rule "ruleName"
    [attributes]
    when
        LHS
    then
        RHS
end
```

本章节就是针对规则体的**attributes**属性部分进行讲解。Drools中提供的属性如下表(部分属性)：

| 属性名                | 说明                              |
|:-------------------|:--------------------------------|
| `salience`         | 指定规则执行优先级                       |
| `dialect`          | 指定规则使用的语言类型，取值为java和mvel        |
| `enabled`          | 指定规则是否启用                        |
| `date-effective`   | 指定规则生效时间                        |
| `date-expires`     | 指定规则失效时间                        |
| `activation-group` | 激活分组，具有相同分组名称的规则只能有一个规则触发       |
| `agenda-group`     | 议程分组，只有获取焦点的组中的规则才有可能触发         |
| `timer`            | 定时器，指定规则触发的时间                   |
| `auto-focus`       | 自动获取焦点，一般结合 `agenda-group` 一起使用 |
| `no-loop`          | 防止死循环                           |

### 5.1 enabled属性

`enabled` 属性对应的取值为 `true` 和 `false`，默认值为 `true`。

用于指定当前规则是否启用，如果设置的值为false则当前规则无论是否匹配成功都不会触发

```drools{3}
rule "rule_comparison_notMemberOf"
    //指定当前规则不可用，当前规则无论是否匹配成功都不会执行
    enabled false
    when
        ComparisonOperatorEntity(names not memberOf list)
    then
        System.out.println("规则rule_comparison_notMemberOf触发");
end
```

### 5.2 dialect属性

`dialect` 属性用于指定当前规则使用的语言类型，取值为 `java` 和 `mvel`，默认值为 `java`。

> 注：`mvel` 是一种基于 `java` 语法的表达式语言。

mvel像正则表达式一样，有直接支持集合、数组和字符串匹配的操作符。

mvel还提供了用来配置和构造字符串的模板语言。

mvel表达式内容包括属性表达式，布尔表达式，方法调用，变量赋值，函数定义等。

### 5.3 salience属性

salience属性用于指定规则的执行优先级，**取值类型为Integer**。

**数值越大越优先执行**。每个规则都有一个默认的执行顺序，如果不设置 `salience` 属性，规则体的执行顺序为由上到下。

可以通过创建规则文件 `salience.drl` 来测试 `salience` 属性，内容如下：

```drools
// 当前规则文件用于测试 salience 执行
package testsalience

// 定义第一个规则
rule "rule_1"
    when
        eval(true) // 明确返回 true, 即当前规则匹配成功
    then
        System.out.println("规则 rule_1 触发了...");
end

rule "rule_2"
    when
        eval(true) // 明确返回 true, 即当前规则匹配成功
    then
        System.out.println("规则 rule_2 触发了...");
end

rule "rule_3"
    when
        eval(true) // 明确返回 true, 即当前规则匹配成功
    then
        System.out.println("规则 rule_3 触发了...");
end
```

通过控制台可以看到，由于以上三个规则没有设置 `salience` 属性，所以执行的顺序是按照规则文件中规则的顺序由上到下执行的。
接下来我们修改一下文件内容：

```drools{4,12,20}
package testsalience

rule "rule_1"
    salience 9
    when
        eval(true)
    then
        System.out.println("规则rule_1触发");
end

rule "rule_2"
    salience 10
    when
        eval(true)
    then
        System.out.println("规则rule_2触发");
end

rule "rule_3"
    salience 8
    when
        eval(true)
    then
        System.out.println("规则rule_3触发");
end
```

通过控制台可以看到，规则文件执行的顺序是按照我们设置的 `salience` 值由大到小顺序执行的。

> 建议在编写规则时使用 `salience` 属性明确指定执行优先级。

### 5.4 no-loop属性

`no-loop` 属性用于防止死循环，当规则通过 `update` 之类的函数修改了Fact对象时，可能使当前规则再次被激活从而导致死循环。
取值类型为 `Boolean`，默认值为 `false`。测试步骤如下：

第一步：编写规则文件 `/resource/rules/noloop.drl`

```drools{7}
// 当前规则文件用于测试 no-loop, 防止规则执行时死循环问题
package testnoloop

import com.zmn.drools.entity.Student

rule "rule_no_loop"
    no-loop true // 使用 no-loop 来解决死循环问题
    when
        $s:Student(age == 50)
    then
        update($s); // 调用 update 方法会导致相关规则重新匹配
        System.out.println("规则 rule_no_loop 触发了...");
end
```

第二步：编写单元测试

> 单元测试内容同上

通过控制台可以看到，由于我们没有设置 `no-loop` 属性的值，所以发生了死循环。
接下来设置 `no-loop` 的值为 `true` 再次测试则不会发生死循环。

### 5.5 activation-group属性

activation-group属性是指**激活分组**，取值为String类型。具有相同分组名称的规则只能有一个规则被触发。

第一步：编写规则文件 `/resources/rules/activationgroup.drl`

```drools{5,13}
// 当前规则文件用于测试 activationgroup 属性
package testactivationgroup

rule "rule_activationgroup_1"
    activation-group "mygroup" // 对于同一个组内的规则只能有一个触发
    when
        // 如果条件不写，默认为 true, 表示规则匹配成功
    then
        System.out.println("规则 rule_activationgroup_1 触发了...");
end

rule "rule_activationgroup_2"
    activation-group "mygroup" // 对于同一个组内的规则只能有一个触发
    when
        // 如果条件不写，默认为 true, 表示规则匹配成功
    then
        System.out.println("规则 rule_activationgroup_2 触发了...");
end
```

> 此案例中使用的是默认的优先级，如果需要调整两个的优先级可以使用 salience 属性

第二步：编写单元测试

> 单元测试同上

通过控制台可以发现，上面的两个规则因为属于同一个分组，所以只有一个触发了。
同一个分组中的多个规则如果都能够匹配成功，具体哪一个最终能够被触发可以通过 `salience` 属性确定。

### 5.6 agenda-group属性

agenda-group属性为**议程分组**，属于另一种可控的规则执行方式。

用户可以通过设置 `agenda-group` 来控制规则的执行，只有获取焦点的组中的规则才会被触发。

第一步：创建规则文件 `/resources/rules/agendagroup.drl`

```drools
// 当前规则文件用于测试 agenda-group 属性
package testagendagroup

rule "rule_agendagroup_group_1"
    agenda-group "agenda_group_1"
    when
    then
        System.out.println("规则 rule_agendagroup_group_1 触发了...");
end

rule "rule_agendagroup_group_2"
    agenda-group "agenda_group_1"
    when
    then
        System.out.println("规则 rule_agendagroup_group_2 触发了...");
end

// -------------------------------------------------------------------

rule "rule_agendagroup_group_3"
    agenda-group "agenda_group_2"
    when
    then
        System.out.println("规则 rule_agendagroup_group_3 触发了...");
end

rule "rule_agendagroup_group_4"
    agenda-group "agenda_group_2"
    when
    then
        System.out.println("规则 rule_agendagroup_group_4 触发了...");
end
```

第二步：编写单元测试

```java{12-13}
public class DroolsTest {
  // 测试 agenda-group 属性
  @Test
  public void test105() {

    KieServices kieServices = KieServices.Factory.get();
    // 获得 Kie 容器
    KieContainer kieContainer = kieServices.newKieClasspathContainer();
    // 从 Kie 容器对象中获取会话对象
    KieSession session = kieContainer.newKieSession();

    // 指定 agenda_group_1 获得焦点
    session.getAgenda().getAgendaGroup("agenda_group_1").setFocus();

    // 激活规则，由Drools框架自动进行规则匹配。
    // 如果规则匹配成功，则执行当前规则。
    session.fireAllRules();
    // 关闭会话
    session.dispose();
  }
}
```

通过控制台可以看到，只有获取焦点的分组中的规则才会被触发。

与 `activation-group` 不同的是，`activation-group` 定义的分组中只能够有一个规则可以被触发，而 `agenda-group` 分组中的多个规则都可以被触发。

### 5.7 auto-focus属性

auto-focus属性为**自动获取焦点**，取值类型为 `Boolean`，默认值为 `false`。
一般结合 `agenda-group` 属性使用，当一个议程分组未获取焦点时，可以设置 `auto-focus` 属性来控制。

第一步：修改 `/resources/rules/agendagroup.drl`文件内容如下

```drools{22,30}
// 当前规则文件用于测试 agenda-group 属性
package testagendagroup

rule "rule_agendagroup_group_1"
    agenda-group "agenda_group_1"
    when
    then
        System.out.println("规则 rule_agendagroup_group_1 触发了...");
end

rule "rule_agendagroup_group_2"
    agenda-group "agenda_group_1"
    when
    then
        System.out.println("规则 rule_agendagroup_group_2 触发了...");
end

// -------------------------------------------------------------------

rule "rule_agendagroup_group_3"
    agenda-group "agenda_group_2"
    auto-focus true //自动获取焦点
    when
    then
        System.out.println("规则 rule_agendagroup_group_3 触发了...");
end

rule "rule_agendagroup_group_4"
    agenda-group "agenda_group_2"
    auto-focus true //自动获取焦点
    when
    then
        System.out.println("规则 rule_agendagroup_group_4 触发了...");
end
```

第二步：编写单元测试

> 单元测试同上

通过控制台可以看到，设置 `auto-focus` 属性为true的规则都触发了。

> 注意：同一个组，只需要其中一个规则设置 `auto-focus true` 其他的设置不设置都无所谓，都会起作用的。其他的规则即使设置为 false 也会生效.(因为其他的默认就是 false)

### 5.8 timer属性

`timer` 属性可以通过定时器的方式指定规则执行的时间，使用方式有两种：

- 方式一：`timer (int: <initial delay> <repeat interval>?)`

此种方式遵循 `java.util.Timer` 对象的使用方式，第一个参数表示几秒后执行，第二个参数表示每隔几秒执行一次，第二个参数为可选。

- 方式二：`timer(cron: <cron expression>)`

此种方式使用标准的 Unix cron表达式的使用方式来定义规则执行的时间。


第一步：创建规则文件 `/resources/rules/timer.drl`

```drools{8,16}
// 当前规则文件用于测试 timer 属性
package testtimer
import java.util.Date
import java.text.SimpleDateFormat

// timer 第一种使用方式
rule "rule_timer_1"
    timer(3s 2s) // 当前 timer 属性用于指定当前规则触发的时间。3s后触发，每隔2s触发一次。
    when
    then
         System.out.println("规则 rule_timer_1 触发了...");
end

// timer 第二种使用方式
rule "rule_timer_2"
    timer(cron:0/1 * * * * ?) // 从 0 秒开始，每 1s 触发一次
    when
    then
         System.out.println("规则 rule_timer_2 触发了...，触发时间为：" +
            new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
end
```

第二步：编写单元测试

```java{12-16}
public class DroolsTest {
  // 测试 timer 属性
  @Test
  public void test106() throws InterruptedException {

    KieServices kieServices = KieServices.Factory.get();
    // 获得 Kie 容器
    KieContainer kieContainer = kieServices.newKieClasspathContainer();
    // 从 Kie 容器对象中获取会话对象
    KieSession session = kieContainer.newKieSession();

    // 启动规则引擎进行规则匹配，直到调用 halt 方法才结束规则引擎
    new Thread(session::fireUntilHalt).start();
    Thread.sleep(10000); // 10s
    // 结束规则引擎
    session.halt();

    session.fireAllRules();
    // 关闭会话
    session.dispose();
  }
}
```

注意：单元测试的代码和以前的有所不同，因为我们规则文件中使用到了 `timer` 进行定时执行，需要程序能够持续一段时间才能够看到定时器触发的效果。

### 5.9 date-effective属性

`date-effective` 属性**用于指定规则的生效时间**，即只有当前系统时间大于等于设置的时间或者日期规则才有可能触发。

默认日期格式为：`dd-MMM-yyyy`。用户也可以自定义日期格式。

第一步：编写规则文件 `/resources/rules/dateeffective.drl`

```drools{7}
// 当前规则文件用于测试 dateeffective 属性
package testdateeffective
import java.util.Date
import java.text.SimpleDateFormat

rule "rule_date_effective_1"
    date-effective "2022-03-10 17:00"  // 指定当前规则生效时间
    when
    then
        System.out.println("规则 rule_date_effective_1 触发了...，触发时间为：" +
                    new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
end
```

第二步：编写单元测试

```java{6-7}
public class DroolsTest {
  // 测试 date-effective 属性
  @Test
  public void test107() {

    //设置日期格式
    System.setProperty("drools.dateformat","yyyy-MM-dd HH:mm"); // 变量的设置最好放到前面，如果放到 session 创建后，则变量不会起作用
    KieServices kieServices = KieServices.Factory.get();
    // 获得 Kie 容器
    KieContainer kieContainer = kieServices.newKieClasspathContainer();
    // 从 Kie 容器对象中获取会话对象
    KieSession session = kieContainer.newKieSession();

    session.fireAllRules();
    // 关闭会话
    session.dispose();
  }
}
```

注意：上面的代码需要设置日期格式，否则我们在规则文件中写的日期格式和默认的日期格式不匹配程序会报错。

### 5.10 date-expires属性

date-expires属性用于指定规则的**失效时间**，即只有当前系统时间小于设置的时间或者日期规则才有可能触发。

默认日期格式为：`dd-MMM-yyyy`。用户也可以自定义日期格式。

第一步：编写规则文件 `/resource/rules/dateexpires.drl`

```drools{7}
// 当前规则文件用于测试 dateexpires 属性
package testdateeffective
import java.util.Date
import java.text.SimpleDateFormat

rule "rule_date_expires_1"
    date-expires "2022-03-10 19:00"  // 指定当前规则失效时间
    when
    then
        System.out.println("规则 rule_date_expires_1 触发了...，触发时间为：" +
                    new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
end
```

第二步：编写单元测试

> 单元测试代码同 `date-effective` 案例

注意：上面的代码需要设置日期格式，否则我们在规则文件中写的日期格式和默认的日期格式不匹配程序会报错。
