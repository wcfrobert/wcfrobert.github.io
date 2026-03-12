---
layout: blog-post
categories: engineering
title: "The Modern Engineer's Toolbox"
description: "on structural engineer's perennial obsession with automation"
date: 2026-02-14
image: assets/img/blog/2025/etabs/etabs11.png
tags: programming
typora-root-url: ./..
---

What do structural engineers even do? 

To oversimplify, people pay us to calculate things. What is the shear stress of this? What is the buckling capacity of that? How much rebar do we need? Strip away the meetings and emails and administrative busywork, it's important to realize that **all engineering judgments are made downstream of calculations.** So it behooves us to calculate well.

But structural engineering is not just a curiosity-driven, intellectual pursuit where we solve interesting problems with math and physics, it is also a business, with revenues, expenses, operating margins, and multipliers. It is financially infeasible to turn everything into a research project. Those that do are no longer in business. **Efficiency is paramount** in this profession. An inescapable part of our job is how repetitive some of the calculations can get. Buildings don't have just one beam, there are usually hundreds of unique elements to design, and thousands of things to check. So it behooves us to calculate efficiently.

"To calculate well, and to do so efficiently." It's a nice mantra, but aren't they diametrically opposed to each other? Is it possible to maintain both quality and efficiency? We start to unearth the perennial predicament faced by every generation of structural engineers, one that is resolved in large part by automation.

To stay in business, structural engineers have always had tools in their toolbox to ease the computational burden of repetitive number crunching. 20th century engineers used slide rules, tables, charts, and nomographs; modern engineers use design software, Excel, Mathcad, grasshopper.

<img src="/assets/img/blog/2025/etabs/etabs11.png" style="width:60%;"/>
*Graphic Statics was used in the 19th century by engineers to graphically compute forces in truss structures. The sketch above is the first working drawing of the Salginatobel Bridge by Robert Maillart in 1928. Figure from [(Fivet & Zastavni, 2011)](https://www.researchgate.net/publication/260123151_Robert_Maillart's_key_methods_from_the_Salginatobel_Bridge_design_process_1928])*

<img src="/assets/img/blog/2025/etabs/etabs12.png" style="width:60%;"/>
*Slide rules were used by engineers to perform routine multiplication, division, roots, powers, and even trigonometric operations. It's usage continued up until the 1970s, when it was replaced by the hand-held calculator*

<img src="/assets/img/blog/2025/etabs/etabs13.png" style="width:100%;"/>
*Highly intricate nomographs were created in the 20th century to assist engineers with repetitive design tasks. Rather than solving lengthy math formulas, engineers can just connect a few lines to get the answer. The nomograph on the left is for column effective length factor (k) which is still in the 2022 AISC steel design manual. The nomograph on the right was used in the 1960s to find the required moment of inertia for beam design (taken from Blodgett's Design of Welded Structures, 1966)*

<img src="/assets/img/blog/2025/etabs/etabs14.png" style="width:70%;"/>
*On the left we have the HP-35 pocket calculator, which sold for 395 dollars each in 1972 (3,000 dollars in 2024). The wide-spread introduction of scientific calculators marked the end of the slide rule era. Calculator usage continues to this day. Most college and licensing exams still require calculators. On the right is another familiar sight. in this case it's a wide-flange beam-column selection table provided by AISC in 2017. This one is from the [15th ed manual companion](https://www.aisc.org/publications/steel-construction-manual-resources/15th-ed-steel-construction-manual/manual-companion-for-15th-edition/)*

<img src="/assets/img/blog/2025/etabs/etabs15.png" style="width:80%;"/>
*Toolbox of a modern day structural engineers. A weird mélange of software and tools*

Evidently the job description of a structural engineer has changed over the years. Modern engineers rely on advanced FEM software, intricate spreadsheets, Rhino, acres of grasshopper scripts, BIM, Python, Tekla, Speckle, and an assortment of tools that all sound like gibberish to any engineer born before the 1970s. 

Modern building projects require the design of thousands of elements, checking each for dozens of failure modes under hundreds of load cases, through multiple design iterations. We need to keep track of all this data, process it, visualize it, save it to a database, automate it, parametrize it, transfer it between software. 

Gone are the days of paper, pencils, and calculators. Nowadays, engineers are preoccupied with data, algorithms, and python.

### Should I Learn to Code?

I finally have a non-boring answer to this question. My usual answer involves an endless rant about how programming is a career accelerant; how it's a highly valued skillset; how you get to do things that look like magic to project managers; how you get put on cool projects; how it's just plain fun. 

But you probably knew all that. Not to mention I get somewhat self-conscious selling programming like this. It's like an insurance agent telling you how badly you need life insurance. Of course I would say that - as I type into his markdown editor to finish this post on my personal website with 4 years worth of HTML, CSS, JS accumulated, hosted on GitHub which also happens to be where I store my half-a-dozen open-source coding projects. 

My new answer is a bit more tongue-in-cheek answer. Basically:

If you are a structural engineer in 2026, you are probably programming already in one form or another (excel is programming). With modern workloads and complexity, you simply cannot afford *not to*. It is inevitable. Python scripting - along with design tables, nomographs, calculators, Excel - is just the next valuable tool in the structural engineer's toolbox.















