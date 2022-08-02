# Prometheus

## 快速安装并启动

下载页面: <https://prometheus.io/download/>

```shell
tar -zxvf prometheus-2.37.0.darwin-arm64.tar.gz
mv prometheus-2.37.0.darwin-arm64 /opt/zmn/servers/promethues/

cd /opt/zmn/servers/promethues
./prometheus --config.file=prometheus.yml --web.listen-address="0.0.0.0:9091"
```

启动后的 Prometheus 端口号是 9090，可以访问 <localhost:9091/metrics>，该地址返回与 PrometheusServer 状态相关的监控信息，其返回数据如下所示。

<localhost:9091/graph> 是Prometheus的默认查询界面

认证授权配置

```yaml
scrape_configs:
  - job_name: "zmn-owl-admin"
    metrics_path: "/owl/actuator/prometheus"
    static_configs:
      - targets: ["127.0.0.1:19513"]
    basic_auth:
      username: client
      password: client
```

## Grafana 

```shell
brew update
brew install grafana

# 安装完成以后，可以通过如下命令启动 Grafana
brew services start grafana
```

Grafana 默认的端口是 3000，访问 <http://127.0.0.1:3000> 可以进入 Grafana 的主界面。

