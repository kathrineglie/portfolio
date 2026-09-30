//fetch header
{
    fetch("components/header.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not find header.html-file");
        }
        return response.text();
      })
      .then((data) => {
        document.getElementById("header-placeholder").innerHTML = data;
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
}

//fetch footer
{
    fetch("components/footer.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not find footer.html-file");
        }
        return response.text();
      })
      .then((data) => {
        document.getElementById("footer-placeholder").innerHTML = data;
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
}