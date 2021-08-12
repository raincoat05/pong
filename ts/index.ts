let canvas = document.getElementById('pong') as HTMLCanvasElement;
let context = canvas.getContext('2d')!!;

function main() {
    context.transform(1, 0, 0, -1, 0, canvas.height)
    context.fillStyle = 'rgb(00,255,00)';
    setInterval(gameLoop, 16);
}

function gameLoop() {
    tick += 1

    draw();
}

let tick = 0;

let box:Box = new Box(new Vector(640,380),30,30);
let boxVector = new Vector(15,15);

let player:Box = new Box(new Vector(100,240),240,30);
let npc:Box = new Box(new Vector(1150,240),240,30);

function draw() {
    context.fillStyle = 'rgb(00,00,00)';
    context.fillRect(0, 0, 1280, 720);
    context.fillStyle = 'rgb(255,255,255)';
    box.location = box.location.add(boxVector);
    if(box.location.y >= 690){
        boxVector = new Vector(boxVector.x,-boxVector.y);
    }
    if(box.location.y <= 0){
        boxVector = new Vector(boxVector.x,-boxVector.y);
    }
    if(box.location.x >= 1250){
        box.location = new Vector(640,360);
        boxVector = new Vector(-10,0);
    }
    if(box.location.x <= 0){
        box.location = new Vector(640,360);
        boxVector = new Vector(10,0);
    }
    if(box.isAttatch(player)){
        boxVector = new Vector(-boxVector.x,boxVector.y);
    }
    if(box.isAttatch(npc)){
        boxVector = new Vector(-boxVector.x,boxVector.y);
    }
    box.fill(context);
    player.fill(context);
    npc.fill(context);
}