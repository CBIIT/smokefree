;(function($){
	$(function() {
		if($.support.leadingWhitespace == false){
			$('body').addClass('ie8');
		}

		var map = L.mapbox.map('mapbox', 'smokefreeteam.map-qbvjnll2',  { zoomControl: false })
		       .setView([38.225235, -98.613281], 5);

		map.locate({
			setView: true,
			maxZoom: 15
		});

		new L.Control.Zoom({ position: 'topright' }).addTo(map);

		// //ADD THE ABILITY TO SEARCH BY ZIP CODE
		map.addControl(L.mapbox.geocoderControl('smokefreeteam.map-qbvjnll2'));
		$('.leaflet-control-mapbox-geocoder').addClass('active');

		
		//THE FORM THAT IS DISPLAYED IN THE POPUP WHEN DROPPING A PIN
		var textareaDefault = 'Tell us about your story:(optional) (500 character maximum)';
		var nameDefault = '23 character max';
		var journeyForm =  '<div class="popup journey-form">' +
		                '<h4>What\'s Your Story?</h4>' +
		                '<p>Fill out the information below and mark it when you\'re finished to be part of the map</p>' +
		                '<form>' +
		                	'<div class="input-wrapper">' +
		                		'<label for="name-input">First Name</label>' +
		                		'<input id="name-input" type="text" name="name" value="' + nameDefault + '" />' +
		                		'<div class="clear"></div>' +
		                	'</div>' +
		                	'<div class="input-wrapper">' +
		                		'<label for="date-quit-input">Date you Quit</label>' +
		                		'<input id="date-quit-input" type="text" readonly="true" name="date_quite" class="datepicker"/>' +
		                		'<div class="clear"></div>' +
		                	'</div>' +
		                	'<label for="journey-input">Message</label>' +
		                	'<textarea id="journey-input">' + textareaDefault +'</textarea>' +
		                	'<div id="charNum"></div>' +
		                	'<div id="field-error"></div>' +
		                	'<span class="remove-pin">cancel</span>' +
		                	'<input class="mark-it" type="submit" value="Mark It!" />' +
		                	'<div class="clear"></div>' +
		                '</form>' +
		                '</div>';

		//CUSTOM ICON
		var myIcon = L.icon({
			'iconUrl': Drupal.settings.basePath + Drupal.settings.pathPrefix + 'sites/all/modules/mmg_quitmap/img/pin.png',
			'iconSize': [36,85],
			'iconAnchor': [12, 50],
			'popupAnchor': [0, -25]
		});

		var myIconBlue = L.icon({
			'iconUrl': Drupal.settings.basePath + Drupal.settings.pathPrefix + 'sites/all/modules/mmg_quitmap/img/pin-blue.png',
			'iconSize': [36,85],
			'iconAnchor': [12, 50],
			'popupAnchor': [0, -25]
		});


		//PULL PINS FROM DB
		//TO DO :: MAKE SURE THAT THIS IS FINISHED FIRING BEFORE DO OTHER CALLS
		ajaxPullPins($, map, myIcon);

		$('#pin-wrapper').click(function(){
			placeMarker(map, myIconBlue, journeyForm);
			minifyInstructions($);
		});	

		//Slide instructions back down
		$('#inst-handles').click(function(){			
			$('#map-instructions').css('box-shadow', 'none');	
			$('#inst-handles').css('display', 'none');
			$('#inst-minimize').css('display', 'block');
			$('#inst-content').css('display', 'block');
			setTimeout(function(){ //This is so that IE9 doesn't keep the box shadow
				$('#map-instructions').css('box-shadow', '2px 2px 10px #000');	
			}, 5);
		});

		$('#inst-minimize p').click(function(){
			$('#inst-minimize').hide();
			minifyInstructions($);
		});

		//PLACE PIN ON THE MAP
		map.on('click', function(e){
			//REMOVE DATEPICKER OFF FOCUS
			$('#ui-datepicker-div').hide();
		});


		//HANDLES ALL JQUERY HAPPENING INSIDE OF A POPUP
		map.on('popupopen', function(e) {
			var latitude = e.popup._latlng.lat;
			var longitude = e.popup._latlng.lng;

			map.panTo(new L.LatLng(latitude, longitude));

			//REMOVE POPUP AND PIN
			$('.remove-pin').click(function(){
				map.closePopup();
			});

		    //HIDE SUMMARY AND SHOW FULL STORY
		    $('.show-journey').click(function(){
		    	$(this).parents('.summary-journey').css('display', 'none');
		    	$(this).parents('.summary-journey').siblings('.full-journey').css('display', 'block');
				
				// Event tracking
				if( typeof ga !== 'undefined' ) { 
					if (ga) {
						try {
							ga('send', {
							  'hitType': 'event',
							  'eventCategory': 'journey_map',
							  'eventAction': 'view'
							});
						}
						catch(err) { alert(err); }
					}
				}
				if( typeof _gaq !== 'undefined' ) { 
					if (_gaq) {
						try {
							_gaq.push(["_trackEvent", "journey_map", "view"]);
						}
						catch(err) {alert(err); }
					}
				}
		    });

		    mapHandlers($, map, latitude, longitude, e);

		});

		//TOGGLE VIEW
		$('#table-view').click(function(e){
			e.preventDefault();
			toggleView($, 'table-view');
			//$('#table-zip')[0].focus();
		});

		$('#map-view').click(function(e){
			e.preventDefault();
			toggleView($, 'map-view');
		});


		//ADMIN SECTION
		$('.delete-pin').click(function(){
			var pid = $(this).attr('id');
		});

		//Allow enter key to submit zip search
		$('#table-zip').keypress(function (e){
			if (e.which == 13) {
				e.preventDefault();
				getLatLngZip();
			}
		});

		//Allow enter key to submit pin
		$('#table-journey-form form').keypress(function (e){
			if (e.which == 13) {
				e.preventDefault();
				$('.mark-it').click();
			}
		});

	});
})(jQuery);


