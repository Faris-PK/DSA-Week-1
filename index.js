// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// let start = performance.now();
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// let end = performance.now();

// console.log('start:', start);
// console.log('end:', end);
// console.log(end-start);


                //Linear Time complexity

// let n = 4
// let sum = 0;
// for(let i=0;i<=n;i++){
//      sum=sum+i;
// }
// console.log('sum:',sum);
 

                //Constant Time Complexity

//  let n = 4
//  let sum = 0; 
 
//  sum = n*(n+1)/2;
//  console.log('sum:',sum);


                  //Arary Problem : 1 

// function twoNumberSum(array, target) {
//     for (let i = 0; i < array.length - 1; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] + array[j] === target) {
//                 return [array[i], array[j]];
//             }
//         }
//     }
//     return [];
// }

// // Example usage:
// const inputArray = [3, 5, 2, -4, 8];
// const targetSum = 7;

// const result = twoNumberSum(inputArray, targetSum);
// console.log(result);

                    //array Problem : 2

//   function shuffle(nums, n) {

//     let x =[]
//     for(i=0;i<n;i++){
//         x.push(nums[i],nums[i+n])
//     }
//     return x;

    
// };        

// let nums = [2,5,1,3,4,7]
// let n = 3;
// let result = shuffle(nums,n)

// console.log(result);

                     //array Problem : 3

var targetIndices = function(nums, target) {
let arr = []
let sortedNums = [...nums].sort((a, b) => a - b);
for(i=0;i<=sortedNums.length;i++){
        if(sortedNums[i]==target){
            arr.push(i)
        }
}

return arr
};  

let nums =  [1,2,5,2,3]
let n = 2;
let result = targetIndices(nums,n)

console.log(result);