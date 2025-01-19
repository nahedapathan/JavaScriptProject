function getElement()
{
    let para=document.getElementById("p1").innerHTML
    let h=document.getElementById("hed").innerHTML
    alert(para)
    alert(h)
    console.log(para)
}

function getElemetByClass()
{
    let elements=document.getElementsByClassName("c1")
    alert(elements[0].innerHTML)
    alert(elements[1].innerHTML)
    alert(elements[2].innerHTML)
}
