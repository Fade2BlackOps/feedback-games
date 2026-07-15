# Riftline Games Markdown Blog Workflow

The site uses **Jekyll**, the static-site generator supported directly by GitHub Pages. Your regular pages remain HTML. Only blog posts need to be Markdown.

## Publish a new post

1. Create a file inside `_posts/`.
2. Name it `YYYY-MM-DD-short-post-title.md`.
3. Paste this front matter at the top:

```yaml
---
layout: post
title: "Your Post Title"
date: 2026-07-14 20:00:00 -0400
author: "Your Name"
description: "One or two sentences used on the blog landing page and in search previews."
categories: [Design]
tags: [level-design, unreal-engine]
---
```

4. Write the article below the second `---` using Markdown.
5. Commit and push it to GitHub.

The post automatically appears on `blog.html`, newest first. Its URL follows this pattern:

`/blog/2026/07/14/short-post-title/`

## Images in posts

Put images in `assets/images/blog/`, then use:

```markdown
![Useful description of the image]({{ '/assets/images/blog/example.jpg' | relative_url }})
```

Jekyll processes Liquid expressions inside Markdown, so the image works whether the site is hosted at a custom domain or in a GitHub project repository.

## Local preview on Windows

Install Ruby with DevKit, open a terminal in the site folder, and run:

```powershell
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000` in your browser. Stop the server with `Ctrl+C`.

## GitHub Pages settings

In the GitHub repository, open **Settings → Pages** and choose:

- Source: **Deploy from a branch**
- Branch: `main`
- Folder: `/ (root)`

GitHub Pages will run Jekyll whenever you push changes.

If the repository is named `your-name.github.io` or uses a custom domain, leave `baseurl` blank in `_config.yml`. If it is a project repository such as `riftline-games`, set `baseurl: "/riftline-games"`.

## Categories

`categories.html` is generated safely with Liquid and lists every category and its posts. No custom Ruby category plugin is required. Standard GitHub Pages does not execute arbitrary plugins from `_plugins`, so `generate_categories.rb` is intentionally not used.
