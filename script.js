let wrapper = document.querySelector('.wrapper'),
    signUpLink = document.querySelector('.link .signup-link'),
    signInLink = document.querySelector('.link .signin-link');

signUpLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signin');
    wrapper.classList.remove('animated-signup');
});

signInLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signup');
    wrapper.classList.remove('animated-signin');
});

document.addEventListener('DOMContentLoaded', function () {
    const signUpForm = document.querySelector('.sign-up form');
    const signInForm = document.querySelector('.sign-in form');
    const signUpContainer = document.querySelector('.form-container.sign-up');
    const signInContainer = document.querySelector('.form-container.sign-in');
    const signUpLink = document.querySelector('.signup-link');
    const signInLink = document.querySelector('.signin-link');

    // Function to handle sign-up form submission
    signUpForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = signUpForm.querySelector('input[type="text"]').value;
        const email = signUpForm.querySelector('input[type="email"]').value;
        const password = signUpForm.querySelector('input[type="password"]').value;
        const confirmPassword = signUpForm.querySelectorAll('input[type="password"]')[1].value;

        // Add your validation logic here
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // Show success message
        alert('Sign up successful!');

        // Hide sign-up container and show sign-in container
        signUpContainer.classList.remove('active');
        signInContainer.classList.add('active');
    });

    // Function to handle sign-in form submission
    signInForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = signInForm.querySelector('input[type="text"]').value;
        const password = signInForm.querySelector('input[type="password"]').value;

        // Add your sign-in logic here
        alert('Sign in successful!' );

        // Optionally, you can redirect or perform other actions after sign-in
    });

    // Function to toggle between sign-up and sign-in forms
    signUpLink.addEventListener('click', function (event) {
        event.preventDefault();
        signUpContainer.classList.add('active');
        signInContainer.classList.remove('active');
    });

    signInLink.addEventListener('click', function (event) {
        event.preventDefault();
        signUpContainer.classList.remove('active');
        signInContainer.classList.add('active');
    });
});