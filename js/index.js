
$(document).ready(function() {
	
	var currentShowPageClass;
	
	var changeNavSelectedCssObject = {
		"background-color":"#4C74C4",
		"border":"1px solid #4C74C4"
	};
	
	var changeNavUnselectedCssObject = {
		"background-color": "#EFF0EB",
		"border": "1px solid white"
	};
	
	var listChangePageClass = [
		".page-home",
		".page-about-me",
		".page-profolio",
		".page-nyaNotifier",
		".page-changeDetector"
	];
	
	var listNyaNotifierNavigationClass = [
		".page-nyaNotifier-desc",
		".page-nyaNotifier-problem",
		".page-nyaNotifier-bugs"
	];
	
	$("#change-to-en").click(function() {
		$(".en").show();
		$(".tw").hide();
	});
	
	$("#change-to-tw").click(function() {
		$(".en").hide();
		$(".tw").show();
	});
	
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
		
		if (currentShowPageClass === changePage) {
			return;
		}
		
		// restore all navigation css
		$(".change-nav").css(changeNavUnselectedCssObject);
		$(".change-nav > p").css("color", "#4C74C4");
	
		// hide all page
		for (var i in listChangePageClass) {
			$(listChangePageClass[i]).hide();
		}
		
		$(changePage).show("slide");
		$(this).find("p").css("color", "white");
		$(this).css(changeNavSelectedCssObject);
		currentShowPageClass = changePage;
	});
	
	$(".change-nav").hover(
		function(){
			if (currentShowPageClass === $(this).attr("data")) return;
		
			$(this).css(changeNavSelectedCssObject);
			$(this).find("p").css("color", "white");
		},
		
		function(){
			if (currentShowPageClass === $(this).attr("data")) return;
		
			$(this).css(changeNavUnselectedCssObject);
			$(this).find("p").css("color", "#4C74C4");
		}
	);
	
	// when the navigation of nyaNotifier clicked
	$(".nyaNotifier-navigation").click(function(){
		// hide all page within nyaNotifier page
		for (var i in listNyaNotifierNavigationClass) {
			$(listNyaNotifierNavigationClass[i]).hide();
		}
		
		// show the page requested
		$($(this).attr("data")).show();
	});
	
	// hide all page
	for (var i in listChangePageClass) {
		$(listChangePageClass[i]).hide();
	}
	
	// hide all sub-page in nya-notifier page
	for (var i in listNyaNotifierNavigationClass) {
		$(listNyaNotifierNavigationClass[i]).hide();
	}
	
	// by default show english version
	$(".en").show();
	$(".tw").hide();
	
	// show home page
	$(".page-home").show();
	$("#menu > div:eq(0)").css(changeNavSelectedCssObject);
	$("#menu > div:eq(0) > p").css("color", "white");
	currentShowPageClass = ".page-home";
	$(".page-nyaNotifier-desc").show();

});