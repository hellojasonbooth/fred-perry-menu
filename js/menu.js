
$('.navigation-link a').hover(function() {
  
  var link = $(this)
  var overlay = link.data('overlay')
  
  $('.overlay-bg').removeClass('visible')
  $(overlay).addClass('visible')
  
  return false

})

$('.navigation-link a').mouseout(function() {
  
  $('.overlay-bg').removeClass('visible')
  
  return false

})