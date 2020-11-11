// Define bit type
type Bit = 0 | 1;

// Define xor function
const xor = (a: Bit, b: Bit) => (a == 1) !== (b == 1)

// Data to be encrypted
const data = "This is a test, how good this encryption is ...";
const secret = "Secret password";

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
const mapping = [15, 6, 5, 14, 10, 11, 9, 1, 4, 8, 12, 3, 2, 13, 0, 7];

// Takes 8 bit and re-orders the digits
const permutation = [1, 2, 6, 3, 0, 4, 5, 7];

const rounds = 1;
let encryptedData: Bit[] = stringToBitArray(data);
let secretInBits: Bit[] = stringToBitArray(secret);

// Bring secret-bit-array to the same length as the data bit array, to can do xor better
if (secretInBits.length > encryptedData.length) {
    secretInBits = secretInBits.slice(0, encryptedData.length -1);
} else {
    while(secretInBits.length < encryptedData.length) secretInBits.push(0, 0, 0, 0);
}
// Extend data string, if the data string is not dividable by 8 (due to the permutation algorithm, which accepts 8-Bit data)
if (encryptedData.length % 8 != 0) encryptedData.push(0, 0, 0, 0);
// Perform calculation
let counter = 0;
while(counter < rounds) {
    console.log(`----- Round ${counter +1} -----`);
    console.log("Input data: " + encryptedData);
    // XORing data with the secret
    let xored: Bit[] = [];
    for (let i = 0; i < encryptedData.length; i++) xored.push(encryptedData[i], secretInBits[i]);
    encryptedData = xored;
    console.log("XORed data: " + encryptedData);
    // Repeat, depending on string length
    for(let i = 0; i < encryptedData.length / 8; i+=8) {
        // Mapping ...
        let tmp = map(encryptedData.slice(i, i + 4));
        tmp.push(...map(encryptedData.slice(i + 4, i + 8)))
        // Permutating ...
        encryptedData = permutate(tmp);
    }
    console.log("Output data: " + encryptedData);
    counter++;
}
console.log("End result: " + encryptedData);

// -------------------------------------------- Helper functions --------------------------------------------

function map(input: Bit[]): Bit[] {
    // Throw an error in the case of wrong data
    if (input.length != 4) throw new Error("Map method only accepts 4-Bit data.");
    return numberToBitArray(mapping[bitArrayToNumber(input)]);
}

function permutate(input: Bit[]): Bit[] {
    // Throw an error in the case of wrong data
    if (input.length != 8) throw new Error("Permutate method only accepts 8-Bit data.");
    let output: Bit[] = [];
    for (let i = 0; i < input.length; i++) output.push(input[permutation[i]]);
    return output;
}

function bitArrayToNumber(input: Bit[]): number {
    let output = 0;
    for (let bit of input) {
        output << 1;
        output & bit;
    }
    return output;
}

function numberToBitArray(input: number): Bit[] {
    let output: Bit[] = [];
    while (input > 0) {
        input = input >> 1;
        output.unshift(input % 2 ? 1 : 0);
    }
    return output;
}

function stringToBitArray(input: string): Bit[] {
    var bytes = [];
    for (let i = 0; i < input.length; i++) {
        let char = input.charCodeAt(i);
        bytes.push(char >>> 8);
        bytes.push(char & 0xFF);
    }
    //console.log(bytes);
    return bytes;
}

function BitArrayToString(input: Bit[]): string {

    return "";
}