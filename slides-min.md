# Slide 1

![CC Logo](test.png?raw=true "The Logo")

This is the start

# 

## Slide 1.5

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
 
console.log('script loaded...');
 
var sections = [], slideCount, slideIndex, isKeyup;
isKeyup = false;

function getAttr(value) { 
  if (value) {
    //console.log(value);
    //var us = String.fromCharCode(95);
    var ret = value;
    ret = ret.replace(" ", "+");
    ret = encodeURI(ret);
    //ret = ret.replace(/[^A-Za-z0-9_-]/gi, us);

    return ret; 
  }
}
 

$(document).ready( function() {

window.onhashchange = function() {
    // do stuff
  hash = window.location.hash;
  if (!hash) {
    iSlide = 1
  } else {
    iSlide = hash.substr(1);
  }
  $(".section").hide();
  $("#slide_" + iSlide).show();
  slideIndex = iSlide;
  console.log("hash trigger change: " + slideIndex)
}

console.log("ready...");
var exists = $(".section");

if (exists.length === 0) {

  console.log("doing...");

  console.log("window hash: " + window.location.hash);

  var aBlock,
    a,
    hash,
    h1length,
    parentBlock,
    nextBlock,
    winHeight,
    iSlide,
    prevVisible = "hidden",
    nextVisible = "visible";  



//keypress
  $(document).keyup(function(e) {
    var left, up, right, down, slideId;
    if (!isKeyup) {
      console.log("in keyup");
      isKeyup = true;
      left = 37;
      up = 38;
      right = 39
      down = 40;
      space = 32;
      esc = 27;
      console.log(e.keyCode);
      if (e.keyCode === right || e.keyCode === space) {
        if (slideIndex < slideCount) {
          slideIndex = slideIndex -1 + 2;
          slideId = "slide_" + slideIndex;
          //console.log("slideId = " + slideId);
          $(".section").hide();
          $("#" + slideId).show();
          console.log("right press: " + slideId);
        }
      }
      if (e.keyCode === left) {
        if (slideIndex > 1) {
          slideIndex = slideIndex - 1;
          slideId = "slide_" + slideIndex;
          //console.log("slideId = " + slideId);
          $(".section").hide();
          $("#" + slideId).show();
          console.log("left press: " + slideId);
        }
      }
      if (e.keyCode === up) {
        slideIndex = 1;
        slideId = "slide_" + slideIndex;
        //console.log("slideId = " + slideId);
        $(".section").hide();
        $("#" + slideId).show();
        console.log("up press: " + slideId);
      }
      if (e.keyCode === down) {
        slideIndex = slideCount;
        slideId = "slide_" + slideIndex;
        //console.log("slideId = " + slideId);
        $(".section").hide();
        $("#" + slideId).show();
        console.log("down press: " + slideId);
      }

      isKeyup = false;
    } else {
      console.log("skipping keyup");
    }
  });


  // Make sections
  iSlide = 1;
  slideCount = $( "h1" ).length;
  $( "h1" ).each(function( index ) {
    var currentSlide,
      safeName,
      slideName;
    safeName = getAttr($(this).html());
    slideName = 'slide_' + iSlide;
    aBlock = $(this).nextUntil("h1").add(this);
    sections.push(safeName); 
    //safeName = $(this).html();
    //aBlock.wrapAll("<div id='" + safeName + "' class='section' style='height: " + sectionHeight +"px;' />");
    aBlock.wrapAll("<div id='" + slideName + "' class='section' />");
    currentSlide = $("#" + slideName);
    //currentSlide.prepend("<a name='" + safeName + "'></a>");
    //currentSlide.prepend("<a name='" + iSlide + "'></a>");
    if (iSlide === slideCount) {
       nextVisible = "hidden";
    }
    if(iSlide > 1) {
      prevVisible = "visible";
    }
    currentSlide.prepend(" <a name='" + safeName + "' href='#" + (iSlide+1) + "' style='visibility:" + nextVisible + ";'>Next</a>");
    currentSlide.prepend("<a name='" + iSlide + "' href='#" + (iSlide-1) + "' style='visibility:" + prevVisible + ";'>Prev</a> ");

    //aBlock.prepend("<a name='" + safeName + "'></a>"); 
    iSlide = iSlide + 1;
  });

  // Hide all sections
  $('.section').hide();


  hash = window.location.hash;
  if (!hash) {
    iSlide = 1
  } else {
    iSlide = hash.substr(1);
  }
  $("#slide_" + iSlide).show();
  slideIndex = iSlide;
  console.log("slide index = " + slideIndex);
  //show first
  //$(".section:first").show();

  //Wire up links
  a = $( "a" );
  a.each(function (index) { 
 
    nextBlockName = getAttr($(this).attr("href"));

    // console.log("encoded: " + nextBlockName);
    // $(this).attr("href", nextBlockName);
    // console.log("blockname = " + nextBlockName); 
     
    $(this).on("click", function(nextBlockName) {
      return function(e) {
        e.preventDefault();
        //console.log('clicked ' + nextBlockName);
        var iSlide = nextBlockName.substr(1);
        var slideId = "slide_" + iSlide;
        //console.log("slideId = " + slideId);
        $(".section").hide();
        $("#" + slideId).show();
        slideIndex = iSlide;
        //var nextBlock = $("#" + nextBlockName);
        //console.log(nextBlock);
        // if (nextBlock) {
        //   //console.log('hide');
        //   $(".section").hide();
        //   //nextBlock.show();  
        // } else {
        //   alert("No section called " + nextBlockName + " exists.");
        // }
      };
    }(nextBlockName));
    
  });

  
};

});

</script>
