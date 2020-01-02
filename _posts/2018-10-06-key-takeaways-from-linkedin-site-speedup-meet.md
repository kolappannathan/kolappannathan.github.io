---
layout: post
author: Kolappan N
published: true
---

I attended an event of website performance organized LinkedIn, India conducted on 06, October 2018. It was an extremely useful event and I would like to share some key things that I learned.

##### 1. Analyze and record everything

The first thing is to record all details as much as possible. As Shobana Neelakantan said,

> *“Everything that gets recorded gets fixed”*

Don’t just monitor your sites performance from your server side monitor from the client’s browser/app.

##### 2. Localize your problems

Once you get the data try to localize your problem. Not all the problem is with your code. Your CDN provider may be slow in certain regions, devices used in certain demographics may not parse your JavaScript quick enough, etc…

Localize your problems to identify the bottlenecks and then go for a solution.

##### 3. Consumer Perceived Latency is more important

The customer perceived speed is more important than the actual speed of the site. Server side rendering (SSR), Lazy loading, etc… all comes into this. One of the cool thing that LinkedIn did is that they kept the transition page or loading screen in cache and used a service worker to display it.

##### 4. Redundancy is good

Be it with solutions or vendors, redundancy is good. In many cases one solution does not work for all.

For example, when you are looking for a CDN, a provider that offers good performance in India may not in China. In case of which you can go with two CDN providers based on user location.

LinkedIn also uses multiple CDN providers and choose the one that is fastest in your location. They also use multiple DNS service providers so as to ensure 100% availability.

##### 5. Networking is as important to speed as code

I am not a networking guy. The only thing I have done with networking reg site speed was to locate you application server in the region where majority of your users are. However, you can improve the speed considerably with networking improvements like POP, Edge / Micro POP, etc…
