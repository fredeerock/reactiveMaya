function setup() {
  createCanvas(320, 240);
  sl = new SockLib("127.0.0.1", 9999);
  sl.sendmsg("sphere -n \"new_sphere\";");
}

function draw() {
  background(200);
  ellipse(mouseX, mouseY, 50);
}

function mouseMoved() {
  var x = (mouseX-width/2) *0.1;
  var y = (mouseY-height/2)*0.1;

  sl.sendmsg("move -a -os -wd "+x+" "+y+" 0 \"new_sphere\";");
}
