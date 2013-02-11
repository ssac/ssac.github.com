
$(document).ready(function() {

	var currentShowPageClass;

	$('.switch-language').click(function(e) {
		lang = $(e.currentTarget).data('language')

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

		$('.main-wrapper').hide() // hide all page
		$(changePage).show("slide");
		currentShowPageClass = changePage;
	});

	// when the navigation of nyaNotifier clicked
	$(".nyaNotifier-navigation").click(function(){
		$('#nyaNotifier-content > div').hide() // hide all page within nyaNotifier page
		$($(this).attr("data")).show(); // show the page requested
	});

	$('.main-wrapper').hide() // hide all page
	currentShowPageClass = ".page-home";
	$(currentShowPageClass).show()

	$('#nyaNotifier-content > div').hide()
	$(".page-nyaNotifier-desc").show();

});