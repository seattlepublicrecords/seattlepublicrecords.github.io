---
title: High priority IT to-do list for Seattle Public Records as of July 26, 2016
date: '2016-07-26 09:41:00'
thumbnail: ''
categories:
- about
description: ''
author: Tim Clemans
layout: post
---
1. To support the Real Cops of Seattle docuseries: Write a script that auto joins videos chunks from GoPro SD card in the order they were created, reduces file size and uploads to Youtube. This would be a Python script running on Windows using FFMPEG. I've auto uploaded files to Youtube that were placed in a given directory and I've used FFMPEG from Python on Windows.
2. To support rapid dissemination of records provided to SPR and to be as transparent as possible: Get the email auto publishing system fully working. Right now emails to/from seattle.gov and kingcounty.gov are online via a HTTP adhoc SQL API, see an example output at [https://seattlepublicrecords.org/about/emails/](https://seattlepublicrecords.org/about/emails/) it loads slowly. There's an issue with timestamps being off about half the time. Attachments need to be auto uploaded to Dropbox and links to the files stored in the database.
3. To support rapid dissemination of records: need to make it much easier to file and track records requests. Basically I want a public table of all the requests with request, status, due date, records, etc. For GovQA this will require a script that auto downloads records.
4. To make it easier to get investigative records created and to make it easier for the public to file and read results of OPA complaints: Need a system for filing and publicly tracking OPA complaints. Because Twitter is a key source of complaints will need this tool to intergrate with Twitter. The system will send a complaint with language like "Please email me the complaint number and summary of complaint so I may
track it. I do not want to be interviewed or contacted by phone or
snail mail." Using the OPA complaint number track it via [https://data.seattle.gov/City-Business/OPA-Complaint-Tracker/pafy-bfmu](https://data.seattle.gov/City-Business/OPA-Complaint-Tracker/pafy-bfmu) I had written some code last year to display OPA complaint summaries in table format, see [https://github.com/insideyourgovernment/insideyourgovernment_api/blob/master/crawlers/seattle_police_internal_affairs_closed_case_summaries.py](https://github.com/insideyourgovernment/insideyourgovernment_api/blob/master/crawlers/seattle_police_internal_affairs_closed_case_summaries.py)