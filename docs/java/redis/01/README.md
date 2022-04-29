# Redis

## Redis 安装

1. 安装 C 语言需要的 GCC 环境

```shell
yum  install -y gcc-c++
yum install -y wget
```

2. 下载并解压缩 Redis 源码压缩包

```shell
wget http://download.redis.io/releases/redis-5.0.5.tar.gz
tar -zxf redis-5.0.5.tar.gz
```

3. 编译 Redis 源码，进入 redis-5.0.5 目录，执行编译命令

```shell
cd redis-5.0.5/src
make
```

4. 安装 Redis ，需要通过 `PREFIX` 指定安装路径

```shell
mkdir /opt/zmn/servers/redis -p
make install PREFIX=/opt/zmn/servers/redis
```

## Redis 启动

### 前端启动

启动命令: `redis-server`，直接运行 `bin/redis-server` 将以前端模式启动

关闭命令: `ctrl+c`

启动缺点: 客户端窗口关闭则 `redis-server` 程序结束，不推荐使用此方法

### 后端启动

1. 拷贝 `redis-5.0.5/redis.conf` 配置文件到 Redis 安装目录的 `bin` 目录

```shell
cp redis.conf /opt/zmn/servers/redis/bin/
```

2. 修改 `redis.conf`

 ```text
# 将`daemonize`由`no`改为`yes`
daemonize yes
# 默认绑定的是回环地址，默认不能被其他机器访问 
# bind 127.0.0.1
# 是否开启保护模式，由yes该为no
protected-mode no
```

启动服务

```shell
./redis-server redis.conf
```

后端启动的关闭方式

```shell
./redis-cli shutdown
```

命令说明

| 命令                 | 说明            |
|--------------------|---------------|
| `redis-benchmark`  | 性能测试的工具       |
| `redis-check-aof`  | aof 文件进行检查的工具 |
| `redis-check-dump` | rdb 文件进行检查的工具 |
| `redis-cli`        | 进入redis命令客户端  |
| `redis-sentinel`   | 启动哨兵监控服务      |
| `redis-server`     | 启动redis服务     |

## Redis 命令行客户端

命令格式

```shell
./redis-cli -h 127.0.0.1 -p 6379
```

参数说明

```shell
-h: redis 服务器的ip地址
-p: redis 实例的端口号
```

默认方式

```shell
./redis-cli
```

- 如果不指定主机和端口也可以
- 默认主机地址是127.0.0.1 
- 默认端口是6379

## Redis 客户端访问

### Java 程序

> 采用 jedis API 进行访问即可

1. 关闭 RedisServer 端的防火墙

```shell
# 关闭
systemctl stop firewalld
# 设置开启不启动
systemctl disable firewalld.service
```

2. 新建 maven 项目后导入 Jedis 包

```xml
<dependency>
    <groupId>redis.clients</groupId>
    <artifactId>jedis</artifactId>
    <version>2.9.0</version>
</dependency>
```

3. 测试代码

```java
public class ClientTest {

    @Test
    public void testConn() {
        //与Redis建立连接 IP+port
        Jedis redis = new Jedis("120.78.220.101", 6379);
        //在Redis中写字符串 key value
        redis.set("jedis:name:1", "jd-john");
        // 获得Redis中字符串的值
        System.out.println(redis.get("jedis:name:1"));
        // 在Redis中写list
        redis.lpush("jedis:list:1", "1", "2", "3", "4", "5");
        // 获得list的长度
        System.out.println(redis.llen("jedis:list:1"));
    }
}
```

### Spring 访问

1. Spring 依赖

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-beans</artifactId>
        <version>5.2.5.RELEASE</version>
    </dependency>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-core</artifactId>
        <version>5.2.5.RELEASE</version>
    </dependency>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-context</artifactId>
        <version>5.2.5.RELEASE</version>
    </dependency>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-test</artifactId>
        <version>5.2.5.RELEASE</version>
    </dependency>
    <dependency>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
        <version>4.12</version>
        <scope>test</scope>
    </dependency>
</dependencies>
```

2. 添加 Redis 整合依赖

```xml
<dependency>
    <groupId>org.springframework.data</groupId>
    <artifactId>spring-data-redis</artifactId>
    <version>1.0.3.RELEASE</version>
