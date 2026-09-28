---
title: "Style preview: how articles render"
description: "A draft that never ships. Open it with npm run dev to see how headings, code, tables and quotes look on the site. Delete it once you've published a real post."
date: 2026-09-27
tags: ["Example"]
draft: true
---

This draft exists so you can see every markdown element in the site's article style. It shows up locally with a **Draft** badge and is excluded from production builds, the RSS feed and the sitemap.

## Headings and paragraphs

Body text is set for long-form reading: a comfortable measure, generous line height and muted ink so headings stand out. Links look [like this](https://azmon.dev), and `inline code` gets a subtle chip.

### A sub-section

- Bulleted lists use the accent colour for markers
- Keep items short
- Nested ideas are better as their own paragraph

1. Numbered steps work too
2. For procedures and runbooks

## Code blocks

Fenced code is highlighted at build time, in both light and dark themes. Add a `title` to show a file name:

```java title="OrderEventsListener.java"
@KafkaListener(topics = "orders.created", groupId = "billing")
public void onOrderCreated(OrderCreated event) {
    invoiceService.createFor(event.orderId());
}
```

```bash
./mvnw spring-boot:run -Dspring-boot.run.profiles=local
```

## Quotes and tables

> A good quote or key takeaway gets set large in the serif face.

| Approach        | Coupling | Latency on write path |
| --------------- | -------- | --------------------- |
| Synchronous REST | High     | Adds downstream time  |
| Kafka event      | Low      | Publish only          |

---

That's everything. Copy `_template.md` to start a real post.
