// Rescrieți exercițiul din capitolul de promises folosind async/await


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


const getPlacesNames = async () => {
    await delay(2000);
    const places = ['FROG', 'Camera din Față', 'Matei', 'Carrefour'];
    return places;
};

const getPlacesTypes = async () => {
    const places = await getPlacesNames();
    const placesWithTypes = places.map(place => {
        return {
            name: place,
            isCoffeeShop: place.length % 2 === 0
        };
    });
    return placesWithTypes;
}

const printPlacesInfo = async () => {
    const places = await getPlacesTypes();
    places.forEach(place => {
        console.log(`${place.name} - ${place.isCoffeeShop ? 'Cafenea' : 'Restaurant'}`);
    });
};

printPlacesInfo();
