//Type of function
//Type 1:no argument no return

function fact1()
{
    let num=5
    let f=1
    for(let i=1;i<=num;i++)
    {
        f=f*i
    }
    console.log(f)
}

fact1()


//Type 2:With Argument but not return
function fact2(num)
{
    let f=1;
    for(let i=1;i<=num;i++)
    {
        f=f*i
    }
    console.log(f)
}
let num1=5
fact2(num1)


//Type 3:no argument Argument but return
function fact3()
{
    let num=5;
    let f= 1;
    for(let i=1;i<=num;i++)
    {
        f=f*i
    }
    return f;
}

console.log(fact3())


//Type :With Argument with return
function fact4(num5)
{
    let num2=5
    let f=1
    for(let i=1;i<=num5;i++)
    {
        f=f*i
    }
    return f;
}
let num2=5;
console.log(fact4(num2))