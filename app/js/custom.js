$(function() {
	$(".owl-carousel").owlCarousel({
		items: 4,
		margin: 30,
		loop: true,
		nav: true,
        responsive: {
            0: {
                items: 1
            },
            991: {
                items: 4

            },
            autoplay:true
        }
	});

    $('.reviews__review').hover(function() {
        $('.reviews__review:first-child').children('.reviews__athlet').removeClass('reviews__athlet_active');
        $(this).children('.reviews__athlet').toggleClass('reviews__athlet_active');
    });

    $('.models__tab').on('click', function() {
        $('.models__tab').removeClass('models__tab_active');

        $('.models__content').hide();
        var tabClass = $(this).attr('class').split(' ');
        tabClass = tabClass[tabClass.length - 1];
        $('.models__content.' + tabClass).fadeIn().css('display','flex');

        $(this).addClass('models__tab_active');
    });

    $('.models__color').on('click', function() {
        
        var colorClass = $(this).attr('class').split(' ');
        colorClass = colorClass[colorClass.length - 1];
        
        var changedImage = $(this).parent('.models__colors').parent('.models__right').parent('.models__content').children('.models__left').children('.models__image');
        var picName = changedImage.attr('src');    
        picName = picName.split('/');
        picName = picName[picName.length - 1];
        picName = picName.split('-');
        picName = picName[picName.length - 1];
        changedImage.attr('src', 'img/' + colorClass + '-' + picName);
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