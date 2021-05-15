

function login()
	{
		var uname = document.getElementById("uname").value;
		uname = uname.toLowerCase();
		var pwd = document.getElementById("pwd1").value;
		console.log(`login function ${uname} ${pwd}`);
		const person = {
			username: uname,
			password: pwd
		}
		
		window.localStorage.setItem('user', JSON.stringify(person));

		var userold = JSON.parse(window.localStorage.getItem('user'));

		console.log(userold);
        if (uname=='admin'){
			console.log('navigate to admin page')
            window.location.href = "./products.html";
        }
		else
		{
            window.location = "cartpage.html";
			}
			
			
	}
	//Reset Inputfield code.
	function clearFunc()
	{
		document.getElementById("uname").value="";
		document.getElementById("pwd1").value="";
	}	

	function pwdreset(){
		var username = document.getElementById("uname").value;
		console.log(username);
		var currentpwd = document.getElementById("currentpwd").value;
		console.log(currentpwd);
		var newpwd = document.getElementById("newpwd").value;
		console.log(newpwd);
		var confirmpwd = document.getElementById("confirmpwd").value;
		console.log(confirmpwd);

		//----------------------------------------
		const person = {
			username: username,
			password: newpwd
		}
		
		window.localStorage.setItem('user', JSON.stringify(person));


		var usernew = JSON.parse(window.localStorage.getItem('user'));

		console.log(usernew);
		window.location="products.html"
	}


