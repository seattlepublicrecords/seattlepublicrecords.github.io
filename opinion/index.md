---
layout: page
title: Opinion
permalink: /opinion/
---

<ul>
  {% for post in site.categories.opinion %}
    {% if post.url %}
        <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