function placeMarker(map, myIconBlue, journeyForm) {
	var bounds = map.getBounds(),
		southWest = bounds.getSouthWest(),
		northEast = bounds.getNorthEast(),
		lngSpan = northEast.lng - southWest.lng,
		latSpan = northEast.lat - southWest.lat;

    var LatLng = new L.LatLng(southWest.lat + latSpan * .5, southWest.lng + lngSpan * .5);

    var marker = new L.Marker(LatLng, {
    		title: 'Pin',
        	icon: myIconBlue,
            draggable: true	
       });

    marker.bindPopup(journeyForm,{
    		        closeButton: true,
    		        maxWidth: 250,
    		        minWidth: 250,
    		        keepInView: true
    		    });

    marker.addTo(map);

    //marker.on('dragend', function(e){
    	marker.openPopup();
    //});
}

function populate(map, markers, pinList, myIcon) {
	for(x in pinList){
		var marker = new L.marker(getLatLng(map, pinList[x]), {
			title: 'Pin',
			icon: myIcon
		});

		var tmpdate = (parseInt(pinList[x].storyInfo.quitDay) * 1000);
		var date = new Date(tmpdate);


		var month = (date.getMonth() + 1);
		var day = date.getDate();
		var year = date.getFullYear();

		var month_adjust = month - 1;

		var oneDay = 24*60*60*1000, // hours*minutes*seconds*milliseconds
		endDateDict = {'year': year, 'month': month_adjust, 'day': day},
		rawDate = new Date(),
		currDate = new Date(rawDate.getFullYear(),rawDate.getMonth(),rawDate.getDate()),
		endDate = new Date(endDateDict.year,endDateDict.month,endDateDict.day);
		// endDate = new Date(Date.UTC(endDateDict.year,endDateDict.month,endDateDict.day));

		var diffDays = Math.round(Math.abs((currDate.getTime() - endDate.getTime())/(oneDay)));

		

		var journey = '<div class="popup journey">' +
								'<div class="summary-journey">' +
									'<h5>' + pinList[x].storyInfo.name + '</h5>' +
									'<p><span>' + diffDays + ' Days</span><span class="show-journey">Story</span></p>' +
								'</div>' +
								'<div class="full-journey">' +
									'<h4>' + pinList[x].storyInfo.name + '</h4>' +
									'<div class="col-left">' +
										'<h2><span class="number">' + diffDays + '</span><br />DAYS</h2>' +
										'<h6>' + month +'/' + day +'/' + year + '</h2>' +
									'</div>' +
									'<div class="col-right">' +
										'<p>' + pinList[x].storyInfo.journey + '</p>' +
									'</div>' +
									'<div class="clear"></div>' +
								'</div>' +
						'</div>';

		marker.bindPopup(journey,{
		        closeButton: true,
		        maxWidth: 310,
		        minWidth: 310,
		        keepInView: true
		    });
		markers.addLayer(marker);
	}
	return false;
}

