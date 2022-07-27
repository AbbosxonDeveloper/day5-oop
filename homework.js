class Area {
    constructor(txt) {
        this.text = txt
    }
    set value(val) {
        // let i = ''
        // i = val
        this.text += val
    }

    clear() {
        this.text = ""
        return this.text
    }
    noneSpace() {
        return this.text = this.text.replace(/\s/g, '')
    }
    allUpper() {
        return this.text = this.text.toUpperCase()
    }
    allLower() {
        return this.text = this.text.toLowerCase()
    }
    backspace() {
        return this.text = this.text.replace(this.text[this.text.length - 1], '')
    }
    firstUpper() {
            return this.text = this.text.split(' ').map(texts => texts.replace(texts[0], texts[0].toUpperCase())).join('')
        }
        // betweenSpace() {
        //     this.text
        // }
    get view() {
        return this.text
    }
}

let newArea = new Area('salam')
newArea.value = ' dunya'
newArea.allLower()
newArea.firstUpper()
newArea.value = ' set'
console.log(newArea.view)