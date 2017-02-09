$(document).ready(function () {
$('#thanks').click(function (e) {
  e.preventDefault()
  $('#message').html('<div class="alert alert-success alertstyle fade in fade"><button type="button" class="close close-alert" data-dismiss="alert" aria-hidden="true">×</button>You have successfully subscribed</div>');
$(".alert").delay(200).addClass("in").fadeOut(2000);
})
});