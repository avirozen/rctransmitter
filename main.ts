input.onButtonPressed(Button.AB, function () {
    turn_on = 1 - turn_on
    radio.sendValue("turn_on", turn_on)
})
let turn_on = 0
radio.setGroup(17)
turn_on = 0
basic.forever(function () {
    radio.sendValue("x", input.acceleration(Dimension.X))
    radio.sendValue("z", input.acceleration(Dimension.Z))
})
