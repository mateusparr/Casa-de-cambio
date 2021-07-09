window.onload = () => {
    console.log('caregou');
}

const setupEventHandlers = () => {
    const searchButton = document.querySelector('#search-button');
    searchButton.addEventListener('click', handleSearchEvent);
}

const handleSearchEvent = () => {
    const currencyValue = document.querySelector
    ('#currency-input').value;
}

const fetchCurrency = () => {
    const saveFetch = fetch(`https://api.exchangerate.host/latest'`)
    .then((response) => response.json())
    .then((object) => console.log(object))
    .catch((error) => console.log(error, 'errou'))
    console.log(saveFetch);
}

fetchCurrency();