---
# Copy this file to content/writing/<your-slug>.md. The file name becomes the URL:
#   content/writing/kafka-retries.md  ->  azmon.dev/writing/kafka-retries
# Files starting with "_" are ignored.
title: "Your article title"
description: "One or two sentences. Shown in the article list, search results and link previews."
date: 2026-09-27
tags: ["Kafka", "Spring Boot"]
# While draft is true the post is visible in `npm run dev` but not published.
draft: true
---

Open with the problem, and why it mattered.

## What we tried

Use `##` for sections and `###` for sub-sections.

```java title="RetryConfig.java"
@Bean
public DefaultErrorHandler errorHandler() {
    return new DefaultErrorHandler(new FixedBackOff(1000L, 3));
}
```

## What I'd do differently

End with the lesson.
