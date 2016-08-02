$(document).ready(function() {
  $("form").click(function() {
    var cardPosition = $(this.card).val();
    console.log(cardPosition);
  });
});
