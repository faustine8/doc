# Scala编程

## 第四部分 类与对象 

### 第1节 类和无参构造器

在 Scala 中，类并不用声明为 `public`; 

Scala 源文件中可以包含多个类，所有这些类都具有公有可见性; 

- `val` 修饰的变量(常量)，值不能改变，只提供 `getter` 方法，没有 `setter` 方法; 
- `var` 修饰的变量，值可以改变，对外提供 `getter`、`setter` 方法; 

如果没有定义构造器，类会有一个默认的无参构造器;

```scala{}
class Person {
  // 声明字段必须进行初始化，Scala 编译器会根据初始化值的数据类型自动推断出字段的类型。
  // 字段类型可以省略。
  var name = "zmn"

  // _ 代表一个占位符，Scala 编译器会根据变量的数据类型赋予相应的初始值
  // 注意：使用 _ 赋予初始值时，数据类型必须指定
  var nickName: String = _ // => null
  var numInt: Int = _ // => 0
  var numDouble: Double = _ // => 0.0
  var bool: Boolean = _ // false

  // val 修饰的变量不能使用占位符，下一行代码是错误的
  // val test: Int = _
  val num = 30
  var age = 20

  // 如果要将 null 赋值给变量，需要明确指定变量的数据类型。
  // 如果没有明确指定类型，编译器会认为是 Null 类型的。
  // var address: String = null // address 是 String 类型
  // var address = null // address 是 Null 类型

  // 类中的私有字段，有私有的 getter 和 setter 方法
  // 可以在类的内部访问，也可以被其伴生对象访问
  private var hobby = "travel"

  // 对象的私有字段。
  // 访问权限更小，只能在当前类中访问。
  private[this] val cardInfo = "10010"

  // 自定义方法
  def hello(message: String): Unit = {
    // 只能在当前类中去访问 cardInfo
    println(s"$message $cardInfo")
  }

  // 自定义方法，实现两数求和
  def addNum(num1: Int, num2: Int): Int = {
    num1 + num2
  }
}
```

类的实例化以及使用:

```scala{}
object ClassDemo {

  def main(args: Array[String]): Unit = {
    // 使用类的无参构造器来创建对象
    val person = new Person() // () 也是可以省略的
    println(s"${person.nickName} ${person.numInt} ${person.numDouble} ${person.bool}")

    // 给类的属性赋值
    person.age = 50 // 调用自动生成的setter 方法
    person.age_=(20) // 调用了 setter 方法，方法名为：age_=

    // 获取属性值
    println(person.age) // 调用类的属性，其实就是调用他的 getter 方法

    // 调用类中的方法
    person.hello("Hello")
    println(person.addNum(10, 20))
  }
}
```

### 第2节 自定义getter和setter方法

对于 Scala 类中的每一个属性，编译后会有一个私有的字段和相应的 `getter`、`setter` 方法生成。

```scala{}
//getter方法 
println(person age)
//setter方法 
person age_= (18)
//getter方法 
println(person.age)
```

可以不使用自动生成的方式，自己定义 `getter` 和 `setter` 方法

```scala{}
class Dog {
  private var _leg = 0

  // 自定义 getter 方法
  def leg: Int = _leg

  // 自定义 setter 方法
  def leg_=(newLeg: Int): Unit = {
    _leg = newLeg
  }
}

object GetterAndSetterDemo {
  def main(args: Array[String]): Unit = {
    val dog = new Dog
    // 调用自定义 setter 方法
    dog.leg_=(4)
    // 调用自定义 getter 方法
    println(dog.leg)
  }
}
```

自定义变量的 `getter` 和 `setter` 方法需要遵循以下原则:

- 字段属性名以 `_` 作为前缀，如: `_leg` 
- getter方法定义为: `def leg = _leg` 
- setter方法定义为: `def leg_=(newLeg: Int)`

### 第3节 Bean属性

JavaBean 规范把 Java 属性定义为一堆 `getter` 和 `setter` 方法。 

类似于Java，当将 Scala 字段标注为 `@BeanProperty` 时，`getFoo` 和 `setFoo`方法会自动生成。 

