$('img').mouseover(function() {
  $(this).attr('src','assets/bookmark4.jpg');
});

$('img').mouseout(function() {
  $(this).attr('src','assets/bookmark3.jpg');
});

$(".removeBookmark").click(function() {
  return confirm('Really delete this bookmark?');
});

$(".deleteWeb").click(function() {
  return confirm('Really delete this website?');
});