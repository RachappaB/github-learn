var a = 1;
var b = 2;
var c = "hi";
var d = "1";
var e = true;
var f = 1.3;
var g = 'c';
var h = false;
var j = [0, 1, 2];

// List of all pair combinations with '+' operator
console.log("a + b: ", a + b);          // 3 (1 + 2)
console.log("a + c: ", a + c);          // "1hi"
console.log("a + d: ", a + d);          // "11"
console.log("a + e: ", a + e);          // 2 (1 + true -> 1 + 1)
console.log("a + f: ", a + f);          // 2.3
console.log("a + g: ", a + g);          // "1c"
console.log("a + h: ", a + h);          // 1 (1 + false -> 1 + 0)
console.log("a + j: ", a + j);          // "10,1,2"
console.log("b + c: ", b + c);          // "2hi"
console.log("b + d: ", b + d);          // "21"
console.log("b + e: ", b + e);          // 3 (2 + true -> 2 + 1)
console.log("b + f: ", b + f);          // 3.3
console.log("b + g: ", b + g);          // "2c"
console.log("b + h: ", b + h);          // 2 (2 + false -> 2 + 0)
console.log("b + j: ", b + j);          // "20,1,2"
console.log("c + d: ", c + d);          // "hi1"
console.log("c + e: ", c + e);          // "hitrue"
console.log("c + f: ", c + f);          // "hi1.3"
console.log("c + g: ", c + g);          // "hic"
console.log("c + h: ", c + h);          // "hifalse"
console.log("c + j: ", c + j);          // "hi0,1,2"
console.log("d + e: ", d + e);          // "1true"
console.log("d + f: ", d + f);          // "11.3"
console.log("d + g: ", d + g);          // "1c"
console.log("d + h: ", d + h);          // "1false"
console.log("d + j: ", d + j);          // "10,1,2"
console.log("e + f: ", e + f);          // 2.3
console.log("e + g: ", e + g);          // "truec"
console.log("e + h: ", e + h);          // 1 (1 + 0)
console.log("e + j: ", e + j);          // "true0,1,2"
console.log("f + g: ", f + g);          // "1.3c"
console.log("f + h: ", f + h);          // 1.3 (1.3 + 0)
console.log("f + j: ", f + j);          // "1.30,1,2"
console.log("g + h: ", g + h);          // "cfalse"
console.log("g + j: ", g + j);          // "c0,1,2"
console.log("h + j: ", h + j);          // "false0,1,2"

// List of pair combinations with '-' operator
console.log("b - d: ", b - d);          // 1 (2 - 1)
console.log("d - a: ", d - a);          // 0 (1 - 1)
console.log("c - a: ", c - a);          // NaN ("hi" - 1)

// List of pair combinations with '*' operator
console.log("d * a: ", d * a);          // 1 (1 * 1)
console.log("c * d: ", c * d);          // NaN ("hi" * 1)
console.log("c * b: ", c * b);          // NaN ("hi" * 2)

// List of pair combinations with '/' operator
console.log("b / d: ", b / d);          // 2 (2 / 1)
console.log("d / b: ", d / b);          // 0.5 (1 / 2)
console.log("c / a: ", c / a);          // NaN ("hi" / 1)

// List of pair combinations with '%' operator
console.log("b % a: ", b % a);          // 0 (2 % 1)
console.log("d % a: ", d % a);          // 0 (1 % 1)
console.log("c % b: ", c % b);          // NaN ("hi" % 2)