</dependency>
```

3. 添加 Spring 配置文件

> resource/redis.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="propertyConfigurer"
          class="org.springframework.beans.factory.config.PropertyPlaceholderConfigurer">
        <property name="locations">
            <list>
                <value>classpath:redis.properties</value>
            </list>
        </property>
    </bean>

    <!-- redis config -->
    <bean id="jedisPoolConfig" class="redis.clients.jedis.JedisPoolConfig">
        <property name="maxActive" value="${redis.pool.maxActive}"/>
        <property name="maxIdle" value="${redis.pool.maxIdle}"/>
        <property name="maxWait" value="${redis.pool.maxWait}"/>
        <property name="testOnBorrow" value="${redis.pool.testOnBorrow}"/>
    </bean>

    <bean id="jedisConnectionFactory"
          class="org.springframework.data.redis.connection.jedis.JedisConnectionFactory">
        <property name="hostName" value="${redis.server}"/>
        <property name="port" value="${redis.port}"/>
        <property name="timeout" value="${redis.timeout}"/>
        <property name="poolConfig" ref="jedisPoolConfig"/>
    </bean>

    <bean id="redisTemplate"
          class="org.springframework.data.redis.core.RedisTemplate">
        <property name="connectionFactory" ref="jedisConnectionFactory"/>
        <property name="KeySerializer">
            <bean class="org.springframework.data.redis.serializer.StringRedisSerializer"></bean>
        </property>
        <property name="ValueSerializer">
            <bean class="org.springframework.data.redis.serializer.StringRedisSerializer"></bean>
        </property>
    </bean>
</beans>
```

4. 添加 properties 文件

> resource/redis.properties

```properties
redis.pool.maxActive=100
redis.pool.maxIdle=50
redis.pool.maxWait=1000
redis.pool.testOnBorrow=true
redis.timeout=50000
redis.server=192.168.72.128
redis.port=6379
```

5. 编写测试用例

```java
@ContextConfiguration({ "classpath:redis.xml" })
public class RedisTest extends AbstractJUnit4SpringContextTests {

    @Autowired
    private RedisTemplate<Serializable, Serializable> redisTemplate;

    @Test
    public void testConn() {
        redisTemplate.opsForValue().set("name","jack");
        System.out.println(redisTemplate.opsForValue().get("name"));
    }

}
```

### SpringBoot 访问

1. 新建 SpringBoot 项目，添加 Web 和 Redis 依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
```

2. 添加配置文件 `application.yml`

```yaml
spring:
  redis:
    host: 120.78.220.101
    port: 6379
    jedis:
      pool:
        min-idle: 0
        max-idle: 8
        max-active: 80
        max-wait: 30000
        timeout: 3000
```

3. 添加配置类 RedisConfig

```java
@Configuration
public class RedisConfig {

    @Autowired
    private RedisConnectionFactory factory;

    @Bean
    public RedisTemplate<String, Object> redisTemplate() {
        RedisTemplate<String, Object> redisTemplate = new RedisTemplate<>();
        redisTemplate.setKeySerializer(new StringRedisSerializer());
        redisTemplate.setHashKeySerializer(new StringRedisSerializer());
        redisTemplate.setHashValueSerializer(new StringRedisSerializer());
        redisTemplate.setValueSerializer(new StringRedisSerializer());
        redisTemplate.setConnectionFactory(factory);
        return redisTemplate;
    }

}
```

4. 添加 RedisController

```java
@RestController
@RequestMapping(value = "/redis")
public class RedisController {

    @Autowired
    RedisTemplate redisTemplate;

    @GetMapping("/put")
    public String put(@RequestParam(required = true) String key, @RequestParam(required = true) String value) {
        //设置过期时间为20秒
        redisTemplate.opsForValue().set(key, value, 200, TimeUnit.SECONDS);
        return "Success";
    }

    @GetMapping("/get")
    public String get(@RequestParam(required = true) String key) {
        return (String) redisTemplate.opsForValue().get(key);
    }

}
```

5. 修改Application并运行

```java
@EnableCaching
@SpringBootApplication
public class RedisClientTestSpringbootApplication {
    public static void main(String[] args) {
        SpringApplication.run(RedisClientTestSpringbootApplication.class, args);
    }
}
```
