---
layout: home
title: Blog
permalink: /blog/
---

# Blog

Welcome to my blog! Here you will find my latest posts.

## Categories
<ul>
{% for category in site.categories %}
    <li><a href="/categories/{{ category[0] | slugify }}/">{{ category[0] }}</a> ({{ category[1] | size }})</li>
{% endfor %}
</ul>

## Recent Posts
{% for post in site.posts %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%B %d, %Y" }}
{% endfor %}