使用 `@BeanProperty` 并不会影响Scala自己自动生成的 `getter` 和 `setter` 方法。

在使用时需要导入包 `scala.beans.BeanProperty`

```scala{}
class Teacher {
  @BeanProperty
  var name: String = _
}

object BeanDemo {
  def main(args: Array[String]): Unit = {
    val teacher = new Teacher
    // 调用 Scala 自动生成的 getter/setter 方法
    teacher.name = "jacky"
    teacher.name_=("tom")
    println(teacher.name)

    // 调用 @BeanProperty 生成的 getter/setter 方法
    teacher.setName("john")
    println(teacher.getName)
  }
}
```

上述Teacher类中共生成了四个方法:

```scala{}
name: String

name_= (newValue: String): Unit

getName(): String

setName (newValue: String): Unit
```

### 第4节 构造器

如果没有定义构造器，Scala 类中会有一个默认的无参构造器;

Scala 当中类的构造器分为两种: 主构造器和辅助构造器; 

主构造器的定义与类的定义交织在一起，将主构造器的参数直接放在类名之后。

当主构造器的参数不用 `var` 或 `val` 修饰时，参数会生成类的私有 `val` 成员。

Scala中，所有的辅助构造器都必须调用另外一个构造器，另外一个构造器可以是辅助构造器，也可以是主构造器。

```scala{}
// 在 Scala 中，主构造器与类名交织在一起，类名后面的参数就是主构造器的参数
class Animal(name: String, age: Int) {
  // 主构造器直接在类中，其代码不包含在任何方法中
  // 下面三行代码，都属于主构造器的代码
  println(name)
  println(age)
  println("--------------------------")

  var gender: String = ""
  def this(name: String, age: Int, gender: String) {
    // 在类中每个辅助构造器必须以主构造器或其他辅助构造器的调用作为第一句代码
    this(name, age)
    this.gender = gender
  }

  var color: String = ""
  def this(name: String, age: Int, gender: String, color: String) {
    this(name, age, gender)
    this.color = color
  }
}

object ConstructorDemo {
  def main(args: Array[String]): Unit = {
    val john = new Animal("john", 4)
    val jack = new Animal("jack", 3, "male")
    val tom = new Animal("tom", 5, "male", "black")
    
  }
}
```

### 第5节 对象 

#### 5.1 单例对象

Scala 并没有提供Java那样的静态方法或静态字段; 

可以采用 `object` 关键字实现单例对象，具备和Java静态方法同样的功能;

使用 `object` 语法结构【object是Scala中的一个关键字】达到静态方法和静态字段的目的;

对象本质上可以拥有类的所有特性，除了不能提供构造器参数;

对于任何在Java中用单例对象的地方，在Scala中都可以用object实现: 

- 作为存放工具函数或常量的地方
- 高效地共享单个不可变实例

```scala{}
class Session {
  def hello(first: Int): Int = {
    println(first)
    first
  } 
}

object SessionFactory {
  val session = new Session
  def getSession: Session = {
    session
  }
  def main(args: Array[String]): Unit = {
    for (x <- 1 to 10) {
    //通过直接调用，产生的对象都是单例的
    val session = SessionFactory.getSession
    println(session)
    } 
  }
}
```

Scala中的单例对象具有如下特点: 

1. 创建单例对象不需要使用new关键字 
2. object中只有无参构造器 
3. 主构造代码块只能执行一次，因为它是单例的

```scala{}
object Object {
  println("这是单例对象的代码")
  def printInfo(): Unit = {
    println("Hello Scala Object!")
  }
}

object ObjectDemo {
  def main(args: Array[String]): Unit = {
    // 下面两行代码只会打印一次 "这是单例对象的代码"
    val o1 = Object // 单例对象的主构造代码只会执行一次
    val o2 = Object

    // 下面会打印两次 "Hello Scala Object!"
    Object.printInfo()
    Object.printInfo()
  }
}
```

#### 5.2 伴生类与伴生对象 

当单例对象与某个类具有相同的名称时，它被称为这个类的“伴生对象”;

类和它的伴生对象必须存在于同一个文件中，而且可以相互访问私有成员(字段和方法);

