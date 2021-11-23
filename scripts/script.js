function validateLogin() {
	var userName=document.forms["loginForm"]["username"].value;
	var passWord=document.forms["loginForm"]["password"].value;

	if (userName==="admin"&&passWord==="password123")
	{
		return true;
	}
	else
	{
		alert("Enter valid username or password");
		return false;
	}
}