$(function () {
    $('#signUpForm').validate({
        rules: {
            firstName: 'required',
            lastName: 'required',
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            },
            confirmPassword: {
                required: true,
                minlength: 5,
                equalTo: '#password'
            }
        },
        messages: {
            firstName: 'Please enter your first name',
            lastName: 'Please enter your last name',
            email: {
                required: 'Please enter your email',
                email: 'Invalid email format'
            },
            password: {
                required: 'Please provide a password',
                minlength: 'Your password must be at least 5 characters long'
            },
            confirmPassword: {
                required: 'Please provide your password again',
                minlength: 'Your password must be at least 5 character long',
                equalTo: 'Please enter the same password as above'
            }
        }
    });
})