// 'topshiriq'

// class Animal {
//     name
//     eyes
//     tail
//     voice
//     get Voice() {
//         return this.voice + ' is my name ' + this.name
//     }
//     constructor(name, eyes, tail, voice) {
//         this.name = name
//         this.eyes = eyes
//         this.tail = tail
//         this.voice = voice
//     }
// }

// let lion = new Animal('simba', 3, true)
// console.log(lion);

"TOPSHIRIQ 2"

class RGB {
    red
    green
    blue
    constructor(R, G, B) {
        this.red = R
        this.green = G
        this.blue = B
        if (this.red > 255) this.red = 0
        if (this.green > 255) this.green = 0
        if (this.blue > 255) this.blue = 0
        return { R: red, G: this.green, B: this.blue }
    }

    set Setcolors(color) {
        this.red = color
    }

}

let color = new RGB(260, 50, 80)
color.Setcolors = [45]
console.log(color);