

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



