---
layout: blog-post
categories: engineering
title: "A Deep Dive on Punching Shear"
description: "The limit state in concrete design that keeps engineers up at night."
image: assets/img/blog/2025/punchingshear/signconvention.png
date: 2025-06-20
tags: concrete
toc: true
---

<p class="tldr-box">
This blog post is an in-depth exploration of punching shear - one of the most important limit state in reinforced-concrete design. I start by examining the punching shear formulations of ACI 318-19, going through each variable in great detail, and capping off the section with an illustrative example. In the second half of the article, I present seven subtleties that practicing engineers will likely encounter on real projects; most notably the treatment of biaxial moment, shear section centroid offsets, principal orientation, and the nuance associated with calculating J - a property analogous to polar moment of inertia. The topics discussed herein were then distilled into an open-source python library for calculating punching shear stress called wthisj - <a href="https://github.com/wcfrobert/wthisj">available on Github</a>.
</p>






## Part 1 - A Gentle Introduction

### Introduction

Two-way shear - also known as punching shear - is a force transfer mechanism between two-way spanning slabs and its supporting columns[^1]. It is especially prevalent in modern concrete construction where the preferred floor system tends to be flat plates[^2]. In a flat plate system, the slab is supported directly on top of columns; no beams, no girders, just a smooth monolithic plate. The figure below illustrates the uniqueness of this approach vs. a more traditional system of intersecting beams.

<img src="/assets/img/blog/2025/punchingshear/theory1.png" style="width:90%;"/> 

The traditional approach has mostly fallen out of favor, especially in concrete high-rises. The presence of beams and girders results in deeper floors, more complicated formwork, more carpentry work, more labor, higher cost, and longer construction time. On the other hand, flat plates are much easier to construct (having a flat soffit), and much quicker to build[^3]. Furthermore, shallower floor depths - through the course of 20+ stories - could mean an additional floor within the same building height constraint.

