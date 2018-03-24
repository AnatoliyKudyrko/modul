$(".sq").mouseenter(function(){
$(".circle").css({"display":"block"});
$(".circle").animate({
        left: "0",
      }, 1500 );
  });
 $(".romb").mouseenter(function(){
	 $(".romb").css({"animation": "romb-rotate  3s infinite ease-in-out"});
 
  });