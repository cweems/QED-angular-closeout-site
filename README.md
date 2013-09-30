#KDMD Close Out Site

###About

This website was created for the USAID Knowledge-Driven Microenterprise Project and is inspired by annualreport-2011.kiva.org.

Primary features of the site include:

* Ability to load a large amount of content in an orderly manner.
* Navigation in a sidebar, "next" buttons, and search.
* Organize a variety of content into a cohesive set of information.
* Content management via JSON rather than SQL.

###Github Basics

Github has served as the online backup/repository for this website. In the event that the site is accedentally deleted, simply download .zip file copy, unpack, and replace on the server.

###Directory Structure

Probably the best way to understand the site is a quick walkthrough of the structure. The main files of this application are loated in the 'app' folder, which has the following structure:

app<br>
  |_ bower_components (package manager for AngularJS).<br>
  |<br>
  |_ contnent<br>
  |   |_ items.json (modal triggers, elements that appear on the main page.)<br>
  |   |_ modals.json (modals and their content)<br>
  |<br>
  |_ css<br>
  |   |_ bootstrap.css (provides the bootstrap framework)<br>
  |   |_ style.css (provides custom styles)<br>
  |<br>
  |_ fonts (contains Gill Sans, other fonts are loaded from the Google Fonts API)<br>
  |<br>
  |_ img (all images)<br>
  |   |_ documents (contains the final semi-annual reports and other PDFs)<br>
  |   |_ items (images that appear in modals or modal triggers)<br>
  |<br>
  |_ js (the javascript)<br>
  |<br>
  |_ lib (the angularjs library)<br>
  
  
###Uploading the Final Semi-Annual Report

Because the final Semi-Annual Report wasn't ready at the time this site went live, I made a placeholder PDF file. In the site files go to app/img/documents/ then replace 10_SAR.pdf with a file of the same name.

###Other notes for Dan

This site was built using AngularJS and Twitter Bootstrap. The site functions using a pair of ng-repeat directives that read content from a JSON file. One directive handles the modal triggers and site content, the other handles the modals. If content is not appearing but the side bar is, the JSON is probably invalid. I can't imagine why this would happen in the future, but in case it does, you can validate the JSON here: http://jsonlint.com.

I chose this method because I needed a light content system and wasn't originally sure where this site would be hosted, and if there would be the ability to create a database. As a result, the items.json and modals.json function as the static content database.

By using ng-repeat, I was able to integrate various filter options that allow for multiple navigation inputs, as well as the ability to search through the site.

Many of the interactive features of the site are from Bootstrap 3.

###Minification

I plan on minifying all of the css and js files using Grunt.js. This means that all of the source css and js will be difficult to read. If you need to make changes to the site, I would recommend forking this repository and then making your edits in the 'app' folder. You can either re-upload the 'app' files directly, or you can use grunt to concatenate and minify all of the css and js. It's really up to you!
