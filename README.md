

<details>
<summary>Logbook</summary>

# reimagined-lamp
Cybersecurity and data privacy - Blended Logbook for the course


# Logbook of stuff


<details>
<summary>Logbook</summary>

| Date | Time | Thing done | Things result |
|-----:|-----------|-----|-----------|
|30.10.2024| 2 h  | Lecture speedrunning, quiz| Quiz done, this logbook started|
|31.10.2024| 2 h  | First chapter done        | Progress on course              |
|2.11.2024 | 2 h  | Second chapter done       | Progress on course              |
|4.11.2024 | 3 h  | Third chapter done        | Progress on course              |
|5.11.2024 | 4 h  | Starting up PortSwigger   | Ability to start a next task    |
|5.11.2024 | 2 h  | Few labs in PortSwigger   | Progress on SQL injection labs  |
|5.11.2024 | 2 h  | Few labs in PortSwigger   | Progress on authentication labs |
|6.11.2024 | 2 h  | More labs in PortSwigger  | Progress on SQL injection labs  |
|6.11.2024 | 1 h  | Fourth chapter done       | Progress on course              |
|7.11.2024 | 2 h  | Fifth chapter done        | Progress on course              |
|7.11.2024 | 1 h  | Module exam done          | Part of course done             |
|8.11.2024 | 3 h  | PortSwigger labs          | Progress on authentication labs |
|11.11.2024| 4 h  | PortSwigger labs          | Progress on access control labs |
|11.11.2024| 3 h  | PortSwigger labs          | 4x SQL, 4x access, 5x auth labs |
|11.11.2024| 3 h  | Lecture watching, website | Starting Phase 1 of application |
|12.11.2024| 4 h  | Lecture watching, website | Progress Phase 1 of application |
|18.11.2024| 2 h  | Smashing head on wall     | Website functional now          |  
|18.11.2024| 3 h  | Smashing head on wall pt.2| Website passes ZAP tests now    |
|22.11.2024| 4 h  | Adding index, login pages | Pages added, ZAP tests passed   |
|29.11.2024| 2 h  | Reservation pages added   | Pages added                     |
|29.11.2024| 2 h  | Writing issues.md         | Figuring out what all is bad    |
|29.11.2024| 1 h  | Editing readme file       | Fixed the readme, added link    |
|4.12.2024 | 2 h  | Adding new fields to DB   | Debugged, learnt, DB works      |
|4.12.2024 | 2 h  | Account, terms, policy    | Required pages added, DB works  |
|4.12.2024 | 2 h  | New page testing          | ZAP reports, bug fixes done     |
|9.12.2024 | 2 h  | Last Assignment writing   | All phases done, course done    |


</details>

# More detail about what i have done between ZAP reports

Link to report 1: https://github.com/NKRisu/reimagined-lamp/blob/main/2024-11-18-ZAP-Report-.md

After I had tried to fix broken code for the website, backend and also made some errors in the SQL database in Docker container, I begrudgingly gave up on my own codebase and copied the codebase that was given. Started completely from scratch and setup Docker properly, created the SQL database and checked all the tables and naming conventions are correct to what the code asks for are there and launched the website using Deno. Surprisingly the website functioned this time. I then went and tested manually setting valid inputs, invalid inputs and seeing how the database updated, everything seemed okay! That's good! 

So now it was time to see what all was broken security wise on the website based on ZAP report. Obviously there are a lot more glaring issues in the codebase but this is good start. With the report i found out that Content Security Policies should eb set, and so should X-Frame-Options and X-Content-Type-Options. So quick googling on how to deal with these, adding bunch of code from the internet, and drag server back up and running to test it.

Link to last report: https://github.com/NKRisu/reimagined-lamp/blob/main/2024-11-18-ZAP-Report-localhost.md

And miracilously, all alerts have been dealth with. So far. More features to be added, more code to be broken and fixed. 


# Adding index page and login page

Link to report 1: https://github.com/NKRisu/reimagined-lamp/blob/main/2024-11-22-ZAP-Report-.md 

After running multiple scans, there was no errors shown. Checking the report it only says: "This is an informational alert rather than a vulnerability and so there is nothing to fix.", So I don't exactly know if there is anything to add. I already added the bare minimum in Phase 1. On the server logs side I can see that there are a lot of failed attempts by ZAP-scans where server slaps the attempts down, so maybe it does actually work :D Also checked the database to check that data is correctly stored and retviewed. So it all works. Yay.

Link to report 2: https://github.com/NKRisu/reimagined-lamp/blob/main/2024-11-22-ZAP-Report-2.md

# Adding Reservation and Resource pages

Joinked the page files and read through the code to make sure it works with my codebase. Then ran ZAP tests on the newly added pages with no alarms shown. Zap report of this is in the files.
Link to report: https://github.com/NKRisu/reimagined-lamp/blob/main/2024-11-29-ZAP-Report-.md 

# Figuring out the issues and changes that should be made

The booking system is really not production ready and there is a lot that has to be changed from locally hosted semi-safe website beta version to actual production based version. In the assignment it was asked to mark down 5 of the most important changes and fixes required to make the codebase approach production. Some of the changes are quite simply just about stopping the use of quick ways to build test environment that allows the system to function for testing at this point, such as not using in-memory store for the session management. 

Anyways, link to the issues.md is here: https://github.com/NKRisu/reimagined-lamp/blob/main/Issues.md 

# Adding account page, terms&conditions page and privacy notice pages

Adding the pages required updates to the database, new fields for account creation date and terms accepted were required for the account page to show properly. Login log table had to be created as new functions in backend require logging to function properly. With some bit of googling I figured out the commansd to add new fields and create new tables and could also peek in and see that the tables and fields were created correctly. After which I then could test the pages in browser and with ZAP. 

The ZAP report came with some informational alerts due to comments in code it seems like. Following ZAP's suggestion these comments should be removed from code going to production.

and the link to latest report: https://github.com/NKRisu/reimagined-lamp/blob/main/2024-12-04-ZAP-Report-.md 

# Yapping about consent on the service and if its implemented properly

So the system does ask for terms of service consent, but this is not quite what is required and does not cover everything. GDPR requires explicit consent from the user for processing of personal data, so this should be made extremely clear to the user. There are currently no cookie and tracker consent popups either when the service technically does use cookies. Asking for consent from the user for their data and explaining clearly what it is used for is also great way to build trust for the user. Or distrust if they feel like no data should be gathered... I personally am not too aware of all the legal hoops I should jump through with a service that collects data, which means asking consent and explicitly explaining what the information is used for and how its stored and who is liable if something goes wrong is highly imporant. 

During user registration, user is required to accept the terms and conditions and also the privacy policy or notice. These pages are also available for viewing for the user if they so choose. This is like the bare minimum of user consent asking, even though these two documents overlap a little they are different documents and they do containt different information. Asking for user consent for their data during registration is required by quite few requlations, and even if it was not, it would still be good practice to get explicit consent to handle users private data.








