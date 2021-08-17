document.getElementById("submit").addEventListener("click", function(){
    var userName = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;

    if(userName=="" || email=="" || pass=="")
    {
        alert("Fill the input fields.")
    }
    else
    {
        if(userName == "nahid" && email == "mueem51@gmail.com" && pass == "mueem")
        {
            alert("Login success.")
            window.location = "banking-site.html";
            
        }
        else
        {
            alert("Please input right info.")
        }
    }  
})
