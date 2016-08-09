---
layout: page
title: Seattle Office Professional Accountability complaint maker/tracker/archiver project
permalink: /about/projects/opa_complaint_maker_tracker_archiver/
---

The initial goal is to make it as easy as possible to file a Seattle Police Office of Professional Accountability complaint via email, a web form, or Twitter. Future input routes would include but not be limited to SMS and Facebook. The complaint would be automatically published online so others could investigate or file complaints if they've had the same problems. A submitter would be able to automatically get status updates via email or Twitter. 

Initial input mechasims:
* Twitter (hashtag and @ reply or mention a bot)
* Portal/form 
* Email

Workflow:
* User submits a complaint
  * Can file it anonymously (if want to, can store contact info so SPR can relay status updates etc)
  * Form will support anonymous, email address only, and login via Google/Facebook oauth
  * If via form we have checkboxes for language like "Please don't call or snail mail me. I don't want to be interviewed."
  * Have checkboxes for most common violation types
  * Have a dropbox like thing for uploading digital evidence related to the complaint
  * If someone @ replies or retweets a message and the reply/retweet mentions our bot then that message being replied to or retweeted is the complaint message
  * If done via Twitter have bot notify complainant that complaint has been filed and to follow the bot to get a DM with info on how to add more info etc to the complaint
  * If done via Twitter, in the email to OPA note that the message could be deleted at anytime. We need to make sure to grab the entire thread of messages
* Complaint is saved in the database with a UID
* Complaint is published online
* Complaint is emailed to opa@seattle.gov via a dynamically created email using the above UID
* If the complaint is significant we publicize via news article. Tim believes [How the Firing of Officer Cynthia Whitlatch Happened: A Timeline](http://www.thestranger.com/blogs/slog/2015/09/16/22866687/how-the-firing-of-officer-cynthia-whitlatch-happened-a-timeline) shows that the firing of Whitlatch would not have happened without news coverage prior to the OPA complaint being filed
* Whenever OPA emails that email address, the complaintant is notified via email or Twitter. If the email, usually the first one, has a complaint number that number is stored in a table mapping our UID to OPA's complaint number. Using [OPA complaint status data on data.seattle.gov](https://data.seattle.gov/City-Business/OPA-Complaint-Tracker/pafy-bfmu)
* We relay to complaintant any status updates
* We process OPA complaint summaries
* We file a records request for the full OPA file
* When records received auto post them attached to the OPA file page
* We write a news story about the investigation
