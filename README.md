

<details>
<summary>Logbook</summary>

# reimagined-lamp
Cybersecurity and data privacy - Blended Logbook for the course


# Logbook of stuff


<details>
<summary>Logbook</summary>

| Date | Time | Thing done | Things result |
|-----:|-----------|-----|-----------|
|30.10.2024| 1 h  | Lecture speedrunning, quiz| Quiz done, this logbook started|
|31.10.2024| 2 h  | First chapter done        | Progress on course              |
|2.11.2024 | 2 h  | Second chapter done       | Progress on course              |
|4.11.2024 | 1 h  | Third chapter done        | Progress on course              |
|5.11.2024 | 1 h  | Starting up PortSwigger   | Ability to start a next task    |
|5.11.2024 | 2 h  | Few labs in PortSwigger   | Progress on SQL injection labs  |
|5.11.2024 | 2 h  | Few labs in PortSwigger   | Progress on authentication labs |
|6.11.2024 | 2 h  | More labs in PortSwigger  | Progress on SQL injection labs  |
|6.11.2024 | 1 h  | Fourth chapter done       | Progress on course              |
|7.11.2024 | 1 h  | Fifth chapter done        | Progress on course              |
|7.11.2024 | 1 h  | Module exam done          | Part of course done             |
|8.11.2024 | 2 h  | PortSwigger labs          | Progress on authentication labs |
|11.11.2024| 2 h  | PortSwigger labs          | Progress on access control labs |
|11.11.2024| 3 h  | PortSwigger labs          | 4x SQL, 4x access, 5x auth labs |
|11.11.2024| 3 h  | Lecture watching, website | Starting Phase 1 of application |
|12.11.2024| 4 h  | Lecture watching, website | Progress Phase 1 of application |
|18.11.2024| 2 h  | Smashing head on wall     | Website functional now          |  
|18.11.2024| 2 h  | Smashing head on wall pt.2| Website passes ZAP tests now    |
|22.11.2024| 4 h  | Adding index, login pages | pages added, ZAP tests passed   |
|placehold | placehold | placehold            | placehold                       |
</details>

# More detail about what i have done between ZAP reports

Link to report 1: https://github.com/NKRisu/reimagined-lamp/blob/main/2024-11-18-ZAP-Report-.md

After I had tried to fix broken code for the website, backend and also made some errors in the SQL database in Docker container, I begrudgingly gave up on my own codebase and copied the codebase that was given. Started completely from scratch and setup Docker properly, created the SQL database and checked all the tables and naming conventions are correct to what the code asks for are there and launched the website using Deno. Surprisingly the website functioned this time. I then went and tested manually setting valid inputs, invalid inputs and seeing how the database updated, everything seemed okay! That's good! 

So now it was time to see what all was broken security wise on the website based on ZAP report. Obviously there are a lot more glaring issues in the codebase but this is good start. With the report i found out that Content Security Policies should eb set, and so should X-Frame-Options and X-Content-Type-Options. So quick googling on how to deal with these, adding bunch of code from the internet, and drag server back up and running to test it.

Link to last report: https://github.com/NKRisu/reimagined-lamp/blob/main/2024-11-18-ZAP-Report-localhost.md

And miracilously, all alerts have been dealth with. So far. More features to be added, more code to be broken and fixed. 


# Adding index page and login page

Link to reports: 1: https://github.com/NKRisu/reimagined-lamp/blob/main/2024-11-22-ZAP-Report-.md 2: https://github.com/NKRisu/reimagined-lamp/blob/main/2024-11-22-ZAP-Report-2.md

After running multiple scans, there was no errors shown. Checking the report it only says: "This is an informational alert rather than a vulnerability and so there is nothing to fix.", So I don't exactly know if there is anything to add. I already added the bare minimum in Phase 1. On the server logs side I can see that there are a lot of failed attempts by ZAP-scans where server slaps the attempts down, so maybe it does actually work :D
