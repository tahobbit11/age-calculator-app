# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](/Screenshot%202023-04-19%20174005.png)


### Links

- Solution URL: [https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q/hub](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q/hub)
- Live Site URL: [https://tahobbit11.github.io/age-calculator-app/](https://tahobbit11.github.io/age-calculator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
### What I learned

I learned how to take someones input and convert it into what your exact age is.

```html
<label for="date">Day</label>
            <input type="number" id="input-data-day" placeholder="DD"/>
            <p id="nothing-day">This field is required</p>
            <p id="not-valid-day">Must be a valid day</p>
            <p id="date-valid">Must be a valid date</p>
```
```css
   input[type='number'] {
    font-size: 1.25em;
    font-weight: 800;
    border: 1px solid hsl(0, 0, 86%);
    border-radius: 5px;
   }
```
```js
    let years = todayDate.getFullYear() - birthDate.getFullYear();
    let months = todayDate.getMonth() - birthDate.getMonth();
    let days = todayDate.getDate() - birthDate.getDate();
```
### Continued development

In the future I wish to continue with trying to polish up the calculation part of the JS so that it will actually represent the day/month/year that is added. I also wish to add the line in the center of the button so it's the same as the design images as well as various other tweaks to the code.

## Author

- Website - [Taylor Hobbs](https://tahobbit11.github.io/Portfolio/)
- Frontend Mentor - [@tahobbit11](https://www.frontendmentor.io/profile/tahobbit11)
