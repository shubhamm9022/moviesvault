// Define movie data (you can easily change this part)
const movie = {
    title: "Inception",
    year: 2010,
    poster: "inception-poster.jpg",
    streamLink: "https://example.com/stream-inception",
    downloadLink: "https://example.com/download-inception"
};

// Fill in the page with movie data
document.getElementById('movie-poster').src = movie.poster;
document.getElementById('movie-poster').alt = `${movie.title} Movie Poster`;
document.getElementById('movie-title').innerText = `${movie.title} (${movie.year})`;
document.getElementById('stream-link').href = movie.streamLink;
document.getElementById('download-link').href = movie.downloadLink;
