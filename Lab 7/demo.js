/*********************************************************************/
//Global Area

window.onload = function(){
    //DOM related code will be here
    //All event listeners go inside window.onload
    
        var btn1 = document.getElementById("btnOrig");
        btn1.addEventListener("click", ChangeButtonText);//function name only; donot use ()
        
        
    }
    function ChangeButtonText(btnOrig)
    {
        btnOrig.innerHTML = "Active";
        console.log(btn.id);
    }
    
    function ChangeButtonText(btnObj)
    {
        btnObj.innerHTML = "Active";
        console.log(btnObj.id);
    
    }
    var btn2 = document.getElementsByClassName(square3);
    btn2.addEventListener("click", changeSqaure)
    function changeSqaure(sqObj)
    {
        elm.style.backgroundColor = green;
    }
   
    
    


/***************** Function definition area *************/
//write a function to change the size of the box (css)
function createLink()
{
    var child = document.getElementsByTagName("a");

    var parent = document.getElementsById("parentLink");
    child.append(parent);
    child.title = "My Text";
    child.href = "http://www.tri-c.edu"
    document.body.appendChild(a)

}
function removeLink()
{
    var parent = document.getElement("a");
    var child = parent.lastElementChild;
    parent.removeChild(child);
}
function changeColor()
{
    var x = document.getElementsById("inputColor").valule;
    var box = document.getElementsById("box");
    box.style.width = x;
    box.style.height = x;
    var box = document.getElementsById("box")
    for(var i=0; i<box.length;i++)
    {
        box[x].style.backgroundColor = "red";
        box[x].style.borderRadius = "50px";
        box[x].style.boxShadow = "2px 2px 2px grey";
        var z = box[x].innerHTML;
        box[x].innerHTML = z+"Box";
    }
}
function changeSqaure()
{
    var squares = document.getElementsByClassName("square1");
    for(var i=0; i<squares.length;i++)
    {
        squares[i].style.backgroundColor = "black";
        squares[i].style.borderRadius = "50px";
        squares[i].style.boxShadow = "2px 2px 2px grey";
        var x = squares[i].innerHTML;
        squares[i].innerHTML = x+ " Box";

    }
    var squares2 = document.getElementsByClassName("square2");
    for(var i=0; i<squares.length;i++)
    {
        squares2[i].style.backgroundColor = "white";
        squares2[i].style.borderRadius = "50px";
        squares2[i].style.boxShadow = "2px 2px 2px grey";
        var x = squares2[i].innerHTML;
        squares2[i].innerHTML = x+ " Box";

    }
}function changeShape()
{
    
}