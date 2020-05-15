# 03 JavaScript: Password Generator.
Create an application that will generate a random password, based on user-selected criteria in order to exercise key javascript concepts like programing logic, flow control, JS linkage to HTML, and accessing DOM elements in JS, etc.

## 1. Guidelines
User Story and Acceptance Criteria were provided in the original README.md along with starter code and a sample UI in order to get a better sense of what was the target objective of the assignment. All of this input was taking into account when deciding the actual implementation route taken. Listed below is a review of the input provided for the assigment.

### 1.1. Provided User Story.
AS AN employee with access to sensitive data,
I WANT to randomly generate a password that meets certain criteria,
SO THAT I can create a strong password that provides greater security.

### 1.2. Acceptance Criteria Checklist.
* Create an application that generates a random password based on user-selected criteria. --- Done --- Issac.
* This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes. --- Done --- Issac.
* GIVEN I need a new, secure password:
* WHEN I click the button to generate a password, THEN I am presented with a series of prompts for password criteria. --- Criteria is displayed in the main UI instead of using basic javascript prompts. --- Done --- Issac.
* WHEN prompted for password criteria, THEN I select which criteria to include in the password. --- Checkboxes provided in the UI give a more intuitive usage for the user when selecting which criteria to include. --- Done --- Issac.
* WHEN prompted for the length of the password, THEN I choose a length of at least 8 characters and no more than 128 characters. --- Validation logic is implemented --- Done --- Issac.
* WHEN prompted for character types to include in the password, THEN I choose lowercase, uppercase, numeric, and/or special characters. --- These options are provided in the UI through checkbox controls. --- Done --- Issac.
* WHEN I answer each prompt, THEN my input should be validated and at least one character type should be selected. --- Validation logic is implemented in order to ensure that at least one criteria is selected. --- Done --- Issac.
* WHEN all prompts are answered, THEN a password is generated that matches the selected criteria. --- When clicking on `Generate` button control, validation logic confirms that user input is as expected, if logic is satisfied new password is the main screen text box area, if this is not the case error message is displayed. --- Done --- Issac.
* WHEN the password is generated, THEN the password is either displayed in an alert or written to the page. --- Password is presented in Index.HTML's password area text box. --- Done --- Issac.

### 1.3. Deliverables.
* The URL of the deployed application.
--- https://carlosissac.github.io/mod03hwpswdgen/ --- Done --- Issac
* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.
--- https://github.com/carlosissac/mod03hwpswdgen --- Done, name of the repo is `mod03hwpswdgen`, a new README.md detailing the development process is also provided and displayed.

## 2. Features and Comments.


## 2.1. UI Design.
* App has a main page (index.HTML) where the main functionality is displayed, and an About page with detailed instructions are provided and supporting links are also included.
* Image was included in About page in order to ensure a responsive and functional layout was successfully implemented. This was verified using different screen sizes and responsive mode in Chrome browser's DevTools.
* Positioning, Layout, text and design were all intentional. 
* Navbar has functioninig links.
* Brand button redirects to Index.HTML.
* Image has a live link to my personal social media.
* Sticky footer was implemented.
* Additional styling fonts were successfully linked. The folloing URL was used https://use.fontawesome.com/releases/v5.10.1/css/all.css.
* The following bootsrap theme was succesfully linked https://bootswatch.com/united/.




## 2.2. HTML and CSS.
* Semantic html was used.
* Alt Tags were included in the image.
* Each page has a have valid and correct HTML. In order to verify the folliwng validator was used https://validator.w3.org/nu/ . No errors are found in the final version. 

## 2.3. JS.

## 2.4 Extra Challange.

## 3. Conclusions.

## 4. Appreciations.
