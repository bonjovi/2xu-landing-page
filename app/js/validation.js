$(document).ready(function() {
	$(".feedback__submit").click(function(e){
		$('.feedback__result').remove();

		e.preventDefault();

		var form = $(this).parent('.feedback__row').parent('.feedback__form');
		var formId = form.attr('id');

		var nameLngth = $('#' + formId + ' .feedback__name, ' + '#' + formId + ' .feedback__phone, '+ '#' + formId + ' .feedback__email, ' + '#' + formId + ' textarea');
		
		var patternEmail = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
		
		$.each(nameLngth, function(index, element){
			
			if(element.value.length <= 1) {
				$(this).addClass('notValid');
			} else {
				$(this).removeClass('notValid');
			}
			
			if($(this).hasClass(".feedback__email")) {
				if(patternEmail.test($(this).val())){
					$(this).removeClass('notValid');
				} else {
					$(this).addClass('notValid');
				}	
			}
			
    	});
		
		if(!$(nameLngth).hasClass("notValid")) {
			
			jQuery.ajax({
					url:     "server.php", 
					type:     "POST", 
					dataType: "html", 
					data: jQuery(form).serialize(),
					success: function(response) {
					$('<div class="feedback__result"></div>').insertAfter(form).text(response);
					
				},
				error: function(response) { 
					$('<div class="feedback__result"></div>').insertAfter(form).text('Отправка сообщения не удалась. Попробуйте написать на email ok@2xu-russia.ru Оксане Корнеевой');
				}
			});

		}

	});
});          