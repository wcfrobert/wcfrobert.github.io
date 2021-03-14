---
layout: blog-post
categories: blog
title: "The First Post!"
description: "If you only see one post, contact me and tell me to stop being lazy"
date: 2021-02-15
image: assets/img/blog/nature.jpg
tags: debugging jekyll
---
## Preface

While writing this, I realized just how momentous it is to finally have my own website. At the same time, it occurred to me that every word I type down will be on the internet! I know my writing is sub par so It is terrifying to have a "finality" to it. Yes, I can always delete my website, but everything leaves a digital footprint on the web. I always cringe when looking back on my older writings, and I know I will cringe at this in a years time. Maybe I should embrace it. In fact, maybe that should be my motto from now on: I will strive to write things that will make me cringe in a years time.

One caveat is that since my website may be visited by friends, potential employers or business partners, I need to be extra careful of what I write. You won't find any politics here.

## The First Post!
This is the first post ever. What a momentous occasion. Hopefully it won't be the last. That sounds a bit ominous. I meant to say hopefully I will not be a bum. Please send me an email and tell me to stop being lazy if that is the case. In fact, to make it easier, [click here](mailto:temprobertdev@gmail.com?subject=stop-being-lazy...)

I think this post will serve as a CSS style guide and I continue to tweak and fine-tone this website. Nevertheless, the completion of the Jekyll blogging system marks the point of substantial completion for this website which, now I think about it, is actually quite momentous. 

## Design Philosophy
![coding-pic](/assets/img/blog/website-design.png)
*Figure 1: Design Philosophy and Layout*

The color palette and typography chosen for my website is shown above. I am using Lora, a serif font for my headings and blog paragraphs, and Open Sans, a san-serif font for some miscellaneous texts. I chose a purple-ish blue for my main color, and two shades of grey for texts, along with minimalist white as my background. I find that black text on white background is a somewhat jarring and overly bland. I think the grey adds a layer of sophistication.

In terms of design philosophy, I think I prefer the Baushaus aesthetics of "less-is-more". My preference is partly a matter of taste, and partly pragmatism in that I do not know enough HTML, CSS, JS to make anything more sophisticated. 

Some people believe the minimalist appeal really caught on because of Apple. But I think it's just an inevitable conclusion of our increasingly hectic and overloaded lifestyle. We are overloaded in terms of the stuff we own, the social media accounts we have, the passwords we need to remember, credit cards, student loans, rent payments, and so on. Most importantly, we are overloaded in terms of the information at our disposal. A Google search of "how to cook mashed potatoes" yields 42,300,000 results in 0.93 seconds. I don't know who the rest of the 42,299,990 results are for. In this general overload of everything birthed a strong preference for minimalism. Our lives are already cluttered enough, things of relative minor importance should convey simplicity and not add to the clutter.

I think minimalism as an art movement is here to stay. But I am only a fan of it in certain regards. For instance, I do not like minimalism for homes, especially the interior. Minimalist homes feel bland, uninviting, sterile. After a long day of work, I'd rather settle into something soft, cozy, and homey.


## Markdown Style Guide
Everything below this is a style guide.

All headings within articles should be H2. Below is an image.
![](/assets/img/blog/nature.jpg)
*Figure 2: Image caption by inserting emphasis text after image in markdown (source: unsplash)*

This is a paragraph. The font used is 20px lora. A serif font. The line-height is 1.6 and there is about 70 characters per line to improve readability. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque neque veritatis aperiam numquam at, error itaque maiores doloribus! Deserunt nemo porro dolores accusantium commodi, rem nostrum quisquam inventore consequuntur vero.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque neque veritatis aperiam numquam at, error itaque maiores doloribus! Deserunt nemo porro dolores accusantium commodi, rem nostrum quisquam inventore consequuntur vero.

***
## H2 - Main Section Titles
### H3 - Sub-section Titles
#### H4 - Occasionally Another Level


## Lists
### Ordered List:

1. first
2. second
3. third

### Unordered list:

* item 1
* item 3
* item 3


## Tables

| a | b | c | d | e  |
|---|---|---|---|----|
| 1 | 2 | 3 | 4 | 5  |
| f | g | h | i | j  |
| 6 | 7 | 8 | 9 | 10 |


## Quotes

### A quote looks like this:
> Life can only be understood backwards; but it must be lived forwards. — Soren Kierkegaard

### LaTex Equations

$$
(\frac{m}{\Delta t ^2}  + \frac{c}{2\Delta t})u_{j+1} = P_j -(\frac{m}{\Delta t ^2}  - \frac{c}{2\Delta t})u_{j-1} - (k-\frac{2m}{\Delta t^2})u_j
$$

### Code Snippet

{% highlight python %}
  # recursive implementation of golden section search
  import math
  invphi = (math.sqrt(5) - 1) / 2  # 1 / phi
  invphi2 = (3 - math.sqrt(5)) / 2  # 1 / phi^2

  def gssrec(f, a, b, tol=1e-5, h=None, c=None, d=None, fc=None, fd=None):
      (a, b) = (min(a, b), max(a, b))
      if h is None: h = b - a
      if h <= tol: return (a, b)
      if c is None: c = a + invphi2 * h
      if d is None: d = a + invphi * h
      if fc is None: fc = f(c)
      if fd is None: fd = f(d)
      if fc < fd:
          return gssrec(f, a, d, tol, h * invphi, c=None, fc=None, d=c, fd=fc)
      else:
          return gssrec(f, c, b, tol, h * invphi, c=d, fc=fd, d=None, fd=None)
{% endhighlight %}


## Videos

<div class="video-container">
<iframe width="420" height="315" src="https://www.youtube.com/embed/lM02vNMRRB0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>