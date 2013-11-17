// http://i.imgur.com/MRES6Pe.png
(function() {
  var imageLoader = $('#imageLoader');
  imageLoader.bind('change', function (e) {
    var reader = new FileReader();
    reader.onload = function(event){
      var userImage = new Image();
      var c = document.getElementById("image-canvas");
      var ctx = c.getContext("2d");
      var img = document.getElementById("tape");
      userImage.src = event.target.result;
      c.width = userImage.width;
      c.height = userImage.height;
      ctx.drawImage(userImage, 0, 0);

      var tapeRatio = tape.width / tape.height;
      var newHeight = userImage.height / 3;
      var newWidth = tapeRatio * newHeight;
      ctx.drawImage(
        tape, userImage.width - newWidth - 10, userImage.height / 3, newHeight,
        newWidth);
      $('#png-link').attr('href', c.toDataURL("image/png"));
    };
    reader.readAsDataURL(e.target.files[0]);
  });
})();
