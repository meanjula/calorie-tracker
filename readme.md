# Calorie Counting App

## Table of contents

- General info
- Technology

* Setup
* Sources

## General info

Calorie counting app created from scratch using html, css and javaScript.
parcel used as a module bundlers.
FetchWrapper class is used to get base url and api endpoint.
Open source Api (firebase) is used to post and fetch data.
User input such as(food name, carbohydrate value, protein value, fat value) is saved
to firebase Api.
snackbar is used for notifying update 0f food data to food Api.
Chart constructed using chart.js with user input data.
Individual food item is displayed using DOM and event handlers.
Css is applied for styling the app.

## Technology

Project is created with:

- chart.js: 3.5.1
- parcel:2.0.0-rc.0
- snackbar:1.1.0

## Setup

To create this project, install parcel locally using npm:

```
$ cd project directory
$ npm init -y
$ npm add --dev parcel@next --save
- open editor and create src folder with html,js and css.
- inside package.json's scripts add  ("start": "parcel src/index.html").
$ npm start
$ npm install chart.js
$ npm install snackbar
- before starting import following things in your js file
import Chart from "chart.js/auto";
import snackbar from "snackbar";
import "snackbar/dist/snackbar.min.css";
```

## Learn More

You can learn more in the [Parcel documentation](https://parceljs.org/getting-started/webapp/)

## references

https://github.com/chartjs/Chart.js​​​​​​​

https://www.npmjs.com/package/snackbar​​​​​​​
