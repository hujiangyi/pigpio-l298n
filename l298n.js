const PinPWM = require('./PinPWM.js');
const PinWrite = require('./PinWrite.js');

exports.NO1 = 0;
exports.NO2 = 1;
exports.FORWORD = 1;
exports.BACKWORD = -1;
let deviceList = [];
//bcm code
function initDevice(dNum,en,in1,in2) {
    deviceList[dNum] = {
        en:en,
        in1:in1,
        in2:in2,
        enGpio : new PinPWM(en,clock,range),
        in1Gpio : new PinWrite(in1),
        in2Gpio : new PinWrite(in2),
    };
}

function enPort(dNum) {
    return deviceList[dNum].enGpio;
}

function in1Port(dNum) {
    return deviceList[dNum].in1Gpio;
}

function in2Port(dNum) {
    return deviceList[dNum].in2Gpio;
}

function L298N(enableA,in1,in2,enableB,in3,in4) {
    if (enableA !== null) {
        initDevice(this.NO1,enableA,in1,in2);
    }
    if (enableB !== null) {
        initDevice(this.NO2,enableB,in3,in4);
    }
}
Object.assign(L298N.prototype, {
    setSpeed : function(dNum, speed) {
        enPort(dNum).setSpeedPercent(speed);
    },
    forward : function(dNum) {
        in1Port(dNum).HIGH();
        in2Port(dNum).LOW();
    },
    backward : function(dNum) {
        in1Port(dNum).LOW();
        in2Port(dNum).HIGH();
    },
    stop : function(dNum) {
        in1Port(dNum).LOW();
        in2Port(dNum).LOW();
    },
    PinPWM : PinPWM,
    PinWrite : PinWrite,
});
module.exports = L298N;