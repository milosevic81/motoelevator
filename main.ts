basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, 100)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (input.buttonIsPressed(Button.B)) {
        kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Reverse, 100)
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else {
        kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor1)
        basic.clearScreen()
    }
    basic.pause(200)
})
