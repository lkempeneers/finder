radio.onReceivedNumber(function (receivedNumber) {
    force = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    led.plotBarGraph(
    Math.map(force, -95, -42, 0, 9),
    9
    )
    basic.pause(100)
    basic.clearScreen()
})
let force = 0
radio.setGroup(1)
