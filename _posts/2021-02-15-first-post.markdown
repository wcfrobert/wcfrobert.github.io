---
layout: blog-post
title: "First Post Style Guide"
date: 2021-02-15
image: /assets/img/blog/hellofresh1.jpg
comments: true
---

![](https://t4.ftcdn.net/jpg/02/91/24/27/360_F_291242770_z3XC7rJB1Mvc5jVMsEY9Dx2xMrX4sxUi.jpg)

Above is an image. This is a paragraph. The font used is 20px lora. A serif font. The line-height is 1.6 and there is about 70 characters per line to improve readability. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque neque veritatis aperiam numquam at, error itaque maiores doloribus! Deserunt nemo porro dolores accusantium commodi, rem nostrum quisquam inventore consequuntur vero.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque neque veritatis aperiam numquam at, error itaque maiores doloribus! Deserunt nemo porro dolores accusantium commodi, rem nostrum quisquam inventore consequuntur vero.

## H2 - Main Section Titles
### H3 - Sub-section Titles
#### H4 - Occasionally Another Level
***

## Lists
### Ordered List:

1. first
2. second
3. third

***

### Unordered list:

* item 1
* item 3
* item 3


***

### Table

<div class="table-container">
  <table>
    <tr><th>Header 1</th><th>Header 2</th><th>Header 3</th><th>Header 4</th><th>Header 5</th></tr>
    <tr><td>Row:1 Cell:1</td><td>Row:1 Cell:2</td><td>Row:1 Cell:3</td><td>Row:1 Cell:4</td><td>Row:1 Cell:5</td></tr>
    <tr><td>Row:2 Cell:1</td><td>Row:2 Cell:2</td><td>Row:2 Cell:3</td><td>Row:2 Cell:4</td><td>Row:2 Cell:5</td></tr>
    <tr><td>Row:3 Cell:1</td><td>Row:3 Cell:2</td><td>Row:3 Cell:3</td><td>Row:3 Cell:4</td><td>Row:3 Cell:5</td></tr>
    <tr><td>Row:4 Cell:1</td><td>Row:4 Cell:2</td><td>Row:4 Cell:3</td><td>Row:4 Cell:4</td><td>Row:4 Cell:5</td></tr>
    <tr><td>Row:5 Cell:1</td><td>Row:5 Cell:2</td><td>Row:5 Cell:3</td><td>Row:5 Cell:4</td><td>Row:5 Cell:5</td></tr>
    <tr><td>Row:6 Cell:1</td><td>Row:6 Cell:2</td><td>Row:6 Cell:3</td><td>Row:6 Cell:4</td><td>Row:6 Cell:5</td></tr>
  </table>
</div>

***

### Quotes

#### A quote looks like this:

> Never put off till tomorrow what may be done day after tomorrow just as well. — Mark Twain

***

### Syntax Highlighter

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

***

### Images

![](https://t4.ftcdn.net/jpg/02/91/24/27/360_F_291242770_z3XC7rJB1Mvc5jVMsEY9Dx2xMrX4sxUi.jpg)

***

### Videos


<iframe width="420" height="315" src="https://www.youtube.com/embed/lM02vNMRRB0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>