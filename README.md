This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# ClassHub App 

In this project you can add a course by a unique ID, which will create a new course or find a created course. In each course you can find friends which you can send friend request in order to add them to your friend list and send instant messages to them. Users can post notes to a course section in which other users can comment on the post. 

* [ClassHub](https://classhub-hunter.herokuapp.com) -  ClassHub website on heroku server
* [ClassHub - API](https://github.com/SalvadorM/hunter_app_api) -  ClassHub REST API


---
## Sample Accounts
```
    username: salva_awesome
    password: 12345a

    username: sarai_awesome2
    password: 12345a
```
---
## Sample Course Section
```
    season: spring 
    year:   2019
    classCode: 101
    className: ClassHub
    section:   1
    information: General class in which users can test the apps features!
```
---
---

## Errors
Desktop session, Chrome and Firefox work fine with express-session. The set-cookie header does not work in safari, or mobile browsers. Cookie headers seems to work fine in Chrome and Firefox desktop browser but are not being sent out in mobile browsers or safari.

Possible ways to fix is to use JWT instead of session cookies. Maybe for next project. 


There is an open issue in github/express/session regarding the problem this app currently has. 
* [There is an open issue in github/express/session regarding the problem this app currently has](https://github.com/expressjs/session/issues/600) 

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

