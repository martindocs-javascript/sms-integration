# SMS Integration

<p style="text-align:center;">
    <img src="./client/src/assets/readme_img1.png" alt="sms integration"/>
</p>

## Description

This project aims to demonstrate the implementation of SMS integration with the MERN stack using Twilio. It showcases the integration of Twilio's API into a web application to enable sending text messages.

## Technologies Used

- React.js, Node.js, Express.js
- Twilio API (npm twilio package, version 4.12.0)

## Features

- Dropdown Country Code (Default: GB): Provides a user-friendly dropdown menu to select the country code for the phone number, ensuring accurate and standardized input.

- Clear Button: Offers a clear button functionality to reset the input fields, allowing users to easily remove entered information and start fresh.

- Input Checker: Implements an input checker that validates whether all required fields are filled before sending an SMS. It ensures that users provide the necessary information, reducing errors and incomplete submissions.


## Installation

To get started with this project, follow these steps:

1. Clone the repository to your local machine using the following command:
```
    git clone https://github.com/martindocs/practice_sms_integration
```
2. Navigate to the project client directory:
```
    cd practice_sms_integration/client
```
3. Install the necessary dependencies:
```
    npm install
```
4. From the client folder navigate to the server folder and install necessary dependencies:
```
    cd ../server/ & npm install
```
5. Configure environment variables:
- Create a `.env` file in the root of the project.
- Add the required environment variables (e.g., Twilio credentials, API keys, etc.) to the `.env` file. You can refer to the `.env.example` file for a template.
6. Start the application:
```
    npm start
```
7. Access the application in your web browser at `http://localhost:3000`

## License

**SMS Integration** is released under the MIT License. The terms of the license are as follows:

```
Copyright (c) 2023 Marcin Tatarski

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

## Contact

You can reach me out via twitter [@MartinTatarski](https://twitter.com/@MartinTatarski).