function getLatLng(map, pinpoint){
	return new L.LatLng(
			pinpoint.geometry.coordinates[1],
			pinpoint.geometry.coordinates[0]);
}

function minifyInstructions($){
	$('#map-instructions').css('box-shadow', 'none');
	$('#inst-handles').css('display', 'block');
	$('#inst-minimize').css('display', 'none');
	$('#inst-content').css('display', 'none');
	setTimeout(function(){
		$('#map-instructions').css('box-shadow', '2px 2px 10px #000');	
	}, 5);
}

function mapHandlers($, map, latitude, longitude, popup){
		var textareaDefault = 'Tell us about your story:(optional) (500 character maximum)';
		var nameDefault = '23 character max';
	    //ADD DATEPICKER TO THE TEXTFIELD
	    $('.datepicker').datepicker({
    		changeYear: true,
		});

	    $('#close-share').click(function(e){
	    	$('.social-share-wrapper').hide();
	    });

	    //CLEAR OUT DEFAULT TEXT ON TEXTAREA
	    $('textarea').focus(function() {
	        if( $(this).val() == textareaDefault ) {
	            $(this).val("");
	        }

	    });

	    $('#name-input').focus(function() {
	        $(this).val('');
	    });

        //LIMIT THE AMOUNT OF CHARACTERS IN FIRST NAME
        $('#name-input').keypress(function (event) {
    		var max = 23;
    		var len = $(this).val().length;

    		if (event.which < 0x20) {
    		// e.which < 0x20, then it's not a printable character
    		// e.which === 0 - Not a character
    		return; // Do nothing
    		}

    		if (len >= max) {
    			event.preventDefault();
    		}

    	});

	    //LIMIT THE AMOUNT OF CHARACTERS IN THE TEXTAREA
	    $('#journey-input').keypress(function (event) {
			var max = 500;
			var len = $(this).val().length;

			if (event.which < 0x20) {
			// e.which < 0x20, then it's not a printable character
			// e.which === 0 - Not a character
			return; // Do nothing
			}

			if (len >= max) {
				event.preventDefault();
			}

		});

		$('#journey-input').keyup(function (event) {
			var max = 500;
			var len = $(this).val().length;
			var char = max - len;

			$('#charNum').text(char + ' characters left');

		});

		//Cancel Pin Marking
		$('#table-journey-form .remove-pin').click(function(){
			$('#table-journey-form').hide('fast', function(){
				$('#get-latlng').show();
			});
		});

		//SAVE PIN
		$('.mark-it').click(function(e){
		
			if( typeof ga !== 'undefined' ) { 
				if (ga) {
					try {
						ga('send', {
						  'hitType': 'event',
						  'eventCategory': 'journey_map',
						  'eventAction': 'drop'
						});
					}
					catch(err) { alert(err); }
				}
			}
			if( typeof _gaq !== 'undefined' ) { 
				if (_gaq) {
					try {
						_gaq.push(["_trackEvent", "journey_map", "drop"]);
					}
					catch(err) {alert(err); }
				}
			}
			
			
			//THIS IS CRAPPY CODE BECAUSE OF ALL THE REQUESTS THAT WERE ADDED ON AFTER IT WAS INITIALLY BUILT

			e.preventDefault();
			var name_input = $('#name-input').val();
			var date = '';
			var dateLength = '';
			if(!$('#mapbox-wrapper').is(':hidden')){
				date = new Date($('#date-quit-input').val());
				dateLength = ($('#date-quit-input').val().length) -1;
			} else {
				var rawtextDate = $('#date-quit-input-text').val();
				var textDate = [rawtextDate.slice(0, 2), '/', rawtextDate.slice(2)].join('');
				date = new Date([textDate.slice(0, 5), '/', textDate.slice(5)].join(''));
				dateLength = textDate.length;
			}
			
			var date_quit_input = date.getTime() / 1000,
			tmp_today = new Date(),
			today = tmp_today.getTime() / 1000,
			journey_input = $('#journey-input').val(),
			month = (date.getMonth() + 1),
			day = date.getDate(),
			year = date.getFullYear(),
			month_adjust = month - 1,
			oneDay = 24*60*60*1000, // hours*minutes*seconds*milliseconds
			endDateDict = {'year': year, 'month': month_adjust, 'day': day},
			rawDate = new Date(),
			currDate = new Date(rawDate.getFullYear(),rawDate.getMonth(),rawDate.getDate()),
			endDate = new Date(endDateDict.year,endDateDict.month,endDateDict.day),
			diffDays = Math.round(Math.abs((currDate.getTime() - endDate.getTime())/(oneDay)));


			if(journey_input == textareaDefault){
				journey_input = '';
			}

			var journey = '<div class="popup journey">' +
									'<div class="summary-journey">' +
										'<h5>' + name_input.substring(0, 23) + '</h5>' +
										'<p><span>' + diffDays + ' Days</span><span class="show-journey">Story</span></p>' +
									'</div>' +
									'<div class="full-journey">' +
										'<h4>' + name_input.substring(0, 23) + '</h4>' +
										'<div class="col-left">' +
											'<h2><span class="number">' + diffDays + '</span><br />DAYS</h2>' +
											'<h6>' + month +'/' + day +'/' + year + '</h2>' +
										'</div>' +
										'<div class="col-right">' +
											'<p>' + journey_input.substring(0, 500) + '</p>' +
										'</div>' +
										'<div class="clear"></div>' +
									'</div>' +
							'</div>';


			/* Check for errors */
			if ((name_input == '' || name_input == nameDefault) && (dateLength < 1)) {
				$('#field-error').text('Please fill in the name and date fields').show();
			}
			else if (name_input == '' || name_input == nameDefault) {
				$('#field-error').text('Please fill in the name field').show();
			}
			else if (dateLength < 1) {
				$('#field-error').text('Please fill in the date field').show();
			}
			else if(dateLength != 9) {
				$('#field-error').text('Please put in the correct date format').show();
			}
			else if(date_quit_input > today) {
				$('#field-error').text('Date cannot be after today').show();
			}
			
			/* If no errors... */
			else {
			
				/* Get zip code for marker */
				getZipCode($, latitude, longitude, name_input, date_quit_input, journey_input)
							
				/* If text-only view...  */
				if ($('.mark-it').hasClass('table-view')) {
					$('#table-journey-form').hide();
				}
				else {
					map.closePopup();
					popup.popup['_content'] = journey;
					popup.popup.options.maxWidth = 310;
					popup.popup.options.minWidth = 310;
				}
			} 
		});
}

