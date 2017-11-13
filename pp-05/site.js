// Release the dollar-sign from jQuery's control
$.noConflict();

(function($) {
  function ringDoorbell() {
    var doorbell = new Audio('media/doorbell.mp3');
    doorbell.play();
  }
  
  /* remove audio element for js-supported browsers */
  $("audio").remove();

  /* add click event listener */
  $("#doorbell").on("click", function() {
    ringDoorbell();
  });
})(jQuery);