 $(document).ready(function(){
     $(".menu-item").hover(function() {
        $(this).stop().animate({ backgroundColor: "#D9D9D9", color: "#000000"}, 400);
     },function() {
        $(this).stop().animate({ backgroundColor: "#000000", color: "#D9D9D9" }, 400);
     });
});