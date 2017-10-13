$(function() {
  $('#moreBtn').click(function(){
        $('html,body').animate({ scrollTop: document.getElementById('header').clientHeight }, 400);
        return false;
  });

});