function ajaxPullPins($, map, myIcon){
    var url = Drupal.settings.basePath + Drupal.settings.pathPrefix + 'journey/ajax/pull-pins';
    $.post(url, {}, function(data){
        if(typeof data != 'undefined' && data != null && typeof data.type != 'undefined' && data.type != null && data.type == 'success'){
            var pins = data.pinList,
            pinList = [];

            $('#table-pin-list').empty();
            $('#table-pin-list').append('<tr><th scope="col">Name</th><th scope="col">Zip Code</th><th scope="col">Date Quit</th><th scope="col">Story</th></tr>');


            for(x in pins){
				    var pin = {type: 'Feature',
				    "geometry": { 
				    	"type": "Point",
				    	"coordinates": [pins[x].longitude, pins[x].latitude]
				    },
				    "properties": {
				    	"title": pins[x].name,
				    	"icon": {
		    	            "iconUrl": "sites/all/modules/mmg_quitmap/img/pin.png",
		    	            'iconSize': [36,85],
		    	            'iconAnchor': [12, 50],
		    	            'popupAnchor': [0, -25]
		    	        }
				    },
				    "storyInfo": {
				    	"name": pins[x].name,
				    	"zip": pins[x].zip,
				    	"quitDay": pins[x].date_quit,
				    	"journey": pins[x].story
				    }
				}
            	pinList.push(pin);

      			//POPULATE TABLE VIEW
      			var tmpdate = (parseInt(pins[x].date_quit) * 1000);
      			var date = new Date(tmpdate);


      			var month = (date.getMonth() + 1);
      			var day = date.getDate();
      			var year = date.getFullYear();
            	$('#table-pin-list').append('<tr scope="row"><td class="m left">' + pins[x].name + '</td><td class="m left">' + pins[x].zip + '</td><td class="m center">' + month  + '/' + day + '/' + year + '</td><td class="l left">' + pins[x].story + '</td></tr>');
            }

            $('#loading-screen').fadeOut('fast', function(){
            	$('#map-instructions').fadeIn('fast');
            	//CLUSTER THE MILE POSTS
            	var markers = new L.MarkerClusterGroup();
            	populate(map, markers, pinList, myIcon);
            	map.addLayer(markers);
            });      
        } else {
        	$('#loading-screen').fadeOut('fast', function(){
        		$('#map-instructions').fadeIn('fast');        
        	});

        	$('#table-empty-results').text('There are currently 0 stories to read').show();
        	/*setTimeout(function(){
        		$('#table-empty-results').hide('slow');
        	}, 3000);*/

        	
        }
    }, 'json');
}

