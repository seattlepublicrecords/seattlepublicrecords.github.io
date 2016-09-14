---
title: Seattle Public Records
layout: default
---
<div class="home">
  <p>Seattle Public Records is a nonprofit news and advocacy oraganization using <a href="http://apps.leg.wa.gov/rcw/default.aspx?cite=42.56&full=true">Washington's Public Records Act</a> and advanced technology to provide the public as much news and information about Seattle related government as possible.</p>
  <h1 class="page-heading">Posts</h1>

  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        {{ post.date | date: "%b %-d, %Y" }} by {{ post.author }} 

        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
      </li>
    {% endfor %}
  </ul>

  <p class="rss-subscribe">subscribe <a href="{{ " feed.xml"="" |="" prepend:="" site.baseurl="" }}"="">via RSS</a></p>
PDRS upload <a href="https://www.dropbox.com/request/Svs5S7Era8qoajzRoPBi">https://www.dropbox.com/request/Svs5S7Era8qoajzRoPBi</a>
</div>
