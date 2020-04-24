class Options{
    constructor(height, width, bg, fontSize, textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv(){
        let el = document.createElement("div");
        el.textContent="Этот блок создан методом createDiv";
        let param = `height:${this.height}; width:${this.width}; background-color:${this.bg}; font-size:${this.fontSize}; text-align:${this.textAlign}`;
        el.style.cssText = param;
        document.body.appendChild(el);
    }
}

let divt = new Options(100, 100, "yellow", "50px", "center");
divt.createDiv();