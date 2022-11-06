$(".abrir-modal").click(function () {
  $(".modal").toggleClass("active");
  var condicao = $(".modal").hasClass("active");
  if (condicao) {
    $(this).html("Fechar");
  } else {
    $(this).html("Abrir");
  }
});
