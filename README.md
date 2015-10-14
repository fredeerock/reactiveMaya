# reactiveMaya

### Getting Started:
1. Download Processing from http://processing.org
2. In Maya enter the following in the MEL command bar at the bottom of the screen: 
```
commandPort -n "localhost:4444";
```
3. In your Processing sketch insert the following lines of code: 

  Before the setup function:
  ```
    import processing.net.*;
    Client client;
  ```
  Inside the setup function
  ```
    client = new Client(this, "127.0.0.1", 4444);
    client.write("sphere -n \"new_sphere\";\n"); //Put in  quotes the MEL command you want executed in Maya
  ```

### Example:
Processing code for simple mouse tracking sketch:
```
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
```

