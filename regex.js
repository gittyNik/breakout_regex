// exec()

console.log(/(ab)*c/.exec("ababc"));
console.log(/\b[a-zA-Z]+\.[a-zA-Z]+@[a-zA-Z]+\b/i.exec("a.a@a")); // email regex validator

// test()

console.log(/ab*c/i.test("abBcd")); // case insensitive flag
console.log(/\b[a-zA-Z]+\.[a-zA-Z]+@[a-zA-Z]+\b/i.test("a.a@a"));