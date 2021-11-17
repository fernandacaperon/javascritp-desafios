
$("h1")
$("tester")

console.log ($("h1"))


$("#print").append ( 
    '<p> Seguí testeando otras tipografías </p>'
)

$(".btn1").on ("click", () => {
    $(".box1").show ()
})

$(".box1").click(() => { 
    $(".box1").slideUp("fast");
});



//se activa cuando paso el mousse - este funciona-este esta en el repo

$(document).ready(function() {
  $("#demo").on({
    mouseenter: function() {
       $(this).css({"font-family": "alegreya", "font-size": "200%"});
    }
  });    
});

$(document).ready(function() {
  $("#textoPrueba").on({
    mouseenter: function() {
       $(this).css({"font-family": "alegreya", "font-size": "200%"});
    }
  });    
});

$(document).ready(function() {
  $("#resultadoTest").on({
    mouseenter: function() {
       $(this).css({"font-family": "alegreya", "font-size": "200%"});
    }
  }); 
});
