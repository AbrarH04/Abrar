
const buttons=document.querySelectorAll("button")
const inp=document.getElementById(("res"))
for (let a=0;a<buttons.length;a++)
    {buttons[a].addEventListener("click",()=>{
        const btnval=buttons[a].textContent
        if(btnval==="R"){cleres()} 
            else if (btnval==="="){calcres()} 
                else {apndval(btnval);}});}
function cleres() 
{
    inp.value="";}
function calcres() 
{
    inp.value=eval(inp.value)}
function apndval(btnval) 
{
    inp.value+=btnval}