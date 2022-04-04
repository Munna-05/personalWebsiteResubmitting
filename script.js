// var nameError = document.getElementById('name-error');
// var emailError = document.getElementById('email-error');
// var messageError = document.getElementById('message-error');
// var submitError = document.getElementById('submit-error');
// const name=document.getElementById('submit-name')





// function validateName(){
//     var name = document.getElementById('submit-name').value;

    

//     if(name.length==0 || name.length==="" ||name.value===0 ||name.value===""){
//         nameError.innerHTML= 'Name is required';
     



//     if(!name.match(/[A-Za-z]*\s{1}[A-Za-z]*$/)){
//         nameError.innerHTML='Write full name';
//         return false;
//     }
//     }
//     nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
//     return true;
// }




// function validateEmail(){
//     var email = document.getElementById('submit-email').value;

//     if(email.length==0 || email.length==""){
//         emailError.innerHTML='Email is required'
//         return false;
//     }
//     if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
//         emailError.innerHTML = 'Email invalid'
//         return false;
//     }
//     emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
//     return true;
// }


// function validateMessage(){
//     var message = document.getElementById('submit-message').value;
//     var required=15;
//     var left=required-message.length;

//     if(left>0){
//         messageError.innerHTML=left+'more character required';
//         return false;
//     }

//     messageError.innerHTML= '<i class="fa-solid fa-circle-check"></i>';
//     return true;
// }

// function validateForm(){
//     let x=document.forms["google-sheet"]["name"].value;
//     // var letters=(/^[A-Za-z]+$/);
//     if(x=="" ){
//        nameError.innerText="enter name";
//         return false;
//     }
//     let e=document.forms["google-sheet"]["email"].value;
//     if(e==""){
//         emailError.innerHTML='enter email';
//         return false;
    
//     }
//     if(x.match(/[A-Za-z]*\s{1}[A-Za-z]*$/)){
//         nameError.innerHTML='only letters allowed';
//         return false;
//     }
    

//     if(!validateName() || !validateEmail() || !validateMessage()){

//         // submitError.style.display='block';
//         submitError.innerHTML='Please fill  and submit';
//         setTimeout(function(){submitError.style.display='none';},3000);
//         return false;
//     }
// }

var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');




function validateName(){
    var name = document.getElementById('submit-name').value;

    if(name.length==0){
        nameError.innerHTML= 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='numbers not allowed';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('submit-email').value;

    if(email.length==0){
        emailError.innerHTML='Email is required'
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email invalid'
        return false;
    }
    else{
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
}

function validateMessage(){
    var message = document.getElementById('submit-message').value;
    var required=15;
    var left=required-message.length;

    if(left>0){
        messageError.innerHTML=left+'more character required';
        return false;
    }

    messageError.innerHTML= '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm(){
    console.log("XDFSDGSDGVDSGDSGSFDGSFG");
    if(!validateName() || !validateEmail() || !validateMessage()){
        console.log(" "+validateName()+" "+validateEmail()+" "+validateMessage())
        // submitError.style.display='block';
        submitError.innerHTML='';
        setTimeout(function(){submitError.style.display='none';},3000);
        return false;
    }
}