So what is the trade-off? The lack of supporting beams means **less redundancy** and **high shear stress** around the supporting columns. If improperly design, flat plates can fail suddenly without warning, often triggering a [progressive collapse](https://en.wikipedia.org/wiki/Progressive_collapse) scenario. The figure below is an illustration of punching shear failure. The photo on the left is a garage in the UK (Piper's Row Car Park, Wolverhampton) built in the 1960s. This is the type of stuff that keeps engineers up at night. Needless to say, the accurate evaluation of punching shear is critically important, so let's dive in.

<img src="/assets/img/blog/2025/punchingshear/theory2.png" style="width:80%;"/> 



### Punching Shear - ACI 318

Let's start with the basics and gradually introduce more nuance. In its simplest form, punching shear stress is simply equal to the force transferred to the column divided by the area of the failure plane around the column (i.e. $$V_u/A$$). This failure plane is technically an inverted truncated cone; however, ACI-318 allows the critical shear perimeter to be approximated as rectangular faces offset $$d/2$$ from the column face (shown as red dashed lines in the figure below).

<img src="/assets/img/blog/2025/punchingshear/theory3.png" style="width:90%;"/> 

The total shear area is equal to the perimeter ($$b_o$$) multiplied by the slab depth ($$d$$)[^4].

$$A_v = b_o d$$

Therefore, punching shear stress, with negligible moment transfer, is simply the total force transferred to the column ($$V_u$$), divided by the shear area[^5]. Notice I use lowercase $$v$$ to denote stress, and uppercase $$V$$ to denote force.

$$v_u = \frac{V_u}{b_od}$$

In practice, the equation above is only good for preliminary estimates. Concrete structures are monolithic after all. Moment transfer is always present, and can arise from unequal spans, uneven load distribution, uneven stiffness, and many other reasons. It is unreasonable to assume zero moment transfer, especially at edge and corner columns. 

To account for the effect of moment transfer, ACI-318 provides an equation that's very similar to the combined elastic stress formulas ($$P/A + My/I$$)[^6].

$$v_u = \frac{V_u}{b_o d} \pm \frac{\gamma_v M_{sc} c}{J_c}$$

Here is an illustration of the formula above from the [Macgregor Textbook](https://www.amazon.com/Reinforced-Concrete-Mechanics-Design-6th/dp/0132176521) [^7]. Let's go through the variables one-by-one.

<img src="/assets/img/blog/2025/punchingshear/theory7.png" style="width:100%;"/> 

**Unbalanced Moment ($$M_{sc}$$)**

Unbalanced moment is simply the moment transferred into the columns. Most FEM software will report the magnitude of moment transferred into the columns. To get the best result, make sure the flexural stiffnesses of all connecting members are modeled accurately - including columns above and below, spandrel beams, and the slab itself[^9].

The word "unbalanced" hints at the notion that the floor wants to sag more on one side of the column vs. the other. This unbalanced may arise from unequal span, stiffnesses, or loading. Visually speaking, unbalanced moments shows up as a vertical offsets in the slab strip moment diagram. But if we plot the moment diagram for the entire floor assembly, we see exactly where the unbalanced moment is going: into the columns[^8]. 

<img src="/assets/img/blog/2025/punchingshear/theory4.png" style="width:70%;"/> 

At exterior columns, unbalanced moment is always present (in fact they are usually quite significant). Without continuity of slabs, any moment that arise must be transferred to the supporting columns.

At interior columns, unbalanced moment is usually smaller. In a slab with perfectly regular spans and uniform loading (which does not exist), the slab-column joint will remain perfectly horizontal with 0 rotation. In such scenario, the columns don't "feel" the need to participate, and the slab moment continues across the column joint without shedding any moment to the columns. Unfortunately, such scenario does not exist. Even if you have a completely regular slab spans, ACI 318 requires "checker-boarding" live loads, which means some unbalanced moment will inevitable arise in your interior columns due to uneven loading.

**Moment Transfer Ratio ($$\gamma$$)**

The unbalanced moment described above can transfer into the columns in two ways:

1. Flexure within a limited transfer widths ($$\gamma_f$$)
2. Shear ($$\gamma_v$$)

<img src="/assets/img/blog/2025/punchingshear/theory5.png" style="width:60%;"/> 

We use the Greek letter gamma ($$\gamma$$) to denote the percentage of moment transferred through each mechanism. Taken together, the two modes of transfer should add up to 100% (i.e. $$\gamma_v + \gamma_f = 1.0$$). The proportion of moment transferred by shear (shown in blue above) is of interest to us because it will amplify punching shear stress. ACI-318 has equations for estimating $$\gamma_f$$ and $$\gamma_v$$ based on the critical shear section dimensions.

$$\gamma_f = \frac{1}{1+2/3\sqrt{\frac{b_1}{b_2}}}$$

$$\gamma_v = 1 - \gamma_f$$

In the equation above, $$b_1$$ represents the critical perimeter dimension parallel to the slab span under consideration, whereas $$b_2$$ is the perpendicular critical perimeter dimension. Refer to the figure below for an illustration of $$b_1$$ and $$b_2$$.

<img src="/assets/img/blog/2025/punchingshear/theory6.png" style="width:100%;"/> 



**Distance From Shear Section Centroid ($$c$$)**

The variable $$c$$ represents the orthogonal distance from the neutral axis to a fiber along the shear perimeter. Most of the time, we are interested in the fibers on the two extreme ends of the shear perimeter. 

The neutral axis is located at the shear section centroid. We can calculate the location of neutral axis using the first moment of area formulas:

$$x_c = \frac{\sum xA}{\sum A} \mbox{ and } y_c = \frac{\sum yA}{\sum A}$$

Shear stresses due to $$M_{sc}$$ is NOT always additive with shear stress due to gravity load. Remember that unbalanced moment is typically not symmetrical where both positive and negative values are possible. Consequently, the fiber furthest away from the neutral axis is NOT necessarily the governing fiber. You should check both extreme ends.

<img src="/assets/img/blog/2025/punchingshear/theory19.png" style="width:40%;"/> 



**"Property Analogous to Polar Moment of Inertia" ($$J_c$$)**

$$J_c$$ is often referred to as a "section property analogous to polar moment of inertia". There are many tables and formulas in design guides. Rather than providing a big table of formulas, let's go through the derivations step-by-step. The calculation procedure is very similar to calculating section properties with the composite area method and parallel axis theorem, with a few idiosyncrasies that I will highlight. Before proceeding further, I'll assume a basic understanding of [second moment of area](https://en.wikipedia.org/wiki/Second_moment_of_area) and related concepts (i.e. $$\bar{I} = \sum{ (I+Ad^2)}$$).

First, we break the 3-D shear section into individual rectangular areas, then:

* For the areas highlighted green, calculate its $$I_x$$ and $$I_y$$ as well as any $$Ad^2$$ terms. I call this area the "**web**".
* For the areas highlighted blue, we calculate only its $$A d^2$$ term and ignore the rest. I call this area the "**flange**".

<img src="/assets/img/blog/2025/punchingshear/theory10.png" style="width:100%;"/> 

This is all a bit convoluted, to clarify, let's derive the interior condition formula ourselves. For the flange areas highlighted in blue, we only count the $$A d^2$$ term. The area is equal to $$b_2d$$, and the distance between the centroid of this area and the centroid of the overall section is equal to $$(b_1/2)$$:

$$Ad^2 = (b_2 d) (b_1/2)^2$$

For the web areas highlighted in green, we will add up both the the $$I_x$$ and $$I_y$$ term. Since the centroid of green rectangle coincide with the centroid of the shear perimeter, we do not need to consider the $$A d^2$$ term here (because d is 0). Recall that moment of inertia for a rectangular area is equal to $$I = bh^3/12$$. Therefore:

$$I_x = \frac{d b_1^3}{12}$$

$$I_y = \frac{b_1 d^3}{12}$$

Putting all the pieces together, taking note that we have 2 "webs" and 2 "flanges", we arrive at the same equation for interior condition as above:

$$J_c = 2(\frac{d b_1^3}{12}+\frac{b_1 d^3}{12}) + 2(b_2 d) (b_1/2)^2$$

Alternatively, **ACI 421.1R - Guide for Shear Reinforcement For Slabs** presents a different formulation that is more consistent, more generalized, and more conservative.  

$$A_c =  \sum L d $$

$$J_{cx} = I_x = \sum \frac{L d}{3}(y_1^2 +y_1 y_2 + y_2^2) $$

$$J_{cy} = I_y =  \sum \frac{L d}{3}(x_1^2 +x_1 x_2 + x_2^2) $$

In the equations above, a shear sections is composed of $$N$$ straight segments, each segment defined by a start node $$(x_1,y_1)$$ and end node $$(x_2, y_2)$$ where the coordinates are relative to the shear section centroid; let $$L$$ be the length of each segment, and let $$d$$ be the slab depth.

Please note $$J_c$$ as calculated per ACI 318 is different from $$J_{cx}$$ and $$J_{cy}$$ as calculated per ACI 421.1 in subtle ways. We will discuss their nuances in part 2.



### Example Calculation

Now that we've covered all the important variables in the ACI 318 punching shear formulation. Let's do an example calculation.



<img src="/assets/img/blog/2025/punchingshear/theory17.png" style="width:85%;"/> 



<img src="/assets/img/blog/2025/punchingshear/theory18.png" style="width:85%;"/> 



Here's the same output from [wthisj](https://github.com/wcfrobert/wthisj):

```python
import wthisj

# initialize a column perimeter
column1 = wthisj.PunchingShearSection(col_width = 20,
                                      col_depth = 20,
                                      slab_avg_depth = 8,
                                      condition = "W",
                                      overhang_x = 0,
                                      overhang_y = 0,
                                      studrail_length = 0)

# calculate punching shear stress
results = column1.solve(Vz = -80, Mx = 0, My = 1400, consider_ecc=False)

# plot results (plotly)
column1.plot_results_3D()
```

<img src="/assets/img/blog/2025/punchingshear/example.png" style="width:100%;"/> 



## Part 2 - Not So Gentle Subtleties

> "The devil is in the details"

### Nuance 1 - Biaxial Unbalanced Moment

The astute reader may have noticed something peculiar about the formulations above. Why are we idealizing two-way slabs are two-dimensional frames? What if there are unbalanced moment about both orthogonal directions? ACI 318 code is vague about bi-axial moment for historical reasons. Before industry-wide adoption of FEM software, two-way slabs were designed using either the Direct Design Method (DDM), or Equivalent Frame Method (EFM), both of which required partitioning a three-dimensional slab system into series of two-dimensional frames. Slabs were designed one direction at a time, tediously along every gridline. With modern FEM software, it became trivial to find unbalanced moment about both axes, hence why it may seem strange to modern engineers why anyone would consider only "half" of the applied moment. 

There's [a lot of debate](https://www.eng-tips.com/threads/punching-shear-aci-calculation-method.392228/) on whether unbalanced moment should be considered one axis at a time, or both at the same time. A common line of argument is that calculating stress due to bi-axial moment will result in a maximum stress at a point, whereas all the experimental tests and thus code-based equations are based on the average stress across an entire face. According to the ACI committee 421 report in 1999 (ACI 421.1R-99), an overstress of 15% is assumed to be acceptable as stress is expected to distribute away from the highly stressed corners of the critical perimeter. However, this statement no longer exists in the latest version of the report (ACI 421.1R-20). I don't think there is consensus yet. I'll leave the engineering judgement to the reader. I would personally be as conservative as possible when it comes to punching shear. 

Here's the equation if we were to consider unbalanced moment about both axes. ACI 318's $$J_c$$ should be used for single-axis unbalanced moment, and ACI 421.1R's $$J_{cx}$$ and $$J_{cy}$$ should be used for bi-axial unbalanced moment.

$$v_u = \frac{V_u}{b_o d} \pm \frac{\gamma_{vx} M_{sc,x} c_y}{J_{cx}} \pm \frac{\gamma_{vy} M_{sc,y} c_x}{J_{cy}}$$



### Nuance 2 - Slab Openings

According to ACI 318-19 22.6.4.3, If an opening is closer than $$4h$$ to the critical shear perimeter, the shear perimeter ($$b_o$$) must be reduced which increases punching shear stress. To consider the influence of nearby openings, connect the corners of the opening to the column centroid, the portion of the shear section enclosed are considered ineffective. This is easier to explain with an illustration:

<img src="/assets/img/blog/2025/punchingshear/theory11.png" style="width:80%;"/> 

In practice, most engineers use some kind of CAD software to avoid doing the geometry puzzle. In addition to the perimeter reduction, there are two additional consequences that are often ignored:

* The addition of openings may shift the shear section centroid (see nuance #4)
* The addition of opening may rotate the principal axes. For example, the section above on the right must be rotated 28 degrees to its principal orientation - where $$I_{xy}=0$$ - otherwise equilibrium will not hold. (See nuance #5)



### Nuance 3 - Slab Edge Overhang

At edge or corner columns, the slab may cantilever far beyond the face of the column. At what point does it become an interior condition? According to ACI 318-19 22.6.4.1, the perimeter of the critical section shall be minimized. We will interpret this to mean that the overhang cannot provide more perimeter than if the column were on the interior. If we do the math, the limit works out to be $$c_2/2 +d$$. Where $$d$$ is the average slab depth, and $$c_2$$ is the column dimension parallel to the slab edge. If the slab cantilevers longer than this limit, the edge condition becomes an interior condition.

$$\mbox{max overhang} = c_2/2 + d$$

<img src="/assets/img/blog/2025/punchingshear/theory12.png" style="width:90%;"/> 

Reality is probably more complicated. Ideally one should avoid this grey-zone and ensure a clear distinction between edge and interior column.



### Nuance 4 - Shear Section Centroid Offset

At an interior columns, the critical shear section centroid most likely coincides with the column centroid. However, this is not the case at edge and corner columns as illustrated in the figure below.

<img src="/assets/img/blog/2025/punchingshear/theory8.png" style="width:70%;"/> 

Since shear demand is usually derived from FEM software that reports $$M_u$$ and $$V_u$$ at the column centroid, there must be an moment adjustment[^10].

$$M_{sc,x} = M_{sc,xO} - V_u (e_y)$$

$$M_{sc,y} = M_{sc,yO} + V_u (e_x)$$

<img src="/assets/img/blog/2025/punchingshear/theory9.png" style="width:100%;"/> 

If you are doing punching shear calculations by hand, I highly recommend drawing the free-body diagrams (FBD) to avoid sign errors. Furthermore, you can consider additional load sources such as cladding on the slab edge. Below is an example.

<img src="/assets/img/blog/2025/punchingshear/theory13.png" style="width:60%;"/> 





### Nuance 5 - Shear Section Principal Axes

In order for the beam flexural formulas - and by extension the ACI punching formula - to be applicable, the sections MUST be in its principal orientation. An alternative perspective is to say that the applied moment vector **M** must be resolved into components of the principal axes. 

$$\sigma =M_xc_y/I_x +M_y c_x / I_y \Rightarrow \mbox{ this formula is only applicable if } I_{xy}=0$$

For most symmetrical geometries, the principal axes is simply the horizontal (X) and vertical (Y) axes and no rotation is needed. However, there are sections - such as an L shape - that have slanted principal axes. This is sometimes referred to as **unsymmetric bending**. In short, unsymmetric bending can only guarantee equilibrium when the bi-axial moment is applied with respect to the principal axes. 

In the figure below, I have a corner column subjected to the exact same loading condition. 

<img src="/assets/img/blog/2025/punchingshear/theory14.png" style="width:100%;"/> 

On the left, we apply moment about the non-principal Y axes. Notice how the entire right face of the column has the same stress. This makes sense as those fibers have the same $$c_x$$ distance. Unfortunately, the resulting stress field is NOT in equilibrium. 

On the right, we first resolve the moment into components of the principal axes $$(x_p, y_p)$$, and then apply the punching shear stress formula about these rotated local axes. Notice how different the two stress distribution is!



### Nuance 6 - Stud Rails

Where a slab-column joint is overstressed in shear, steel reinforcements (stud rails) may be added to drastically increases a section's shear capacity. However, we now need to verify the adequacy of two critical shear sections: 

1. The inner perimeter with increased capacity from stud rails.
2. The outer *unreinforced* perimeter in the shape of a polygon.

<img src="/assets/img/blog/2025/punchingshear/theory15.png" style="width:90%;"/> 

The polygonal shear perimeter makes punching shear calculation very gnarly and tedious to do by hand. The general principles - which we covered above - still applies; however, calculation of the the geometric properties are much more involved. How do you calculate $$J$$ for a polygonal shear section? (see nuance #7 for answer)



### Nuance 7 - Calculating J

The parameter $$J_c$$ was first introduced in a paper by [Di Stasio and Van Buren (1960)](https://www.scribd.com/document/703275022/Transfer-of-Bending-Moment-Between-Flat-Plate-Floor-and-Column), the proposed analytical model was known as the **eccentric shear stress model**. The original formula had more factors in it but was subsequently simplified in ACI 318-71. The formula for punching shear has remained essentially unchanged since then.

ACI 318-19 defines $$J_c$$ as a property "analogous to polar moment of inertia". However, this terminology is misleading. It is perhaps better to think of $$J_c$$ as purely an empirical constant rather than something theoretically rigorous. To understand why, recall from mechanics of materials some key equations:

$$\mbox{planar moments of inertia about X axis: } I_x=\int y^2dA$$

$$\mbox{planar moments of inertia about Y axis: }  I_y = \int x^2 dA$$

$$\mbox{polar moment of inertia: } J = I_x + I_y$$

$$\mbox{normal stress due to flexure: } \sigma = Mc/I$$

$$\mbox{shear stress due to torsion: } \tau= Tr/J$$

In material mechanics, we are taught that for any section, there can only be one polar moment of inertia ($$J$$) - which is used to calculate shear stress due to in-plane torsion (usually for circular shafts). On the other hand, a section has two planar moments of inertia ($$I_x$$ and $$I_y$$) - which are used to calculate normal stress due to out-of-plane flexure.

The parameter $$J_c$$ was born out of an attempt to fit our 3-D punching shear problem into equations that were meant for 2-D cross sections. We care about shear stress, but unbalanced moment is not a torsion because it's applied out-of-plane, so do we use the flexural normal stress equation or the torsional shear stress equation? 

The end result is a concoction that rhymes with both, but ultimately became an anti pattern. $$J_c$$ is suggestive of polar moment of inertia, but is used in a formula that resembles the flexural-normal-stress equation ($$\sigma=Mc/I$$). Despite being a polar moment of inertia, you can calculate two $$J_c$$ values ($$J_{cx}$$, $$J_{cy}$$), which means the mathematical relationship: $$J = I_x + I_y$$ does not hold. Lastly, $$J_c$$ becomes ill-defined for non-orthogonal (diagonal) faces of a polygonal shear section.

Because of these drawbacks, **ACI 421.1R - Guide for Shear Reinforcement For Slabs** recommends using a slightly different formulation. The recommendation is basically to **forget about $$J_c$$, just calculate $$I_x$$ and $$I_y$$​.** 

$$I_x = \int y^2dA \approx J_{cx}$$

$$I_y = \int x^2dA \approx J_{cy}$$

Rather than calculating the integral by hand, we can use the handy formulas below. Let a shear section be composed of $$N$$ straight segments, each segment is defined by a start node $$(x_1,y_1)$$ and end node $$(x_2, y_2)$$ where the coordinates are relative to the shear section centroid; let $$L$$ be the length of each segment, and let $$d$$ be the slab depth. The ACE 421.1R equations for J are shown below:

$$J_{cx} \approx I_x= \sum \frac{L d}{3}(y_1^2 +y_1 y_2 + y_2^2) $$

$$J_{cy} \approx I_y =  \sum \frac{L d}{3}(x_1^2 +x_1 x_2 + x_2^2) $$

It turns out $$I_{x}$$ and $$I_{y}$$ approximates $$J_{cx}$$ and $$J_{cy}$$ very well. The former is usually around 95% of the latter, and since $$J_c$$ is on the denominator, using the ACI 421.1R equations will always be more conservative. In effect, we are discarding the weak axis $$I_y$$ term from the web areas (the one where slab depth is cubed), and end up just calculating a planar moment of inertia.

Let's derive the formulas above ourselves. A single segment of a multi-segment shear perimeter is illustrated below.

<img src="/assets/img/blog/2025/punchingshear/theory16.png" style="width:65%;"/> 

If a shear section is composed of only vertical or horizontal segments, we can take advantage of the [parallel axis theorem](https://en.wikipedia.org/wiki/Parallel_axis_theorem#Second_moment_of_area) without solving any integrals. But it gets a little more complicated when diagonals are present. To get the right answer, we will need calculate the [line integral](https://tutorial.math.lamar.edu/classes/calciii/LineIntegralsPtI.aspx) of individual segments, then sum the contribution of all segments.

For brevity, I will derive the formula for $$I_x$$ only. The derivation for $$I_y$$ is exactly the same just with x and y swapped. For a single straight segment:

$$I_{xi} = \int_c y^2dA$$

A straight line segment i starting at $$(x_1, y_1)$$ and ending at $$(x_2, y_2)$$ can be [parameterized](https://tutorial.math.lamar.edu/Classes/CalcII/ParametricEqn.aspx) as:

$$x = x_1 + t(x_2-x_1) \qquad \mbox{where} \qquad 0\leq t \leq 1$$

$$y = y_1 + t(y_2 - y_1) \qquad \mbox{where} \qquad 0\leq t \leq 1$$

Furthermore, we can simplify the [differential arch length](https://tutorial.math.lamar.edu/Classes/CalcII/ParaArcLength.aspx) (for a straight segment) as:

$$ds = \sqrt{(\frac{dx}{dt})^2 + (\frac{dy}{dt})^2} dt$$

$$\frac{dx}{dt} = (x_2-x_1)$$

$$\frac{dy}{dt} = (y_2-y_1)$$

$$ds = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2} dt$$

$$ds = L dt$$

The differential area is equal to the slab depth ($$d$$) multiplied by $$d_s$$

$$dA = ds \times d = (Ld) dt$$

Substitute the equations above into our original integral:

$$I_{xi} = L d \times \int_0^1 (y_1 + t(y_2-y_1))^2 dt$$

Expand terms:

$$I_{xi} = Ld \times \int_0^1 y_1^2 + 2y_1t(y_2-y_1) + t^2(y_2-y_1)^2 dt$$

Solving the definite integral gets us:

$$I_{xi} = Ld \times (y_1^2t \rvert_0^1 + \frac{t^2 2y_1(y_2-y_1)}{2} \rvert_0^1 + \frac{t^3 (y_2-y_1)^2}{3} \rvert_0^1)$$

$$I_{xi} = Ld \times ((y_1^2) + (y_1(y_2-y_1)) + \frac{1}{3}(y_2^2 - 2y_1y_2 + y_1^2))$$

Do some simple algebra:

$$I_{xi} = Ld \times ((y_1^2) + (y_1y_2 - y_1^2) + (\frac{1}{3}y_2^2 - \frac{2}{3}y_1y_2 + \frac{1}{3}y_1^2))$$

$$I_{xi} = Ld \times ( \frac{3}{3}y_1y_2 + \frac{1}{3}y_2^2 - \frac{2}{3}y_1y_2 + \frac{1}{3}y_1^2)$$

$$I_{xi} = Ld \times ( \frac{1}{3}y_1y_2 + \frac{1}{3}y_2^2 + \frac{1}{3}y_1^2)$$

$$I_{xi} = \frac{Ld}{3}(y_1^2 +y_1y_2 + y_2^2 )$$

Remember this is the contribution of a single straight segment. Sum the contribution of all segments to get $I_x$ and $I_y$.

$$I_x = \sum \frac{Ld}{3}(y_1^2 +y_1y_2 + y_2^2 ) $$



## Part 3 - Python Package - wthisj

The topics discussed above were distilled into an open-source python library for calculating punching shear stress called wthisj - <a href="https://github.com/wcfrobert/wthisj">available on Github</a>.



**Footnotes**

[^1]: Punching shear is also relevant in the design of footings; however, it’s usually less critical because footings tend to be thicker than slabs. The design equations are one and the same. To see the resemblance, just flip the column-to-footing free body diagram upside down.
[^2]: If column caps or drop panels are present, then the slab system is called flat slab. 
[^3]: Concrete high-rises on the East Coast, especially residential apartment buildings, often utilize [flying forms](https://www.concrete.org.uk/fingertips-nuggets.asp?cmd=display&id=536) to further accelerate project timeline, and reduce the cost of formwork and labor.
[^4]: Slab depth is measured from the extreme compression fiber to the tension rebar centroid. It is different depending on which orthogonal rebar direction you are looking at. For design purposes, it is common to take the average depth of the two-orthogonal rebar directions
[^5]: Concrete design is very empirical which is why we only care about the average shear stress (V/A)

[^6]: It should be noted that although there is a $$\pm$$ sign for the second term, unbalanced moment could sometimes be one-directional. Care should be taken in tracking the sign of the unbalanced moment.
[^7]: Irrelevant tangent: I absolutely love this textbook. Dr. MacGregor is my engineering hero and it's only a bonus that he is also a fellow Canadian.
[^8]: Although tempting, it is erroneous to model a slab strip as a continuous beam with pin supports. Concrete columns have flexural stiffnesses and will attract moment any chance it gets. A more appropriate model would also have partial fixity rotational springs at the pin supports. If the column-slab joint does not remain horizontal (i.e. zero rotation), these springs (columns) will attract moment.  
[^9]: In the past, unbalanced moment was derived using moment distribution coefficients of Direct Design Method (DDM), or simplified models of Equivalent Frame Method (EFM). Both methods are outdated and no longer used. Modern two-way slab design is usually done with the help of finite-element method (FEM) models. 
[^10]: This moment adjustment was very tricky to implement. Firstly, the $$Pe$$ moment is actually subtracted from the applied moment (try drawing in the FBD above if you are not convinced). This leads to very weird answers if the centroid offset is very large as is the case when you have stud rails (in fact, I am not entirely sure it even makes sense because $$Pe$$ can become larger than the original unbalanced moment). Secondly, for users trying to implement this programmatically, be careful because I am 99% sure there is a right-hand rule sign flip for $$M_{sc,x}$$ (hence the subtraction in the first formula).
