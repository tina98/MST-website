/*this is for the overlay to disappear*/
var main = function() {
    $('.overlay').delay(2000).fadeOut();
};
$(document).ready(main);

/*this is for the overlay of the map*/
$(document).ready(function mapActivate() {
    $('.overlayMap').click(function() {
        $('.overlayMap').fadeOut();
    });
    
});
/*this is for the carousel*/
$(document).ready(function Slider() {
    "use strict";
    $('.carousel #1, .shadow #w').fadeIn(500, "swing");
    $(".carousel #1").delay(5500).hide("slide", {
        direction: 'left'
    }, 500);

    var sc = $(".carousel img").size(),
        count = 2;

    setInterval(function () {
        $(".carousel #" + count).show("slide", {direction: "right"}, 500);
        $(".carousel #" + count).delay(5500).hide("slide", {
            direction: 'left'
        }, 500);

        if (count === sc) {
            count = 1;
        } else {
            count = count + 1;
        }
    }, 6500);
});
/*this is for the navbar to stick to the top*/
$(document).ready(function Sticky() {
    "use strict";
    var nav = $('.nav');
    var banner = $('.shadow');
    var pos = nav.position();
    
    $(window).scroll(function () {
        
        var windowpos = $(window).scrollTop();
        
        if (windowpos >= 675) {
            nav.addClass('fixedTop');
        }
        else {
            nav.removeClass('fixedTop');
        }
    });
});

/*the google maps*/

