let beers = []

const url = "https://api.punkapi.com/v2/beers/random"
const allurl = "https://api.punkapi.com/v2/beers";

const randomButton = document.querySelector("button")
const beerContainer = document.querySelector(".beer-container");
const closeButton = document.querySelector(".xButton")
const inputText = document.querySelector(".search-beer")


const fetchAllBeerAPI = async () => {
    try {
        const response = await fetch(allurl);

        if (!response.ok) {
            throw new Error("Failed to fetch key");
        }

        const data = await response.json();
        console.log(data);

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
        inputText.style.display = "none"
        beerContainer.style.boxShadow = "2px 2px 2px 2px"
        beerContainer.style.backgroundColor = "white"
        beerContainer.style.display = "flex"
        beerContainer.style.width = "320px";
        beerContainer.style.height = "700px";
        beerContainer.style.justifyContent = "center"
        beerContainer.style.alignItems = "center"
        beerContainer.style.flexDirection = "column"

        beerContainer.innerHTML =
            `
        <img src="${beer.image_url}" alt="${beer.name}" style="width: 140px; height: auto;" />
        <h2>${beer.name}</h2>
        <button>See More > </button>
        `;
        closeButton.style.display = "block"
        closeButton.style.marginTop = "15px"
        beerContainer.appendChild(closeButton);
        closeButton.addEventListener("click", () => {
            window.location.reload();
        })

    })
}









