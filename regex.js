// Visit https://regex101.com/r/cO8lqs/25 for online regex simulator

// exec()

let emailValidator = /[^(\s\d)]+@[a-zA-Z]+\.[a-zA-Z]+/

console.log(emailValidator.exec("my email id is niskarsh@soal.io"));

// test()

// console.log(/ab*c/i.test("abBcd")); // case insensitive flag
// console.log(/\b[a-zA-Z]+\.[a-zA-Z]+@[a-zA-Z]+\b/i.test("a.a@a"));
