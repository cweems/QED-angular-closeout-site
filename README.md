#KDMD Close Out Site

This website was created for the USAID Knowledge-Driven Microenterprise Project and is inspired by annualreport-2011.kiva.org.

##For Dan:

Because the final Semi-Annual Report wasn't ready at the time this site went live, I made a placeholder PDF file. In the site files go to app/img/documents/ then replace 10_SAR.pdf with a file of the same name.

##Primary features of the site include:

* Ability to load a large amount of content in an orderly manner.
* Navigation in a sidebar, "next" buttons, and search.
* Organize a variety of content into a cohesive set of information.

This site was built using AngularJS and Twitter Bootstrap. The site functions using a pair of ng-repeat directives that read content from a JSON file. One directive handles the modal triggers and site content, the other handles the modals. If content is not appearing but the side bar is, the JSON is probably invalid.

I chose this method because I needed a light content system and wasn't originally sure where this site would be hosted, and if there would be the ability to create a database. As a result, the items.json and modals.json function as the static content database.

By using ng-repeat, I was able to integrate various filter options that allow for multiple navigation inputs, as well as the ability to search through the site.

Many of the interactive features of the site are from Bootstrap 3.
