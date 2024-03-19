    //Even and Odd
    
    console.log("Answer1");
    console.log("");

    function addEven(num){
        if(num%2===0){
            return  "The number is EVEN";
        }
        return "The number is ODD";
    }


    console.log(addEven(0));

    //Factorial

    function factorial(num){
        if(num>1){
        return num*factorial(num-1);
        }
        return num;
    }

    console.log(factorial(5));

    console.log("Answer2");
    console.log("");

//Destructuring

    let people = [
        { name: 'John', age: 30 },
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 35 }
        ];

        let {name:name1,age:age1}=people[0];
        
        let {name:name2,age:age2}=people[1];
        
        let {name:name3,age:age3}=people[2];

        console.log("Answer3");
        console.log("");
        
        console.log(`Name of first Person is ${name1} who is ${age1} years old`);
        console.log(`Name of Second Person is ${name2} who is ${age2} years old`);
        console.log(`Name of Third Person is ${name3} who is ${age3} years old`);

        

        console.log("Answer4");
        console.log("");

//Reversing the String


        let string = "Hello";
        let reverse="";
            for(i=string.length-1;i>=0;i--){
                reverse=reverse+string[i];
            }
            console.log(reverse);

            console.log("Answer5");
            console.log("");
//Sum of the Array


        function sum(){
        let sum=0;
            for(let i=0;i<arr.length-1;i++){
                console.log(arr.length);
                sum=sum+arr[i];
            }
            return sum;
        }    
        const arr = [2,3,5,2,5];    
        console.log(sum[arr]);
    