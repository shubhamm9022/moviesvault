const sheetURL = "https://opensheet.elk.sh/1oDtwyGB7ArzmWtP81I2QeBNXAiEefgTOepAHqwRfNZs/Movies-Vault.HQ";

// Fetch data from Google Sheet
async function fetchMovies() {
    try {
        const response = await fetch(sheetURL);
        const movies = await response.json();

        displayMovie(movies);
    } catch (error) {
        console.error("Failed to load movies:", error);
        document.querySelector('.container').innerHTML = `<h1>Failed to load movie data!</h1>`;
    }
}

// Display a specific movie based on URL
function displayMovie(movies) {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedMovie = urlParams.get('movie');

    const movie = movies.find(m => m.TITLE.toLowerCase() === selectedMovie?.toLowerCase());

    if (movie) {
        document.getElementById('movie-poster').src = movie['POSTER URL'];
        document.getElementById('movie-poster').alt = `${movie.TITLE} Movie Poster`;
        document.getElementById('movie-title').innerText = `${movie.TITLE} (${movie.YEAR})`;
        document.getElementById('stream-link').href = movie['STREAM LINK'];
        document.getElementById('download-link').href = movie['DOWNLOAD LINK'];
    } else {
        document.querySelector('.container').innerHTML = `<h1>Movie not found!</h1>`;
    }
}

// Load movie on page load
fetchMovies();
