console.log('taking note of clicks');

var figmaframe = document.getElementById("figmaUI");

var clickCount = 0;

//figmaframe.addEventListener

figmaframe.addEventListener("onclick", function(ev){
  clickCount ++;
  console.log('the number of clicks made is' + clickCount
              }, 
                           Modernizr.passiveeventlisteners ? {passive: true} : false);


