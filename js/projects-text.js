fetch("/text/projects.txt")
    .then(response => response.text())
    .then(text => {
        document.getElementById("projects").textContent = text;
    });