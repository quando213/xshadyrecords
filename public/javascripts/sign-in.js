$(function () {
    $('#signInForm').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            email: {
                required: 'Please provide an email',
                email: 'Invalid email'
            },
            password: {
                required: 'Please provide a password',
                minlength: 'Your password must be at least 5 characters long'
            }
        }
    });
})