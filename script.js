// Google Sheet Config
const sheetID = "1oDtwyGB7ArzmWtP81I2QeBNXAiEefgTOepAHqwRfNZs";
const sheetName = "Movies-Vault.HQ";
const apiKey = "AIzaSyDkPV6ae3_tKLa3MnuDtoVNl_WXc08zM9U";
const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${sheetName}?key=${apiKey}`;

// Fetch data from Google Sheets
fetch(url)
    .then(response => response.json())
    .then(data => {
        const rows = data.values;
        const params = new URLSearchParams(window.location.search);
        const movieName = params.get("movie");

        if (movieName) {
            const movie = rows.find(row => row[0].toLowerCase() === movieName.toLowerCase());
            if (movie) {
                const [title, year, posterUrl, streamLink, downloadLink] = movie;

                document.querySelector("#movie-poster").src = posterUrl;
                document.querySelector("#movie-title").innerText = `${title} (${year})`;
                document.querySelector("#stream-link").href = streamLink;
                document.querySelector("#download-link").href = downloadLink;
            } else {
                document.querySelector("#movie-title").innerText = "Movie Not Found";
            }
        } else {
            document.querySelector("#movie-title").innerText = "No Movie Selected";
        }
    })
    .catch(err => console.error("Error loading movie data:", err));
