$(document).ready(function(){
    //Write all your jQuery code here
        $("button").click(function() {
      $("#like").html("You like this project!");
    });
    
    
    
    
});
$("#submit-name").click(function() {
$("p").append( $("#name").val() );
});

$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });
});
$(selector).animate({params},speed,callback);