function ajaxSavePin($, latitude, longitude, name_input, date_quit_input, journey_input, zip){

	var safe_journey = encodeURIComponent(journey_input);
    var url = Drupal.settings.basePath + Drupal.settings.pathPrefix + 'journey/ajax/save-pin';

    var social = '<div class="social-share">' +
    	'<h4>Share Your Story <img id="close-share" src="' + Drupal.settings.basePath + Drupal.settings.pathPrefix + 'sites/all/modules/mmg_quitmap/img/close.png" alt="Close Share Modal"/></h4>' +
    	'<p>Thank you. Your story has been saved.</p>' +
    	'<p><img src="' + Drupal.settings.basePath + Drupal.settings.pathPrefix + 'sites/all/modules/mmg_quitmap/img/share-sign.png" alt="Check out my quit journey. I am smoke free" />Inspire others to quit by sharing your journey. Your story could motivate someone else to quit smoking! Click the icons below to post your Quit Journey badge on Facebook or Twitter and let others know you are proud to be Smokefree.</p>' +
    	'<div class="clear"></div>' +
    	'<div class="social-icons">' +
   		'<span>Share:</span>' +
    	'<a class="fb-link" href="#" title="Share on Facebook" onclick="window.open(\'http://www.facebook.com/sharer/sharer.php?s=100&p[url]=http://smokefree.gov/journey&p[images][0]=http%3A%2F%2Fsmokefree.gov%2Fsites%2Fdefault%2Ffiles%2Fbadge.png&p[title]=Smokefree.gov&p[summary]=Quitting%20smoking%20is%20a%20journey.%20Visit%20http://smokefree.gov/journey%20to%20see%20quit%20stories%20and%20pins%20from%20across%20the%20US%20on%20the%20Smokefree%20Journey%20Map.%20Use%20the%20map%20to%20see%20where%20I%20made%20my%20decision%20to%20quit%20smoking%20and%20read%20about%20what%20motivated%20me%20to%20give%20up%20cigarettes%20for%20good!\', \'FacebookShareDialog\', \'width=640,height=300\'); return false;"><img src="' + Drupal.settings.basePath + Drupal.settings.pathPrefix + 'sites/all/modules/mmg_quitmap/img/fb-link.png" alt="Facebook Icon" /><span class="ext"> [external link]</span></a>' +
    	'<a class="twit-link" href="#" title="Share on Twitter" onclick="window.open(\'http://twitter.com/home?status=Quitting%20smoking%20is%20a%20journey.%20Visit%20smokefree.gov/journey%20to%20read%20quit%20stories%20from%20across%20the%20US,%20including%20my%20own!\', \'TwitterShareDialog\', \'width=640,height=350\'); return false;"><img src="' + Drupal.settings.basePath + Drupal.settings.pathPrefix + 'sites/all/modules/mmg_quitmap/img/twit-link.png" alt="Twitter Icon" /><span class="ext"> [external link]</span></a>' +
    	'</div>' +
    	'<p style="font-size: 18px; line-height: 20px; margin-bottom: 10px;"><a href="http://smokefree.gov" title="Learn more about quitting at Smokefree.gov" target="_blank">Learn more about quitting at Smokefree.gov</a></p>' +
    	'</div>';
    $.post(url, {latitude:latitude,longitude:longitude,name:name_input,date_quit:date_quit_input,journey:safe_journey,zip:zip}, function(data){
        if(typeof data != 'undefined' && data != null && typeof data.type != 'undefined' && data.type != null && data.type == 'success'){
        	$('.social-share-wrapper.table-view').append(social);
        	$('.social-share-wrapper').fadeIn('fast');
        	$('html, body').animate({
        	        scrollTop: $("#test").offset().top
        	    }, 2000);
        	$('.dropped-pin').css('display', 'none');

        } else {
        	$('.save-pin-error').text('There was a problem saving your pin').show('fast');
        	/*setTimeout(function(){
        		$('.save-pin-error').hide('slow');
        	}, 3000);*/
        }
    }, 'json');
}

