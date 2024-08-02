// 1: Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
function isAnagram(str1,str2) {
    // we will split the string and create array of it and then sort the array 
    let sorted_str1 = str1.split("").sort().join()
    let sorted_str2 = str2.split("").sort().join()
    //after sorting string we will simply check that they contain the same characters  
    if(sorted_str1 == sorted_str2){
        return true
    }
    else{
        return false
    }
}
console.log(isAnagram("yug","guy"))

// 2: Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
//and returns a list of objects where each object is unique category-wise and has total price spent as its value.
function calculateTotalSpentByCategory(transactions) {
    let ans = []
    let temp = {};
    // calcutating total spent on single catefory and creating a object to prevent creating duplicates fileds
    for (let i=0;i<transactions.length;i++) {
        // if object has the filed then we add new price into the curent sum
        if(transactions[i].category in temp){
            temp[transactions[i].category]  = transactions[i].price+temp[transactions[i].category]
        }
        // if field does not exist then we will create a new field and assign the first value
        else{ 
            temp[transactions[i].category] = transactions[i].price 
        }
    }    
    //creatinng list of the the objects of difrent fields
    Object.keys(temp).forEach(element => {
        ans.push({[element]:temp[element]})
    });

    return ans
}
// We have list of catagory which has object as element with name of catagory with ist's price
let Categorys =[
    { category: 'Groceries', price: 500 },
    { category: 'Entertainment', price: 200 },
    { category: 'Groceries', price: 350 },
    { category: 'Utilities', price: 100 },
    { category: 'Entertainment', price: 150 },
    { category: 'Medical', price: 1000 }
]
console.log(calculateTotalSpentByCategory(Categorys))


// 3: Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
function findLargestElement(numbers) {
    // we will take first number as the biggest as default
    lagest =  numbers[0]
    // we are iterating in the array if we find the number bigger than lagest number we have than we will change the value 
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i]> lagest){
            lagest = numbers[i]
        }
    }
    return lagest
}

let arp = [23,2232,49,32,4,25,44,22,24,23,523,325,30,132,832,353,99]
console.log(findLargestElement(arp))

// 4: Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
function isPalindrome(str) {
    //converting string into array
    let nstr = str.split()
    // now we will iterate through string from start and from end and compare both element while iterating 
    for (let i = 0; i < nstr.length; i++) {
        if(nstr[i] != nstr[nstr.length-1]){
            // if element are not same then return false
            return false
        }
    }
    return true;
}
console.log(isPalindrome("TENET"))


// 5: Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
function calculateTime(n) {
    // getting the currrent system time
    start = new Date().getTime();
	//counting the number
    for(let i=0;i<n;i++){
    }
    // getting the time after counting
    end= new Date().getTime();
    //returning the time in secod 
    return (end-start)/1000
}

console.log(calculateTime(999999999));


// 6: Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
function countVowels(str) {
    // converting string into lowercate character array
    let arr = str.toLowerCase().split("");
    counter =0
    // itrating through the characters 
    for(let i =0;i<arr.length;i++){
        // if character is any of this vowel then we will increment counter
        arr[i]=="a"?counter+=1:counter+=0;
        arr[i]=="e"?counter+=1:counter+=0;
        arr[i]=="i"?counter+=1:counter+=0;
        arr[i]=="o"?counter+=1:counter+=0;
        arr[i]=="u"?counter+=1:counter+=0;
    }
    return counter;
}

console.log(countVowels('Anaghan Yug Vipulbhai'))


// 7: Write a function `sumArray` that takes an array of numbers as input and returns the sum of all the numbers.
function sumArray(numbers) {
    counter = 0
    // adding elements of array in zero while iterating 
    numbers.forEach(element => {
        counter += element
    });
    return counter
  }
let arpp= [23,2232,49,32,4,25,44,22,24,23,523,325,30,132,832,353,99]
console.log(sumArray(arpp))

// 8: Implement a function `filterEvenNumbers` that takes an array of numbers and returns a new array containing only the even numbers.
function filterEvenNumbers(numbers) {
    evenNumber = []
    numbers.forEach(element => {
        if(element%2==0){evenNumber.push(element)}
    });
    return evenNumber
  }
let arr = [23,2232,49,32,4,25,44,22,24,23,523,325,30,132,832,353,99]
console.log(filterEvenNumbers(arr))

// 9: Write a function `findSmallestElement` that takes an array of numbers and returns the smallest element.
function findSmallestElement(numbers) {
    //first element is smallest as default
    smallest = numbers[0]
    // iterating through array if any element is smaller the current then assign it to smallest
    numbers.forEach(element => {
        element<smallest?smallest = element:smallest = smallest 
    });
    return smallest
  }

let ar = [23,2232,49,32,4,25,44,22,24,23,523,325,30,132,832,353,99]
console.log(findSmallestElement(ar))
  
// 10: Create a function `reverseString` that takes a string and returns the string reversed.
function reverseString(str) {
    ans = ""
    // iterating throug the string's character and we will add that character before the last string
    str.split("").forEach(element => {
        ans = element+ans
    });
    return ans
  }

  console.log(reverseString("Yug Anaghan"))

// 11: Write a function `fibonacci` that takes a number `n` and returns the `n`th number in the Fibonacci sequence.
function fibonacci(n) {
    // first number of fibonacci series is 0 so return 0
    if(n == 0){return 0}
    // second number of fibonacci series is 1 so return 1
    else if(n == 1){return 1}
    // for other number we will sumply find by add the privious two fibonacci numbers
    else{return (fibonacci(n-1)+fibonacci(n-2))}
  }
  
console.log(fibonacci(19))


// 12: Implement a function `removeDuplicates` that takes an array and returns a new array with duplicate values removed.
function removeDuplicates(arr) {
    let ans = []
    // A set contains the element of array and it does not contain duplicates basic property
    let temp=new Set(arr);
    // converting set to the array
    for (const item of temp.values()) {
        ans.push(item);
    }
    return ans
  }
let ann = [23,2232,49,32,4,25,44,22,24,23,523,325,30,132,832,353,99]
console.log(removeDuplicates(ann))


// 13: Write a function `countOccurrences` that takes a string and a character and returns the number of times the character appears in the string.
function countOccurrences(str, char) {
    counter = 0
    // iteratin the array of the string then if we find the character then increment counter
    str.split("").forEach(x=>{
        if (x==char){counter+=1}
    })
    return counter
  }
str = "Indus University"
console.log(countOccurrences(str,'i'))


// 14: Create a function `findCommonElements` that takes two arrays and returns a new array containing the elements that are present in both arrays.
function findCommonElements(arr1, arr2) {
    ans = []
    // converting array into set to remove duplicates
    a1 = new Set(arr1)
    a2 = new Set(arr2)

    // iterate through a1 set and utilizing has property of the set for checking if a2 has the elemnt of a1
    for(let x of a1) {
        if (a2.has(x)){
            ans.push(x)
        }
    }
    return ans    
  }

  const array1 = [1, 2, 3, 4, 5,2,8,7,3,4,6,8,0];
  const array2 = [4, 5, 6, 7, 8,0,7,3,9,1,5,3,4];
  console.log(findCommonElements(array1, array2))

//15: Implement a function `sortStrings` that takes an array of strings and returns the array sorted in alphabetical order.
function sortStrings(arr) {
    //using built in sort function of the Java Script 
    return arr.sort()
}
let as = ['assembly', 'string','gambler','war','fight']
console.log(sortStrings(as)) 