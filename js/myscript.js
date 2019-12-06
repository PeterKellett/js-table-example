$(document).ready(function() {
    $("tr:odd").addClass("odd");
    $("tr:even").addClass("even");
    
    $("th").click(function(){
     	$("tr").children().removeClass("selection");
     	$("tr").children().addClass("white");
    	$(this).siblings().addClass("selection");
    	$(this).siblings().removeClass("white");
    });
});