---
layout: blog-post
categories: blog
title: "The First Post!"
description: "If this is the only post you see, contact me and tell me to stop being lazy"
date: 2021-02-15
image: assets/img/blog/nature.jpg
tags: debugging jekyll
---

![](/assets/img/blog/nature.jpg)
*Figure 1: Image caption by inserting emphasis text after image in markdown (source: unsplash)*

This is an edit. Above is an image. This is a paragraph. The font used is 20px lora. A serif font. The line-height is 1.6 and there is about 70 characters per line to improve readability. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque neque veritatis aperiam numquam at, error itaque maiores doloribus! Deserunt nemo porro dolores accusantium commodi, rem nostrum quisquam inventore consequuntur vero.

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