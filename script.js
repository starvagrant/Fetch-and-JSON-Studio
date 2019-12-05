window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
       // Access the JSON in the response
       response.json().then( function(json) {
          let template = `
            <div class="astronaut">
                <div class="bio">
                    <h3>${''}</h3>
                    <ul>
                        <li>Hours in space: ${''}</li>
                        <li>Active: ${''}</li>
                        <li>Skills: ${''}</li>
                    </ul>
                </div>
                    <img class="avatar" src=${''}>
                </div>
            `;
       });
    });
 });