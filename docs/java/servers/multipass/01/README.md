

Cloud config

```yaml
groups:
  - admingroup: [root,sys]
  - cloud-users
users:
  - default
  - name: foobar
    gecos: Foo B. Bar
    primary_group: foobar
    groups: users
    selinux_user: staff_u
    expiredate: '2032-09-01'
    ssh_import_id:
      - lp:falcojr
      - gh:TheRealFalcon
    lock_passwd: false
    passwd: zmn123456

```


com.zmn.base.product.dubbo.interfaces.product.foreign.ProductForeignListRemoteService.listBaseDROByQuery(ProductBaseQuery)

com.zmn.base.product.dubbo.interfaces.channel.servcateg.ChannelServCategListRemoteService.getAvailableCategoryNumber(Integer)
com.zmn.base.channel.dubbo.interfaces.channel.ChannelListRemoteService.getAvailableCategoryChannelId(Integer)
com.zmn.base.channel.dubbo.interfaces.channel.ChannelListRemoteService.listByChannelIds(List)



com.zmn.base.channel.dubbo.interfaces.channel.ChannelListRemoteService.getByChannelId(Integer)
