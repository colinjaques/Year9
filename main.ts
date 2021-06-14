
//1 - Output
basic.showString("Hello!", 50)
basic.showString("Mr Jaques", 75)
basic.showString("This is my first program", 50)

//2 - Countdown Timer
basic.showNumber(10)
basic.pause(1000)
basic.showNumber(9)
basic.pause(1000)
basic.showNumber(8)
basic.pause(1000)
basic.showNumber(7)
basic.pause(1000)
basic.showNumber(6)
basic.pause(1000)
basic.showNumber(5)
basic.pause(1000)
basic.showNumber(4)
basic.pause(1000)
basic.showNumber(3)
basic.pause(1000)
basic.showNumber(2)
basic.pause(1000)
basic.showNumber(1)
basic.pause(1000)
basic.showString("KABOOM!")

//3 - Blinking Heart
basic.forever(function () {
    basic.showLeds(`
. # . # .
# . # . #
# . # . #
. # . # .
. . # . .
`)
basic.pause(500)
basic.showLeds(`
. . . . .
. . . . .
. . . . .
. . . . .
. . . . .
`)
basic.pause(500)

})

//4 - Score Tracker
let score = 0
input.onButtonPressed(Button.A, function () {
    score = score + 1
    basic.showNumber(score)
})
input.onButtonPressed(Button.B, function () {
    score = score - 1
    basic.showNumber(score)
})
