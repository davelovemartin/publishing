---
title: optimising findability
date: 2021-01-21
published: true
tags: ['Search']
canonical_url: false
cover_image: ./images/alexandr-podvalny-220262-unsplash.jpg
description: "How to optimise your site using structured data and basic SEO techniques"
---

To increase the likelihood that people will be able to find your content, you'll need to focus on a few SEO (Search Engine Optimisation) basics, and some structured data to add meaning to your content.

I got a buzz from publishing my first post, [How (and why) I built and published my new website in 5 minutes](/how-and-why-i-built-and-published-my-new-website-in-5-minutes/), it's great to make a start. But what's the point of writing content if that can't be found?

## Optimising for Search Engines

Search Engines use bots called spiders to crawl your website and store information for the search engine to index. When you search something on Google, all the Search Engine Results Pages (SERPs) come from Google’s index.

To help the spiders understand what's on a web page, we use *meta tags* to communicate:

* what your page is about,
* how to read it, and
* who the intended audience is.

If you're using a content management system to create content system, you'll more than likely be able to use a plug-in or in-built functionality to do the following. Or if, like me, you are "rolling your own", you can edit the HTML directly.

### Update your page title

If you are writing HTML from scratch, make sure you include the *title* tag in your head:

```<head><title>davelovemartin's homepage</title></head>```

Give each page an unique title that describes the page’s content concisely and accurately. Google recommend to match your page’s title and H1.

Think about which words people might use to search for your post and put those keywords first, (but not at the expense of writing an understandable sentence). If you have a brand, add it in to the title.

Make sure you keep your titles 50-60 characters long as otherwise they may get automatically shortened by the SERPs.

### Update your page's description

Give each page a *meta description* that clearly reflects what value the page carries, around 150 characters. Your meta description should be unique to each page.

```<meta name="description" content="Design Technologist, UX and Serverless Engineer and Indie Hacker.">```

Again, think about those  most significant keywords or a catchy call-to-action.
If you're writing a blog, include the date of publication, and the name of the author.

### Images
Use the *Alt* attribute on your images to provide context because, like some of your readers, search engines can’t “see” images. So you're helping both humans and robots here.  If an image is just for show, you can leave the `alt` tag as blank, and give it a role of presentational. By the way, don't leave the `alt` tag out - it needs to be intentionally empty otherwise you'll get penalised for leaving out.

## Structured data

If you've ever wondered how Google returns results with specific formats such as recipes, frequently asked questions or shopping, it's because those websites are using Structured Data.

Structured data adds more meaning to the content. There are 3 different formats: [Microformats](https://schema.org/docs/gs.html), [RDFa](http://rdfa.info) and [JSON-LD](https://json-ld.org). Whichever you format you choose, you'll be using vocabulary on [Schema.org](https://schema.org), so don't forget to check that out after you've read this.

For a personal website, you're creating the online equivalent of a business card. By using *microformats*, adding a few simple class names to your HTML, other people’s software can understand it and use it for things like reply contexts, cross-site comments, event RSVPs, and more.

I'm adding [h-card](https://indieweb.org/h-card) information to my website as follows:

Start off with the h-card class:

```‌<div class="h-card"></div>```

Add a link to your website's address using the *u-url* class:

```
  <div class="h-card">
    <a class="u-url" href="https://davelovemartin.dev/"></a>
  </div>
```

Add the site title again but as a top-level heading, *h1*.  There should only be one h1 per page. I've added mine with a *p-nickname* tag but you could add *p-name*.

```
  <div class="h-card">
    <a class="u-url" href="https://davelovemartin.dev/">
      <h1 class="p-nickname">davelovemartin</h1>
    </a>
  </div>
```

Add an image - I'm using my face, but you can use a logo, using a *u-logo* class.

```
  <div class="h-card">
    <a class="u-url" href="https://davelovemartin.dev/">
      <img alt="Author image" class="u-logo" src="~/assets/images/author.jpg" width="180" height="180" />
      <h1 class="p-nickname">davelovemartin</h1>
    </a>
  </div>
```

I'm also going to add a role, *p-role*, and a note, *p-note*, so people understand what I do:

```
  <div class="h-card">
    <a class="u-url" href="https://davelovemartin.dev/">
	  <img alt="Author image" class="u-logo" src="~/assets/images/author.jpg" width="180" height="180" />
      <h1 class="p-nickname">davelovemartin</h1>
    </a>
    <p class="p-role">Design Technologist and Indie Hacker.</p>
    <p class="p-note">I create prototypes and accessible design systems for some of the World's leading brands.</p>
  </div>
```

You can use `rel="me"` to indicate that links on your page also refer to your content elsewhere on the web.  This can be useful to services such as [Indie Login](https://indielogin.com/api) that use your website as a means of authentication in a similar way to Sign in with Twitter does.

I've just included a few options that are relevant to me here.  But if you want to find out about the complete list of options, take a gander at [http://microformats.org/wiki/h-card](http://microformats.org/wiki/h-card)

### Check it works
Once you are happy with what you've created, you can validate that you've implemented everything correctly using [https://indiewebify.me/validate-h-card/](https://indiewebify.me/validate-h-card/).

---

I'll follow up this post by taking a look at another structured data format JSON-LD which you can use to create specific-looking search results in Google.