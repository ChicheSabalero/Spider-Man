fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=spiderman', {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
        'X-RapidAPI-Key': '3513b2cc32msh740bf0ef895ab9cp1598b5jsn257a22694043'
    }
})
    .then(response => response.json())
    .then(data => {
        const arrayMovies = data.d;
        const moviesContainer = document.getElementById('movies-container'); // Agrega un contenedor en tu HTML con el id "movies-container"

        arrayMovies.forEach((element) => {
            const title = element.l;
            const image = element.i ? element.i.imageUrl : null;
            const cast = element.s;

            const movieDiv = document.createElement('div'); // Crea un elemento div para la película
            movieDiv.classList.add('movie'); // Agrega una clase para aplicar estilos

            const poster = `
            <div>
                <img src="${image}" alt="${title} Poster"/>
                <h2>${title}</h2>
                <small>${cast}</small>
            </div>
        `;

            movieDiv.innerHTML = poster; // Agrega el contenido al div de la película
            moviesContainer.appendChild(movieDiv); // Agrega el div de la película al contenedor
        });
    })
    .catch(error => console.error('Error:', error));
