function validate(){
    if (document.myForm.employeeId.value==""){
        document.getElementById("idErr").innerHTML = "Please Enter Your ID";
        return false;
    }
    if (document.myForm.fname.value==""){
        document.getElementById("fnameErr").innerHTML = "Please Enter Your First Name";
        return false;
    }
    if (document.myForm.lname.value==""){
        document.getElementById("lnameErr").innerHTML = "Please Enter Your Last Name";
        return false;
    }
    if (document.myForm.address.value==""){
        document.getElementById("addressErr").innerHTML = "Please Enter Your Address";
        return false;
    }
    if (document.myForm.department.value==""){
        document.getElementById("deptErr").innerHTML = "Please Enter Your Department";
        return false;
    }
    if (document.myForm.position.value==""){
        document.getElementById("postErr").innerHTML = "Please Enter Your Position";
        return false;
    }
    if (document.myForm.email.value==""){
        document.getElementById("emailErr").innerHTML = "Please Enter Your Email";
        return false;
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(document.myForm.email.value)==false){
            alert("Please enter a valid email address");
            return false;
        }
    }
    if (document.myForm.contact.value==""){
        document.getElementById("contactErr").innerHTML = "Please Enter Your Contact No.";
        return false;
    }
    if (document.myForm.salary.value==""){
        document.getElementById("salErr").innerHTML = "Please Enter Your Salary";
        return false;
    }
    if (document.myForm.username.value==""){
        document.getElementById("userErr").innerHTML = "Please Enter Your Username";
        return false;
    }
    // asdasd
    // if(document.myForm.email.value==""){
    //     document.getElementById("emailErr").innerHTML = "Please Enter Your Email Address";
    //     return false;
     
}

