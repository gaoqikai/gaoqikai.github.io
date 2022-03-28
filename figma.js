console.log('taking note of clicks');

var supportsPassive = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function() {
      supportsPassive = true;
    }
  });
  window.addEventListener("testPassive", null, opts);
  window.removeEventListener("testPassive", null, opts);
} catch (e) {};

// Use our detect's results. passive applied if supported, capture will be false either way.
elem.addEventListener('touchstart', fn, supportsPassive ? { passive: true } : false); 

var figmaframe = document.getElementById("figmaUI");

var clickCount = 0;

//figmaframe.addEventListener

figmaframe.addEventListener("onclick", function(ev){
  clickCount ++;
  console.log('the number of clicks made is' + clickCount
              }, 
                           Modernizr.passiveeventlisteners ? {passive: true} : false);


