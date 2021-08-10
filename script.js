const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADASS';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;


function draw(e){
   if(!isDrawing) return; // stop for running when they are not moused down
   console.log(e);
   ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
   ctx.beginPath()
   ctx.moveTo(lastX,lastY);
   ctx.lineTo(e.offsetX,e.offsetY);
   ctx.stroke();
   lastX = e.offsetX;
   lastY = e.offsetY;
   hue++;
   if(hue>360) hue=0;

   if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
       direction = !direction;
   }

   if(direction){
    ctx.lineWidth++;
   } else{
       ctx.lineWidth--;
   }
   

}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    [lastX , lastY] = [e.offsetX , e.offsetY];
    isDrawing = true;
});
canvas.addEventListener('mouseup',() => isDrawing = false);
canvas.addEventListener('mousseout',() => isDrawing = false);