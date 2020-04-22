window.onload = function() {
    var proxyURL = "https://cors-anywhere.herokuapp.com/";
    var targetURL = "https://placekitten.com/200/300";
    fetch(proxyURL + targetURL)
    .then(data => {
        document.getElementById("cuteCat").src = data.url;
    })
}