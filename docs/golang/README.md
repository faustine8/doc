# GoLang

环境安装

```shell
# Go源代码的安装目录
export GOROOT=/usr/local/go
# 项目程序目录
export GOPATH=/Users/faustine/go
export GOBIN=$GOPATH/bin
export PATH=$PATH:/usr/local/go/bin
```

```shell
# 配置国内代理
go env -w GOPROXY=https://goproxy.cn,direct
# 开启新版模块化
go env -w GO111MODULE=on
```

下载安装 Swag-go

```shell
go install github.com/swaggo/swag/cmd/swag@latest
swag -v
```

