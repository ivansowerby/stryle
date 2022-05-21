class Stringify {
    constructor(string) {
        this.string = Array.from(string);
    }

    length() {
        return this.string.length;
    }

    replace(index, character) {
        if(character.length != 1) { return null; }
        this.string[index] = character;
        return this.export();
    }

    slice(from, to) {
        if(!from) { from = 0; }
        if(!to) { to = this.string.length - 1; }
        return this.string.slice(from, to).join('');
    }

    style(index, style) {
        this.string[index] = '<span style="' + style + '">' + this.string[index] + '</span>';
        return this.export();
    }

    remove_style(index) {
        let i = this.string[index].indexOf('>') + 1;
        this.string[index] = this.string[index].slice(i, i + 1);
        return this.export();
    }

    color(index, color) {
        this.style(index, 'color: ' + color + ';')
    }

    export() {
        return this.string.join('');
    }

    apply_to(id) {
        document.getElementById(id).innerHTML = this.export();
    }
}