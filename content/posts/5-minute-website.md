---
title: How I built and published my new website in 5 minutes
date: 2020-12-01
published: true
tags: ['Rapid prototyping']
canonical_url: false
cover_image: ./images/alexandr-podvalny-220262-unsplash.jpg
description: "A short story of how I overcame the engineers dilemma by choosing a super-quick method of publishing a fully-coded website. And how a simple act of changing habits gave me the kickstart I needed."
---

I'll start with a confession. I bought this domain name in August. It's now December.

I had the idea of creating a personal website using all the latest tech. It was going to be the nuts.

I wanted to use a Serverless CMS and a Next.js React application served from a Lambda Edge Cloudfront distribution [***all the shiny things***].

I began making it but then I got distracted.  A project at work consumed my time/energy and this website... well, it just got forgotten about.

But I realise now, striving for and taking the time to build the ideal approach is kind of putting it off. [Perfectionism is really just another form of procrastination](https://www.lifehack.org/articles/productivity/overcoming-procrastination-letting-perfectionism.html).

This website didn't go live in August, or September, or October.

Not even November.

So, what's different this time?

This week, I thought: ***let's just fucking do it***.

Done is better than perfect.

## Habit forming

I noticed that after 9 o'clock at night, my evenings consisted of looking at my phone or watching TV and going to bed hours later then I probably needed to.  It's easy to default to this behaviour when your brain is done for the day.

So, I set a reminder on my phone for 9 o'clock so I (put my phone away, and) practice guitar for an hour. After that, I get into bed and read until my eyelids are too heavy to keep open.

It's been a nice habit to make routine.

When I tried this, two things happened:

Firstly, I get tired and fall asleep much earlier now and feel much more refreshed and productive in the daytimes.  It turns out staring at a screen at night was really affecting my sleep.

Secondly, I'm surprised by how I've improved my guitar playing by the momentum I've built practicing every evening.

And it's momentum, I realise now, that is key to success.  If you can see or feel progress is being made, you can't help but be motivated. 

As the saying goes... ***a rolling stone gathers no moss***

Now my website is launched (if you are reading this; it is), I can improve it bit by bit. Iterate to innovate. When time allows.

## How to publish a site in 5 minutes

When I start a project, I think to myself: What do I need this thing to do? Who is this for? What are they going to use this for?

The aim of answering these questions is to start to understand what your website users needs are. And once you understand their needs, **then** you can think about what technologies can serve them best.

People want to come and read my articles to be entertained, maybe learn something, and hopefully inspired to make something themselves. Do these people care about exactly how the website is built?

Sure, if I want to showcase my skills, I tell tales of how the website is architected with this CMS and that latest technology. But there are alternative ways of doing that, and right now, it's all about getting going.

I need a solution that let's me create something with the small pockets of time I get outside of my 9-to-5.

So, what's the quickest way to build and publish a website? What's the minimum amount of effort required?

I could use a site builder such as webflow, weebly, or wix but those sites tend to be very slow, and they aren't the direction I want to end up. I might be starting simply but if I think about where I want to end up, I can take fewer steps to get there. Begin with the end in mind.

Instead, I thought I'd use a site generator.  A site generator applies data and content to templates, and generates web pages from them.

I chose [Gridsome](https://gridsome.org) as my site generator. (I'm learning [Vue.js](https://vuejs.org/) at the moment and which it creates the templates from).  Gridsome is based on [Gatsby](https://www.gatsbyjs.com/), a React-based site generator which I've used on quite a few projects.  Gatsby and Gridsome produce static generated websites and apps that are fast by default.

The great thing about both is that they come with Starters.  Pre-built projects that are free to use. I used the [Gridsome Blog Starter](https://gridsome.org/starters/gridsome-blog-starter/) a "simple, hackable & minimalistic starter for Gridsome that uses Markdown for content".

I only changed a few things, adding my name and twitter handle and deleting the default posts and published it with [Netlify](https://www.netlify.com/). 

Using Netlify, I can choose a Git repository to create a site from. Every time I commit amd push my code (save and upload) to GitHub, it will auto publish the site. (You can also just drag and drop a folder of code and if it's working HTML, Netlify will publish it to the internet for you in seconds).

It really only took me 5 minutes - from start to finish.

And here we are. A humble start, maybe. But the most important thing is that it's launched and I can move on.

And who knows what this could be the beginning of?