---
layout: blog-post
categories: engineering
title: "The Modern Engineer's Toolbox"
description: "on structural engineer's perennial obsession with automation"
date: 2026-03-12
image: assets/img/blog/2025/etabs/etabs11.png
tags: thoughts
typora-root-url: ./..
---

> "What do you do for work?"
>
> "I'm a structural engineer."
>
> "So, like an architect?"

What do structural engineers even do? In essence, people pay us to calculate things. What is the shear stress of this? What is the buckling capacity of that? How much rebar do we need? Do we really need this column here?[^1] 

It might seem overly reductive to say *all* we do is calculate, but I really think it's true enough. If we strip away the meetings, emails, and administrative busywork, it's clear to me that we provide value by making well-informed engineering decisions, and all engineering decisions are made downstream of calculations. So it behooves us to calculate well.

But structural engineering is not just a curiosity-driven intellectual pursuit, it is also a business, with revenues, expenses, and operating margins. We simply cannot afford to turn everything into a research project. Efficiency is paramount - for an inescapable part of this profession is how repetitive the calculations can get. Modern building projects have many thousands of things to design and check. So it behooves us to calculate efficiently.

"To calculate well, and to do so efficiently." What a nice mantra! But aren't they at odds with each other? Is it possible to increase efficiency while also maintain quality? Aren't they reciprocal of each other? My personal opinion is that they are not, but they certainly can be if you are not careful.[^2]

It turns out every generation of structural engineers have had tools in their toolbox to ease the computational burden of repetitive number crunching. To use a modern jargon that makes me chuckle: **we've been streamlining our workflow since the very beginning.**

<img src="/assets/img/blog/2025/etabs/etabs11.png" style="width:60%;"/>
*Graphic Statics was used in the 19th century to compute forces in truss structures graphically. The sketch above is the first working drawing of the Salginatobel Bridge by Robert Maillart in 1928. Figure from [(Fivet & Zastavni, 2011)](https://www.researchgate.net/publication/260123151_Robert_Maillart's_key_methods_from_the_Salginatobel_Bridge_design_process_1928])*

<img src="/assets/img/blog/2025/etabs/etabs12.png" style="width:60%;"/>
*Slide rules were used by engineers to perform routine multiplication, division, roots, powers, and even trigonometric operations. It's usage continued up until the 1970s, when it was replaced by the hand-held calculator*

<img src="/assets/img/blog/2025/etabs/etabs13.png" style="width:100%;"/>
*Highly intricate nomographs were created in the 20th century to assist engineers with repetitive design tasks. Rather than solving lengthy math formulas, engineers can just connect a few lines to get the answer. The nomograph on the left is for column effective length factor (k) which is still in the 2022 AISC steel design manual. The nomograph on the right was used in the 1960s to find the required moment of inertia for beam design (taken from Blodgett's Design of Welded Structures, 1966)*

Here's another fun snippet from Blodgett's textbook with regards to the *utter* inconvenience of using log tables rather than slide rules:

> "[*On the line approximation for determining section properties*] With a thin section, the inside dimension is almost as large as the outside dimension; and, in most cases, the property of the section varies as the cubes of these two dimensions. This means dealing with the difference between two very large numbers. In order to get any accuracy, **it would be necessary to calculate this out by longhand or by using logarithms rather than use the usual slide rule** [*emphasis mine*]. To simplify the problem, the section may be treated as a line, having no thickness."

Not long after Blodgett's textbook was published, we enter the electronic calculator era:

<img src="/assets/img/blog/2025/etabs/etabs14.png" style="width:70%;"/>
*On the left we have the HP-35 pocket calculator, which sold for 395 dollars each in 1972 (3,000 dollars in 2024). The wide-spread introduction of scientific calculators marked the end of the slide rule era. Calculator usage continues to this day. Most college and licensing exams still require calculators. On the right is another familiar sight. in this case it's a wide-flange beam-column selection table provided by AISC in 2017. This one is from the [15th ed manual companion](https://www.aisc.org/publications/steel-construction-manual-resources/15th-ed-steel-construction-manual/manual-companion-for-15th-edition/)*

<img src="/assets/img/blog/2025/etabs/etabs15.png" style="width:80%;"/>
*Toolbox of a modern day structural engineers. A weird mélange of software and tools*

Engineers of the past relied on slide rules, nomographs, and straight edges. Modern engineers rely on FEM software, intricate spreadsheets, acres of grasshopper scripts. Python, Rhino, Tekla, Speckle, Karamba, MathCAD - an assortment of tools that sounds like gibberish to any engineer born before the 1970s. 

Today's building projects require the design of thousands of elements, checking each for dozens of failure modes, under hundreds of load cases[^3], repetitively through an inexplicable number of iterations. We need to keep track of all this data, process it, visualize it, save it to a database, automate it, parametrize it, transfer it between software. 

Gone are the days of paper, pencils, and calculators. Nowadays, engineers are preoccupied with data, algorithms, and python. 

While it may seem overwhelming, without these tools, a modern building project would be even more overwhelming, if not completely untenable[^4]. Much like slide rules and calculators, these new tools empower us, and are simply the new additions to the structural engineer's ever-expanding toolbox.

<hr>
**Footnotes**

[^1]: If you're an architect, the answer is always yes.
[^2]: I think the restaurant industry provides an apt illustration of this efficiency-quality tradeoff. Some homogeneity is unavoidable at scale. Chipotle is not as good as the best Mexican street food in LA, but it's honestly not that bad. Not to mention that Chipotle serves millions of customers every day. Mike's Red Taco in San Diego is pretty amazing despite being a fast casual spot. Both are better than Taco Bell, which is to say that striving for efficiency at all cost usually leads to some place uninspiring.
[^3]: Have you seen the ASCE 7 wind chapters lately?
[^4]: Jevon's paradox is in full force here. There has been an absolute explosion in complexity over the last few decades. The first source of complexity is our better understanding of physics. Researchers are always discovering new insights and coming up with new and improved design methods. The other source of complexity is regulatory. See §3.11.5.1(a).i.2.2.3 Exception A 2022 Errata (i'm joking). The building code, regardless of how voluminous and labyrinthian you think it might be right now, is about as simple as it'll ever be. Unlike any other forms of regulation, the building code has its sanctity sealed by blood, sweat, and tears; blood of structural failure that could have been prevented, sweats of researchers, and tears of graduate students. 













