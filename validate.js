var isSpinner; 

 function Spinner()
{
    document.getElementsByClassName("loader")[0].style.display = "block";
    setTimeout(removeSpinner, 2000)

}

function removeSpinner()
{
    document.getElementsByClassName("loader")[0].style.display = "none";
}





 function ValidateEmail(inputText)
{



var mailformat = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/
;
var phoneformat = /^\d{10}$/
;

if(inputText.value.match(mailformat))
{
   
    setTimeout(successMail, 3000)
    document.form1.mail1.focus();
    return true;
}
else if(inputText.value.match(phoneformat))
{
    
    setTimeout(successPhone, 3000)
    document.form1.mail1.focus();
    return true;
}

if(!inputText.value.match(mailformat) && !inputText.value.match(phoneformat))
{

    //alert("Incorrect phone or email");
    setTimeout(failRegister, 3000)
    document.form1.mail1.focus();
    return true;    
}


function successMail()
{
    alert("Registration With Mail is Complete!");
    return true;
}

function successPhone()
{
    alert("Registration With Phone is Complete!");
    return true;
}

function failRegister()
{
    alert("Incorrect phone or email");
    return true;
}
}