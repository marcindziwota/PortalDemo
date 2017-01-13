Portal Demo
------------------

Run Locally:

1. [Install and start Postgres](https://wiki.postgresql.org/wiki/Detailed_installation_guides)
1. [Install Node.js](https://nodejs.org/en/)
1. Create a database in Postgres named `dreamhouse`
1. [Install gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
1. Fetch the NPM dependencies: `npm install`
1. Start the app: `gulp serve`
1. Check out the app: [http://localhost:8200/](http://localhost:8200/)

Run on Heroku:

1. [![Deploy on Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/marcindziwota/PortalDemo)
1. Check out the app: `http://<YOUR APP NAME>.herokuapp.com`

Use Heroku Connect:

1. [Add the Heroku Connect Addon to your Heroku app](https://elements.heroku.com/addons/herokuconnect)
1. Setup Heroku Connect by clicking on *Heroku Connect* in the Resources tab of the app's management dashboard: `https://dashboard.heroku.com/apps/YOUR_APP_NAME/resources`
1. Add mappings for 'Hce__c' each with real-time bi-direction sync.  Select required fields.
1. Restart the app so the new database tables are used
1. Check out the app and verify that sync works by changing data in Salesforce
