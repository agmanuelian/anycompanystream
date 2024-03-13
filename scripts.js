document.addEventListener("DOMContentLoaded", function() {
    fetchAds();
    fetchContent();
});

function fetchAds() {
    fetch('https://api.gateway.com/ads')
        .then(response => response.json())
        .then(data => {
            const adBanner = document.getElementById('adBanner');
            adBanner.innerHTML = `
                <img src="${data.image}" alt="Ad Image">
                <div>
                    <h2>${data.title}</h2>
                    <p>${data.description}</p>
                </div>
            `;
        })
        .catch(error => console.error('Error fetching ads:', error));
}

function fetchContent() {
    // Function to fetch and populate movie/TV show covers grid
}
