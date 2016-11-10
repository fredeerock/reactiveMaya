commandPort -pre "myServer" -n  ":12345";


proc string returnPage(string $message){
  $head=("HTTP/1.0 200 OK\n"+
      "Content-length: "+size($message)+"\n"+
      "Content-type: text/html\n"+
      "\n");
  return $head+$message;
}

proc string toLinks(string $string[]){
  $return="";
  for ($item in $string)
    $return+="<a href=\""+$item+"\">"+$item+"</a><br\>\n";
  return $return;
}


proc string myServer(string $str){
  string $buffer[];
  $numTokens = `tokenize $str " " $buffer`;

  if ($buffer[0]=="GET"){
   if ($buffer[1]=="/"){
     return returnPage(
    "<!DOCTYPE HTML PUBLIC "+
    "\"-//W3C//DTD HTML 3.2 Final//EN\">\n"+
    "<HTML>\n"+
    "  <HEAD>\n"+
    "    <TITLE>Serving</TITLE>\n"+
    "  </HEAD>\n"+
    "  <BODY>\n"+
    "    <h1>Listing:</h1>\n"+
       toLinks(ls("-transforms"))+
    "  </BODY>\n"+
    "<HTML>\n");
   }else{
    $pth=substitute($buffer[1],"s/\//|/g");


    if (size(ls($pth))){
      return returnPage("<h1>"+$pth+"</h1><p>"+
           "<b>shape contained:</b> "+
           nodeType(listRelatives("-s",$pth))+
           "</p>\n");
     } else if (substring($pth,2,7)=="CREATE"){
       if (substring($pth,9,14)=="sphere")
          $name=`sphere -n (substring($pth,15,size($pth)+1))`;
          return returnPage("<h1>Created Sphere "
                  +$name[0]+"</h1>");
       }
   }
  }
  return "";
}
