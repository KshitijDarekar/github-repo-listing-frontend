
# Github Repositories Listing - Frontend

An single page application (SPA) that takes a GitHub username as input and displays the public Github repositories belonging to the user.

## Demo 🚀

[![Live Demo](https://img.shields.io/badge/%F0%9F%8C%90%20Live%20Demo-Click%20Here-blueviolet?style=for-the-badge)](https://github-repos-listing.netlify.app/)



## Features

- Display the user’s information such as name, avatar, location, bio, Twitter and social media profiles(if exists)
- The page lists the repositories of the user along with the description and languages used.
- On clicking the repository, the GitHub repository open in a new tab of the browser
- If the username is invalid, shows an error page indicating an invalid GitHub username.
- Implemented Pagination 
    - By default, show `10` repositories per page
    - Show list of pages in the bottom and user can choose from any page or can just go to next page

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`IP`


## Tech Stack

**Client:** Angular 10+ , Bootstrap

**Server:** Node.js, Express.js , Mocha ,Chai

**Tools:** Postman , Netlify , Heroku , Github , VSCode


## Installation

- Make sure you have Node.js and Angular CLI installed on your machine. You can download them from the official website.

- Clone the Angular project repository to your local machine using git clone command    
## Run Locally



Clone the project

```bash
  git clone https://github.com/KshitijDarekar/github-repo-listing-frontend.git
```

Go to the project directory

```bash
  cd github-repo-listing-frontend
```

Install dependencies

```bash
  npm install
```

Start a local development server

```bash
  ng serve
```
Open a web browser and navigate to http://localhost:4200/. The Angular application should now be running locally




## Related Backend Repository

This is the frontend repository of the project.
Here is the link to the backend repository:
👉 [Backend Repository](https://github.com/KshitijDarekar/github-repo-listing-backend)



# Angular Documentation :

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
