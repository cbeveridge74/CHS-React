# 2021

# CHS React

**chs-react** is a test project built in **2021** as part of a roadmap to gradually migrate a **.NET application to React**.  
The goal was to develop parts of the application in React while **seamlessly integrating with the existing .NET backend**, particularly using the same authentication and service layers.

> ⚠️ Note: The backend services required for full functionality are no longer available, so the application’s current capabilities are limited.

---

## Features

The project explored several key functionalities:

- **Patient Warnings**  
  Create custom messages displayed to clinicians about a patient.

- **Tasks**  
  Create new tasks and view existing ones.  
  *(Relies on backend services that are no longer available.)*

- **Document OCR**  
  Extract text from documents to support clinical workflows.

---

## Technology Stack

- **React** – Core frontend framework  
- **Sass** – Styling and theming  
- **Bootstrap** – Layout and responsive components  
- **Material UI** – UI components and design system  
- **Lodash** – Utility functions  
- **Jest** – Testing framework

---

## Project Status

> This project was intended as an experimental migration path from .NET to React.  
> Without the original backend services, only a subset of the functionality can be explored.


# Getting Started

This project is designed to be used as discrete components in another app or as full app in the browser.

## User options

### Resources

* ```/tasklist``` shows a list of tasks for a user, redirects to ```/auth``` if no user logged in
* ```/auth``` login
* ```/about``` about page - holds release info at mo
* ```/patientwarnings``` MedKit patient warnings
* ```/newtask``` New task form
* ```/hack``` upload files for hackday
* ```/example``` loads posts from ```https://jsonplaceholder.typicode.com/users/1/posts```


### Query Params

* ```user=``` user id, required for any user related protected resources, such as TaskList. e.g ?user=102
* ```browser=``` default = true, boolean, if true, certain components display, assumes full browser app
* ```country=``` which country - NOT implemented yet
* ```org=``` organisation id e.g. nacs code, X0004 - NOT implemented yet

### Automatic login / timeout

* Once logged in, a timeout is set to logout the user after a fixed amount of time. Currently timeout is 5 mins (for testing purposes)
* The token and expiration time are set in local storage. While timeout greater than 1 min, the user will auto log back in if navigate away from page
* If logged out by timer, local storage cleared and user redirected to login page.
* TO-DO make the expirary time a param in appContext so it can be set by calling app

## Design decisions

* Fetch rather than Axios - altough you do have to handle errors yourself
* Promises over async await - just saves have try catch, .then.then.catch 
* Functions over classes
* Hooks over neste components
* Stateless components, statefull pages
* Components small and re-usable
* Context only for infrequently changed state that is required everywhere
* useContext over ContextConsumer
* Minimise boilerplate, using appropriate libraries
* All component code in same folder
* Styling via MUI and our theme



## Decision still to be made

* Best place for HTTP calls, in module or in separate API folder
* 

## Application State

### Global using context

* isBrowserApp - is the full app in browser, not used in other apps. Default: false
* token - authentication token to be passed to backend
* isLoggedIn - derived from token existing
* userId - logged in user id
* orgId - the organisation for this user
* county - country the app is being used in

### Local Storage

* isBrowserApp - boolean
* token - text
* country - text
* userId - text

### Things to look at

* Passing on query params from a redirect - e.g. once authenticated, don't lose browser param

## License

This project is currently unlicensed and was built as an internal test project.