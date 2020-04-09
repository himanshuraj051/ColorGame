var colors=getColors(6);
var headline=document.querySelector("h1"); 
var len=6;
var blocks = document.querySelectorAll(".box");
var pickedColor=selectColor();
var newgame=document.getElementById("btn");



var score=6;
while(1000)
{
colors=getColors(6);
    pickedColor=selectColor();

   for(var i = 0; i < blocks.length; i++)
   {
    blocks[i].style.backgroundColor = colors[i];
   
   



}}



function selectColor()
{
	var col=Math.floor(Math.random()*len);
	return colors[col];
}

function getColors(sze)
{
    var arcol=[];

	for(var i=0; i<sze; i++)
    arcol.push(randomcol());
    
    return arcol;
}
function randomcol()
{
	var a=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	var c=Math.floor(Math.random()*256);

	return "rgb(" + a + ", " + b + ", " + c + ")";
}