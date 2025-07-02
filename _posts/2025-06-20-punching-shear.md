---
layout: blog-post
categories: engineering
title: "A Deep Dive on Punching Shear"
description: "Exploration of the most important limit state in concrete design"
image: assets/img/blog/2025/punchingshear/signconvention.png
date: 2025-06-20
tags: concrete
toc: true
---



WORK IN PROGRESS

## Part 1 - A Gentle Introduction

### Background

Two-way shear - known colloquially as punching shear - is a load transfer mechanism between concrete slabs and its supporting columns. This type of load transfer is unique to a special type of floor system called **flat plate** (or flat slab where drop panels or column caps are present). In a flat plate system, the slab is supported directly by columns; no beams, no girders, just a smooth monolithic plate.

In the figure below, we see two types of concrete floor systems. The one on the left is more traditional, whereby the slab is supported by intersecting beams, which then transfer the loads to the columns. The modern approach, shown on the right, has a completely flat soffit without any beams.

<img src="/assets/img/blog/2025/punchingshear/theory1.png" style="width:90%;"/> 

It is easy to see why beam-supported slab systems have fallen out of favor. Beams and girders must be shaped with formwork, which means more carpentry work, which means more labor, higher cost, and longer construction time. On the other hand, flat plate slabs are easier to build, reduce complexity in terms of detailing, give MEP trade partners full flexibility in the ceiling space, and minimize formwork (see [flying form](https://www.concrete.org.uk/fingertips-nuggets.asp?cmd=display&id=536)). Furthermore, the shallow floor depths means more floors can fit within the same building height constraint. This is a no-brainer decision for real estate developers. Most concrete high-rises in the US today have flat plate floor systems. 

So what is the trade-off? The lack of supporting beams means **less redundancy** and **high shear stress** around the supporting columns. If improperly design, flat plates can fail like a pencil through paper, and if the slab fails, it's game over. The figure below is an illustration of punching shear failure. The photo on the left is a garage in the UK (Piper's Row Car Park, Wolverhampton) built in the 1960s. Needless to say, the accurate evaluation of punching shear has become critically important in the design concrete slabs.

<img src="/assets/img/blog/2025/punchingshear/theory2.png" style="width:80%;"/> 

Punching shear is also relevant in the design of footings, though it's usually less critical. The punching shear design equations are one and the same, just flip the image above upside down. 

### Punching Shear Calculation

Let's start simple and gradually introduce more nuances. For now, the punching shear stress is simply equal to the force transferred to the column divided by the area of the failure plane. This failure plane is technically an inverted truncated cone. To simplify, ACI-318 allows the **critical** **shear perimeter** to be approximated as rectangular faces offset d/2 from the column face. (4) faces for interior, (3) for edge, and (2) for corner conditions.

<img src="/assets/img/blog/2025/punchingshear/theory3.png" style="width:90%;"/> 

The total shear area is equal to the perimeter ($b_o$) multiplied by the slab depth ($d$). Slab depth is measured from the extreme compression fiber to tension rebar centroid (taking the average depth of the two-orthogonal slab directions).

$$A_v = b_o d$$

Therefore, the punching shear stress, **with negligible moment transfer**, is equal to the total shear demand ($V_u$) on the column, divided by the shear area. Concrete design is very empirical which is why we only care about the average shear stress.

$$v_u = \frac{V_u}{b_od}$$

In practice, the equation above is only good for preliminary estimates. Moment transfers are always present, and can arise from unequal spans, uneven load distribution, uneven stiffness, and many other reasons. It is not reasonable to assume zero moment transfer, especially at edge and corner columns. Concrete buildings are monolithic after all - there is no such thing as pinned in concrete design. 

To account for the effect of moment transfer, ACI-318 provides an equation that is should remind you of the combined elastic stress formulas ($P/A + My/I$). Please note that although there is a $\pm$ sign for the second term, it is not always the case that both positive and negative values are possible. For example, an edge column will always have unbalanced moment on one-side.

$$v_u = \frac{V_u}{b_o d} \pm \frac{\gamma_v M_{sc} c}{J_c}$$

Below is an illustration of the superposition of shear stresses from the [Macgregor Textbook](https://www.amazon.com/Reinforced-Concrete-Mechanics-Design-6th/dp/0132176521). I absolutely love this textbook. Dr. MacGregor is my superhero - not least because he is also Canadian.

<p align="center"><img src="./doc/theory7.png" width="100%"></p>

Let's go through the variables in the second term one-by-one.

**Unbalanced Moment ($M_{sc}$)**

The slab moment transferred into the supporting column is known as **unbalanced moment** ($M_{sc}$). The reason it is called "unbalanced" is because of the vertical offsets in the slab strip moment diagram. I don't like this naming because everything is balanced for static equilibrium. If we plot the moment diagram for the entire floor assembly, we see exactly where the unbalanced moment is going: into the columns. 

<img src="/assets/img/blog/2025/punchingshear/theory4.png" style="width:70%;"/> 

**Moment Transfer Ratio ($\gamma$)**

The unbalanced moment described above can transfer into the columns in two ways:

1. Flexure within a limited transfer widths ($\gamma_f$)
2. Shear ($\gamma_v$)



<img src="/assets/img/blog/2025/punchingshear/theory5.png" style="width:60%;"/> 

We use the Greek letter gamma ($\gamma$) to denote the percentage of moment transferred through each mechanism. Taken together, the two modes of transfer should add up to 100% (i.e. $\gamma_v + \gamma_f = 1.0$). The proportion of moment transferred by shear ($\gamma_v M_{sc}$) is of interest to us because it will amplify shear stress. ACI-318 has equations for estimating $\gamma_f$ and $\gamma_v$ based on the critical shear section dimensions.

$$\gamma_f = \frac{1}{1+2/3\sqrt{\frac{b_1}{b_2}}}$$

$$\gamma_v = 1 - \gamma_f$$

$b_1$ is the critical perimeter dimension parallel to the slab span, whereas $b_2$ is the critical perimeter dimension perpendicular to the slab span. See figure below for an illustration. For example, a square column would have a moment transfer ratio of 60% through flexure, and 40% through shear.

<img src="/assets/img/blog/2025/punchingshear/theory6.png" style="width:100%;"/> 



**Distance From Shear Section Centroid ($c$)**

The parameter c is the orthogonal distance from the neutral axis to any fiber in the perimeter. There are two important nuances worth highlighting here:

1. Unbalanced moment is not always symmetrical where the both positive and negative values are possible. In other words, the shear stresses due to $M_u$ is NOT always additive to the shear stress due to $V_u$. Therefore, the fiber furthest away from the neutral axis is NOT necessarily the governing fiber. 
2. The neutral axis is located at the shear section centroid, NOT the column centroid. This distinction is important because the shear section centroid does NOT always coincide with the column centroid. We will discuss the effect of this offset in section 4.0. We can calculate the shear section centroid using the first moment of area formulas:

$$x_c = \frac{\sum xA}{\sum A} \mbox{ and } y_c = \frac{\sum yA}{\sum A}$$



<img src="/assets/img/blog/2025/punchingshear/theory8.png" style="width:70%;"/> 



**"Polar Moment of Inertia" ($J_c$)**

$J_c$ is often referred to as a "section property analogous to polar moment of inertia". There are many design tables and formulas to help you calculate J. Rather than providing a big table of formulas, let's go through the derivations step-by-step. The calculation procedure for J is very similar to calculating section properties with the composite area method and parallel axis theorem, with a few idiosyncrasies that I will highlight. Before proceeding further, I'll assume a basic understanding of [second moment of area](https://en.wikipedia.org/wiki/Second_moment_of_area) and related concepts (i.e. $\bar{I} = \sum{ (I+Ad^2)}$).

First, we break the 3-D shear section into individual rectangular areas, then:

* For the areas highlighted green, calculate its $I_x$ and $I_y$ as well as any $Ad^2$ terms. I think of this area as the "**web**".
* For the areas highlighted blue, we calculate only its $A d^2$ term and ignore the rest. I think of this area as the "**flange**".

<img src="/assets/img/blog/2025/punchingshear/theory10.png" style="width:100%;"/> 

For example, let's derive the interior condition formula ourselves. For the two flange areas highlighted in blue, we only count the $A d^2$ term. The area is equal to $b_2d$, and the distance between the centroid of this area and the centroid of the overall section is equal to $(b_1/2)$:

$$Ad^2 = (b_2 d) (b_1/2)^2$$

For the two web areas highlighted in green, we will add up both the the  $I_x$ and $I_y$ term. Since the centroid of green rectangle coincide with the centroid of the shear perimeter, we do not need to consider the $A d^2$ term here (because d is 0). Recall that moment of inertia for a rectangular area is equal to $I = bh^3/12$. Therefore:

$$I_x = \frac{d b_1^3}{12}$$

$$I_y = \frac{b_1 d^3}{12}$$

Putting all the pieces together, taking note that we have 2 "webs" and 2 "flanges", we arrive at the same equation for interior condition as above:

$$J_c = 2(\frac{d b_1^3}{12}+\frac{b_1 d^3}{12}) + 2(b_2 d) (b_1/2)^2$$

Alternatively, **ACI 421.1R - Guide for Shear Reinforcement For Slabs** presents another formulation that is slightly different but is more conservative. Here are the formulas. We will discuss $J$ in more detail in Section 5.0. 

$$A_c =  \sum L d $$

$$J_{cx} = I_x = \sum \frac{L d}{3}(y_1^2 +y_1 y_2 + y_2^2) $$

$$J_{cy} = I_y =  \sum \frac{L d}{3}(x_1^2 +x_1 x_2 + x_2^2) $$

In the equations, a shear sections is composed of $N$ straight segments, each segment defined by a start node $(x_1,y_1)$ and end node $(x_2, y_2)$ where the coordinates are relative to the shear section centroid; let $L$ be the length of each segment, and let $d$ be the slab depth.





### Example

<img src="/assets/img/blog/2025/punchingshear/theory17.png" style="width:70%;"/> 



<img src="/assets/img/blog/2025/punchingshear/theory18.png" style="width:70%;"/> 

Here's the same output from wthisj:

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

Let's start introducing some of the nuances one may encounter in practice. 

### Nuance 1 - Unbalanced Moment About Both Axes

ACI 318 code is vague about bi-axial moment for historical reasons. Before industry-wide adoption of FEM software, two-way slabs were designed using either the Direct Design Method (DDM), or Equivalent Frame Method (EFM), both of which required partitioning a three-dimensional slab system into series of two-dimensional frames. Slabs were designed one direction at a time, tediously along every gridline... With modern FEM software, it became trivial to find unbalanced moment about both axes, hence why it may seem strange to younger engineers why anyone would consider only "half" of the applied moment. 

There's [a lot of debate](https://www.eng-tips.com/threads/punching-shear-aci-calculation-method.392228/) on whether unbalanced moment should be considered one axis at a time, or both at the same time. A common line of argument is that calculating stress due to bi-axial moment will result in a maximum stress at a point, whereas all the experimental tests and thus code-based equations are based on the average stress across an entire face. According to the ACI committee 421 report in 1999 (ACI 421.1R-99), an overstress of 15% is assumed to be acceptable as stress is expected to distribute away from the highly stressed corners of the critical perimeter. However, this statement no longer exists in the latest version of the report (ACI 421.1R-20). I would personally be as conservative as possible when it comes to punching shear.

I don't think there is consensus yet. I'll leave the engineering judgement to the reader. Here's the equation if we were to consider unbalanced moment about both axes.

$$v_u = \frac{V_u}{b_o d} \pm \frac{\gamma_{vx} M_{sc,x} c_y}{J_{cx}} \pm \frac{\gamma_{vy} M_{sc,y} c_x}{J_{cy}}$$

> [!NOTE]
> wthisj will calculate shear stress using the above formula. To consider unbalanced moment one axis at a time, you can simply set one of the moment arguments (`Mx, My`) to zero when running `PunchingShearSection.solve()`



### Nuance 2 - Nearby Openings

According to ACI 318-19 22.6.4.3, If an opening is closer than $4h$ to the critical shear perimeter, the shear perimeter ($b_o$) must be reduced which increases punching shear stress. To consider the influence of nearby openings, connect the corners of the opening to the column centroid, the portion of the shear section enclosed are considered ineffective. This is easier to explain with an illustration:

<img src="/assets/img/blog/2025/punchingshear/theory11.png" style="width:80%;"/> 

In practice, most engineers use some kind of CAD software to avoid doing the geometry puzzle. In addition to the perimeter reduction, there are two additional consequences that are not often not talked about:

* The addition of openings may shift the perimeter centroid.
* The addition of opening may rotate the principal axes. For example, the section above on the right must be rotated 28 degrees to its principal orientation - where $I_{xy}=0$ - otherwise equilibrium will not hold. We will elaborate further in Nuance #5.

> [!NOTE]
> wthisj allows an arbitrary number of rectangular openings to be added with the `PunchingShearSection.add_opening(xo, yo, width, depth)` method. A warning will be printed to console if the openings is further than 4h away because the specified opening can be ignored. In the back end, each opening is converted into a $\theta$ deletion range. Then, using polar coordinate system, all perimeter fibers falling within the $\theta$ deletion range are removed from the model.





### Nuance 3 - Overhang At Edge or Corner Columns

At edge or corner columns, the slab may cantilever far beyond the face of the column. At what point does it become an interior condition? According to ACI 318-19 22.6.4.1, the perimeter of the critical section shall be minimized. We will interpret this to mean that the overhang cannot provide more perimeter than if the column were on the interior. If we do the math, the limit works out to be $c_2/2 +d$. Where $d$ is the average slab depth, and $c_2$ is the column dimension parallel to the slab edge. If the slab cantilevers longer than this limit, the edge condition becomes an interior condition.

$$\mbox{max overhang} = c_2/2 + d$$

<img src="/assets/img/blog/2025/punchingshear/theory12.png" style="width:90%;"/> 

> [!NOTE]
> wthisj implements the above logic automatically. If a `PunchingShearSection()` object with edge or corner condition is initialized with a large enough `overhang_x` or `overhang_y`, it will be automatically converted to an interior condition.



### Nuance 4 - Shear Section Centroid Offset

For an interior condition, the centroid of the critical shear section most likely coincides with the column centroid. However, at edge and corner columns, there will be an offset which is illustrated in the figure below.

<img src="/assets/img/blog/2025/punchingshear/theory8.png" style="width:70%;"/> 

There are two important ramifications from this offset:

* First, the neutral axis is located at the shear section centroid, NOT the column centroid. Therefore, the $c$ variable in $\gamma_v Mc/J$ must be relative to the shear section centroid. We can calculate it using the first moment of area formulas:

$$x_c = \frac{\sum xA}{\sum A} \mbox{ and } y_c = \frac{\sum yA}{\sum A}$$

* Second, since shear demand is usually derived from FEM software that reports $M_u$ and $V_u$ at the column centroid, there must be an moment adjustment.

$$M_{sc,x} = M_{sc,xO} - V_u (e_y)$$

$$M_{sc,y} = M_{sc,yO} + V_u (e_x)$$

<img src="/assets/img/blog/2025/punchingshear/theory9.png" style="width:100%;"/> 

This moment adjustment is tricky. Firstly, the $Pe$ moment adjustment is almost always subtracted from the applied moment (try checking equilibrium yourself if you are not convinced). In other words, this $Pe$ moment most likely acts in the opposite direction. Secondly, I am not sure if this adjustment always make sense because I've seen situations where the $Pe$ moment is actually larger than the unbalanced moment. Lastly, for users trying to implement this programmatically, be careful because I am 99% sure there is a right-hand rule sign flip for $M_{sc,x}$ (hence the subtraction in the first formula).

If you are doing punching shear calculations by hand, I highly recommend drawing the free-body diagrams (FBD) to avoid sign errors. Furthermore, you can consider additional load sources such as cladding on the slab edge. Below is an example.

<img src="/assets/img/blog/2025/punchingshear/theory13.png" style="width:70%;"/> 

> [!NOTE]
> Wthisj expects the applied forces `Vz, Mx, My` provided by the user to be already adjusted! Whatever load patterns you have, please perform the necessary calculations to get the forces with respect to the shear section centroid. To enable eccentric moment adjustment, simply set the `consider_ecc` argument in `PunchingShearSection.solve()` to True. Note this argument is set to False by default because it can occasionally give unexpected results at corner columns or perimeter with stud rails, and it is more conservative to ignore it.





### Nuance 5 - Corner Column Principal Axes

In order for the flexural formulas - and by extension the ACI 318 punching formula - to be applicable, the sections MUST be in its principal orientation. An alternative perspective is to say that the applied moment vector **M** must be resolved into components of the principal axes. 

$$\sigma =M_xc_y/I_x +M_y c_x / I_y \Rightarrow \mbox{ this formula is only applicable if } I_{xy}=0$$

For most symmetrical geometries, the principal axes is simply the horizontal (X) and vertical (Y) axes and no rotation is needed. However, there are sections - such as an L shape - that have slanted principal axes. This is sometimes referred to as **unsymmetric bending**. In short, unsymmetric bending can only guarantee equilibrium when the bi-axial moment is applied with respect to the principal axes. 

In the figure below, I have a corner column subjected to the exact same loading condition. 

<img src="/assets/img/blog/2025/punchingshear/theory14.png" style="width:100%;"/> 

On the left, we apply moment about the non-principal Y axes. Notice how the entire right face of the column has the same stress. This makes sense as those fibers have the same $c_x$ distance. Unfortunately, the resulting stress field is NOT in equilibrium. 

On the right, we first resolve the moment into components of the principal axes $(x_p, y_p)$, and then apply the punching shear stress formula about these rotated local axes. Notice how much higher the the shear stress is.

> [!NOTE]
> wthisj will automatically rotate a section's local axes to the principal orientation. Simply set the `auto_rotate` argument in `PunchingShearSection.solve()` to True (note this argument is set to True by default). In the backend, the entire geometry is rotated, rather than the moment vector, because the former is easier to implement programmatically.



### Nuance 6 - Stud Rails

The addition of shear reinforcements (stud rails) drastically increases a section's shear capacity. However, we now need to verify the adequacy of two critical shear sections: (1) The inner reinforced shear perimeter, and (2) the outer unreinforced perimeter in the shape of a polygon. See figure below for an illustration.

<img src="/assets/img/blog/2025/punchingshear/theory15.png" style="width:90%;"/> 

> [!NOTE]
>
> To create a polygonal shear perimeter, simply create a `PunchingShearSection()` object and provide a non-zero value to the  `studrail_length` argument. Note you do not have to specify stud spacings, number of rails per face, etc. Wthisj does not calculate concrete shear capacities. All we care about is establishing the polygonal shape. 



### Nuance 7 - Calculating J

The parameter $J_c$ was first introduced in a paper by [Di Stasio and Van Buren (1960)](https://www.scribd.com/document/703275022/Transfer-of-Bending-Moment-Between-Flat-Plate-Floor-and-Column), the proposed analytical model is known as the **eccentric shear stress model**. The original formula had more factors in it but was subsequently simplified in ACI 318-71. The formula for punching shear has remained essentially unchanged since.

ACI 318-19 defines $J_c$ as a property "analogous to polar moment of inertia". However, this terminology is misleading. It is perhaps better to think of $J_c$ as purely an empirical constant rather than something theoretically rigorous. To understand why, recall from mechanics of materials some key equations:

$$\mbox{planar moments of inertia about X axis: } I_x=\int y^2dA$$

$$\mbox{planar moments of inertia about Y axis: }  I_y = \int x^2 dA$$

$$\mbox{polar moment of inertia: } J = I_x + I_y$$

$$\mbox{normal stress due to flexure: } \sigma = Mc/I$$

$$\mbox{shear stress due to torsion: } \tau= Tr/J$$

For any cross section, there can only be one polar moment of inertia ($J$) - which is used to calculate shear stress due to in-plane torsion (usually for circular shafts). On the other hand, a section can have two planar moments of inertia ($I_x$ and $I_y$) - which are used to calculate normal stress due to out-of-plane flexure.

The parameter $J_c$ was born out of an attempt to fit our 3-D punching shear problem into equations that were meant for 2-D cross sections. We care about shear stress, but unbalanced moment is not a torsion because it's applied out-of-plane, so do we use the flexural normal stress equation instead? The end result is a concoction that rhymes with all of the above, but became an confusing anti pattern. $J_c$ is suggestive of polar moment of inertia, but is used in a formula that resembles the flexural-normal-stress equation ($\sigma=Mc/I$). Despite being a polar moment of inertia, you can calculate two $J_c$ values ($J_{cx}$, $J_{cy}$), which means the mathematical relationship: $J = I_x + I_y$ does not hold. Lastly, $J_c$ becomes ill-defined for non-orthogonal (diagonal) faces of a polygonal shear section.

Because of these drawbacks, **ACI 421.1R - Guide for Shear Reinforcement For Slabs** recommends using a slightly different formulation. The recommendation is basically to **forget about $J_c$, just calculate $I_x$ and $I_y$​.** 

$$I_x = \int y^2dA \approx J_{cx}$$

$$I_y = \int x^2dA \approx J_{cy}$$

> [!NOTE]
>
> It turns out $I_{x}$ and $I_{y}$ approximates $J_{cx}$ and $J_{cy}$ very well. The former is usually around 95% of the latter, and since $J_c$ is on the denominator, using the ACI 421.1R equations will always be more conservative. In effect, we are discarding the weak axis $I_y$ term from the web areas (the one where slab depth is cubed), and end up just calculating a planar moment of inertia.

Rather than calculating the integral by hand, we can use the handy formulas below. Let a shear section be composed of $N$ straight segments, each segment is defined by a start node $(x_1,y_1)$ and end node $(x_2, y_2)$ where the coordinates are relative to the shear section centroid; let $L$ be the length of each segment, and let $d$ be the slab depth:

$$I_x = \sum \frac{L d}{3}(y_1^2 +y_1 y_2 + y_2^2) $$

$$I_y =  \sum \frac{L d}{3}(x_1^2 +x_1 x_2 + x_2^2) $$

Let's derive the formulas above ourselves. A single segment of a multi-segment shear perimeter is illustrated below.

<img src="/assets/img/blog/2025/punchingshear/theory16.png" style="width:65%;"/> 

If a shear section is composed of only vertical or horizontal segments, we can take advantage of the [parallel axis theorem](https://en.wikipedia.org/wiki/Parallel_axis_theorem#Second_moment_of_area) without solving any integrals. But it gets a little more complicated when diagonals are present. To get the right answer, we will need calculate the [line integral](https://tutorial.math.lamar.edu/classes/calciii/LineIntegralsPtI.aspx) of individual segments, then sum the contribution of all segments.

For brevity, I will derive the formula for $I_x$ only. The derivation for $I_y$ is exactly the same just with x and y swapped. For a single straight segment:

$$I_x = \int_c y^2dA$$

A straight line segment starting at $(x_1, y_1)$ and ending at $(x_2, y_2)$ can be [parameterized](https://tutorial.math.lamar.edu/Classes/CalcII/ParametricEqn.aspx) as:

$$x = x_1 + t(x_2-x_1) \qquad \mbox{where} \qquad 0\leq t \leq 1$$

$$y = y_1 + t(y_2 - y_1) \qquad \mbox{where} \qquad 0\leq t \leq 1$$

Furthermore, we can simplify the differential arch length (for a straight segment) as:

$$ds = \sqrt{(\frac{dx}{dt})^2 + (\frac{dy}{dt})^2} dt$$

$$\frac{dx}{dt} = (x_2-x_1)$$

$$\frac{dy}{dt} = (y_2-y_1)$$

$$ds = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2} dt$$

$$ds = L dt$$

The differential area is equal to the slab depth ($d$) multiplied by the differential [arch length](https://tutorial.math.lamar.edu/Classes/CalcII/ParaArcLength.aspx):

$$dA = ds \times d = (Ld) dt$$

Substitute the equations above into our original integral:

$$I_{x} = L d \times \int_0^1 (y_1 + t(y_2-y_1))^2 dt$$

Expand terms:

$$I_{x} = Ld \times \int_0^1 y_1^2 + 2y_1t(y_2-y_1) + t^2(y_2-y_1)^2 dt$$

Solving the definite integral gets us:

$$I_{x} = Ld \times (y_1^2t \rvert_0^1 + \frac{t^2 2y_1(y_2-y_1)}{2} \rvert_0^1 + \frac{t^3 (y_2-y_1)^2}{3} \rvert_0^1)$$

$$I_{x} = Ld \times ((y_1^2) + (y_1(y_2-y_1)) + \frac{1}{3}(y_2^2 - 2y_1y_2 + y_1^2))$$

Do some simple algebra:

$$I_{x} = Ld \times ((y_1^2) + (y_1y_2 - y_1^2) + (\frac{1}{3}y_2^2 - \frac{2}{3}y_1y_2 + \frac{1}{3}y_1^2))$$

$$I_{x} = Ld \times ( \frac{3}{3}y_1y_2 + \frac{1}{3}y_2^2 - \frac{2}{3}y_1y_2 + \frac{1}{3}y_1^2)$$

$$I_{x} = Ld \times ( \frac{1}{3}y_1y_2 + \frac{1}{3}y_2^2 + \frac{1}{3}y_1^2)$$

Finally, we arrive at the same equation as ACI 421.1R:

$$I_{x} = \frac{Ld}{3}(y_1^2 +y_1y_2 + y_2^2 )$$

$$I_{y} = \frac{Ld}{3}(x_1^2 +x_1x_2 + x_2^2 )$$

Remember this is the contribution of a single straight segment. Sum the contribution of all segments to get $I_x$ and $I_y$.

> [!NOTE]
>
> wthisj numerically approximates $I_x$ and $I_y$ by discretizing the perimeter into tiny 0.5 inch fibers, each fiber has an infinitesimal area (dA) which is then summed to approximate the moment of inertia integrals. The default fiber size is usually accurate enough; however, users may opt to reduce the fiber size further by changing the `PATCH_SIZE` argument when initializing a `PunchingShearSection()` object.
