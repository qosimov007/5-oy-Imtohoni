import './btnmode.js'
import { createCard } from "./function.js";

function limit(a) {
    fetch(`https://frontend-mentor-apis-6efy.onrender.com/countries?limit=50&skip=${a}`)
    .then(res => res.json())
    .then(data => {
        data && data.data.forEach(country => {
            let tr = createCard(country);
            mainContainer.innerHTML += tr;
        });
    })
    .catch(err => {
        console.log(err);
    })
}

const search = document.querySelector("#search");
const mainContainer = document.querySelector(".main-container");
const africa = document.querySelector("#dropdown-item-africa");
const america = document.querySelector("#dropdown-item-america");
const asia = document.querySelector("#dropdown-item-asia");
const europa = document.querySelector("#dropdown-item-europa");
const oceania = document.querySelector("#dropdown-item-oceania");


document.addEventListener("DOMContentLoaded", function() {
    limit(200);
    
});


search && search.addEventListener("keypress", function(e) {
   if (e.keyCode == 13) {
        fetch(`https://frontend-mentor-apis-6efy.onrender.com/countries?search=${search.value}`)
            .then(res => res.json())
            .then(data => {

                if (data.data.length == 0) {
                    alert("Bunday davlat mavjud emas!");
                    search.focus()
                    search.value = ""
                }

                localStorage.setItem("country", JSON.stringify(data));
                let slug = data.data[0].name.slug;
                const domain = window.location.href.substring(0, window.location.href.search("index"));
                window.location.assign(`${domain}pages/main.html?id=${slug}`)
            })
            .catch(err => {
                console.log(err);
            })
   } else {
    
   }
});

africa && africa.addEventListener('click', function() {
    fetch(`https://frontend-mentor-apis-6efy.onrender.com/countries?region=Africa`)
        .then(res => res.json())
        .then(data => {
            mainContainer.innerHTML = "";

            data && data.data.forEach(country => {
                let tr = createCard(country);
                mainContainer.innerHTML += tr;
            });
        })
        .catch(err => {
            console.log(err);
        })
})

america && america.addEventListener('click', function() {
    fetch(`https://frontend-mentor-apis-6efy.onrender.com/countries?region=Americas`)
        .then(res => res.json())
        .then(data => {
            mainContainer.innerHTML = "";

            data && data.data.forEach(country => {
                let tr = createCard(country);
                mainContainer.innerHTML += tr;
            });
        })
        .catch(err => {
            console.log(err);
        })
})

asia && asia.addEventListener('click', function() {
    fetch(`https://frontend-mentor-apis-6efy.onrender.com/countries?region=Asia`)
        .then(res => res.json())
        .then(data => {
            mainContainer.innerHTML = "";

            data && data.data.forEach(country => {
                let tr = createCard(country);
                mainContainer.innerHTML += tr;
            });
        })
        .catch(err => {
            console.log(err);
        })
})

europa && europa.addEventListener('click', function() {
    fetch(`https://frontend-mentor-apis-6efy.onrender.com/countries?region=Europe`)
        .then(res => res.json())
        .then(data => {
            mainContainer.innerHTML = "";

            data && data.data.forEach(country => {
                let tr = createCard(country);
                mainContainer.innerHTML += tr;
            });
        })
        .catch(err => {
            console.log(err);
        })
})

oceania && oceania.addEventListener('click', function() {
    fetch(`https://frontend-mentor-apis-6efy.onrender.com/countries?region=Oceania`)
        .then(res => res.json())
        .then(data => {
            mainContainer.innerHTML = "";

            data && data.data.forEach(country => {
                let tr = createCard(country);
                mainContainer.innerHTML += tr;
            });
        })
        .catch(err => {
            console.log(err);
        })
})



$('#loader').addClass("hide-loader");
  




  
  