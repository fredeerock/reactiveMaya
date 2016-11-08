// Processing - Transparency Change

import processing.net.*;

Client client;

void setup() {
  // mel code: commandPort -n "localhost: 12345";
  client = new Client(this, "127.0.0.1", 12345);
  client.write("sphere -n \"new_sphere\";\n");
}

void draw() {
}

void mouseMoved () {


  float x = (mouseX-width/2) *0.1;
  float y = (mouseY-height/2)*0.1;

  if (x > 0.5) {
    client.write("setAttr \"lambert1.transparency\" -type double3 0 0 0 ;");
  } else {
    client.write("setAttr \"lambert1.transparency\" -type double3 1 1 1 ;");
  }


  println(x+" "+y);
}
