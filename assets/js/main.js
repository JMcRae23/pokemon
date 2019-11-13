function randomImage() {

    var fileNames = [
      "img1.png",
      "img2.png",
      "img3.png",
      "4.png",
      "5.png"
    ];
  
    var randomIndex = Math.floor(Math.random() * fileNames.length);
  
    document.getElementById("background").fileNames[randomIndex];
    setTimeout(function() {
      randomImage();
    }, 10000);
  }


