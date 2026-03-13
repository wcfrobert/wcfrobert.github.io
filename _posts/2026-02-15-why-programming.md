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

What is a structural engineer? 

> "What do you do for work?"
>
> "I'm a structural engineer."
>
> "So, like an architect?"

To oversimplify, people pay us to calculate things. What is the shear stress of this? What is the buckling capacity of that? Strip away the meetings, emails, and administrative busywork, engineers make engineering decisions, and all engineering decisions are made downstream of calculations. So it behooves us to calculate well.

But structural engineering is not just a curiosity-driven intellectual pursuit where we solve interesting problems with math and physics, it is also a business, with revenues, expenses, and operating margins. Design firms that turn everything into a research project are no longer in business. Efficiency is paramount, because an inescapable part of this profession is how repetitive the calculations can get. Buildings don't have just one beam, there are thousands of things to check. So it behooves us to calculate efficiently.

"To calculate well, and to do so efficiently." is a nice mantra, but aren't they at odds with each other? Is it possible to increase efficiency while also maintain quality? I think so. Quality and efficiency are not necessarily reciprocal of each other, but they certainly can be. For example, Chipotle is good, but it's not as good as the best Mexican street food in LA, but it's also not the worst - better than Taco Bell at least. 

It turns out, every generation of structural engineers have had tools in their toolbox to ease the computational burden of repetitive number crunching. 20th century engineers used slide rules, charts, and nomographs; modern engineers use FEM software, Excel, and grasshopper.

<img src="/assets/img/blog/2025/etabs/etabs11.png" style="width:60%;"/>
*Graphic Statics was used in the 19th century by engineers to graphically compute forces in truss structures. The sketch above is the first working drawing of the Salginatobel Bridge by Robert Maillart in 1928. Figure from [(Fivet & Zastavni, 2011)](https://www.researchgate.net/publication/260123151_Robert_Maillart's_key_methods_from_the_Salginatobel_Bridge_design_process_1928])*

<img src="/assets/img/blog/2025/etabs/etabs12.png" style="width:60%;"/>
*Slide rules were used by engineers to perform routine multiplication, division, roots, powers, and even trigonometric operations. It's usage continued up until the 1970s, when it was replaced by the hand-held calculator*

<img src="/assets/img/blog/2025/etabs/etabs13.png" style="width:100%;"/>
*Highly intricate nomographs were created in the 20th century to assist engineers with repetitive design tasks. Rather than solving lengthy math formulas, engineers can just connect a few lines to get the answer. The nomograph on the left is for column effective length factor (k) which is still in the 2022 AISC steel design manual. The nomograph on the right was used in the 1960s to find the required moment of inertia for beam design (taken from Blodgett's Design of Welded Structures, 1966)*

Here's another fun snipper from Blodgett's textbook. In structural engineering, welds are often treated as one-dimensional "lines". As such, weld stresses are often expressed in force per unit length (e.g. kip/in) rather than force per unit area (e.g. ksi). The main reason behind this convention is to avoid the thorny problem of stress transformation, but the other significant reason is related to slide rule usage:

> "[*On the line approximation for determining section properties*] With a thin section, the inside dimension is almost as large as the outside dimension; and, in most cases, the property of the section varies as the cubes of these two dimensions. This means dealing with the difference between two very large numbers. In order to get any accuracy, **it would be necessary to calculate this out by longhand or by using logarithms rather than use the usual slide rule** [*emphasis mine*]. To simplify the problem, the section may be treated as a line, having no thickness."

Not long after Blodgett's textbook was published, we enter the electronic calculator era:

<img src="/assets/img/blog/2025/etabs/etabs14.png" style="width:70%;"/>
*On the left we have the HP-35 pocket calculator, which sold for 395 dollars each in 1972 (3,000 dollars in 2024). The wide-spread introduction of scientific calculators marked the end of the slide rule era. Calculator usage continues to this day. Most college and licensing exams still require calculators. On the right is another familiar sight. in this case it's a wide-flange beam-column selection table provided by AISC in 2017. This one is from the [15th ed manual companion](https://www.aisc.org/publications/steel-construction-manual-resources/15th-ed-steel-construction-manual/manual-companion-for-15th-edition/)*

<img src="/assets/img/blog/2025/etabs/etabs15.png" style="width:80%;"/>
*Toolbox of a modern day structural engineers. A weird mélange of software and tools*

Modern engineers rely on advanced FEM software, intricate spreadsheets, acres of grasshopper scripts, Python, Rhino, Tekla, Speckle, and an assortment of tools that sounds like absolute gibberish to any engineer born before the 1970s. Modern building projects require the design of thousands of elements, checking each for dozens of failure modes under hundreds of load cases (have you seen the ASCE 7 wind chapters?), through multiple design iterations. We need to keep track of all this data, process it, visualize it, save it to a database, automate it, parametrize it, transfer it between software. 

**Gone are the days of paper, pencils, and calculators. Nowadays, engineers are preoccupied with data, algorithms, and python.**

"Should I learn programming?". I finally have a non-boring answer to this question. My usual answer involves an endless rant about how programming is a career accelerant; how it's a highly valued skillset; how you get to do things that look like magic to project managers; how you get put on cool projects; how it's just plain fun. 

But you probably knew all that. Not to mention I get somewhat self-conscious selling programming like this. It's like an insurance agent telling you how badly you need life insurance. Of course I would say that - as I type into his markdown editor to finish this post on my personal website with 4 years worth of HTML, CSS, JS accumulated, hosted on GitHub which also happens to be where I store my half-a-dozen open-source coding projects. 

My new answer is a bit more tongue-in-cheek. Basically, if you are a structural engineer in 2026, it's likely that you are programming already (excel is programming). With modern workloads and complexity, you simply can't afford *not to*. If you need to program, might as well go all the way. Excel and various forms of visual programming (grasshopper) are far too limiting; it's like living with blinders on. Give programming a try! Scripting is enough, you don't need to learn software development. The learning curve is flatter than ever with AI.[^1]

Python scripting - perhaps more broadly the ability to think computationally - is fast becoming a prerequisite to this profession.  I think this development is perfectly natural. Like slide rules, nomographs, and calculators, python scripting will be another tool in the structural engineer's ever-expanding toolbox.

<hr>

**Footnotes**

[^1]: If AI can program for me, why learn programming? Seems like a waste of time. I might address this in a full blog post in the future. But the short answer is: you still need to possess the process knowledge and know the vocabulary. We have FEM software, so is it pointless teaching undergraduate students about Euler-Bernoulli beams? Just use SAP2000 bro? To borrow a concept from Simon Willison: you need to ["hoard things you know how to do"](https://simonwillison.net/guides/agentic-engineering-patterns/hoard-things-you-know-how-to-do/). You need to know what is possible; you need to be able to articulate what you want. AI is a fast car, but it's empty and still needs a driver. As long as humans are still in the loop, the quality of the driver matters[^2]. 
[^2]:But there is a small, non-negligible, chance that humans will eventually be removed from the loop too. Like AI in chess, it's possible that "human-in-the-loop" will just be objectively worse than pure AI. If that's the case, the world will be so radically different that any prediction is just science fiction: akin to Vikings predicting the next popular JavaScript framework. In any case, there's probably not much you can do in the AI maximalist scenario; so the next best thing is to prepare for the complement. 















