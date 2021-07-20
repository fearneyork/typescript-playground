let aString: string;

aString = "Alan";

console.log(aString);

// aString = 42; this can overwrite it and can be compiled into the js file, so sometimes the error won't stop the compile, but will still show you where it's wrong

// ------ //

let bString :string = "Bob"
console.log(bString);

let cString = "Carl"
console.log(cString);

let aNum = 5;
let bNum: number;

let aBool = true;
let bBool: boolean;

let aVar;
let bVar: any;

// ----- //

let year: string | number;
// single pipe charcater is a 'union' character in TS, it's like or but for specifying the types

// ----- //

let arrStr = ["a", "b", "c"] // the arr values always have to be strings

arrStr[0] = "d";
// arrStr[0] = 0 throws an error
// arrStr.push(5) throws an error for trying to push the wrong type in

let arrNum: number[] = [1, 2, 3];

arrNum[0] = 4;
// arrNum[0] = "4" throws an error

let arrBool = [true, false];

arrBool[0] = false;
// arrBool[0] = "true" throws an error

let arrMix1 = [1, "a", true];
let arrMix2: (number | string | boolean)[] = [2, "b", false] // this is 'fine' but it kind of defeats the point of TS

let arrTuple1: [string, number] = ["string", 42] //defines the order that you expect the types in, has to be done for each index
