---
layout: page
title: Emails to and from Seattle Public Records
permalink: /about/emails/
---

**Bug:** The timestamps are incorrect in the database.

<div class="widget" data-type="table" data-hide-ifnohashurl="true" data-url="https://db.seattlepublicrecords.org/query/?q=" data-name="view_email" data-table="emails" data-layout="vertical" data-hide-fields="fslocation" data-allow-query-edit="false"></div>
<div class="widget" data-type="table" data-url="https://db.seattlepublicrecords.org/query/?q=" data-name="emails_list" data-query="SELECT FSLOCATION, EMAILFROM, EMAILTO, SUBJECT, DATETIME FROM emails ORDER BY DATETIME DESC LIMIT 10" data-hide-fields="fslocation" data-whole-row-link="#!*for=view_email&fslocation={fslocation}" data-layout="horizontal"></div>
