/* ###### init skrol to point  ######*/
/* ###### bower i page-scroll-to-id  ######*/


$(document).ready(function(){
      $("a[rel='m_PageScroll2id']").mPageScroll2id({
		    offset:50,
		    highlightClass:"activ-nav"
		});
 
	/* ###### For only ies  ######*/
	//if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)){
	//	//code
	//}

	//message for old IE
	function isIE () {
	  var myNav = navigator.userAgent.toLowerCase();
	  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
	}

	if (isIE() < 10 &&  isIE()) {
		$('body').empty();
		$('body').prepend('<div class="old-browser"><div class="old-browser-text"> Браузер не поддерживается =(</div></div>');
	}

	 
	
	/* ###### For SlideToggle Elements  ######*/
	var hideToggle = function(targetClick,toggleEl) {
		$(targetClick).click(function(event){
				event.stopPropagation();
				$(toggleEl).slideToggle("fast");
		});
		$(document).on("click", function () {
				$(toggleEl).hide();
		});
	}

 if ($(window).width() < 768) {
				hideToggle('.nav__toggle','.menu');
}
	

$('.validate-form').each(function() {   
		var curentForm = $(this);
    $(this).validate({        
		    	rules:{ //правила для полей 
						name:{
							required:true,
						},
						phone:{
							required:true,
							minlength:5,
							number:true
						},
						comment:{
							required:true,
							minlength:5,
						},
					},
					messages:{
						name:{
							required: 'Обязательное поле',
						},
						phone:{
							required: 'Обязательное поле',
							number:'Введите правильный номер',
							minlength:'Номер должен быть длиннее',
						},
						comment:{
							required: 'Обязательное поле',
							minlength:'Сообщение должно быть длиннее',
						},
					},
					submitHandler : function(form){ 
						$.ajax({ //отправка ajax
						            type: "POST",
						            url: "sender.php",
						            data: $(form).serialize(),
						            timeout: 3000,
						          });
							$('.modal-close').click(); // автозакрытие окна
							setTimeout(function(){
										$('.modal-true').bPopup({
											closeClass:'modal-close',
												position:['auto','auto'], // position center
												follow: [true,true],
												autoClose: 2000
										}); 
										$(':input','.validate-form') 
										  .not(':button, :submit, :reset, :hidden')
										  .val('')
										  .removeAttr('checked')
										  .removeAttr('selected')
							},1000)
							
				}
		    });
		});

	//for init SVG
	svg4everybody();
	
})

//cash SVG

;( function( window, document )
{
	'use strict';

	var file  = 'img/pack.html',
		revision = 1;

	if( !document.createElementNS || !document.createElementNS( 'http://www.w3.org/2000/svg', 'svg' ).createSVGRect )
		return true;

	var isLocalStorage = 'localStorage' in window && window[ 'localStorage' ] !== null,
		request,
		data,
		insertIT = function()
		{
			document.body.insertAdjacentHTML( 'afterbegin', data );
		},
		insert = function()
		{
			if( document.body ) insertIT();
			else document.addEventListener( 'DOMContentLoaded', insertIT );
		};

	if( isLocalStorage && localStorage.getItem( 'inlineSVGrev' ) == revision )
	{
		data = localStorage.getItem( 'inlineSVGdata' );
		if( data )
		{
			insert();
			return true;
		}
	}

	try
	{
		request = new XMLHttpRequest();
		request.open( 'GET', file, true );
		request.onload = function()
		{
			if( request.status >= 200 && request.status < 400 )
			{
				data = request.responseText;
				insert();
				if( isLocalStorage )
				{
					localStorage.setItem( 'inlineSVGdata',  data );
					localStorage.setItem( 'inlineSVGrev',   revision );
				}
			}
		}
		request.send();
	}
	catch( e ){}

}( window, document ) );