(function ($, root, undefined) {

	$(function () {

		'use strict';

		$('section .box_content').matchHeight();

		console.log('scripts working !');


				var $navigation_menu = $('#navigation_menu');
				var $menu_button = $('#menu_button');

				$menu_button.on('click', function(){

					$navigation_menu.toggleClass('menu_visible');

				});

				// if press escape key, hide menu
				$(document).on('keydown', function(e){

					if(e.keyCode == 27 ){
						$navigation_menu.removeClass('menu_visible');

				 		$('.search_box').removeClass('visible');
					}

				})


				//News slider
				$("#news_slider").slick({

            // normal options...
            infinite: true,
             autoplay: true,
             dots: false,
             slidesToShow: 3,

            // the magic
            responsive: [{

                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }

            }, {

                breakpoint: 568,
                settings: {
                    slidesToShow: 1
                }

            }]
        });


				$('.news_box_content').matchHeight();

				// accordions
				var $single_accordions = $('.single_accordion');
				$('.accordion_title', $single_accordions).on('click', function(e){
				var $this = $(this);
				var $parent = $this.parent();
				var $is_open = $parent.hasClass('active_accordion');
				$single_accordions.removeClass('active_accordion');
				if ($is_open == false) {
						$parent.addClass('active_accordion');
				}


				});

	});

	// MAP
					if (typeof map_location != 'undefined') {

							var map_theme = [{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#C5E3BF"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#D1D1B8"}]},{"featureType":"water","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#C6E2FF"}]}];

							var map_options = {
									zoom: 15,
									mapTypeControl: true,
									scrollwheel: false,
									draggable: true,
									navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
									mapTypeId: google.maps.MapTypeId.ROADMAP,
									styles: map_theme
							};


							var location_map_container = $('#map_container');
							location_map_container.css({
									width : '100%'
							})

							var location_map = new google.maps.Map(location_map_container.get(0), map_options);
							var latlng = new google.maps.LatLng(  map_location.lat, map_location.lng   );
							var infowindow = new google.maps.InfoWindow({content: ''});
							var marker = new google.maps.Marker({
									position: latlng,
									map: location_map,
									optimized: false
							});

							marker.addListener('click', function(){
									infowindow.setContent( map_location.title );
									infowindow.open(location_map, this);
							})

							location_map.setCenter( latlng );



					};
					// END OF MAP


})(jQuery, this);