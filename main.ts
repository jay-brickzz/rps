let my_nutz = 0
input.onGesture(Gesture.Shake, function () {
    my_nutz = randint(1, 3)
    if (my_nutz == 1) {
        basic.showString("R")
    }
    if (my_nutz == 2) {
        basic.showString("S")
    }
    if (my_nutz == 3) {
        basic.showString("P")
    }
})
