// Reverse bits of a given 32 bits unsigned integer.
//
// Example 1:
// Input: 00000010100101000001111010011100
// Output: 00111001011110000010100101000000
// Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596,
// so return 964176192 which its binary representation is 00111001011110000010100101000000.
//
// Example 2:
// Input: 11111111111111111111111111111101
// Output: 10111111111111111111111111111111
// Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293,
// so return 3221225471 which its binary representation is 10101111110010110010011101101001.
//
// Note:
// Note that in some languages such as Java, there is no unsigned integer type. In this case,
// both input and output will be given as signed integer type and should not affect your implementation,
// as the internal binary representation of the integer is the same whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation. Therefore,
// in Example 2 above the input represents the signed integer -3 and the output represents the signed integer -1073741825
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 * solution 1 brute force
 */
var reverseBits = function(n) {
    var binaryN = n.toString(2).split("");
    var length = binaryN.length;
    var result;
    while(length<32){
        binaryN.unshift(0);
        length++;
    }
    result = binaryN.reverse().join("");
    return parseInt(result,2)
};

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 * solution 2 using js array built-in padEnd method
 */
var reverseBits = function(n) {
    return parseInt(n.toString(2).split("").reverse().join("").padEnd(32,0),2);
};

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 * solution 3 bit manipulation
 */
 // Detailed explaination(ref:https://leetcode.com/problems/reverse-bits/discuss/54738/Sharing-my-2ms-Java-Solution-with-Explanation):
 // We first intitialize result to 0. We then iterate from
 // 0 to 31 (an integer has 32 bits). In each iteration:
 // We first shift result to the left by 1 bit.
 // Then, if the last digit of input n is 1, we add 1 to result. To
 // find the last digit of n, we just do: (n & 1)
 // Example, if n=5 (101), n&1 = 101 & 001 = 001 = 1;
 // however, if n = 2 (10), n&1 = 10 & 01 = 00 = 0).
 //
 // Finally, we update n by shifting it to the right by 1 (n >>= 1). This is because the last digit is already taken care of, so we need to drop it by shifting n to the right by 1.
 //
 // At the end of the iteration, we return result.
 //
 // Example, if input n = 13 (represented in binary as
 // 0000_0000_0000_0000_0000_0000_0000_1101, the "_" is for readability),
 // calling reverseBits(13) should return:
 // 1011_0000_0000_0000_0000_0000_0000_0000
 //
 // Here is how our algorithm would work for input n = 13:
 //
 // Initially, result = 0 = 0000_0000_0000_0000_0000_0000_0000_0000,
 // n = 13 = 0000_0000_0000_0000_0000_0000_0000_1101
 //
 // Starting for loop:
 // i = 0:
 // result = result << 1 = 0000_0000_0000_0000_0000_0000_0000_0000.
 // n&1 = 0000_0000_0000_0000_0000_0000_0000_1101
 // & 0000_0000_0000_0000_0000_0000_0000_0001
 // = 0000_0000_0000_0000_0000_0000_0000_0001 = 1
 // therefore result = result + 1 =
 // 0000_0000_0000_0000_0000_0000_0000_0000
 // + 0000_0000_0000_0000_0000_0000_0000_0001
 // = 0000_0000_0000_0000_0000_0000_0000_0001 = 1
 //
 // Next, we right shift n by 1 (n >>= 1) (i.e. we drop the least significant bit) to get:
 // n = 0000_0000_0000_0000_0000_0000_0000_0110.
 // We then go to the next iteration.
 //
 // i = 1:
 // result = result << 1 = 0000_0000_0000_0000_0000_0000_0000_0010;
 // n&1 = 0000_0000_0000_0000_0000_0000_0000_0110 &
 // 0000_0000_0000_0000_0000_0000_0000_0001
 // = 0000_0000_0000_0000_0000_0000_0000_0000 = 0;
 // therefore we don't increment result.
 // We right shift n by 1 (n >>= 1) to get:
 // n = 0000_0000_0000_0000_0000_0000_0000_0011.
 // We then go to the next iteration.
 //
 // i = 2:
 // result = result << 1 = 0000_0000_0000_0000_0000_0000_0000_0100.
 // n&1 = 0000_0000_0000_0000_0000_0000_0000_0011 &
 // 0000_0000_0000_0000_0000_0000_0000_0001 =
 // 0000_0000_0000_0000_0000_0000_0000_0001 = 1
 // therefore result = result + 1 =
 // 0000_0000_0000_0000_0000_0000_0000_0100 +
 // 0000_0000_0000_0000_0000_0000_0000_0001 =
 // result = 0000_0000_0000_0000_0000_0000_0000_0101
 // We right shift n by 1 to get:
 // n = 0000_0000_0000_0000_0000_0000_0000_0001.
 // We then go to the next iteration.
 //
 // i = 3:
 // result = result << 1 = 0000_0000_0000_0000_0000_0000_0000_1010.
 // n&1 = 0000_0000_0000_0000_0000_0000_0000_0001 &
 // 0000_0000_0000_0000_0000_0000_0000_0001 =
 // 0000_0000_0000_0000_0000_0000_0000_0001 = 1
 // therefore result = result + 1 =
 // = 0000_0000_0000_0000_0000_0000_0000_1011
 // We right shift n by 1 to get:
 // n = 0000_0000_0000_0000_0000_0000_0000_0000 = 0.
 //
 // Now, from here to the end of the iteration, n is 0, so (n&1)
 // will always be 0 and and n >>=1 will not change n. The only change
 // will be for result <<=1, i.e. shifting result to the left by 1 digit.
 // Since there we have i=4 to i = 31 iterations left, this will result
 // in padding 28 0's to the right of result. i.e at the end, we get
 // result = 1011_0000_0000_0000_0000_0000_0000_0000
 //
//  public int reverseBits(int n) {
//     if (n == 0) return 0;
//
//     int result = 0;
//     for (int i = 0; i < 32; i++) {
//         result <<= 1;
//         if ((n & 1) == 1) result++;
//         n >>= 1;
//     }
//     return result;
// }
var reverseBits = function(n) {
//think of the 32-bit number as an array, transforming the problem of how to reverse an array
//using bit manipulation (right shift the input, and left shift the output)
    let result = 0;//like an empty new array
    for ( let i = 0; i < 32; i++) {
        result <<= 1; // result left shift 1 bit
        //doing bit-wise OR operation(eg:1101|0001 = 1101),
        //n&1 tests if the right-most bit is 0 or not, if it is 0, result will be 0
        // if it is 1, result will be 1, and the 1 will be shifted left in next loop
        result |= n & 1;
        n >>>= 1;//n right shift 1 bit
        //console.log(result.toString(2), '<<<', n.toString(2));
    }
    return result >>> 0;//fill the 0 to the left of result
};
