function Chinampayolo(){
  this.name = 'Chinampayolo';
  this.main_menu = new Pushbar({	blur: true,	overlay: true, });;
  this.init_slider();
}

Chinampayolo.prototype.init_slider = function () {
  $('#main_slider .flexslider').flexslider({
    animation: "slide",
    start: function(){
			var h = $('#main_slider .flex-viewport').height();
			$('#main_slider .flex-viewport li').height(h);
		}
  });
  $(window).on('resize',function(){
    var h = $('#main_slider .flex-viewport').height();
    $('#main_slider .flex-viewport li').height(h);
  });
};
