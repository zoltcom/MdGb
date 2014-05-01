# Start 

![CC Logo](test.png?raw=true "The OneLink Logo")

User signs up for program.
 
Which kit?

* [Kit 1](Kit 1)
* [Kit 2](Kit 2)
 
# Kit 1 
 
Kit 1 includes 3% rebate.

Continue ?

* [Yes](Select: Scanner)
* [No](Start)
* [Back](-)
* [Next](+)
* [Back 2](--)
* [Next 2](++)
* [Back 4](----)
* [Next 4](++++)

# Kit 2 

Kit 2 includes 5% rebate.

Continue ?

* [Yes](Select: Scanner)
* [No](Start)

# Select: Scanner 

Which scanning device?

* [Brother MFP](Brother MFP :-&#41;)
* [Android Tablet](Android Tablet)
* [No scanner](--No Scanner!--)

# Android Tablet

OK, Android

* [Back](Select: Scanner)
* [Finish](Finish)

# Brother MFP :-&#41;

Now what

* [Back](Select: Scanner)
* [Finish](Finish)

# --No Scanner!--

* [Back](Select: Scanner)
Ok. No scanner. 


* [Finish](Finish)

# Finish 

Thank you for signing up.


[x]


<!--script type="text/javascript" language="JavaScript"--> 
<script> 

var sections = [],
  loaded;
 
console.log('loading... ' + loaded);
  
 
function getAttr(value) {
  var us = String.fromCharCode(95);
  var ret = value;
  ret = 'sec' + us + encodeURI(ret);
  ret = ret.replace(/[^A-Za-z0-9_-]/gi, us);
  
  return ret; 
}  
  
function translateShortcut(shortcut) {

  var m = 0;
  if (shortcut.match(/^\++$/g)) {
    m = shortcut.length;
  } else if (shortcut.match(/^\-+$/g)) {
    m = shortcut.length * -1;
  } 

  // if (m !== 0 ) {
  //   console.log(shortcut + " means move " + m);
  // } 

  //var iTo = sections.length + m + 1;
  //if (sections.length - m < 0)

  return m;

}
  

$(document).ready( function() {
console.log("document ready");
if (true) {
  console.log("starting because loaded = " + loaded + "; then will set loaded to a value.");

  var aBlock,
    a,
    parentBlock,
    nextBlock
  console.log('window height: ' + window.innerHeight)
  // Make sections
  $( "h1" ).each(function( index ) {
    aBlock = $(this).nextUntil("h1").add(this);
    var safeName;
    safeName = getAttr($(this).html());
    sections.push(safeName); 
    //safeName = $(this).html();
    aBlock.wrapAll("<div id='" + safeName + "' class='section' />");
  });

  // Hide all sections
  $('.section').hide();
  //show first
  $(".section:first").show();

  // Wire up links
  a = $( "a" );
  a.each(function (index) { 
    //parentBlock = ?
    //parentBlock.hide(); 

    nextBlockName = translateShortcut($(this).attr("href"));
    
    //if (!nextBlockName) {
      nextBlockName = getAttr($(this).attr("href"));
      //nextBlockName = $(this).attr("href");
    //}

    //console.log("encoded: " + nextBlockName);
    //$(this).attr("href", nextBlockName);
    //console.log("blockname = " + nextBlockName); 
     
    $(this).on("click", function(nextBlockName) {
      return function(e) {
        e.preventDefault();
        console.log('clicked ' + nextBlockName);
        var nextBlock = $("#" + nextBlockName);
        console.log(nextBlock);
        if (nextBlock) {
          console.log('hide');
          $(".section").hide();
          nextBlock.show();  
        } else {
          alert("No section called " + nextBlockName + " exists.");
        }
      };
    }(nextBlockName));
    
  });


} else {
  console.log("not starting because loaded = " + loaded );
  loaded = "skipped initial load"; 
}
  
});

</script>
