
function buttonclick(val)
{   
    console.log(val)
    document.getElementById("screeen").value+=val;
    
}
function cleardisplay()
{
    document.getElementById("screeen").value=""
}
function equalclick()
{
    var text=document.getElementById("screeen").value
    var result=eval(text)
    document.getElementById('screeen').value=result
}