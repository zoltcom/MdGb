# Slide 1

![CC Logo](test.png?raw=true "The Logo")

This is the start

# Slide 2

Say something

* List an item
* List another
* And another

# Slide 3

Say something

* List an item
* List another
* And another

# Slide 4

Say something

* List an item
* List another
* And another

# Slide 5

Say something

* List an item
* List another
* And another

# Slide 6

Say something

* List an item
* List another
* And another

# Finish 

Thank you for viewing.
[x]

<!--script type="text/javascript" language="JavaScript"--> 
<script> 
/*
# TODO
- keydown needs work in dillinger.io; try this version, works ok, need to refresh entire page if changing javascript! can't rely on auto-refresh.
- actually, editing anything in Dillinger will screw up keydown, it seems
- need mouse fallback in case keyboard flaky
 */


console.log('script load...');

var g_slideCount, g_slideIndex, g_slideNamePrefix, g_keyReady;
g_keyReady = true;
g_slideIndex = 0;
g_slideNamePrefix = 'slide_';
g_slideCount = $( "h1" ).length;

function gotoSlide(number) {
  var slideId;
  if (number) {
    if (number < 1) { 
      number = 1;
    } else if (number > g_slideCount) {
      number = g_slideCount;
    }
    if (number !== g_slideIndex) {
      slideId = g_slideNamePrefix + number;
      $(".section").hide();
      $("#" + slideId).show();
      g_slideIndex = number;
      //console.log('displayed slide ' + slideId);
    }
  }
  g_keyReady = true;
}

$(document).ready( function() {
  var iSlide;

  console.log("doc ready...");

  // don't run this twice (some MD engines will try)
  if ($(".section").length > 0) {
    return;
  }

  console.log("initializing...");

  // allow go to by using url hash
  window.onhashchange = function() {
    gotoSlide(window.location.hash.substr(1));
  }

  // wire up keypress
  $(document).keyup(function(e) {
    var i;
      //left = 37; up = 38; right = 39; down = 40; space = 32; esc = 27;
      console.log(e.keyCode);
      if (g_keyReady) {
        g_keyReady = false;
        switch(e.keyCode) {
          case 39:
          case 32:
            i = g_slideIndex + 1;
            break;
          case 37:
            i = g_slideIndex - 1;
            break;
          case 38:
            i = 1;
            break;
          case 40:
            i = g_slideCount;
            break;
        }
        gotoSlide(i);
      }
  });

  // Make sections
  iSlide = 1;
  $( "h1" ).each(function( index ) {
    var slideName, aBlock;
    slideName = g_slideNamePrefix + iSlide;
    aBlock = $(this).nextUntil("h1").add(this);
    aBlock.wrapAll("<div id='" + slideName + "' class='section' />");
    $("#" + slideName).prepend("<a name='" + iSlide + "' >");
    iSlide = iSlide + 1;
  });

  // Go to 1st or hash 
  gotoSlide(1);
  gotoSlide(window.location.hash.substr(1)); 


});


</script>
