// Google Sheets CSV URL
const sheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR0D7_9n5fJGj30Erv8CEr3rz7UGPh3qdvSx79RiVCf2iuT_yZw51mr-9cdGxpyXbSPTbYXcuHC8cPk/pub?output=csv";

// Fetch data from Google Sheets
fetch(sheetUrl)
    .then(response => response.text())
    .then(data => {
        const rows = data.split("\n").slice(1); // Split rows, ignore the first header row
        const latestMovie = rows[rows.length - 1].split(","); // Get the last movie added

        const movie = {
            title: latestMovie[0],
            year: latestMovie[1],
            poster: latestMovie[2],
            streamLink: latestMovie[3],
            downloadLink: latestMovie[4],
        };

        // Update the webpage content with movie data
        document.getElementById("movie-poster").src = movie.poster;
        document.getElementById("movie-title").innerText = `${movie.title} (${movie.year})`;
        document.getElementById("stream-link").href = movie.streamLink;
        document.getElementById("download-link").href = movie.downloadLink;
    })
    .catch(error => console.error("Error loading movie data:", error));