```scala{}
/**
 * 伴生类和伴生对象，他们的名字是一样的，并且必须存在于同一文件中
 */
class ClassObject {
  private var name = "zmn"

  def printInfo(): Unit = {
    // 在半生类中可以访问伴生对象的私有成员
    println(ClassObject.num)
    println("Hello Object!")
  }
}

object ClassObject {
  private val num = 10

  def main(args: Array[String]): Unit = {
    val classObject = new ClassObject
    // 在伴生对象中可以访问伴生类的私有成员变量
    println(classObject.name)
    classObject.printInfo()
  }
}
```

#### 5.3 应用程序对象

每个Scala应用程序都必须从一个对象的main方法开始，这个方法的类型为 `Array[String] => Unit`;

> 备注: `main` 方法写在class中是没有意义的，在 IDEA 中这样的 class 连run的图标都不能显示; 

除了 `main()` 方法以外，也可以扩展 `App` 特质(trait)

> 特质(trait) 类似于 Java 中的接口

```scala{}
object AppDemo extends App {
  println("Hello spark!")
}
```

> 通过查看 `App` 特质的源码，可以发现，其实在 App 特质中提供了 `main()` 方法。
> 本质上应用程序从 `main()` 方法开始，还是没有变，只是提供了让代码更加简洁的功能。

#### 5.4 apply方法

object 中有一个非常重要的特殊方法 -- `apply` 方法;

`apply` 方法通常定义在伴生对象中，目的是通过伴生类的构造函数，来实现伴生对象的构造函数功能;

通常我们会在类的**伴生对象**中定义 `apply()` 方法，当遇到 `类名(参数1,...参数n)` 时 `apply()`方法会被调用;

> 在创建伴生对象或伴生类的对象时，通常不会使用 `new ClassName/ClassName()` 的方式，
> 而是直接使用 `ClassName()` 隐式的调用伴生对象的 `apply` 方法，这样会让对象创建的更加简洁;

```scala{}
class Student(name: String, age: Int) {
  private var gender: String = _

  def sayHi(): Unit = {
    println(s"Hello, I'm $name, $gender")
  }
}

object Student {

  // apply 方法需要定义在 伴生对象中
  def apply(name: String, age: Int): Student = new Student(name, age)

  def main(args: Array[String]): Unit = {
    // 直接使用 ClassName(args...) 这种方式隐式调用半生对象中的 apply 方法来创建 ClassName 对象
    val jack = Student("jack", 30)
    // 伴生类与伴生对象可以相互访问私有成员
    jack.gender = "male"
    jack.sayHi()
  }
}
```

问题: 在Scala中实现工厂方法，让子类声明哪种对象应该被创建，保持对象创建在同一位置。

例如，假设要创建 Animal 工厂，让其返回 Cat 和 Dog 类的实例，基于这个需求，通过实现Animal伴生对象的 `apply` 方法，
工厂的使用者可以像这样创建新的 Cat 和 Dog 实例。

```scala{}
abstract class Animal {
  def speak(): Unit
}

class Dog extends Animal {
  override def speak(): Unit = {
    println("woof")
  }
}

class Cat extends Animal {
  override def speak(): Unit = {
    println("meow")
  }
}

object Animal {
  def apply(str: String): Animal = {
    if (str == "dog")
      new Dog
    else
      new Cat
  }

  def main(args: Array[String]): Unit = {
    val cat = Animal("cat")
    cat.speak()
    val dog = Animal("dog")
    dog.speak()
  }
}
```

## 第五部分 继承 

### 第1节 继承的概念

Scala中继承类的方式和Java一样，也是使用 `extends` 关键字:

```scala{}
class Employee extends Person {
    var salary = 1000
}
```

和Java一样，可在定义中给出子类需要而父类没有的字段和方法，或者重写父类的方法。

```scala{}
//Person类
class Person(name: String, age: Int)

// Student继承Person类
// var 关键字修饰的变量，对外可以提供 getter 和 setter 两个方法
class Student(name: String, age: Int, var studentNo: String) extends Person(name, age)

object ExtendsDemo {
  def main(args: Array[String]): Unit = {
    val jacky = new Student("jacky", 30, "1024")
    jacky.studentNo = "2048"
    println(jacky.studentNo)
  }
}
```

