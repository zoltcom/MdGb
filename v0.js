
$(document).ready( function() {

console.log('loaded');

var aBlock,
  a,
  parentBlock,
  nextBlock

// Make sections
$( "h1" ).each(function( index ) {
  aBlock = $(this).nextUntil("h1").add(this);
  aBlock.wrapAll("<div id='" + $(this).html() + "' class='section' />");
});

console.log('hide all');
// Hide all sections
$('.section').hide();
//show first
console.log('show ' + $(".section:first").attr("id"));
$(".section:first").show();

// Wire up links
a = $( "a" );
a.each(function (index) {
  //parentBlock = ?
  //parentBlock.hide();
  nextBlockName = $(this).attr("href");
  //console.log("blockname = " + nextBlockName); 
   
  $(this).on("click", function(nextBlockName) {
    return function(e) {
      e.preventDefault();
      console.log('clicked ' + nextBlockName);
      var nextBlock = $("#" + nextBlockName);
      console.log(nextBlock);
      if (nextBlock) {
        $(".section").hide();
        $("#" + nextBlockName).show();
      } else {
        alert("No section called " + nextBlockName + " exists.");
      }
    };
  }(nextBlockName));
  
});

});
