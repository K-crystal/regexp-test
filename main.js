const str = `
010-1234-5345
sdkpoa@naver.com
https://www.~
The side bar includes a Cheatsheet, full Reference, and Help. You can also Save & Share with the.
aabbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`

//const regexp = new RegExp('the', 'gi')
//const regexp = /the/gi
//console.log(str.match(regexp))

/*
let str = `
010-1234-5345
sdkpoa@naver.com
https://www.~
The side bar includes a Cheatsheet, full Reference, and Help. You can also Save & Share with the.
aabbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`
*/
//const regexp = /bar/gi
//console.log(regexp.test(str))
//str = str.replace(regexp, 'AAA')
//console.log(str)

//console.log(str.match(/\.$/gim)) 
// .은 명령어이기 때문에 \. = . 찾기, \.$ = 끝나는 부분에 .이 있는지 확인

//console.log(str.match(/https?/g)) 

//console.log(str.match(/\b\w{2,3}\b/g)) //숫자나 알파벳이 2글자이상 3글자 이하 
//\w = 숫자를 포함한 알파벳

//console.log(str.match(/[가-힣]{1,}/g)) 
/*console.log(str.match(/\bi\w{1,}\b/g)) 
console.log(str.match(/\d{1,}/g)) 

const h = `  the hello  world   !

`
console.log(h.replace(/\s/g, '')) */


console.log(str.match(/(?<=@).{1,}/g))