function initialize() {
        var map_canvas = document.getElementById('map_canvas');
        var map_options = {
          center: new google.maps.LatLng(39.972069, -80.493470),
          zoom: 4,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(map_canvas, map_options);
    /*all the location's coordinates. if you can figure out how to make a description appear with a click, that would be great*/
        var locations = [];
        locations.push ( {name: "Arizona State", latlng: new google.maps.LatLng(33.42424,-111.928053)});
        locations.push ( {name: "Barry University", latlng: new google.maps.LatLng(25.879072,-80.196161)});
        locations.push ( {name: "Binghamton University", latlng: new google.maps.LatLng(42.088828,-75.966972)});
       locations.push ( {name: "Boston University", latlng: new google.maps.LatLng(42.350754 , -71.107318)});
    locations.push ( {name: "Bowlilng Green State", latlng: new google.maps.LatLng(41.379779 , -83.630083)});
    locations.push ( {name: "Bucknell University", latlng: new google.maps.LatLng(40.955141 , -76.884963)});
locations.push ( {name: "CalTech", latlng: new google.maps.LatLng(34.137658 , -118.125269)});  
locations.push ( {name: "Cambridge", latlng: new google.maps.LatLng(52.204267 , 0.114908)});    
locations.push ( {name: "Carleton", latlng: new google.maps.LatLng(45.387581 , -75.69602)
});    
    locations.push ( {name: "Carnegie Mellon", latlng: new google.maps.LatLng(40.442493, -79.942553)});
    locations.push ( {name: "Case Western Reserve", latlng: new google.maps.LatLng(41.504341 , -81.608384)});
    locations.push ( {name: "Colby College", latlng: new google.maps.LatLng(44.563933 , -69.662096)});
    locations.push ( {name: "DigiPen Institute", latlng: new google.maps.LatLng(47.688877 , -122.150677)});
    locations.push ( {name: "Duke University", latlng: new google.maps.LatLng(36.001426 , -78.938229)});
    locations.push ( {name: "Georgia Tech", latlng: new google.maps.LatLng(33.775618 , -84.396285)
});
    locations.push ( {name: "Harvey Mudd", latlng: new google.maps.LatLng(34.106067 , -117.709315)
});
    locations.push ( {name: "Illinois Tech", latlng: new google.maps.LatLng(41.834420 , -87.628465)});
    locations.push ( {name: "Iowa State University", latlng: new google.maps.LatLng(42.026619 , -93.646465)});
    locations.push ( {name: "Johns Hopkins", latlng: new google.maps.LatLng(39.324928 , -76.623354)});
    locations.push ( {name: "Kings College", latlng: new google.maps.LatLng(41.249788 , -75.879607)});
    locations.push ( {name: "Miami University", latlng: new google.maps.LatLng(39.510533 , -84.730877)});
    locations.push ( {name: "MIT", latlng: new google.maps.LatLng(42.360091 , -71.09416)});
    locations.push ( {name: "Princeton", latlng: new google.maps.LatLng(40.343989 , -74.651448
)});
    locations.push ( {name: "Purdue University", latlng: new google.maps.LatLng(40.423705 , -86.921195)});
    locations.push ( {name: "Rensselaer Polytechnic", latlng: new google.maps.LatLng(42.730172 , -73.678803)});
    locations.push ( {name: "Rose-Hulman", latlng: new google.maps.LatLng(39.483062 , -87.323482
)});
    locations.push ( {name: "U.S Coast Guard Academy", latlng: new google.maps.LatLng(41.372883 , -72.098662)});
    locations.push ( {name: "UC-Berkley	", latlng: new google.maps.LatLng(37.873913 , -122.250563
)});
    locations.push ( {name: "University of Chicago", latlng: new google.maps.LatLng(41.788608 , -87.598713)});
    locations.push ( {name: "University of Dayton", latlng: new google.maps.LatLng(39.740662 , -84.179242)});
    locations.push ( {name: "University of Illinois", latlng: new google.maps.LatLng(40.101952 , -88.227161)});
    locations.push ( {name: "University of Kentucky", latlng: new google.maps.LatLng(38.030651 , -84.50397)});
    locations.push ( {name: "University of Missouri", latlng: new google.maps.LatLng(38.940381 , -92.327738)});
    locations.push ( {name: "University of Notre Dame", latlng: new google.maps.LatLng(41.705219 , -86.235307)});
    locations.push ( {name: "University of Oregon", latlng: new google.maps.LatLng(44.044830 , -123.072606)});
    locations.push ( {name: "PENN", latlng: new google.maps.LatLng(39.952219 , -75.193214)});
    locations.push ( {name: "University of Pittsburgh", latlng: new google.maps.LatLng(40.444353 , -79.960835)});
    locations.push ( {name: "Vanderbilt University", latlng: new google.maps.LatLng(36.144375 , -86.802744)});
    locations.push ( {name: "Webb University", latlng: new google.maps.LatLng(35.250034 , -81.66747)});
    locations.push ( {name: "Brigham Young University", latlng: new google.maps.LatLng(40.251843 , -111.649318)});
    locations.push ( {name: "Neumont University", latlng: new google.maps.LatLng(40.766112 , -111.890576)});
    locations.push ( {name: "Brown University", latlng: new google.maps.LatLng(41.826777 , -71.402556)});
    locations.push ( {name: "University of Maryland", latlng: new google.maps.LatLng(38.986937 , -76.942868)});
    locations.push ( {name: "U.S Military Academy at West Point", latlng: new google.maps.LatLng(41.392007 , -73.957558)});
    locations.push ( {name: "Adrian College", latlng: new google.maps.LatLng(41.898556 , -84.059272)});
    locations.push ( {name: "Albion College", latlng: new google.maps.LatLng(42.244543 , -84.746156)});
    locations.push ( {name: "Alma College", latlng: new google.maps.LatLng(43.379011 , -84.66994)});
    locations.push ( {name: "Aquinas College", latlng: new google.maps.LatLng(42.960615 , -85.626164)});
    locations.push ( {name: "Central Michigan", latlng: new google.maps.LatLng(43.591209 , -84.775138)});
    locations.push ( {name: "Grand Valley State U.", latlng: new google.maps.LatLng(42.963205 , -85.890042)});
    locations.push ( {name: "Hope College", latlng: new google.maps.LatLng(42.787398 , -86.099988)});
    locations.push ( {name: "Kalamazoo College", latlng: new google.maps.LatLng(42.290304 , -85.601897)});
    locations.push ( {name: "Kettering University", latlng: new google.maps.LatLng(43.011103 , -83.713398)});
    locations.push ( {name: "Michigan State Univ.", latlng: new google.maps.LatLng(42.704195 , -84.479151)});
    locations.push ( {name: "Michigan Tech University", latlng: new google.maps.LatLng(47.117051 , -88.544532)});
    locations.push ( {name: "Oakland University", latlng: new google.maps.LatLng(42.672979 , -83.215783)});
    locations.push ( {name: "U of Detroit Mercy", latlng: new google.maps.LatLng(42.414261 , -83.137976)});
    locations.push ( {name: "U of Michigan", latlng: new google.maps.LatLng(42.278044 , -83.738224)});
    locations.push ( {name: "Wayne State University", latlng: new google.maps.LatLng(42.359139 , -83.066546)});
    
    /*this makes the baloon generator look for each place and add it to the map*/
        for(var i=0; i< locations.length; i++) {
            var marker = new google.maps.Marker({position: locations[i].latlng, map:map, title:locations[i].name});
        }
    
/*this is me trying to make a description with a click, it failed miserably and is used for nothing*/
google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map,marker);
  });
       /* var map = new google.maps.Map(map_canvas, map_options)
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(37.820667,-122.478526),
            map: map,
            title: 'Click for more details'
        });
        var infoWindow = new google.maps.InfoWindow({
            content: "This is the Golden Gate Bridge"
        });
    google.maps.event.addListener(marker, 'click', function() {
        infoWindow.open(map, marker);
    });*/
      }
      google.maps.event.addDomListener(window, 'load', initialize);
