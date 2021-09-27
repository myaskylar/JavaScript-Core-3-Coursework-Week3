# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers.

line 4 is function Scope variable and line 1 is global variable. line 7 will log "1" as it can read the global variable. line 5 only log if function f1() been called.

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.

line 34 will log 10 as function f1() as been called and inside that function at line 30 able to read global variable x, Meanwhile line 35 will throw referenceError as y is not defined, Because y is function scope variable only can access within the function.

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.

9 & {x:10} : Cant assign or modify the value of const. Const X value is 9 where we cant modify or add value on f1(x).It will log the global variable x value as 9; where else Const Y value is an object with key X, we add value to key X on f2(y). It will log the object with the value added to key x after f2(y) been called.