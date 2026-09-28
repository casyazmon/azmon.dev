# Portfolio Website

This repository contains the source code for my personal portfolio website.

## Features

- Showcases my projects and skills
- Responsive design
- Contact information

## Getting Started

1. Clone the repository:
    ```bash
    git clone https://github.com/casyazmon/azmon.dev.git
    ```
2. Open `index.html` in your browser.

## License

This project is licensed under the MIT License.
## Publishing an article

1. Copy `content/writing/_template.md` to `content/writing/<slug>.md`. The file name becomes the URL (`/writing/<slug>`).
2. Fill in the frontmatter (`title`, `description`, `date`, `tags`) and write in Markdown.
3. Preview with `npm run dev`. Posts with `draft: true` show locally with a Draft badge but are never published.
4. Set `draft: false`, commit and push.

The Writing section, nav link, `/writing` page, RSS feed (`/writing/rss.xml`) and sitemap entries appear automatically once at least one non-draft post exists. Each post gets its own link-preview image for LinkedIn and X.

`content/writing/style-preview.md` is a draft showing every supported element; delete it whenever you like.
