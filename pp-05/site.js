function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}

$(function() {
  /* remove audio element for js-supported browsers */
  $("audio").remove();
});