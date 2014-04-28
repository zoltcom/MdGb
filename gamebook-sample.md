<!-- Paste contents into any Markdown engine that supports jQuery, such as dillinger.io -->

# Start 

User signs up for program.

Which kit?

* [Kit 1](Kit1)
* [Kit 2](Kit2)

# Kit1 

Kit 1 includes 3% rebate.

Continue ?

* [Yes](Select-Scanner)
* [No](Start)

# Kit2 

Kit 2 includes 5% rebate.

Continue ?

* [Yes](Select-Scanner)
* [No](Start)

# Select-Scanner 

Which scanning device?

* [Brother MFP](Brother-MFP)
* [Android Tablet](Android-Tablet)
* [No scanner](No-scanner)

# Brother-MFP

Ok.

* [Finish](Finish)

# Android-Tablet

Sorry, not available at this time.

* [Select again](Select-Scanner)

# No-scanner 

Ok. No scanner. 

* [Finish](Finish)

# Finish 

Thank you for signing up.


[x]




<script>

$(document).ready( function() {


var aBlock,
  a,
  parentBlock,
  nextBlock

// Make sections
$( "h1" ).each(function( index ) {
  aBlock = $(this).nextUntil("h1").add(this);
  aBlock.wrapAll("<div id='" + $(this).html() + "' class='section' />");
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

</script>

