
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


