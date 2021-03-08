// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
markers=[]

function initMap() {
    const card = document.getElementById("pac-card");
    const input = document.getElementById("pac-input");
    const points = [{ lat: 53.7, lng: -6.3,content:"hello there ",title:"cock" },
    { lat: 52.25833, lng: -7.11194,content:"waterford is a shithole ",title:"cock" }
];
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: {lat:53,lng:-6},
    });
   
    const options = {
        fields: ["formatted_address", "geometry", "name"],
        origin: map.getCenter(),
        strictBounds: false,
      };
      points.map(point=>{
          const infowindow = new google.maps.InfoWindow({
              content: point.content,
            });
            const marker = new google.maps.Marker({
                position: {lat:point.lat,lng:point.lng},
                map,
                title: point.title,
            });
            marker.addListener("click", () => {
                infowindow.open(map, marker);
            });
            markers.push(marker)
        })




        const infowindow = new google.maps.InfoWindow();
    const infowindowContent = document.getElementById("infowindow-content");
    infowindow.setContent(infowindowContent);
    const marker = new google.maps.Marker({
      map,
      anchorPoint: new google.maps.Point(0, -29),
    });
    const autocomplete = new google.maps.places.Autocomplete(input, options);
      autocomplete.bindTo("bounds", map);
    autocomplete.addListener("place_changed", () => {
      infowindow.close();
      marker.setVisible(false);
      const place = autocomplete.getPlace();
  
      if (!place.geometry || !place.geometry.location) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        window.alert("No details available for input: '" + place.name + "'");
        return;
      }
      if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        } else {
          map.setCenter(place.geometry.location);
          map.setZoom(17);
        }
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
        infowindowContent.children["place-name"].textContent = place.name;
        infowindowContent.children["place-address"].textContent =
          place.formatted_address;
        infowindow.open(map, marker);
      });
      
      
      
      new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
    }