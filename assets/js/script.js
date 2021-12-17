$(document).ready(function (){

// Smooth Scroll

    $("a").click(function (){
        var gato = this.hash

        $("html, body").animate(
            {
                scrollTop: $(gato).offset().top - 70
            },
            800
        )


    })

})

// Tooltip

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Modal

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
