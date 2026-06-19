function generateImage() {

    let prompt =
        document.getElementById("prompt").value;

    let image =
        document.getElementById("image");

    image.src =
      "https://picsum.photos/400?random=" +
      Math.floor(Math.random()*1000);
}