
let start=parseInt(prompt("Enter Starting Number :-"))
let end=parseInt(prompt("Enter Ending  Number :-"))
let square
let cube


document.write("<table>")
for(let i=start;i<=end;i++)
{
       document.write("<tr>")
       square=i*i
       document.write(`<td>${i}*${i}=${square}</td>`)
       
       cube=i*i*i
       document.write(`<td>${i}*${i}*${i}=${cube}</td>`)
       document.write("</tr>")
}
document.write("</table>")