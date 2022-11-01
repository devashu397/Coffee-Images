function coffeeImage() {
  const url = "https://coffee.alexflipnote.dev/random.json";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const img = document.getElementById("img");
      img.src = data.file;
      img.width = 375;
    })
    .catch((err) => {
      alert("Image not available at the moment");
    });
}
