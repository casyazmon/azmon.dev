import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostSlugs() {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }
    return fs.readdirSync(postsDirectory).map((filename) =>
        filename.replace(/\.md$/, "")
    );
}

export function getPostData(slug) {
    const fullPath = path.join(postsDirectory, `${slug}.md`);

    // Check if file exists
    if (!fs.existsSync(fullPath)) {
        return null;
    }

    try {
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
    } catch (error) {
        console.error(`Error reading post ${slug}:`, error);
        return null;
    }
}

export async function getPostHtml(slug) {
    const postData = getPostData(slug);

    if (!postData) {
        return null;
    }

    const { metadata, content } = postData;

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
        .filter(post => post !== null) // Filter out null posts
        .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date));
}