上面继承部分的代码等效于下面的Java代码

```java
//Person类 
class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

//Student继承Person类
class Student extends Person {
    private String studentNo;

    public Student(string name, int age, String studentNo) {
        super(name, age);
        this.sutdentNo = studentNo;
    }
}
```

### 第2节 构造器执行顺序 

Scala在继承的时候构造器的执行顺序: 首先执行父类的主构造器，其次执行子类自身的主构造器。

类有一个主构造器和任意数量的辅助构造器，而每个辅助构造器都必须以对先前定义的辅助构造器或主构造器的调用开始。

子类的辅助构造器最终都会调用主构造器。只有主构造器可以调用父类的构造器。

```scala{}
//Person类
class Person(name: String, age: Int) {
  println("这是父类Person")
}

//Student继承Person类
class Student(name: String, age: Int, studentNo: String) extends Person(name, age) {
  println("这是子类Student")
}

object Demo {
  def main(args: Array[String]): Unit = {
    //下面的语句执行时会打印下列内容:
    //这是父类Person
    //这是子类Student 
    // 也就是说，构造Student对象之前，首先会调用Person的主构造器 
    val student = new Student("john", 18, "1024")
  }
}
```

### 第3节 override方法重写

方法重写指的是当子类继承父类的时候，从父类继承过来的方法不能满足子类的需要，子类希望有自己的实现，这时需要对父类的方法进行重写，
方法重写是实现多态的关键。 

Scala中的方法重写同Java一样，也是利用 `override` 关键字标识重写父类的方法。

```scala{}
class Programmer(name: String, age: Int) {
  def coding(): Unit = {
    println("coding ...")
  }
}

class ScalaProgrammer(name: String, age: Int, workNo: String) extends Programmer(name, age) {
  override def coding(): Unit = {
    super.coding() // 调用父类的方法
    // 增加自己的实现
    println("coding scala code ...")
  }
}

object OverrideDemo {
  def main(args: Array[String]): Unit = {
    val jack = new ScalaProgrammer("jack", 30, "10010")
    jack.coding()
  }
}
```

```text
//代码运行输出内容: 
coding ...
coding scala code ...
```

需要强调一点: 如果父类是抽象类，则 `override` 关键字可以不加。如果继承的父类是抽象类
(假设抽象类为 `AbstractClass` ，子类为 `SubClass` )，在 `SubClass` 类中，
`AbstractClass` 对应的抽象方法如果没有实现的话，那 `SubClass` 也必须定义为抽象类，否则的话必须要有方法的实现。

```scala{}
//抽象的Person类
abstract class Person(name: String, age: Int) {
  def walk(): Unit
}

//Student继承抽象Person类
class Student(name: String, age: Int, var studentNo: String) extends Person(name, age) {
  // 重写抽象类中的walk方法，可以不加override关键字 
  def walk(): Unit = {
    println("walk like a elegant swan")
  }
}

object Demo {
  def main(args: Array[String]): Unit = {
    val stu = new Student("john", 18, "1024")
    stu.walk()
  }
}
```

### 第4节 类型检查与转换 

要测试某个对象是否属于某个给定的类，可以用 `isInstanceOf` 方法。
如果测试成功，可以用 `asInstanceOf` 方法进行类型转换。

```scala{}
if (p.isInstanceOf[Employee]) {
  // p 的类型转换为Employee
  val s = p.asInstanceOf[Employee]
}
```

如果p指向的是 `Employee` 类及其子类的对象，则 `p.isInstanceOf[Employee]` 将会成功。 

如果p是null，则 `p.isInstanceOf[Employee]` 将返回false，且 `p.asInstanceOf[Employee]` 将返回null。 

如果p不是一个 `Employee`，则 `p.asInstanceOf[Employee]` 将抛出异常。 

如果想要测试p指向的是一个 `Employee` 对象但又不是其子类，可以用: `if(p.getClass == classOf[Employee])`

