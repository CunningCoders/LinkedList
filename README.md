[![Stories in Ready](https://badge.waffle.io/CunningCoders/LinkedList.png?label=ready&title=Ready)](https://waffle.io/CunningCoders/LinkedList)
# LinkedList
Platform for dev-to-dev collaboration.

LinkedList provides web developers with the collaboration tools they need to ship code. Project owners can create a new LinkedList project, and specify which aspects, frameworks, or tools they wish for collaborators to work on. Other users can then express interest in a project position as long as the project owner desires. Then the owner simply looks over the profiles and on-site reputations of the developers who have signed up, and picks the best match for each collaborator position on the project. Upon project completion, both the project owner and the collaborators have the opportunity to rate and review each other, allowing good collaborators to build up their community reputation and protecting project owners from collaborators who are unpleasant to work with. 

## Getting Started
Getting started on LinkedList is easy! Simply signup, fill in a couple of basic details about your skills and preferred frameworks, and you are ready to get collaborating! We make it simple so you can spend your time shipping code. 

##Setting up the Database
Make sure postgres is installed and running. For local setup run 
```javascript
node server/db/test.js
``` 
to use the 
```javascript
db.initDB()
```
function. This will initialize the database and tables. Test.js also has a function called 
```javascript
populate()
```
that is commented out, but you can run it to add a few users and jobs to the database. If you want to run initDB again you will have to drop the database. You can either use the 
```javascript 
db.resetDB()
```
function or do it manually with psql:
```sql
drop database linkedlist
```

