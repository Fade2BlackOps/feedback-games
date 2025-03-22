---
layout: home
title: Blog
permalink: /blog/
---

# Blog

Welcome to my blog! Here you will find my latest posts.

## Recent Posts
{% for post in site.posts %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%B %d, %Y" }}
{% endfor %}
