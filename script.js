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