`classOf` 方法定义在 `scala.Preder` 对象中，因此会被自动引入。 不过，与类型检查和转换相比，模式匹配通常是更好的选择。

```scala{}
class Person2

class Student2 extends Person2

object InstanceDemo {
  def main(args: Array[String]): Unit = {
    val p: Person2 = new Student2
    var s: Student2 = null

    println(s.isInstanceOf[Student2]) // false // null 值会返回 false

    if (p.isInstanceOf[Student2]) { // 此处会提示最好使用模式匹配
      s = p.asInstanceOf[Student2]
    }
    println(s.isInstanceOf[Student2]) // true // 通过上面已经将 p 成功转换并赋值给了 s，所以此处是 true

    println(p.getClass == classOf[Person2]) // false // p 是 Student2 类型的对象
    println(p.getClass == classOf[Student2]) // true

    // 模式匹配
    p match {
      case s: Student2 => println("他是 Student2 类型的对象")
      case _ => println("啥也不是！")
    }
  }
}
```

## 第六部分 特质

### 第1节 作为接口使用的特质

Scala 中的 `trait` 特质是一种特殊的概念。 

首先可以将 `trait` 作为接口来使用，此时的 `trait` 就与Java中的接口非常类似。 

在 `trait` 中可以定义抽象方法，与抽象类中的抽象方法一样，只要不给出方法的具体实现即可。 

类可以使用 `extends` 关键字继承 `trait`。 

> 注意: 在 Scala 中没有 implement 的概念，无论继承类还是 `trait` 特质，统一都是 `extends`。 

类继承 `trait` 特质后，必须实现其中的抽象方法，实现时可以省略 `override` 关键字。 

Scala 不支持对类进行多继承，但是支持多重继承 `trait` 特质，使用 `with` 关键字即可。

```scala{}
trait HelloTrait {
  def sayHello(): Unit
}

trait MakeFriendTrait {
  def makeFriend(): Unit
}

// 如果一个类继承了多个 trait，第一个 trait 使用 extends 关键字，其他 trait 用 with 关键字
class Person(name: String) extends HelloTrait with MakeFriendTrait {
  override def sayHello(): Unit = {
    println(s"Hello, My name is $name")
  }

  override def makeFriend(): Unit = {
    println(s"Hello, $name")
  }
}

object TraitDemo {
  def main(args: Array[String]): Unit = {
    val jack = new Person("jack")
    jack.sayHello()
    jack.makeFriend()
  }
}
```

### 第2节 带有具体实现的特质 

#### 具体方法

Scala中的 `trait` 特质不仅仅可以定义抽象方法，还可以定义具体实现的方法，这时的 `trait` 更像是包含了通用工具方法的类。

比如，`trait` 中可以包含一些很多类都通用的功能方法，比如打印日志等等，Spark 中就使用了 `trait` 来定义通用的日志打印方法。

#### 具体字段

Scala `trait` 特质中的字段可以是抽象的，也可以是具体的。

```scala{}
trait People {
  val name: String // 抽象成员变量
  val age = 30 // 具体成员变量

  def eat(): Unit = { // 具体方法
    println("Eating ...")
  }

}

trait Worker {
  val age = 25 // 具体字段

  def work(): Unit = { // 带有具体实现的方法
    println("working ...")
  }
}

class Student extends Worker with People {
  override val name: String = "john" // 重写抽象属性 // 此时的 override 关键字可以省略。
  // 由于 Worker 和 People 中都有 age 字段，所以当 Student 类继承这两个特质时，需要重写 age 字段，
  // 并且要使用 override 关键字，否则会报错。此时的 override 关键字不能省略。
  override val age: Int = 20 // 重写具体属性
}

object TraitDemo2 {
  def main(args: Array[String]): Unit = {
    val student = new Student
    student.eat()
    student.work()
    println(s"姓名：${student.name}， 年龄：${student.age}")
  }
}
```

注意: 特质 `Person` 和 `Worker` 中都有 `age` 字段，当 `Student` 继承这两个特质时，需要重写 `age` 字段，并且要用 `override` 关键字，否则就会报错。

### 第3节 特质构造顺序

在Scala中，`trait` 特质也是有构造器的，也就是 `trait` 中的不包含在任何方法中的代码。 

