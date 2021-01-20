$(document).ready(function(){

	if(window.location.href.indexOf('index') > -1){
		$('.galeria').bxSlider({
		    mode: 'fade',
		    captions: true,
		    slideWidth: 1200,
		    pager: true
		});
	}
	
	
	//posts

	//formatear fecha: moment().format("MMM Do YYYY")
	if(window.location.href.indexOf('index') > -1){
		var posts = [
			{
				title: 'Prueba de título 1',
				date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' de ' + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper magna in sem dictum mattis. Donec semper feugiat nunc, vel suscipit est dignissim eget. Praesent vitae posuere libero, non aliquet arcu. Phasellus sit amet aliquet nisl. Aenean bibendum et justo a aliquet. Quisque quis ante luctus, tristique ligula euismod, rutrum urna. Maecenas laoreet ante vel magna lobortis volutpat. Aliquam erat volutpat.'
			},
			{
				title: 'Prueba de título 2',
				date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' de ' + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper magna in sem dictum mattis. Donec semper feugiat nunc, vel suscipit est dignissim eget. Praesent vitae posuere libero, non aliquet arcu. Phasellus sit amet aliquet nisl. Aenean bibendum et justo a aliquet. Quisque quis ante luctus, tristique ligula euismod, rutrum urna. Maecenas laoreet ante vel magna lobortis volutpat. Aliquam erat volutpat.'
			},
			{
				title: 'Prueba de título 3',
				date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' de ' + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper magna in sem dictum mattis. Donec semper feugiat nunc, vel suscipit est dignissim eget. Praesent vitae posuere libero, non aliquet arcu. Phasellus sit amet aliquet nisl. Aenean bibendum et justo a aliquet. Quisque quis ante luctus, tristique ligula euismod, rutrum urna. Maecenas laoreet ante vel magna lobortis volutpat. Aliquam erat volutpat.'
			},
			{
				title: 'Prueba de título 4',
				date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' de ' + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper magna in sem dictum mattis. Donec semper feugiat nunc, vel suscipit est dignissim eget. Praesent vitae posuere libero, non aliquet arcu. Phasellus sit amet aliquet nisl. Aenean bibendum et justo a aliquet. Quisque quis ante luctus, tristique ligula euismod, rutrum urna. Maecenas laoreet ante vel magna lobortis volutpat. Aliquam erat volutpat.'
			},
			{
				title: 'Prueba de título 5',
				date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' de ' + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper magna in sem dictum mattis. Donec semper feugiat nunc, vel suscipit est dignissim eget. Praesent vitae posuere libero, non aliquet arcu. Phasellus sit amet aliquet nisl. Aenean bibendum et justo a aliquet. Quisque quis ante luctus, tristique ligula euismod, rutrum urna. Maecenas laoreet ante vel magna lobortis volutpat. Aliquam erat volutpat.'
			},
		];

		posts.forEach((item, index) => {
			var post = `
				<article class="post">
					<h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p>
						${item.content}
					</p>
					<a href="#" class="button-more">Leer más</a>
				</article>
			`;

			$('#posts').append(post);		
		});
	}

	//Selector de Theme
	var theme = $("#theme");

	$("#to-green").click(function(){
		theme.attr("href", "css/green.css");
	});

	$("#to-red").click(function(){
		theme.attr("href", "css/red.css");
	});

	$("#to-blue").click(function(){
		theme.attr("href", "css/blue.css");
	});

	//scroll arriba de la Web

	$(".subir").click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 500);

		return false;	
	});

	//login falso

	$("#login form").submit(function(){
		var form_name = $("#form_name").val();

		localStorage.setItem("form_name", form_name);
	});

	var form_name = localStorage.getItem("form_name");

	if(form_name != null || form_name != undefined){
		var about_parrafo = $("#about p");

		about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong>");
		about_parrafo.append("<a href='#' id='logout'>Cerrar Sesión</a>");

		$("#login").hide();

		$("#logout").click(function(){
			localStorage.clear();
			location.reload();
		});
	}

		//ACORDEON
	if(window.location.href.indexOf('about') > -1){
		$("#acordeon").accordion();

	}

	//RELOJ
	if(window.location.href.indexOf('reloj') > -1){
		
		setInterval(function(){
			var reloj = moment().format("h:mm:ss");
			$("#reloj").html(reloj);
		},1000);
	}

	//VALIDACION
	if(window.location.href.indexOf('contact') > -1){
		
		$("form input[name='date']").datepicker({
			dateFormat: 'dd-mm-yy'
		});

		$.validate({
			lang: 'es',
			errorMessagePosition: 'top',
			scrollToTopOnError: true
			
		});
	}

		
});

