
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let cities = [];

fetch(endpoint)
        .then(blop => blop.json())
        .then(data => cities = data);   // .then(data => cities.push(...data))    // spread


function findMatches(word, cities){
    return cities.filter(place => {
        const regex = new RegExp(word, "gi");
        return place.city.match(regex) || place.state.match(regex);
    })
}

function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    //console.log(matchArray)

    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, "gi");
        
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
        return `
        <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="populations">${numberWithCommas(place.population) }</span>
        </>
        `
    }).join(" ");
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");      
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("keyup", displayMatches)
//searchInput.addEventListener("change", displayMatches)

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}