$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var cardPosition = $(this.card).val();
    console.log(cardPosition);
  });
});
