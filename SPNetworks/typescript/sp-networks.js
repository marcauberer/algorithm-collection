// Define xor function
var xor = function (a, b) { return (a == 1) !== (b == 1); };
// Data to be encrypted
var data = "This is a test, how good this encryption is ...";
var secret = "Secret password";
// XOR test
/*console.log(xor(0, 0));
console.log(xor(0, 1));
console.log(xor(1, 0));
console.log(xor(1, 1));*/
// NumberToBitArray test
console.log(numberToBitArray(19));
// BitArrayToNumber test
console.log(bitArrayToNumber([1, 0, 1, 0, 1, 0]));
// Takes 4-Bit input and transforms it to another 4-Bit output
var mapping = [15, 6, 5, 14, 10, 11, 9, 1, 4, 8, 12, 3, 2, 13, 0, 7];
// Takes 8 bit and re-orders the digits
var permutation = [1, 2, 6, 3, 0, 4, 5, 7];
var rounds = 1;
var encryptedData = stringToBitArray(data);
var secretInBits = stringToBitArray(secret);
// Bring secret-bit-array to the same length as the data bit array, to can do xor better
if (secretInBits.length > encryptedData.length) {
    secretInBits = secretInBits.slice(0, encryptedData.length - 1);
}
else {
    while (secretInBits.length < encryptedData.length)
        secretInBits.push(0, 0, 0, 0);
}
// Extend data string, if the data string is not dividable by 8 (due to the permutation algorithm, which accepts 8-Bit data)
if (encryptedData.length % 8 != 0)
    encryptedData.push(0, 0, 0, 0);
// Perform calculation
var counter = 0;
while (counter < rounds) {
    console.log("----- Round " + (counter + 1) + " -----");
    console.log("Input data: " + encryptedData);
    // XORing data with the secret
    var xored = [];
    for (var i = 0; i < encryptedData.length; i++)
        xored.push(encryptedData[i], secretInBits[i]);
    encryptedData = xored;
    console.log("XORed data: " + encryptedData);
    // Repeat, depending on string length
    for (var i = 0; i < encryptedData.length / 8; i += 8) {
        // Mapping ...
        var tmp = map(encryptedData.slice(i, i + 4));
        tmp.push.apply(tmp, map(encryptedData.slice(i + 4, i + 8)));
        // Permutating ...
        encryptedData = permutate(tmp);
    }
    console.log("Output data: " + encryptedData);
    counter++;
}
console.log("End result: " + encryptedData);
// -------------------------------------------- Helper functions --------------------------------------------
function map(input) {
    // Throw an error in the case of wrong data
    if (input.length != 4)
        throw new Error("Map method only accepts 4-Bit data.");
    return numberToBitArray(mapping[bitArrayToNumber(input)]);
}
function permutate(input) {
    // Throw an error in the case of wrong data
    if (input.length != 8)
        throw new Error("Permutate method only accepts 8-Bit data.");
    var output = [];
    for (var i = 0; i < input.length; i++)
        output.push(input[permutation[i]]);
    return output;
}
function bitArrayToNumber(input) {
    var output = 0;
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var bit = input_1[_i];
        output & bit;
        output << 1;
    }
    return output;
}
function numberToBitArray(input) {
    var output = [];
    while (input > 0) {
        input = input >> 1;
        output.unshift(input % 2 ? 1 : 0);
    }
    return output;
}
function stringToBitArray(input) {
    var bytes = [];
    for (var i = 0; i < input.length; i++) {
        var char = input.charCodeAt(i);
        bytes.push(char >>> 8);
        bytes.push(char & 0xFF);
    }
    //console.log(bytes);
    return bytes;
}
function BitArrayToString(input) {
    return "";
}
