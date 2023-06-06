# Newsletter Signup

This repository contains a simple newsletter signup web application built with Node.js, Express, and the Mailchimp API. It allows users to sign up for a newsletter by providing their name and email address.

## Demo

Check out the live demo of the Newsletter Signup application [here](https://anasbaqai-newsletter-signup.herokuapp.com/).

## Features

- User-friendly interface: The application provides a clean and intuitive interface for users to sign up for the newsletter.
- Name and email validation: The input fields validate the user's name and email address to ensure correct formatting.
- Secure data handling: User information is securely stored and processed using the Mailchimp API.
- Subscription success and failure feedback: Users receive clear feedback on the success or failure of their subscription attempt.

## Getting Started

To get a local copy of this project up and running, follow these steps:

1. Clone the repository:
   git clone https://github.com/AnasBaqai/newsletter-signup.git
2. Navigate to the project directory:<br>
    cd newsletter-signup <br>
3. Install the dependencies: <br>
    npm install
4. Set up your Mailchimp account and obtain an API key.
5. Create a .env file in the project root directory and add your Mailchimp API key and audience ID in the following format:<br>
    MAILCHIMP_API_KEY=your-api-key<br>
    MAILCHIMP_AUDIENCE_ID=your-audience-id
6. Start the application:
       npm start
7. Open your web browser and visit http://localhost:3000 to access the application.
##  Customization
You can customize the application to fit your specific needs:

Update the HTML and CSS files in the public directory to modify the visual appearance of the signup form.<br>
Modify the success and failure pages in the views directory to change the feedback messages shown to users.<br>
Adjust the validation logic in the app.js file to add or remove validation rules for the name and email fields.<br>

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1.Fork the repository.<br>
2.Create a new branch for your feature/bug fix.<br>
3.Make your changes and test thoroughly.<br>
4.Submit a pull request, explaining the changes you've made.<br>
## License

Feel free to copy and paste the content above into your README.md file for the "Newsletter Signup" repository.
