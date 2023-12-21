let beers = [];
let allBeers = [];

const url = "https://api.punkapi.com/v2/beers/random"
const allurl = "https://api.punkapi.com/v2/beers";

const randomButton = document.querySelector("button")
const beerCardContainer = document.querySelector(".beer-container");
const closeButton = document.querySelector(".xButton")
const inputField = document.querySelector(".search-beer")
const beerContainer = document.querySelector(".ourbeers-container")
const beersResultContainer = document.querySelector(".ourbeers-container__result")


const fetchAllBeerAPI = async () => {
    try {
        const response = await fetch(allurl);

        if (!response.ok) {
            throw new Error("Failed to fetch key");
        }

        const data = await response.json();
        allBeers = data;
        console.log(allBeers);
        renderBeersToUI(allBeers);
        makeClickyButtonResult();

    } catch (error) {
        console.error("error fetching key", error);
    }
};

fetchAllBeerAPI();



const fetchRandomAPI = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch key")
        }
        const data = await response.json()

        beers = data
        console.log(data)
        beers.forEach(beer => {
            randomBeer(beer)
        });
    }
    catch (error) {
        console.error("Error fetching key", error);
    }
}
fetchRandomAPI()

const randomBeer = (beer) => {
    randomButton.addEventListener("click", () => {
        randomButton.style.display = "none"
        inputField.style.display = "none"
        beersResultContainer.style.display = "none"
        beerContainer.style.display = "none"
        beerCardContainer.style.boxShadow = "2px 2px 2px 2px"
        beerCardContainer.style.backgroundColor = "white"
        beerCardContainer.style.display = "flex"
        beerCardContainer.style.width = "320px";
        beerCardContainer.style.height = "700px";
        beerCardContainer.style.justifyContent = "center"
        beerCardContainer.style.alignItems = "center"
        beerCardContainer.style.flexDirection = "column"

        beerCardContainer.innerHTML =
            `<img src="${beer.image_url}" alt="${beer.name}" style="width: 140px; height: auto;" />
        <h2>${beer.name}</h2>
        <a href="http://127.0.0.1:5500/dist/seemorepage.html">See More ></a>`;

        closeButton.style.display = "block"
        closeButton.style.marginTop = "15px"
        beerCardContainer.appendChild(closeButton);
        closeButton.addEventListener("click", () => {
            window.location.reload();
        })

    })
}


inputField.addEventListener("keyup", (e) => {
    console.log("start search");
    // först måste vi få in söktext
    const input = inputField.value.toLowerCase();
    if (input.length > 0) {
        // matcha söktext med namn på biror i beers-arrayen
        let matches = [];
        for (let i = 0; i < allBeers.length; i++) {
            let potentialMatch = allBeers[i].name.toLowerCase();
            if (potentialMatch.includes(input)) {
                matches.push(allBeers[i]);
            }
        }
        console.log(matches);
    } else {
        matches = allBeers;
    }
});

// få ut alla öl på sidan             //istället för foreach gör foorlop med 
const renderBeersToUI = (beers) => {
    for (let i = 0; i < 4; i++) {
        beersResultContainer.innerHTML += `
            <article class="beerResult" id="beer${beers[i].id}">
                <figure class="beerResult__image" style="background-image: url(${beers[i].image_url})"></figure>
                <section class="beerResult__info">
                    <h2>${beers[i].name}</h2>
                </section>
            </article>`;
        // <img src="${beers[i].image_url}" alt="${beers[i].name}" style="width: 140px; height: auto;" />
    }
    beersResultContainer.style.display = "flex"



    /* beers.forEach((beer) => {
        beersResultContainer.innerHTML += `
        <article class="beerResult" id="beer${beer.id}">
            <img src="${beer.image_url}" alt="${beer.name}" style="width: 140px; height: auto;" />
            <h2>${beer.name}</h2>
        </article>`;
    }); */
};

// skapa eventlyssnare på alla öl från resultat
const makeClickyButtonResult = () => {
    const beerResultsCards = document.querySelectorAll('.beerResult');
    beerResultsCards.forEach(beerCard => {
        beerCard.addEventListener('click', (e) => {
            let id = beerCard.getAttribute('id');
            id = id.slice(4);
            console.log(id);
            let clickedBeer;
            for (let i = 0; i < allBeers.length; i++) {
                if (allBeers[i].id == id) {
                    console.log('match ', id);
                    clickedBeer = allBeers[i];
                }
            }
            console.log(clickedBeer);
        })
    })
};













