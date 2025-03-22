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
<ul id="post-list">
{% for post in site.posts %}
    <li>
        <a href="{{ post.url }}" class="post-title">{{ post.title }}</a> - {{ post.date | date: "%B %d, %Y" }}
        <p class="post-content" style="display:none;">{{ post.content | strip_html }}</p>
    </li>
{% endfor %}
</ul>

<script src="/assets/js/search.js"></script>