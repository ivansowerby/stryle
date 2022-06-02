<h1>stringify.py</h1>

<p style="text-align:right">Revision for 0.1.0</p>

### List of contents:
1. Brief Introduction
2. Exemplar
3. Legal (MIT license)

<b><h2 style="text-align:center">Brief Introduction</h3></b>

---

A <i>JavaScript</i> module for ease of manipulating strings, with <i>CSS</i> styling for each character and basic methods.

<b><h2 style="text-align:center">Exemplar</h3></b>

---

<h3>Initialization</h3>

For each of the following examples the code snippet below is required to satisfy the importing of the module (<i>stringify.js</i>), and initialization of the <i>Stringify</i> class.

``` js
var Stringify = require('./stringify.js');

string = new Stringify('Hello, World!');
```

---

<h3>export()</h3>

``` js
console.log(
    string.export()
);
```

> <h4>Output</h4>

``` html
Hello, World!
```

---

<h4>length()</h4>

``` js
console.log(
    string.length()
);
```

> <h4>Output</h4>

``` html
13
```

---

<h4>replace()</h4>

``` js
string.replace(12, ';');
console.log(
    string.export();
);
```

> <h4>Output</h4>

``` bash
Hello, World;
```

---

<h4>slice()</h4>

``` js
console.log(
    string.slice(7, 12)
);
```

> <h4>Output</h4>

``` html
World
```

---

<b><h3>Styling</h3></b>

<h3>style()</h3>

``` js
string.style(
    'font-size: 10px;',
    [12, 0, 1, 2, 3, 4]
);
console.log(
    string.export()
);
```

> <h4>Output</h4>

``` html
<span style="font-size: 10px;">He</span>llo</span>, World<span style="font-size: 10px;">!</span>
```

<h3>unstyle()</h3>

``` js
string.unstyle(
    'font-size: 10px;'
);
console.log(
    string.export()
);
```

> <h4>Output</h4>

``` html
Hello, World!
```

---

<b><h3>Coloring</h3></b>

<h3>color()</h3>

``` js
string.color(
    'blue',
    [12, 0, 1, 2, 3, 4]
);
console.log(
    string.export()
);
```

> <h4>Output</h4>

``` html
<span style="color:blue;">Hello</span>, World<span style="color:blue;">!</span>
```

<h3>uncolor()</h3>

``` js
string.uncolor(
    'blue'
);
console.log(
    string.export()
);
```

> <h4>Output</h4>

``` html
Hello, World!
```

<b><h2 style="text-align:center">License (MIT)</h3></b>

---
<br>

|Permissions|Conditions|Limitations|
|---|---|---|
|Commercial use|License and copyright notice|Liability|
|Distribution||Warranty|
|Modification|||
|Private use|||

```
MIT License

Copyright (c) 2022 Ivan (GitHub: ivanl-exe, E-Mail: ivan.exe@pm.me)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```