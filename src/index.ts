const seeMoreButton: HTMLElement | null = document.querySelector("button")


const url: string = "https://api.punkapi.com/v2/beers";

const fetchAllBeerAPI = async (): Promise<void> => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Failed to fetch key");
        }

        const data = await response.json();
        console.log(data);

        const allbeers = data
        allbeers.forEach((beer: any) => {
            beersNewPage(beer)
        });



    } catch (error) {
        console.error("error fetching key", error);
    }
};

fetchAllBeerAPI();

const beersNewPage = (beer: any) => {
    seeMoreButton.addEventListener("click",() => {
        console.log(beer.ingredients)
        
    } )
}
