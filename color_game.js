var colors=getColors(6);
var headline=document.querySelector("h1"); 
var len=6;
var blocks = document.querySelectorAll(".box");
var pickedColor=selectColor();
var newgame=document.getElementById("btn");
var score=6;

easy.addEventListener("click",function()
{

    len=3;
    colors=getColors(3);
    pickedColor=selectColor();
    main.textContent=pickedColor;
    
   
     score=len;
    easy.classList.add("selected");
    hard.classList.remove("selected");

   for(var i = 0; i < blocks.length; i++)
   {
   if(colors[i])
   blocks[i].style.backgroundColor = colors[i];
   
   else
   blocks[i].style.display="none";
   }

    headline.style.backgroundColor="steelblue"; 
  message.textContent="";

});
hard.addEventListener("click",function()
{
   
    len=6;

    colors=getColors(6);
    pickedColor=selectColor();
    main.textContent=pickedColor;

   
    score=len;

   hard.classList.add("selected");
   easy.classList.remove("selected");

   for(var i = 0; i < blocks.length; i++)
   {
    blocks[i].style.backgroundColor = colors[i];
    blocks[i].style.display="block";
   }
   headline.style.backgroundColor="steelblue"; 
    message.textContent="";



});


newgame.addEventListener("click",function()
{
	colors=getColors(6);
	pickedColor=selectColor();
	main.textContent=pickedColor;
    
    for(var i = 0; i < blocks.length; i++)
    blocks[i].style.backgroundColor = colors[i];
     
    headline.style.backgroundColor="steelblue"; 
    
    message.textContent="";    
    this.textContent="RESET";

    message.textContent="";

});

main.textContent=pickedColor;

for(var i = 0; i < len; i++)
{   
    

	blocks[i].style.backgroundColor = colors[i];

	blocks[i].addEventListener("click",function(){

		if(this.style.backgroundColor === pickedColor)
		{
		

            btn.textContent="New Game?";
            message.textContent="correct!";

			var foundColor=this.style.backgroundColor;
            
            headline.style.backgroundColor=foundColor;
      
			modifyColor(foundColor);
		}
		else{
		btn.textContent="RESET";	
		this.style.backgroundColor="#232323";
		message.textContent="try again!";
    score--;
	}
	});

}
function modifyColor(x)
{
	for(var j=0; j < len; j++)
	
	blocks[j].style.backgroundColor=x;
			
}

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