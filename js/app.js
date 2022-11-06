// 
// $(".abrir-modal").click(function () {
//   $(".modal").toggleClass("active");
//   var condicao = $(".modal").hasClass("active");
//   if (condicao) {
//     $(this).html("Fechar");
//   } else {
//     $(this).html("Abrir");
//   }
// });

// animação do menu
/*
$('a').click(function(){
  $('.modal')
  .animate({
    opacity: 'toggle',
    height: 'toggle',    
  }, 500);  
});
*/


// efeito fade
$('.btn').click(function(){
  $('.modal').fadeOut();
//   $('.modal').hide(500);
  });
$('.abrir-modal').click(function(){
  $('.modal').fadeIn();
});








