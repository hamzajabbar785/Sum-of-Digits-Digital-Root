// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, 
// continue reducing in this way until a single-digit number is produced. The input 
// will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

const digitalRoot = (nums) => {
    if(nums < 10){
        return nums
    }
    return digitalRoot(nums.toString().split("").reduce((acc, value) => acc + Number(value) , 0))
}

digitalRoot(942)

//Solution 2

const digitalRoot = (n) => {
    while (n.toString().length >= 2) {
        n = n.toString().split('').reduce((p, c) => Number(p) + Number(c));
      }
    
      return n;
    
}

digitalRoot(493193)