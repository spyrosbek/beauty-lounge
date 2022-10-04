// JavaScript Document

	$(window).on('scroll', function() {

		"use strict";


		/*----------------------------------------------------*/
		/*	Navigtion Menu Scroll
		/*----------------------------------------------------*/

		var b = $(window).scrollTop();

		if( b > 80 ){
			$(".wsmainfull").addClass("scroll");
		} else {
			$(".wsmainfull").removeClass("scroll");
		}

	});


	$(document).ready(function() {

		"use strict";

		/* Preloader */
		var preloader = $('#loading'),
			loader = preloader.find('.spinner');
			loader.fadeOut();
			preloader.delay(400).fadeOut('slow');

		new WOW().init();


		/*----------------------------------------------------*/
		/*	Hero Slider
		/*----------------------------------------------------*/

		$('.slider').slider({
			full_width: false,
			interval:6000,
			transition:1000,
			draggable: false,
			indicators: true,
		});

		$('.slide-next').on('click', function(){
			$('.slider').slider('next');
		});

		$('.slide-prev').on('click', function(){
			$('.slider').slider('prev');
		});


		/*----------------------------------------------------*/
		/*	Hero Text Rotator
		/*----------------------------------------------------*/

		$('.hero-txt-rotator').flexslider({
			animation: "fade",
			controlNav: true,
			directionNav: false,
			slideshowSpeed: 6000,
			animationSpeed: 700,
			start: function(slider){
				$('body').removeClass('loading');
			}
		});


		/*----------------------------------------------------*/
		/*	ScrollUp
		/*----------------------------------------------------*/

		$.scrollUp = function (options) {

			// Defaults
			var defaults = {
				scrollName: 'scrollUp', // Element ID
				topDistance: 600, // Distance from top before showing element (px)
				topSpeed: 800, // Speed back to top (ms)
				animation: 'fade', // Fade, slide, none
				animationInSpeed: 200, // Animation in speed (ms)
				animationOutSpeed: 200, // Animation out speed (ms)
				scrollText: '', // Text for element
				scrollImg: false, // Set true to use image
				activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
			};

			var o = $.extend({}, defaults, options),
				scrollId = '#' + o.scrollName;

			// Create element
			$('<a/>', {
				id: o.scrollName,
				href: '#top',
				title: o.scrollText
			}).appendTo('body');

			// If not using an image display text
			if (!o.scrollImg) {
				$(scrollId).text(o.scrollText);
			}

			// Minium CSS to make the magic happen
			$(scrollId).css({'display':'none','position': 'fixed','z-index': '99999'});

			// Active point overlay
			if (o.activeOverlay) {
				$("body").append("<div id='"+ o.scrollName +"-active'></div>");
				$(scrollId+"-active").css({ 'position': 'absolute', 'top': o.topDistance+'px', 'width': '100%', 'border-top': '1px dotted '+o.activeOverlay, 'z-index': '99999' });
			}

			// Scroll function
			$(window).on('scroll', function(){
				switch (o.animation) {
					case "fade":
						$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).fadeIn(o.animationInSpeed) : $(scrollId).fadeOut(o.animationOutSpeed) );
						break;
					case "slide":
						$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).slideDown(o.animationInSpeed) : $(scrollId).slideUp(o.animationOutSpeed) );
						break;
					default:
						$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).show(0) : $(scrollId).hide(0) );
				}
			});

		};

		$.scrollUp();


		/*----------------------------------------------------*/
		/*	DateTimePicker
		/*----------------------------------------------------*/

	    $('#datetimepicker').datetimepicker();


	    /*----------------------------------------------------*/
		/*	Accordion
		/*----------------------------------------------------*/

		$(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();

		$(".accordion > .accordion-item").on('click', function() {
			$(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
			$(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
		});


		/*----------------------------------------------------*/
		/*	Video Background
		/*----------------------------------------------------*/

		$('.video-play').vide("./images/video/video", {
				posterType: "jpg"
		});


		/*----------------------------------------------------*/
		/*	Masonry Grid
		/*----------------------------------------------------*/

		$('.grid-loaded').imagesLoaded(function () {

	        // filter items on button click
	        $('.masonry-filter').on('click', 'button', function () {
	            var filterValue = $(this).attr('data-filter');
	            $grid.isotope({
	              filter: filterValue
	            });
	        });

	        // change is-checked class on buttons
	        $('.masonry-filter button').on('click', function () {
	            $('.masonry-filter button').removeClass('is-checked');
	            $(this).addClass('is-checked');
	            var selector = $(this).attr('data-filter');
	            $grid.isotope({
	              filter: selector
	            });
	            return false;
	        });

	        // init Isotope
	        var $grid = $('.masonry-wrap').isotope({
	            itemSelector: '.masonry-image',
	            percentPosition: true,
	            transitionDuration: '0.7s',
	            masonry: {
	              // use outer width of grid-sizer for columnWidth
	              columnWidth: '.masonry-image',
	            }
	        });

	    });


		/*----------------------------------------------------*/
		/*	Single Image Lightbox
		/*----------------------------------------------------*/

		$('.image-link').magnificPopup({
		  type: 'image'
		});


		/*----------------------------------------------------*/
		/*	Video Link #1 Lightbox
		/*----------------------------------------------------*/

		$('.video-popup1').magnificPopup({
		    type: 'iframe',
				iframe: {
					patterns: {
						youtube: {
							index: 'youtube.com',
							src: 'https://www.youtube.com/embed/SZEflIVnhH8'
								}
							}
						}
		});


		/*----------------------------------------------------*/
		/*	Video Link #2 Lightbox
		/*----------------------------------------------------*/

		$('.video-popup2').magnificPopup({
		    type: 'iframe',
				iframe: {
					patterns: {
						youtube: {
							index: 'youtube.com',
							src: 'https://www.youtube.com/embed/7e90gBu4pas'
								}
							}
						}
		});

		/* Video Link #3 Lightbox */
		$('.video-popup3').magnificPopup({
		    type: 'iframe',
				iframe: {
					patterns: {
						youtube: {
							index: 'youtube.com',
							src: 'https://www.youtube.com/embed/0gv7OC9L2s8'
								}
							}
						}
		});

		/* Reviews Rotator Flexslider */
		$('#reviews-2 .flexslider').flexslider({
			animation: "fade",
			controlNav: true,
			directionNav: false,
			slideshowSpeed: 5000,
			animationSpeed: 2000,
			start: function(slider){
				$('body').removeClass('loading');
			}
		});
	});
