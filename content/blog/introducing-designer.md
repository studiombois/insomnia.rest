---
date: 2020-04-28
title: Introducing Insomnia Designer
slug: introducing-designer
layout: wide
tags: ["announcement"]
---

**_TL;DR: [Insomnia Designer](/products/designer/) a new open-source desktop application that 
provides a modern workflow for teams to design and collaborate on APIs._**

<!--more-->

If you're a software developer, there's a good chance you interact with APIs almost every day. 
Since 2015, it's been Insomnia's goal to help make this process as simple and enjoyable as 
possible. Fast-forward to today and Insomnia is the leading open-source tool for interacting 
with REST and GraphQL APIs.

Interaction is only half the story, however, which is why **we're pleased to announce 
[Insomnia Designer](/products/designer/)**—a new application that focuses on improving the 
API design workflow that so many companies struggle with.

<div class="center">
  <a href="/download/" class="button">
    Download Insomnia Designer
  </a>
  <br><br>
</div>

Designer builds on top of the existing Insomnia (now Insomnia Core) codebase to facilitate a 
"spec-first development" workflow that allows you to design and edit OpenApi documents in one 
place, share them across your organization using Git, and interact with them using the Insomnia
features you already know and love 💜

[![Specifications Home](/images/blog/designer-screens.png)](/images/blog/designer-screens.png)

This first release contains a core set of features to edit and share OpenAPI specifications, with
the intention of involving the community as soon as possible to help shape drive the app in the
right direction. So, we encourage you to take it for a spin and **submit any and all feedback to
the [Insomnia GitHub Repo](https://github.com/Kong/insomnia), or join our 
[Community Slack](https://chat.insomnia.rest).**

## Feature Highlight

- Edit [OpenAPI](https://swagger.io/docs/specification/about/) specifications
- Preview specs using Swagger UI
- Git integration
- Linting and error checking
- High-level filterable view of all documents
- Debug and explore APIs (like Insomnia Core)
- Extend with [Plugins](/plugins/)
- Kong integration via [`kong-bundle` Plugin](https://insomnia.rest/plugins/insomnia-plugin-kong-bundle/) 
    - Deploy to Kong Portal
    - Generate Kong Declarative Config
    - Generate Kong for Kubernetes Config

---

## Common Questions

**Who is it for?** 🤗<br>
Designer is for developers and teams designing and creating APIs. Today, it's not 
uncommon for organizations to manage _hundreds_ of APIs that span across teams and departments. 
Our plan is to make Designer into a platform developers can use to collaboratively design, 
review, test API specifications during the API development process.

**Where can I download it?** 🛒<br>
Designer is a free and open-source desktop application that can be installed on Mac, Windows, or
Linux. Visit the [Download](/download/) page to get started.

**Why open source?** 💜<br>
Insomnia Core would not be where it is today without the help of the open-source community. We're
using the same strategy for Designer in order to help make it as robust, full-featured, and 
adaptable as possible. Visit the [GitHub Repository](https://github.com/kong/insomnia/) to learn 
more.

**Why a separate app?** 📦<br>
Insomnia is an extremely powerful tool, but most users love it for how simple and easy it is to
use. In order to maintain this core tenet, Designer needs to be simple too, which is why
we're releasing Insomnia Designer as a separate application, focused specifically on _API design_.

**Does it support Insomnia Plus/Team accounts?** 💼<br>
Designer _does not_ currently integrate with existing Insomnia Plus/Team accounts, but we plan on
adding support in the future.
