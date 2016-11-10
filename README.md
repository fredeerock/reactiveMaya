# reactiveMaya
A helpful little procedure for getting Processing and Maya talking to each other. Java and JavaScript instructions below.

## Java

### Getting Started:
1. Download Processing from http://processing.org
2. In Maya enter the following in the MEL command bar at the bottom of the screen:
```
commandPort -n "localhost:4000";
```
3. In your Processing sketch insert the following lines of code:

  Before the setup function:
  ```
    import processing.net.*;
    Client client;
  ```
  Inside the setup function
  ```
    client = new Client(this, "127.0.0.1", 4000);
  ```
  Then finally do something like the below code in your sketch putting what's in quotes the Maya command you want executed.
  ```
    client.write("CreatePolygonSphere;\n");
  ```

### Java Example:
```
import processing.net.*;

Client client;

void setup(){
  // mel code: commandPort -n "localhost: 4000";
  client = new Client(this, "127.0.0.1", 4000);
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
## Javascript
1. Download and Install Node.js from <https://nodejs.org>
1. 2. In Maya enter the following in the MEL command bar at the bottom of the screen:
```
commandPort -n "localhost:4000";
```
1. Download this repo
1. Open Terminal and `cd` into the JavaScript directory
1. Then enter `node wsserver/ws.js`
1. In the same folder enter `python -m SimpleHTTPServer`
1. Open a browser and click on either the "mouse" or "colorTracking" example