function toggleView($, id){
	if(id == 'table-view'){
		$('#mapbox-wrapper').hide('fast', function(){
			$('#table-view-wrapper').css('display', 'block');
			$('#' + id).addClass('disabled');
			$('#map-view').removeClass('disabled');
		});
	} else {
		$('#table-view-wrapper').hide('fast', function(){
			$('#mapbox-wrapper').show();
			$('#' + id).addClass('disabled');
			$('#table-view').removeClass('disabled');
		});
	}
}

function getLatLngZip(){
	$ = jQuery;
	var zip = $('#table-zip').val();
	var url = 'http://maps.google.com/maps/api/geocode/json?address=' + zip + '&sensor=false';
	$.post(url, {}, function(data){
	    if(typeof data != 'undefined' && data.status == "OK"){
	    	var textareaDefault = 'Tell us about your story:(optional) (500 character maximum)';
	    	var nameDefault = '23 character max';
	    	var journeyForm = '<p id="table-no-results" style="font-size: 12px; text-align: center; display: none;"></p>' +
	    				'<p aria-level="1">Fill out the information below and mark it when you\'re finished to be part of the map</p>' +
		                '<form>' +
		                	'<div class="input-wrapper">' +
		                		'<label for="name-input">First Name</label>' +
		                		'<input id="name-input" type="text" name="name" value="' + nameDefault + '"/>' +
		                		'<span class="description">23 character maximum</span>' +
		                		'<div class="clear"></div>' +
		                	'</div>' +
		                	'<div class="input-wrapper">' +
		                		'<label for="date-quit-input-text">Date you Quit</label>' +
		                		'<input id="date-quit-input-text" type="text" name="date_quite" />' +
		                		'<span class="description">Date format: MMDDYYYY</span>' +
		                		'<div class="clear"></div>' +
		                	'</div>' +
	                		'<label for="journey-input">Message</label>' +
		                	'<textarea id="journey-input">' + textareaDefault +'</textarea>' +
		                	'<div id="charNum"></div>' +
		                	'<div id="field-error" role="alert"></div>' +
		                	'<span class="remove-pin">cancel</span>' +
		                	'<input type="hidden" value="' + data.results[0].geometry.location.lat + '">' +
		                	'<input type="hidden" value="' + data.results[0].geometry.location.lat + '">' +
		                	'<input type="hidden" value="' + zip + '">' +
		                	'<input class="mark-it table-view" type="submit" value="Mark It!" />' +
		                	'<div class="clear"></div>' +
		                '</form>';
		    //$('#get-latlng').hide('fast', function(){
		    	$('#table-journey-form').empty().append(journeyForm).show('fast');
		    	$('#table-journey-form').css('display', 'block');
		    	repopulateTable(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng);
		    	var map = '';
		    	mapHandlers($, map, data.results[0].geometry.location.lat, data.results[0].geometry.location.lng);
		    	$('#name-input')[0].focus();
		    //});
	    } else {
	    	$('#get-zip-error').css('display', 'block');
	    	/*setTimeout(function(){
	    		$('#get-zip-error').hide('slow');
	    	}, 3000);*/
	    }
	}, 'json');
}

