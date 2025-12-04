import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory).map((filename) =>
        filename.replace(/\.md$/, "")
    );
}

export function getPostData(slug) {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);
    const readingTime = require('reading-time');
    const stats = readingTime(content);

    return {
        slug,
        metadata: {
            ...data,
            readingTime: stats.text
        },
        content
    };
}

export async function getPostHtml(slug) {
    const { metadata, content } = getPostData(slug);

    const processedContent = await remark().use(html).process(content);

    return {
        slug,
        metadata,
        contentHtml: processedContent.toString(),
    };
}

export function getAllPosts() {
    const slugs = getPostSlugs();

    return slugs
        .map((slug) => getPostData(slug))
        .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date));
}