构造器以如下顺序执行:

1. 执行父类的构造器;
2. 执行 `trait` 的构造器，多个 `trait` 从左到右依次执行; 
3. 构造 `trait` 时会先构造父 `trait`，如果多个 `trait` 继承同一个父 `trait`，则父 `trait` 只会构造一次; 
4. 所有 `trait` 构造完毕之后，子类的构造器才执行

```scala{}
class Person2 {
  println("Person's Constructor !") // 1
}

trait Logger {
  println("Logger's Constructor !") // 2
}

trait MyLogger extends Logger {
  println("MyLogger's Constructor !") // 3
}

trait TimeLogger extends Logger {
  println("TimeLogger's Constructor !") // 4
}

// 既有继承父类又有继承 trait. 先写父类，trait 使用 with 关键字
class Student2 extends Person2 with MyLogger with TimeLogger {
  println("Student's Constructor !") // 5
}

object TraitDemo3 {
  def main(args: Array[String]): Unit = {
    val student = new Student2
  }
}
```

```text
// 输出结果
Person's Constructor !
Logger's Constructor !
MyLogger's Constructor !
TimeLogger's Constructor !
Student's Constructor !
```

### 第4节 特质继承类 

在Scala中，`trait` 特质也可以继承class类，此时这个class类就会成为所有继承此 `trait` 的类的父类。

```scala{}
class MyUtils {
  def printMsg(msg: String): Unit = {
    println(msg)
  }
}

trait Log extends MyUtils {
  def log(msg: String): Unit = {
    println(msg)
  }
}

// Person3 继承了 Log 特质，Log 特质继承了 MyUtil 类。因此 MyUtil 类就成为了 Person3 的父类。
class Person3(name: String) extends Log {
  def sayHello(): Unit = {
    log("hello, " + name)
    printMsg("hi, " + name)
  }
}

object TraitDemo4 {
  def main(args: Array[String]): Unit = {
    val john = new Person3("john")
    john.sayHello()
  }
}
```

### 第5节 Ordered和Ordering 

在Java中对象的比较有两个接口，分别是 `Comparable` 和 `Comparator`。

它们之间的区别在于: 

- 实现 `Comparable` 接口的类，重写 `compareTo()` 方法后，其对象自身就具有了可比较性; 
- 实现 `Comparator` 接口的类，重写了 `compare()` 方法后，则提供一个第三方比较器，用于比较两个对象。

在Scala中也引入了以上两种比较方法( `Scala.math` 包下):

`Ordered` 特质混入Java的 `Comparable` 接口，它定义了相同类型间的比较方式，但这种内部比较方式是单一的;

```scala{}
trait Ordered[A] extends Any with java.lang.Comparable[A]{......}
```

`Ordering` 特质混入 `Comparator` 接口，它是提供第三方比较器，可以自定义多种比较方式，在实际开发中也是使用比较多的，灵活解耦合。

```scala{}
trait Ordering[T] extends Comparator[T] with PartialOrdering[T] with Serializable {......}
```

使用Ordered特质进行排序操作

```scala{}
case class Project(tag: String, score: Int) extends Ordered[Project] {
  override def compare(that: Project): Int = {
    tag.compareTo(that.tag)
  }
}

object OrderDemo {
  def main(args: Array[String]): Unit = {
    val list = List(Project("hadoop", 40), Project("flink", 90), Project("spark", 80), Project("hive", 60))
    println(list.sorted) // List(Project(flink,90), Project(hadoop,40), Project(hive,60), Project(spark,80))
  }
}
```

使用 `Ordering` 特质进行排序操作

```scala{5}
object OrderingDemo {
  def main(args: Array[String]): Unit = {
    var pairs = Array(("a", 7, 2), ("b", 9, 1), ("c", 8, 3))
    // Ordering.by[(Int,Int,Double),Int](_._2) 表示从Tuple3转到Int型, 并按此Tuple3中第二个元素进行排序
    Sorting.quickSort(pairs)(Ordering.by[(String, Int, Int), Int](_._2))
    println(pairs.toBuffer)
  }
}
```

