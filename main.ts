input.onButtonPressed(Button.A, function () {
    numero_introducido += 10
})
input.onGesture(Gesture.Shake, function () {
    numero_introducido = 0
    numero_introducido = randint(1, 99)
})
input.onButtonPressed(Button.B, function () {
    numero_introducido += 1
})
let numero_introducido = 0
numero_introducido = 0
basic.showString("" + (numero_introducido))
numero_introducido = randint(1, 99)
basic.forever(function () {
    basic.showString("" + (numero_introducido))
})
