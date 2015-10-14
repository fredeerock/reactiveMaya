//reactiveMaya - mouse

import processing.net.*;

Client client;

void setup(){
  // mel code: commandPort -n "localhost: 12344";
  client = new Client(this, "127.0.0.1", 12344);
  client.write("sphere -n \"new_sphere\";\n");
}

void draw(){
}

void mouseMoved (){
  float x = (mouseX-width/2) *0.1;
  float y = (mouseY-height/2)*0.1;
  client.write("move -a -os -wd "+x+" "+y+" 0 \"new_sphere\";\n");
  println(x+" "+y);
}
