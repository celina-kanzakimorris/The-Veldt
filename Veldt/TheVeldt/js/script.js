

function loadApp() {

    var flipbook = $('.flipbook');
    
    // Convert pages to sound numbers
    var pages = {
        1: 1,
        2: 2,
        3: 2,
        4: 3,
        5: 3,
     
    };

 	// Check if the CSS was already loaded
	
	if (flipbook.width()==0 || flipbook.height()==0) {
		setTimeout(loadApp, 10);
		return;
	}

	$('.flipbook .double').scissor();

	// Create the flipbook

	$('.flipbook').turn({
			// Elevation

			elevation: 50,
			
			// Enable gradients

			gradients: true,
			
			// Auto center this flipbook

			autoCenter: true

    });
    
    $('.flipbook').bind("turned", function(event, page, view) {
        var pagenumber = $('.flipbook').turn('page');
        var soundnumber = pages[pagenumber];
        var audio = document.getElementById('sound'+soundnumber);
        console.log(soundnumber);
        audio.play();
    })
}

// Load the HTML4 version if there's not CSS transform

yepnope({
	test : Modernizr.csstransforms,
	yep: ['../../lib/turn.min.js'],
	nope: ['../../lib/turn.html4.min.js'],
	both: ['../../lib/scissor.min.js', 'css/double-page.css'],
	complete: loadApp
});

function playMusic(){
    var music = document.getElementById("music");
    music.play()
}

function hover(element){
    element.setAttribute('src', "./pages/Logo-hover.png")
}

function unhover(element){
    element.setAttribute('src', "./pages/Logo.png")
}