

//reverse string

// const reverseStr = (str) => {
//   // return str.split('').reverse().join('')

//   ///////////////////////////////
//   // let reversedStr = ""
//   // for(i=str.length-1; i>=0; i--){
//   //   reversedStr += str[i]
//   // }
//   // return reversedStr;

//   /////////////////////////////////
//   // let revStr = ''
//   // for(let s of str){
//   //   revStr = s + revStr
//   // }
//   // return revStr

//   ///////////////////////////////////
//   // let revStr = ''
//   // str.split('').forEach(s => revStr = s + revStr);
//   // return revStr;

//   return str.split('').reduce((revStr,char) => char + revStr, '')
// }
  

// console.log(reverseStr("hello"))



// palindrome

// const isPalindrome = (str) => {
//   // let revStr = str.split('').reverse().join('');
//   // return revStr === str ? true : false

//   // let revStr = "";
//   // for(i=str.length -1; i>=0; i--){
//   //   revStr += str[i];
//     //hello olleh
//   // }
//   // return revStr === str ? true : false

//   // let revStr = '';
//   // for(const char in str){
//     // racecar
//   //   revStr = str[] + 'ecar';
          //revStr = 'rac' + str[]
    
//   // }
//   // return revStr === str ? true : false 

//   // const revStr = str.split('').reduce((rev,char) => char + rev, '')
//   // return revStr === str ? true : false
// }

// console.log(isPalindrome('racecar'))
// console.log(isPalindrome('haha'))

// // Reverse int 

// const intRev = (num) => {
//   let revStr = num.toString().split('').reverse().join('');
  
//   return parseInt(revStr)*Math.sign(num)
// }

// console.log(intRev(-531))

// capitalizeLetters

// const cap = (str) => {
// //   let strArr = str.toLowerCase().split(' ')

// //   for(let i=0; i< strArr.length; i++){
// //     strArr[i] = strArr[i].slice(0,1).toUpperCase() + strArr[i].slice(1)
// //   }
// //   return strArr.join(' ')
// //
//   return str
//     .toLowerCase()
//     .split(' ')
//     .map(word => word[0].toUpperCase() + word.slice(1))
//     .join(' ') ;

// }

// console.log(cap('i love javascript'));

// maxCharacter

// // const maxChar = (str) => {
// //   // let max = 0;
// //   // let maxChar = '';

// //   // str.split('').forEach((char) => {
// //   //   if(str.split(char).length > max){
// //   //     max = str.split(char).length - 1;
// //   //     maxChar = char
// //   //   }
// //   // })
// //   // return maxChar
  
// // }

// // maxChar('javaScript') //a

// const maxChar = (str) => {
//   const charObj = {}
//   let maxNum = 0;
//   let maxChar = ''

//   str.split('').forEach((char) => {
//     if(charObj[char]){
//       //addding each character into the character object
//       charObj[char]++
//     }
//     else {
//       charObj[char] = 1
//     }

//   })
//   for(let key in charObj){
//     if(charObj[key] > maxNum){
//       maxNum = charObj[key];
//       maxChar = key
//     }
//   }
//   return maxChar
// }

// maxChar('javaScript') //a

// const maxChar = (str) => {
//   const charObj = {}
//   let maxNum = 0;
//   let maxChar = ''

//   str.split('').forEach(char => {
//     if(charObj[char]){
//       charObj[char]++
//     }else{
//       charObj[char] = 1
//     }
//   })
//   console.log(charObj)
//   //loop over object to find key with highest value, store in variable
//   for(let key in charObj){
//     // console.log(key)
//     if(charObj[key] > maxNum){
//       maxNum = charObj[key];
//       maxChar = key
//     }
//   }
//   return maxChar
// }

// maxChar('abcabcccd') //a

// const maxChar = (str) => {
//   const strObj = {}
//   let maxNum = 0;
//   let maxChar = ''

//   str.toLowerCase().split('').forEach(char => {
//     if(strObj[char]){
//       strObj[char]++
//     }else{
//       strObj[char] = 1
//     }
//   })
//   console.log(strObj)
//   for(let key in strObj){
//     if(strObj[key] > maxNum){
//       maxNum = strObj[key]
//       maxChar = key
//     }
//   }
//   return maxChar
// }

// maxChar('javaScssssript') //a

// const maxChar = (str) => {
//   let maxNum = 0;
//   let maxChar = '';

//   str.toLowerCase().split('').forEach(char =>{
//     if(str.split(char).length > maxNum){
//       maxNum = str.split(char).length - 1
//       maxChar = char
//     }
//   })
//   return maxChar
  
// }

// maxChar('javaSssscript') //a

// FizzBuzz

// const fizzBuzz = () => {
//   for(let i=1; i<=100; i++){
//     if(i % 3 === 0 && i%5 ===0){
//       console.log('FizzBuzz')
//     }
//     else if(i%3 === 0){
//       console.log('Fizz')
//     }
//     else if(i%5 ===0){
//       console.log('Buzz')
//     }
//     else{
//       console.log(i)
//     }
//   }
// }

// console.log(fizzBuzz())