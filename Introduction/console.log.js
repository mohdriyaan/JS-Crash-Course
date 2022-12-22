// console.log

// console.log("Welcome To JS Crash Course")
// console.log(12345)

// console.clear

// console.time and console.timeEnd():It tells us the time taken to execute

console.time()
for(let i=0;i<=10;i++){
    console.log(i)
}
console.timeEnd()

let arr=[0,1,2,3,4]
let obj={
    name:"Riyaan",
    age:21
}
// console.table(variable_name):It takes the output in the form of table
console.table(arr)
console.table(obj)
