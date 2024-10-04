/*let arr=[9,7,1,3,2,5,8]
console.log(arr.sort())*/

/*let arr1=["one","two","four","eight"]
let arr=[9,7,1,3,2,5,8]
console.log(arr.sort())
console.log(arr1.sort())*/


/*let arr=[1,2,3,4,5,6]
console.log(arr.fill(0))*/


/*let arr=[1,2,3,4,5,6]
console.log(arr.fill("z",1,3))*/

/*let arr=[1,2,3,4,5,6,7]
let newArr=arr.filter((item)=>{
    return item>5
})
console.log(newArr)*/


/*let arr=[1,2,3,4,5,6,7]
let newArr=arr.filter((item)=>{
    return item<4
})
console.log(newArr)*/


/*let tech=["HTML","CSS","JS","React","Express","nodeJS"]
let newArr=tech.filter((item)=>{
    return item.length<=4
})
console.log(newArr)*/

/*let arr=[1,2,3,4,5,6,7]
let newArr=arr.filter((item)=>{
    return item % 2===0
})
console.log(newArr)*/

/*let isEven=(input)=>{
    return input % 2===0
}
let arr=[1,2,3,4,5,6,7]
let newArr=arr.filter(isEven)
console.log(newArr)*/

/*let arr=[1,2,3,4,5,6,7]
let newArr=arr.some((item)=>{
    return item < 0
})
console.log(newArr)*/

/*let arr=[1,2,3,4,5,6,7]
let newArr=arr.every((item)=>{
    return item > 0
})
console.log(newArr)*/

/*let arr=[1,2,3,4,5,6,7,-2]
let newArr=arr.map((item)=>{
    return item * 2
})
console.log(newArr)*/

/*let arr=[1,2,3,4,5,6,7,0,-5,-7]
let output=arr.forEach((item)=>{
    console.log(item * 2)
})
*/

/*let arr=["one","two","three","four","two"]
console.log(arr.indexOf("five"))*/



/*let arr=[100,5,3,2,1]
let output=arr.reduce((accumulator,num)=>{
return accumulator-num
})
console.log(output)*/

/*setTimeout(()=>{
    console.log("hey this appear in 3 seconds")
},3000)*/


/*let arr=["sree","santhi","bipin","aswin"]
let findStudent=(allStudents,studentName)=>{
    return allStudents.includes(studentName)
}
console.log(findStudent(arr,"sree"))*/


/*let arr=[1,4,9,16,25]
let newArr=arr.map((item)=>{
    return Math.sqrt(item)
})
console.log(newArr)*/


/*let arr=[1,2,3,4,5]
let add = (input)=>{
    let sum=0
    for (let i of input){
        sum=sum+i
    }
    return sum
}
console.log(add(arr));*/

/*let i=1 
while(i<5){
    console.log(i)
    i++
}*/

/*for( let i=1;i<=10;i++){
console.log(i)
}*/

/*let arr=["one","two","three"]
for(let i of arr){
    console.log(i)
}*/
/*let arr=["one","two","three"]
for( let i=0;i<arr.length;i++){
    console.log(arr[i])
}
*/


/*let obj={
    in:"linkedIn",
    ig:"instagram",
    fb:"facebook",
    yt:"youTube"
}
for(let i in obj){
    console.log(obj[i])
}*/

/*let obj={
    in:"linkedIn",
    ig:"instagram",
    fb:"facebook",
    yt:"youTube"
}
for(let i in obj){
    console.log(`The key is ${[i]} and its value is ${obj[i]} `)
}*/

/*let i=10
do{
    console.log(i)
    i++
}while(i<5)*/

/*let i=1 
while(i<=100){
    console.log(i)
    i++
}*/

let count=1
let output=[]
let FizzBuzz=()=>{
    while(count<=100){
         if(count%3===0 && count%5===0){
            output.push("FizzBuss")}
        else if(count%3===0){
            output.push("fizz")
        }else if(count%5===0){  
            output.push("buzz")
        }else if(count%3===0 && count%5===0){
            output.push("FizzBuss")
        }else{
            output.push(count)
        }count++
    }
    console.log(output)
}
FizzBuzz()