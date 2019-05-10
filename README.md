[![Build Status](https://travis-ci.org/ffringel/myretail.svg?branch=master)](https://travis-ci.org/ffringel/myretail)

# Target Interview Case Study

## Problem Statement

myRetail is a rapidly growing company with HQ in Richmond, VA and over 200 stores across the east coast. The company’s annual revenue last year was \$5 billion and growing at the rate of 10% year over year. myRetail sells general merchandise products, including a fast growing fresh grocery segment. The stores average 80,000 sq. ft. in size and carry around 20,000 products. myRetail wants to provide a multi-channel experience for its customers online.

myRetail is comparing solution options for the online grocery store. Create a web application that does the following:

- Use the provided design docs, desktop.psd and mobile.psd, as general guidelines to create the user interface.
- Use the provided json file, item-data.json, to populate the title, images and price.
- The client side code can be backbone, angular or another framework of your choice. React (additional library’s such as Redux are welcome). Use node to run the application.
- Show the add to cart button only if the item is available online, purchasingChannelCode equals 0 or 1.
- Show the pick up in store only if the item is available instore, purchasingChannelCode equals 0 or 2.
- Create a carousel to scroll through the images

### Deliverables

- Test your code - simulate functional testing needs by generating test scripts (automation test cases preferred).
- Build your code and package using gulp, grunt or other tools of your choice.
- Provide approach to deploy code in live environment - continuous delivery flow diagram will suffice.
- Store code in a public git repository like GitHub, GitLab, BitBucket, or Visual Studio Team Services and forward link to Staffing Specialist and Recruiter.

## Using the App

I built the app using an API driven architecture. There are two parts; the backend (powered by Express [https://github.com/ffringel/myserver](https://github.com/ffringel/myserver)) hosted at [https://salty-forest-26637.herokuapp.com/](https://salty-forest-26637.herokuapp.com/) which provides data via a REST API and the React front end which consumes this data and renders it. You can tryout the app in the following ways:

### 1. Visit: [https://sleepy-plateau-35486.herokuapp.com/](https://sleepy-plateau-35486.herokuapp.com/)

###  2. Build the App

- Clone this repository and navigate to it's root
- Run `npm install` to install dependencies
- Start app by running `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view app in browser

**NB:** The app retrieves the JSON data from the REST API which runs on Heroku so you need to be online even when running the app locally. Server  code can be found here [https://github.com/ffringel/myserver](https://github.com/ffringel/myserver)

## Testing

After installing dependencies with `npm install`

- Run `npm test`

## CI/CD

CI/CD has been configured such that for every push to this repo, Travis CI runs the tests, and if all tests pass, it gets deployed automatically to the Heroku cloud.
