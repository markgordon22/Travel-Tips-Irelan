
markers=[]

function initMap() {
    const card = document.getElementById("pac-card");
    const input = document.getElementById("pac-input");
    const points = [
    { lat: 54.607868,
     lng:  -5.926437,
     content:"Belfast"},

    { lat: 52.25833,
     lng: -7.11194,
     content:"waterford",
    },

      { lat:  55.007,
     lng: -7.318268,
     content:"Derry",
     },

      { lat:  54.26969,
     lng:  -8.46943,
     content:"Sligo",
     },

      { lat:  53.350140,
     lng: -6.266155,
     content:"Dublin",
     },

      { lat:  53.43333,
     lng:  -7.95,
     content:"Athlone",
     },

      { lat: 54.65, 
     lng: -8.11667,
     content:"Donegal",
     },

      { lat: 52.061413,
     lng: -9.526437,
     content:"Kerry",
     },

      { lat:  53.270962,
     lng: -9.062691,
     content:"Galway",
     },

      { lat:  51.903614,
     lng:  -8.468399,
     content:"Cork",
     },

      { lat:  52.668018,
     lng: -8.630498,
     content:"Limerick",
     },

      { lat:  52.65417,
     lng: -7.25222,
     content:"Kilkenny",
     },

];
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 6.55,
      center: {lat:53.5,lng:-7.6},
      zoomControl: true,
    });
   
  const options = {
        fields: ["formatted_address", "geometry", "name"],
        
      };
      points.map(point=>{
          const infowindow = new google.maps.InfoWindow({
              content: point.content,
            });
            const marker = new google.maps.Marker({
                position: {lat:point.lat,lng:point.lng},
                map,
                title: point.content,
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
    autocomplete.setComponentRestrictions({
        country: ["ie","gb"]});
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
      /*code below from google maps platform autocomplete search*/
      if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        } else {
          map.setCenter(place.geometry.location);
          map.setZoom(17);
        }
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
        infowindowContent.children["place-name"].textContent = place.name;
        infowindowContent.children["place-address"].textContent = place.formatted_address;
        infowindow.open(map, marker);
      });
      
    }