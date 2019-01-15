const Gpio = require('pigpio').Gpio;

const MIN = 0;
const MAX = 255;

function PinPWM(pin) {
    this.pin = pin;
    this.gpio = new Gpio(pin, {mode: Gpio.OUTPUT});
}
Object.assign(PinPWM.prototype, {
    setSpeedPercent : function (p) {
        if (p < 0 || p > 100) {
            console.log("Arg out of range(0-100%).");
            return;
        }
        let dutyCycle = (MAX - MIN) * p / 100 + MIN;
        this.gpio.pwmWrite(parseInt(dutyCycle));
    }
});
module.exports = PinPWM;