/* this is the photowall code for resizing*/
$(document).ready(function() {
	function getPhotos(oContainer, container_width, margin, row_height, offset) {
		/*this is all the pictures in a really long list*/
      result = '[{"id":"3184","image":"../MSTWebsite/Images/60869_119457258108380_100001323205345_113375_98915_n.jpg","width":"300","height":"400"},{"id":"3183","image":"../MSTWebsite/Images/164549_1791165701878_1321688411_32025584_3063495_n.jpg","width":"400","height":"300"},{"id":"3182","image":"../MSTWebsite/Images/166116_1791166501898_1321688411_32025589_6037661_n.jpg","width":"500","height":"333"},{"id":"3181","image":"../MSTWebsite/Images/DSC04201.jpg","width":"400","height":"300"},{"id":"3180","image":"../MSTWebsite/Images/DSC04331.jpg","width":"400","height":"300"},{"id":"3179","image":"../MSTWebsite/Images/DSC04346.jpg","width":"500","height":"333"},{"id":"3178","image":"../MSTWebsite/Images/IMG_0144.jpg","width":"600","height":"400"},{"id":"3177","image":"../MSTWebsite/Images/IMG_0165.jpg","width":"400","height":"600"},{"id":"3176","image":"../MSTWebsite/Images/IMG_0283.jpg","width":"600","height":"400"},{"id":"3175","image":"../MSTWebsite/Images/IMG_0186.jpg","width":"400","height":"600"},{"id":"3174","image":"../MSTWebsite/Images/IMG_0344.jpg","width":"600","height":"400"},{"id":"3173","image":"../MSTWebsite/Images/IMG_0418.jpg","width":"600","height":"400"},{"id":"3172","image":"../MSTWebsite/Images/IMG_1519.jpg","width":"600","height":"400"},{"id":"3171","image":"../MSTWebsite/Images/IMG_1522.jpg","width":"600","height":"400"},{"id":"3170","image":"../MSTWebsite/Images/IMG_1524.jpg","width":"600","height":"400"},{"id":"3169","image":"../MSTWebsite/Images/IMG_1590.jpg","width":"600","height":"400"},{"id":"3168","image":"../MSTWebsite/Images/IMG_2542.jpg","width":"600","height":"400"},{"id":"3167","image":"../MSTWebsite/Images/IMG_2579.jpg","width":"600","height":"400"},{"id":"3166","image":"../MSTWebsite/Images/IMG_2605.jpg","width":"400","height":"600"},{"id":"3165","image":"../MSTWebsite/Images/IMG_2930.jpg","width":"600","height":"400"},{"id":"3165","image":"../MSTWebsite/Images/LabSeniors13.jpg","width":"400","height":"300"},{"id":"3165","image":"../MSTWebsite/Images/MST%20Rainbow%20Large.jpg","width":"600","height":"400"},{"id":"3165","image":"../MSTWebsite/Images/MST_Pancake.jpg","width":"600","height":"400"}, {"id":"3165","image":"../MSTWebsite/Images/Calculator.jpg","width":"600","height":"400"}]';
              var oResult = $.parseJSON(result);
				var row_width = 0;
				var aRowImage = new Array();
				$.each(oResult,function(k,v){
					var ratio = Math.round((v.height/row_height)*100)/100;
					var new_width = Math.round(v.width/ratio);
					row_width += new_width;
					aRowImage.push(v);
					if(row_width>=container_width){
						row_width += (aRowImage.length-1)*margin;
						var new_row_height = Math.round((row_height/(row_width/container_width)));
//						alert(row_width+" "+new_row_height);
						var current_row_width = 0; 
						var i=0; 
						$.each(aRowImage,function(kk,vv){
							i++;
							var image_ratio = Math.round((vv.height/new_row_height)*100)/100;
							var image_width = Math.round(vv.width/image_ratio);
							var image_height = new_row_height;
							var style_margin = "";
							if(i == aRowImage.length){
								image_width = container_width-current_row_width;
								style_margin = "0px 0px "+margin+"px 0px";
							}else{
								current_row_width += image_width+margin;
								style_margin = "0px "+margin+"px "+margin+"px 0px";
							}
							$(oContainer).append("<img src='"+vv.image+"' width='"+image_width+"' height='"+image_height+"' style='margin:"+style_margin+"' />");
						});

						aRowImage = new Array();
						row_width = 0;
					}
				});
/*			}
		});	
 */
	}
	getPhotos($("#photos_list"), $("#photos_list").width(), 10, 200, 0);
  	$(window).resize(function() {
      $("#photos_list").html("");
      getPhotos($("#photos_list"), $("#photos_list").width(), 10, 200, 0);
    });
  
});
