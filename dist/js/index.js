var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const seeMoreButton = document.querySelector("button");
const url = "https://api.punkapi.com/v2/beers";
const fetchBeerAPI = () => __awaiter(this, void 0, void 0, function* () {
    try {
        const response = yield fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch key");
        }
        const data = yield response.json();
        console.log(data);
        const beers = data;
        beers.forEach((beer) => {
            beersNewPage(beer);
        });
    }
    catch (error) {
        console.error("error fetching key", error);
    }
});
fetchBeerAPI();
const beersNewPage = (beer) => {
    seeMoreButton.addEventListener("click", () => {
        console.log(beer.ingredients);
    });
};
