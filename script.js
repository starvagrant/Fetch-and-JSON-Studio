window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
       // Access the JSON in the response
       response.json().then( function(json) {
          console.log(json);
       });
    });
 });