$(function() {
	$(".owl-carousel").owlCarousel({
		items: 4,
		margin: 30,
		loop: true,
		nav: true
	});

	
});

function getName (str) {
    if(str.lastIndexOf('\\')) {
        var i = str.lastIndexOf('\\')+1;
    }
    else {
        var i = str.lastIndexOf('/')+1;
    }						
    var filename = str.slice(i);			
    var uploaded = document.getElementById("feedback__attachedfilename");
    uploaded.innerHTML = filename;
}