function setup() {
  createCanvas(320, 240);
  background(200);
  ellipse(width/2, height/2, 50);

  wsl = new WsLib("127.0.0.1", 9999);
  wsl.sendmsg("sphere");

}
