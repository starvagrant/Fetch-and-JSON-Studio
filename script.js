window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
       // Access the JSON in the response
       response.json().then( function(json) {
           let astronautHTML = "";
           for (i=0;i<json.length;i++) {
                astronautHTML += `
            <div class="astronaut">
                <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                        <li>Active: ${json[i].active}</li>
                        <li>Skills: ${json[i].skills}</li>
                    </ul>
                </div>
                    <img class="avatar" src=${json[i].picture}>
                </div>
            `;
           }
           astronautContainer = document.getElementById('container');
           astronautContainer.innerHTML = astronautHTML;
       });
    });
 });