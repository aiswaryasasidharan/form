function validate() 
{
	let a=document.getElementById('NAME').value;
	let ("^(?=.*[a-z])(?=.*[A-Z])(?=.(?=.*[!@#\$%\^&\*])(?=.{8,})");
	if(name=="")
	{
		alert("name is empty");
		return false;
	}
	else if(isNaN(name))
	{
		alert("enter a name");
		return false;
	}

	else	
	{
      return true;
	}
}
const checkEmail = () =>
 {
 	let email=document.getElementById('d').value;
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};