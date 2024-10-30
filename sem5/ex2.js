// Rescrieți exercițiul din capitolul de callbacks folosind promise-uri




const getPlacesNames = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const places = ['FROG', 'Camera din Față', 'Matei', 'Carrefour'];
            resolve(places);
        }, 1000);
    });
};

const getPlacesTypes = (places) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const placesWithTypes = places.map(place => {
                return {
                    name: place,
                    isCoffeeShop: place.length % 2 === 0
                };
            });
            resolve(placesWithTypes);
        }, 1000);
    });
};


const printPlacesInfo = (places) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            places.forEach(place => {
                console.log(`${place.name} - ${place.isCoffeeShop ? 'Cafenea' : 'Restaurant'}`);
            });
            resolve();
        }, 500);
    });
};


getPlacesNames()
    .then((names) => getPlacesTypes(names))
    .then((placesWithTypes) => printPlacesInfo(placesWithTypes))
    .catch((error) => console.error('A apărut o eroare:', error));
