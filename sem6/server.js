import express from 'express';
import random from "random";
import { movies } from "./movies.js";

const PORT = 8080;

const app = express();
app.use(express.json())

// metoda HTTP pentru care acest handler va fi atașat
app.get("/", (req, res) => {
    // req conține detalii despre request
    // res conține detalii despre response
    res.send({ records: movies });
});

// în comparație cu metoda anterioară, în express nu este importantă ordinea definirii endpoint-urilor
app.get("/random", (req, res) => {
    
    const rnd = random.int(0, movies.length - 1);
    res.send({ movie: movies[rnd] });
});

// va răspunde unui request de tipul http://localhost:8080/search?title=moth
app.get("/search", (req, res) => {
    // accesul parametrilor de tip query
    const requestedTitle = req.query.title;
    const identifiedMovie = movies.find(movie => movie.includes(requestedTitle));

    if (!!identifiedMovie) {
        res.send({ movie: identifiedMovie });
    } else {
        // ne amintim că fiecare response are un status atașat ce informează clientul cu privire la 
        //  tipul răspunsului
        res.status(404).send({ message: "Movie not found" });
    }
});

// observăm utilizarea metodei post pentru a gestiona un request de tipul POST
app.post("/", (req, res) => {
    // accesarea parametrilor de tip body
    //  ce crezi că se va întâmpla dacă am șterge linia adăugată la pasul anterior? 
    //      vom mai putea accesa parametrul title?
    const newMovie = req.body.title;

    // dacă filmul nu există deja, îl adăugăm
    if(!movies.includes(newMovie)) {
        movies.push(newMovie);
    }

    res.status(201).send({result: "Movie was created"});
});

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));