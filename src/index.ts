const seeMoreButton: HTMLElement | null = document.querySelector("button")


const url: string = "https://api.punkapi.com/v2/beers";

const fetchBeerAPI = async (): Promise<void> => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Failed to fetch key");
        }

        const data = await response.json();
        console.log(data);

        const beers = data
        beers.forEach((beer: any) => {
            beersNewPage(beer)
        });



    } catch (error) {
        console.error("error fetching key", error);
    }
};

fetchBeerAPI();

const beersNewPage = (beer: any) => {
    seeMoreButton.addEventListener("click",() => {
        console.log(beer.ingredients)
        
    } )
}
