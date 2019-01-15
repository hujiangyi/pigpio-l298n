# pigpio-l298n

基于pigpio实现的l298n的驱动.

## 安装
可以使用 npm安装

```
$ npm install pigpio-l298n
```

## 用法
可以控制两个连接到L298N的电机。电机被编号为NO1和NO2.

使用模块的例子

```
const readline = require('readline');
const L298N = require('../l298n.js');
//bcm code
let l298n = new L298N(17,27,22,null,null,null);
l298n.setSpeed(l298n.NO1,20);

const rl = readline.createInterface({
	    input: process.stdin,
	    output: process.stdout
});
rl.on('line', function (input) {
    if (input === 'quit()') {
        rl.close();
    } else if (input === 'f') {
	    l298n.forward(l298n.NO1);
    } else if (input === 'b') {
	    l298n.backward(l298n.NO1)
    } else if (input === 't') {
	    l298n.stop(l298n.NO1);
    } else {
	    l298n.setSpeed(l298n.NO1,parseInt(input));
    }
});

process.on("SIGINT", function(){
    l298n.stop(l298n.NO1);
    console.log('shutdown!');
    process.exit(0);
});

```

设置转速

```
l298n.setSpeed(NUM(NO1\NO2), speed(0-100));
```

向前转动

```
l298n.forward(NUM(NO1\NO2));
```

向后转动

```
l298n.backward(NUM(NO1\NO2));
```

停止转动

```
l298n.stop(NUM(NO1\NO2));
```
