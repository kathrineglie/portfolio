fetch("text/about-me.txt")
    .then(response => response.text())
    .then(text => {
        document.getElementById("about-me").textContent = text;
    });