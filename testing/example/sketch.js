function preload() {

}

function setup() {
  createCanvas(480, 120);
  background(204);
  wsl = new WsLib("127.0.0.1", 9999);
  // frameRate(20);


}
var t = 1;
function draw() {
  wsl.sendmsg("heeee");

  // if(frameCount > 60 && t == 1) {
    // wsl.sendmsg("hiiiiii");
    // console.log("go");
    // t = 0;
  // }
}