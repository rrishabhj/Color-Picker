
  var red=0,green=0,blue=0;
  var redHex="00",greenHex="00", blueHex="00";
  function showVal(value, type){


    switch (type) {
      case 0:
          document.getElementById("red-content").innerHTML="RED : "+value;
          red=value;
          redHex = (parseInt(value)).toString(16);
          if (value==0) {
            document.getElementById("red-bg").style.background= "red";
          }else{
            document.getElementById("red-bg").style.background= " rgba("+value+",0,0,1)";
          }
          break;
      case 1:
          document.getElementById("green-content").innerHTML="GREEN : "+value;
          green=value;
          greenHex = (parseInt(value)).toString(16);
          if(value==0){
            document.getElementById("green-bg").style.background= " green";
          }else{
            document.getElementById("green-bg").style.background= " rgba(0,"+value+",0,1)";
          }
          break;
      case 2:
          document.getElementById("blue-content").innerHTML="BLUE : "+value;
          blue=value;
          blueHex = (parseInt(value)).toString(16);
          if(value==0){
            document.getElementById("blue-bg").style.background= " blue";
          }else{
            document.getElementById("blue-bg").style.background= " rgba(0,0,"+value+",1)";
          }
          break;
      default: alert("Only god know why this showed!")
    }

    document.body.style.background=" rgba("+red+","+green+","+blue+",1)";
    document.getElementById("bubble-content").innerHTML="#"+redHex+greenHex+blueHex;
  }
