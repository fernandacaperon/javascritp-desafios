
$("h1")
$("tester")

console.log ($("h1"))


$("#print").append ( 
    '<h2> Proximamente </h2>'
)

$(".btn1").on ("click", () => {
    $(".box1").show ()
})

$(".box1").click(() => { 
    $(".box1").slideUp("fast");
});


