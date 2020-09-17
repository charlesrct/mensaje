function e () {
    basic.showLeds(`
        # . . . .
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    seg3()
}
function c () {
    basic.showLeds(`
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    seg3()
}
function seg4 () {
    basic.pause(4000)
}
function h () {
    basic.showLeds(`
        # . . . .
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    seg3()
}
function seg2 () {
    basic.pause(2000)
}
function seg5 () {
    basic.pause(5000)
}
function seg1 () {
    basic.pause(1000)
}
function inicioFin () {
    basic.showLeds(`
        . # . . .
        . # . . .
        # # . . .
        . . . . .
        . . . . .
        `)
}
function coma () {
    basic.showLeds(`
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
function a () {
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    seg1()
}
function seg3 () {
    basic.pause(3000)
}
function r () {
    basic.showLeds(`
        # . . . .
        # # . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    seg3()
}
function l () {
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    seg3()
}
function s () {
    basic.showLeds(`
        . # . . .
        # . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    seg3()
}
basic.forever(function () {
    inicioFin()
    coma()
    c()
    h()
    a()
    r()
    l()
    e()
    s()
    inicioFin()
    basic.clearScreen()
})
