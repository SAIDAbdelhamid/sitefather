$(function() {
  var words = [
    'economie',
    'instalation',
    'professionalisme'
  ],
  i = 0;


	$(".navbar-responsive").toggle();

	$(".menu").click(function(){
		$(".navbar-responsive").toggle("slow");
	});
		
  setInterval(function() {
    $("#word").fadeOut(function() {
      $(this).html(words[i = (i + 1) % words.length]).fadeIn();
    });
  }, 3500);



  // On gère le scroll vers les différentes sections du site
  $(".scroll").click(function() {
    var section = $("." + this.id);
    $("html,body").animate({scrollTop: section.offset().top}, 'slow');
  });











});