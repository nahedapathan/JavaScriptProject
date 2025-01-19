//WWAp enter 2 no and 1 opr from user and print corresponding operation

let n1=20;
let n2=30;
let opr="*"
let result

if(opr=="+")
{
    result=n1+n2
}
else if(opr=='-')
{
    result=n1-n2;
}
else if(opr=='*')
{
    result=n1*n2
}
else if(opr=='/')
{
    result=n1/n2
}
else{
    console.log("Invalid opr")
}
console.log(result)