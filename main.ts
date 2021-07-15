function Start () {
    Ready = false
    basic.pause(randint(3000, 5000))
    Ready = true
    basic.showIcon(IconNames.Yes)
}
input.onButtonPressed(Button.A, function () {
    if (Ready) {
        Ready = false
        basic.showString("A")
        basic.pause(1000)
        Start()
    }
})
input.onButtonPressed(Button.B, function () {
    if (Ready) {
        Ready = false
        basic.showString("B")
        basic.pause(1000)
        Start()
    }
})
let Ready = false
Start()
