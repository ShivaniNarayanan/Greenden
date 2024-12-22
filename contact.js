//selecting sidenavbar and menu
var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function(){
    sidenav.style.right="0"
})

closenav.addEventListener("click", function(){
    sidenav.style.right="-50%"
})

var submit = document.getElementById("submit")
submit.addEventListener("click",function(){
    event.preventDefault()

    var nameRegx = /^[a-zA-Z]+$/
    var emailRegx = /^[a-zA-Z0-9]+@gmail\.com/
    var phoneRegx = /^[a-zA-Z]/

    var name = document.getElementById("name")
    var phone = document.getElementById("phone")
    var email = document.getElementById("email")
    var validate = true
    if(nameRegx.test(name.value)  == false)
    {
        document.querySelector(".nameError").style.display="inline"
        validate = false
    }
    else{
        document.querySelector(".nameError").style.display="none"
    }
    if(phoneRegx.test(phone.value)  == false)
    {
        document.querySelector(".phoneError").style.display="inline"
        validate = false
    }
    else{
        document.querySelector(".phoneError").style.display="none"
    }
    if(emailRegx.test(email.value)  == false)
    {
        document.querySelector(".emailError").style.display="inline"
        validate = false
    }
    else{
        document.querySelector(".emailError").style.display="none"
    }
    if(validate == true){
        alert("Form Submitted Successfully")
    }
})