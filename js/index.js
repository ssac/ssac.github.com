
$(document).ready(function() {

	var currentShowPageClass;

	function switchPage(pageClass, isSlide){
		$('.page-home, .page-about-me, .page-profolio, .page-nyaNotifier, .page-changeDetector').hide()

		if(pageClass){
			if(isSlide){
				$(pageclass).show('slide');
			}
			else{
				$(pageClass).show();
			}

			currentShowPageClass = pageClass;
		}
	}

	$('.switch-language').click(function(e) {
		lang = $(this).attr('data')

		if(lang == 'en') {
			rootClass = 'root-en';
		}
		else if (lang == 'tw') {
			rootClass = 'root-tw';
		}

		$('body').removeClass('root-en root-tw').addClass(rootClass);
	})

	$(".accordion-mouseover").accordion({
		event: "mouseover",
		autoHeight: false
	});

	$(".cover-control").hover(
		function(e) {
			var selector = $(this).attr("data");
			$(selector).show();
		},
		function(e) {
			var selector = $(this).attr("data");
			$(selector).hide();
		}
	);

	// when the navigation of main page mouse-enter
	$(".change-nav").click(function() {
		var changePage = $(this).attr("data");
		if(currentShowPageClass == changePage) return;

		$('.change-nav').removeClass('selected');
		$(this).addClass('selected');

		switchPage(changePage);
	});

	// when the navigation of nyaNotifier clicked
	$(".nyaNotifier-navigation").click(function(){
		$('#nyaNotifier-content > div').hide() // hide all page within nyaNotifier page
		$($(this).attr("data")).show(); // show the page requested
	});

	switchPage('.page-home');

	$('#nyaNotifier-content > div').hide()
	$(".page-nyaNotifier-desc").show();

});