$(document).ready(function(){
    //Write all your jQuery code here
        $("button").click(function() {
      $("#like").html("You like this project!");
    });
    
    
    
    
});
$("#submit-name").click(function() {
$("p").append( $("#name").val() );
});