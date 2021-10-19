// Create a reference for the canvas
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");    
img_width = 300;
img_height = 100;
img_x=10;
img_y=10;
function add(){
    background_imgtag=new Image();
background_imgtag.onload=upload_background;
background_imgtag.src=background_image;
rover_imgtag=new Image();
rover_imgtag.onload=upload_rover;
rover_imgtag.src=rover_image;
}
function upload_background(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}
function upload_rover(){
ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",myKeyDown);
function myKeyDown(e){
    keypress=e.keyCode;
    console.log(keypress >=97 && keypress);
    if(keypress=="38"){
        up();
        console.log("Up is Pressed!")
    }
    if(keypress=="40"){
        down()
        console.log("Down is Pressed")
    }
    if(keypress=="37"){
        left()
        console.log("Left is Pressed")
    }
    if(keypress=="39"){
        right()
        console.log("Right is Pressed")
    }
}

	
