let beers = []

const url = "https://api.punkapi.com/v2/beers/random"

const randomButton = document.querySelector("button")
const beerContainer = document.querySelector(".beer-container");



const fetchRandomAPI = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch key")
        }
        const data = await response.json()

        beers = data
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
        beerContainer.style.boxShadow ="2px 2px 2px 2px"
        beerContainer.style.backgroundColor = "white"
        beerContainer.style.display = "flex"
        beerContainer.style.width = "320px";
        beerContainer.style.height = "700px";
        beerContainer.style.justifyContent = "center"
        beerContainer.style.alignItems = "center" 
        beerContainer.style.flexDirection = "column"
        /* beerContainer.style.border = "2px solid black" */
        beerContainer.innerHTML = 
        `
        <img src="${beer.image_url}" alt="${beer.name}" style="width: 150px; height: auto;" />
        <h2>${beer.name}</h2>
        <button>See More > </button>
        `;

        
        randomButton.style.display = "none"

        
       
        
     })
}




