let a;
let b;


function add()
{
   a=parseInt(f1.fno.value)
   b=parseInt(f1.sno.value)
   let r=a+b;
   f1.result.value=r
}

function sub()
{
    a=parseInt(f1.fno.value)
    b=parseInt(f1.sno.value)
    let r=a-b;
    f1.result.value=r
}

function mul()
{
    a=parseInt(f1.fno.value)
    b=parseInt(f1.sno.value)
    let r=a*b;
    f1.result.value=r
}

function div()
{
    a=parseInt(f1.fno.value)
   b=parseInt(f1.sno.value)
   let r=a/b;
   f1.result.value=r.toFixed(2)
}

function clear1()
{
    f1.fno.value=""
    f1.sno.value=""
    f1.result.value=""
}