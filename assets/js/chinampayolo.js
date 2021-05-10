function Chinampayolo(){
  this.name = 'Chinampayolo';
  this.main_menu = new Pushbar({	blur: true,	overlay: true, });
  this.xochimilco = {
    map:{ lat: 19.2725172, lng: -99.0681145 },
    areaB:{
      cords:[
        {lat: 19.27141, lng: -99.0984},
        {lat: 19.27236, lng: -99.1041},
        {lat: 19.27539, lng: -99.10195},
        {lat: 19.27995, lng: -99.10227},
        {lat: 19.28616, lng: -99.1017},
        {lat: 19.28631, lng: -99.09923},
        {lat: 19.28456, lng: -99.08936},
        {lat: 19.28071, lng: -99.09098},
        {lat: 19.2777, lng: -99.0884},
        {lat: 19.27538, lng: -99.08901},
        {lat: 19.274, lng: -99.08593},
        {lat: 19.27284, lng: -99.08627},
        {lat: 19.27254, lng: -99.08482},
        {lat: 19.26785, lng: -99.0867},
      ],
      poly:''
    },
    areaF:{
      cords:[
        {lat:19.2787,lng:-99.0604},
        {lat:19.28054,lng:-99.06403},
        {lat:19.27926,lng:-99.0673},
        {lat:19.28085,lng:-99.07109},
        {lat:19.27884,lng:-99.0721},
        {lat:19.28003,lng:-99.07535},
        {lat:19.26948,lng:-99.08036},
        {lat:19.26886,lng:-99.0786},
        {lat:19.26706,lng:-99.0792},
        {lat:19.26622,lng:-99.07605},
        {lat:19.26756,lng:-99.07539},
        {lat:19.26631,lng:-99.0719},
        {lat:19.26753,lng:-99.07053},
        {lat:19.26252,lng:-99.05221},
        {lat:19.2653,lng:-99.05139},
        {lat:19.26365,lng:-99.04693},
        {lat:19.27397,lng:-99.04246},
        {lat:19.27558,lng:-99.04807},
        {lat:19.27914,lng:-99.05479},
        {lat:19.2792,lng:-99.05751},
        {lat:19.2799,lng:-99.05942},
      ],
      poly:''
    },
    chinampas:[{}],
  }
  this.init_slider();
}

Chinampayolo.prototype.init_slider = function () {
  $('#main_slider .flexslider').flexslider({
    animation: "slide",
    start: function(){
			var h = $('#main_slider .flex-viewport').height();
			$('#main_slider .flex-viewport li').height(h);
		}
  });
  $(window).on('resize',function(){
    var h = $('#main_slider .flex-viewport').height();
    $('#main_slider .flex-viewport li').height(h);
  });
  this.initMap();
};

 Chinampayolo.prototype.initMap = function() {
   var that = this;
  this.map = new google.maps.Map(document.getElementById("map"), {
    center: that.xochimilco.map,
    zoom: 13,
  });
  // const map_marker = "./assets/img/icons/maps/marker.svg";
  var map_marker = {
    url: "./assets/img/icons/maps/marker.svg",
    size: new google.maps.Size(80, 80),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(17, 34),
    scaledSize: new google.maps.Size(50, 50)
  }
  this.marker = new google.maps.Marker({
    position: that.xochimilco.map,
    map: that.map,
    title:"Hello World!",
    icon: map_marker,
  });

  this.xochimilco.areaB.poly = new google.maps.Polygon({
    map:that.map,
    paths: that.xochimilco.areaB.cords,
    strokeOpacity: 0.8,
    strokeWeight: 2,
    strokeColor: "#11803e",
    fillColor: "#16a24f",
    fillOpacity: 0.35,
    geodesic: true,
  });
  this.xochimilco.areaF.poly = new google.maps.Polygon({
    map:that.map,
    paths: that.xochimilco.areaF.cords,
    strokeOpacity: 0.8,
    strokeWeight: 2,
    strokeColor: "#5ea4c2",
    fillColor: "#74c9ee",
    fillOpacity: 0.35,
    geodesic: true,
  });
}
