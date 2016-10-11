$(document).ready(function(){
	
	$('#confirm').hide();

	nameRegex = /[0-9\\\^\$\|\?\*\+\(\)\[\]\{}`~!@#%&_=:;<>]/;
	emailRegex = /\S+@\S+\.\S+/;

	//	Form validations
	$('#name').focus(function(){
		display('name', 0);
		$(this).removeClass('input-error');
	});
	$('#name').blur(function(){
		validate('name');
	});
	$('#email').focus(function(){
		display('email', 0);
		$(this).removeClass('input-error');
	});
	$('#email').blur(function(){
		validate('email');
	});
	$('#msg').focus(function(){
		display('msg', 0);
		$(this).removeClass('input-error');
	});
	$('#msg').blur(function(){
		validate('msg');
	});
	
});

function validate(id)
{
	var input = $('#'+id).val();
	var $inputError = $('#'+id+'-error');
	var error = "";

	if(isEmpty(input))
	{
		error = "Required";
	}
	else if(regexTest(id, input))
	{
		switch(id)
		{
			case 'name':
				error = "May not contain digits or special characters";
				break;
			case 'email':
				error = "Invalid email address";
		}
	}
	else
	{
		display(id, 0);
		$('#'+id).removeClass('input-error');
		return true;
	}

	$inputError.text(error);
	display(id, 1);
	$('#'+id).addClass('input-error');
	return false;
}

//	Return: true if invalid
function regexTest(element, value)
{
	switch(element)
	{
		case 'name':
			return nameRegex.test(value);
		case 'email':
			return !emailRegex.test(value);
		case 'msg':
			return false;
	}
}

function submitValidate()
{
	//	Honeypot
	var confirm = $('input#confirm').val();
	if(!isEmpty(confirm))
	{
		return;
	}

	//	Hidden Form
	var sender_name = $('#sender_name').val();
	var sender_email = $('#sender_email').val();
	var sender_msg = $('sender_msg').val();

	if(!isEmpty(sender_name) || !isEmpty(sender_email) || !isEmpty(sender_msg))
	{
		return;
	}

	//	Validation
	if(!validate('name') || !validate('email') || !validate('msg'))
	{
		return;
	}
	else
	{
		//	Populate
		$('#sender_name').val(name);
		$('#sender_email').val(email);
		$('#sender_message').val(msg);

		//	Submit
		$('#secret-form').submit();
		console.log('submitted');
	}
}

//	value: 1 to show, 0 to hide
function display(id, value)
{
	$('#'+id+'-error').animate({'opacity':value}, 300);	
}

//	return: true if empty
function isEmpty(value)
{
	return (value == null || value == "");
}