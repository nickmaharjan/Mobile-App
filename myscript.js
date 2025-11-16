$(document).ready(function () {
  $("#first").click(function () {
    $(this).animate(
      {
        fontSize: "40px",
      },
      1000,
      function () {
        $(this).css("color", "red");
      }
    );
    $(this).fadeOut(500).fadeIn(500);
  });
});