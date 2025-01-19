let num=parseInt(prompt("Enter the Number"))
let mul


document.write("<table>")
for(let i=1;i<=10;i++)
{
    document.write("<tr>")
    mul=num*i
    document.write(`<td> ${num}* ${i} =</td> <td>${mul} </td> `)
    document.write("</tr>")
}

document.write("</table>")