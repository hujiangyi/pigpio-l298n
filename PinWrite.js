const Gpio = require('pigpio').Gpio;

const LOW = 0;
const HIGH = 1;

function PinWrite(pin) {
    this.pin = pin;
    this.gpio = new Gpio(pin, {mode: Gpio.OUTPUT});
}
Object.assign(PinWrite.prototype, {
    HIGH : function () {
        this.gpio.digitalWrite(HIGH);
    },
    LOW : function () {
        this.gpio.digitalWrite(LOW);
    },
    value : function () {
        return this.gpio.digitalRead();
    },
});
module.exports = PinWrite;