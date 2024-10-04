                JavaScript
               Assignment 7

1.Write short notes on below array methods with code examples
    
- sort()
   - The sort() method arranges array elements alphabetically by default, treating them as strings. For numerical sorting, a custom comparison function      is needed, allowing you to control the sorting criteria for precise and efficient organization. 
```js
                let arr1=["one","two","four","eight"]
                let arr=[9,7,1,3,2,5,8]
                console.log(arr.sort())
                console.log(arr1.sort())
```                
- fill()
   - The Array fill() Method fills a given range of array elements with the given value. This method is used to manipulate the existing array according to our needs.
        ```js
            let arr=[1,2,3,4,5,6]
            console.log(arr.fill(0))
        ```    
- filter()
   - The filter() method creates a new array containing elements that satisfy a specified condition.The filter() method skips empty elements and does not change the original array.
```js
            let arr=[1,2,3,4,5,6,7]
            let newArr=arr.filter((item)=>{
                return item>5
            })
            console.log(newArr)
```
- some()
  - The some() method checks if any array elements pass a test provided as a callback function, returning true if any do and false if none do. It does not execute the function for empty elements or alter the original array.
```js
            let arr=[1,2,3,4,5,6,7]
            let newArr=arr.some((item)=>{
            return item < 0
            })
            console.log(newArr)
```
- every()
    - The every() method iterates over each array element, returning true if the provided function returns true for all elements. It returns false if the function returns false for any element. This method does not operate on empty elements and leaves the original array unchanged.

```js

                let arr=[1,2,3,4,5,6,7]
                let newArr=arr.every((item)=>{
                    return item > 0
                })
                console.log(newArr)
```

- map()
    - The map() method in JavaScript creates a new array by applying a function to each element of the original array.map() skips empty elements, does not modify the original array.
```js
                let arr=[1,2,3,4,5,6,7,-2]
                let newArr=arr.map((item)=>{
                    return item * 2
                })
                console.log(newArr)
```
- forEach()
  - The Array forEach() method is a built-in function that executes a provided function once for each array element. It does not return a new array and does not modify the original array. It’s commonly used for iteration and performing actions on each array element.
 ```js
                let arr=[1,2,3,4,5,6,7,0,-5,-7]
                let output=arr.forEach((item)=>{
                    console.log(item * 2)
                })
```
- indexOf()
  - The indexOf() method is used to find the position of the first occurrence of a specific value in an array. If the value is not present, it returns -1. This method is handy for quickly determining where a particular item is located within an array.
```js
                let arr=["one","two","three","four","two"]
                console.log(arr.indexOf("two"))
```



2.write a function that takes an array of numbers as an argument and returns the sum of its elements.
```js
                    let arr=[1,2,3,4,5]
                    let add = (input)=>{
                        let sum=0
                        for (let i of input){
                            sum=sum+i
                        }
                        return sum
                    }
                    console.log(add(arr));
                
```
3.Create a function that filters strings in an array by their length
```js 
                let tech=["HTML","CSS","JS","React","Express","nodeJS"]
                let newArr=tech.filter((item)=>{
                    return item.length<=4
                })
                console.log(newArr)
```
4.Create a function that returns a new array containing the square roots of each number in the original array [1,4,9,16,25]
(Math.sqrt())
```js
                let arr=[1,4,9,16,25]
                let newArr=arr.map((item)=>{
                    return Math.sqrt(item)
                })
                console.log(newArr)
```
5.Write a function that prints the number 1 to 100. But for multiples of 3, print Fizz instead of the number, and for multiples of 5, print Buzz. For the numbers that are multiples of both 3 and 5, print FizzBuzz
```js
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
```
6.create an array with 5 students names.Then create a function that takes two parameters (allStudents and studentName).iterate over all the students and find that specific user studentName
```js
            let arr=["sree","santhi","bipin","aswin"]
            let findStudent=(allStudents,studentName)=>{
                return allStudents.includes(studentName)
            }
            console.log(findStudent(arr,"sree"))
```
