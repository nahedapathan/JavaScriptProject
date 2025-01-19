document.write("<table>");

for (i = 1; i <= 8; i++) {
  if (i % 2 == 0) {

    document.write("<tr>")

    for(let j=0;j<=8;j++)
    {
        
        if(j%2==0)
        {
            document.write(`<td id="white"></td>`);

        }
        else{
            document.write(`<td id="black"></td>`)
        }
        
    }
    document.write("</tr>")
       



  } 
  
  else {
    document.write("<tr>");

    for (let k = 0; k <= 8; k++) {
      if (k % 2 == 0) {
        document.write(`<td id="black"></td>`);
      } else {
        document.write(`<td id="white"></td>`);
      }
    }
    document.write("</tr>");
  }
}

document.write("</table>");
