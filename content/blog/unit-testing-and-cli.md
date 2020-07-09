---
date: 2020-07-09
title: 'Insomnia Designer 2020.3.0 - Unit Testing and a CLI!?'
slug: insomnia-designer-2020-3-0-unit-testing-and-a-cli
tags: ['update', 'feature', 'announcement']
---

It's been a little over a month since the last update, and quite a lot has happened. Check it out 👇

Starting in 2020.3.0, it is now possible to [create a suite of unit tests](https://support.insomnia.rest/article/104-unit-testing) for any request directly inside of Insomnia Designer using JavaScript. 👏

![](/images/blog/unit-test-demo.gif)

You've designed your API using OpenAPI, you've generated some tests against a mocking server to pass to another team. They implement a server based on your specification and deploy it out to production, moments later, you get feedback from the field saying that there aren't any security features implemented. Passwords aren't hashed, CSP headers are missing… 😱

This is why we built Unit Testing for Insomnia Designer. By creating a few unit tests in JavaScript, before passing on the details to another developer, or before implementing the design yourself you can ensure that the outcome is exactly what you intended\*.

\* as long as you write a test 😝

## But wait, there's more!

The fun doesn't stop there. I'm super excited to announce Inso, the command line tool for Insomnia Core and Insomnia Designer, [available today](https://support.insomnia.rest/category/110-getting-started), and [Open Source on Github](https://github.com/Kong/insomnia/tree/develop/packages/insomnia-inso)! 🎉

Inso is built on Node.js and can be installed through NPM. It's functionality currently targets Insomnia Designer letting you lint specifications, generate gateway config, and run unit tests all through your terminal or in a CI/CD environment like Github Actions. Here is a quick demo of Inso in action:

![](/images/blog/inso-demo.gif)

Now you can take the unit tests you've written inside of Insomnia Designer, and automate running them in CI/CD to ensure that when changes are made through a PR, it's valid - increasing developer confidence. You can also now take it a step further, once you merge the PR you could generate your Kong configuration and deploy a new Kong gateway for your API.

Ready to scale your API development lifecycle? Learn more about [command line integration with Insomnia Inso](https://support.insomnia.rest/collection/105-inso-cli).

~ Niji