function getZipCode($, latitude, longitude, name_input, date_quit_input, journey_input){
	$ = jQuery;
	var latlng = latitude + ',' + longitude,
	zip = 0;
	var url = 'http://maps.google.com/maps/api/geocode/json?latlng=' + latlng + '&sensor=true';
	$.post(url, {}, function(data){
	    if(typeof data != 'undefined' && data.status == "OK"){
	    	var addComponents = data.results[0].address_components;
	    	for(x in addComponents){
	    		if(addComponents[x].types[0] == 'postal_code'){
	    			zip = addComponents[x].short_name;
	    		}
	    	}

	    	ajaxSavePin($, latitude, longitude, name_input, date_quit_input, journey_input, zip);
	    } else {

	    }
	}, 'json');
}

function repopulateTable(latitude, longitude){
	    var url = Drupal.settings.basePath + Drupal.settings.pathPrefix + 'journey/ajax/pull-pins';
	    $.post(url, {latitude:latitude,longitude:longitude}, function(data){
	        if(typeof data != 'undefined' && data != null && typeof data.type != 'undefined' && data.type != null && data.type == 'success'){
	            var pins = data.pinList;

	            $('#table-view-wrapper table').empty();
	            $('#table-view-wrapper table').append('<tr><th scope="col">Name</th><th scope="col">Zip</th><th scope="col">Date Quit</th><th scope="col">Story</th></tr>');


	            for(x in pins){
	      			//POPULATE TABLE VIEW
	      			var tmpdate = (parseInt(pins[x].date_quit) * 1000);
	      			var date = new Date(tmpdate);


	      			var month = (date.getMonth() + 1);
	      			var day = date.getDate();
	      			var year = date.getFullYear();
	            	$('#table-view-wrapper table').append('<tr scope="row"><td class="m left">' + pins[x].name + '</td><td class="m left">' + pins[x].zip + '</td><td class="m center">' + month  + '/' + day + '/' + year + '</td><td class="l left">' + pins[x].story + '</td></tr>');
	            }


	        } else {
	        	$('#table-view-wrapper table').empty();
	        	$('#table-no-results').text('No results found within 25 miles').show();
	        	/*setTimeout(function(){
	        		$('#table-no-results').hide('slow');
	        	}, 3000);*/
	        }
	    }, 'json');
}
