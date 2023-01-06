---
layout: blog-post
categories: engineering
title: "Primer: Base Plate Design"
description: "Everything related to base plates"
image: assets/img/blog/baseplate.png
date: 2022-11-22
tags: analysis primer
---

*"Primer" is a personal reference notebook and a side project where I can organize and digest some of the things I've learned on the job. The goal is to be concise, and hopefully useful when I take the SE exam. Code documents and design guides are meant to be information dense. These articles help me organize information and condense my thoughts.*

*Please note that these notes are for my own use. It is not peer-reviewed and was most likely written late Thursday night after a long day of work. Reader discretion is advised (in fact reading discouraged). No warranty is expressed or implied by me on the validity of the information presented herein.*





- [1.0 Introduction and Procedure](#10-introduction-and-procedure)
  * [1.1 Procedure](#11-procedure)
  * [1.2 Preliminary Sizing](#12-preliminary-sizing)
- [2.0 Base Plate Load Distribution - Demand](#20-base-plate-load-distribution---demand)
  * [2.1 Analysis Model And Load Combinations](#21-analysis-model-and-load-combinations)
  * [2.2 Fixed Base or Pin Base Model?](#22-fixed-base-or-pin-base-model-)
  * [2.3 Base Plate Design Classification](#23-base-plate-design-classification)
  * [2.4 Small Moment Base Plate ($$e \leq e_{crit}$$)](#24-small-moment-base-plate----e--leq-e--crit----)
  * [2.5 Large Moment Base Plate ($$e > e_{crit}$$) - Simplified Closed Form Solution](#25-large-moment-base-plate----e---e--crit-------simplified-closed-form-solution)
  * [2.6 Large Moment Base Plate ($$e > e_{crit}$$) - General Solution](#26-large-moment-base-plate----e---e--crit-------general-solution)
- [3.0 Failure Mode 1: Concrete Bearing](#30-failure-mode-1--concrete-bearing)
- [4.0 Failure Mode 2: Base Plate Flexure](#40-failure-mode-2--base-plate-flexure)
- [5.0 Failure Mode 3: Anchor Rod Tension](#50-failure-mode-3--anchor-rod-tension)
- [6.0 Failure Mode 4: Anchor Rod Pullout](#60-failure-mode-4--anchor-rod-pullout)
- [7.0 Failure Mode 5: Concrete Tension Breakout](#70-failure-mode-5--concrete-tension-breakout)
- [8.0 Failure Mode 6: Concrete Side Face Blowout](#80-failure-mode-6--concrete-side-face-blowout)
- [9.0 Treatment of Shear Demand](#90-treatment-of-shear-demand)
- [10.0 Option 1: Base Plate Design With Shear Lugs](#100-option-1--base-plate-design-with-shear-lugs)
  * [10.1 Failure Mode 5a: Shear Lug Bearing](#101-failure-mode-5a--shear-lug-bearing)
  * [10.2 Failure Mode 6a: Shear Lug Bending](#102-failure-mode-6a--shear-lug-bending)
  * [10.3 Failure Mode 7a: Shear Lug Breakout](#103-failure-mode-7a--shear-lug-breakout)
- [11.0 Option 2: Base Plate Design Without Shear Lugs](#110-option-2--base-plate-design-without-shear-lugs)
  * [11.1 Failure Mode 5b: Anchor Rod Shear and Pryout](#111-failure-mode-5b--anchor-rod-shear-and-pryout)
    + [11.2 Failure Mode 6b: AISC Combined Tension and Shear Interaction](#112-failure-mode-6b--aisc-combined-tension-and-shear-interaction)
    + [11.3 Failure Mode 7b: ACI Combined Tension and Shear Interaction](#113-failure-mode-7b--aci-combined-tension-and-shear-interaction)
- [Appendix A: Base Rotational Spring Stiffness](#appendix-a--base-rotational-spring-stiffness)











<div style="page-break-after: always;"></div>
<hr>

# 1.0 Introduction and Procedure

<hr>

Base plates are usually the interface between two different materials (namely steel and concrete). As a result, although technically straight-forward, a comprehensive design considering all potential failure mode can be quite long and tedious. 

This goal of this article is to present the theoretical background behind base plate design, from load distribution to the various limit state. By the end, you'll hopefully have enough know-how to build your own base plate calculation tool, or gain enough technical knowledge such that you can have more confidence using existing tools.

This article contains commentary from my own experience, as well as fundamentals that you'll also find in these three references:
* AISC Design Guide 1
* AISC 360-16
* ACI 318-19 (chapter 17)


## 1.1 Procedure

1. Determine axial, shear, and moment demand (Pu, Vu, Mu)
2. Classify base plate type (small moment or large moment)
3. Determine load distribution
4. Check the following limit states:
    * Check concrete bearing (ACI 318)
    * Check base plate bending (AISC 360)
    * Check anchor rod tensile rupture (AISC 360, ACI 318)
    * Check anchor rod pullout (ACI 318)
5. Choose how shear demand is resisted
6. For base plate with shear lugs, tension and shear design can be decoupled:
    * Check shear lug bearing (ACI 318)
    * Check shear lug bending (ACI 318)
    * Check shear lug edge breakout (ACI 318)
7. For base plate without shear lug, need to check tension + shear interaction
    * Check anchor rod shear rupture (AISC 360, ACI 318, ETAG 001)
    * Check anchor rod shear pryout (ACI 318)
    * Check AISC combined tension + shear interaction (AISC 360)
    * Check ACI combined tension + shear interaction (ACI 318)
8. Some other limit states:
    * Check concrete tension breakout (ACI 318)
    * Check concrete side face blowout (ACI 318)



## 1.2 Preliminary Sizes and Edge Distance Requirements

Base plate footprint (width-B, depth-N) should be sized satisfy:

* AISC 360-16 Table J3.4 minimum edge distances requirements
* Providing enough clearance for anchor rod washers and holes


Minimum edge dimension is specified in AISC 360-16 Table J3.4 and J3.5. However, those minimum edge distance usually does not govern. Instead, we need to take into account the worst case of a misaligned anchor rod + washer dimension. See illustration below.

<img src="/assets/img/blog/baseplate4.png" style="width:85%;"/>
*Figure 1: Misaligned Rod + Washer Dimension*


The recommended hole dimensions are shown in the table below. Notice that base plate holes are **even larger** than OVS holes!

<img src="/assets/img/blog/baseplate1.png" style="width:75%;"/>
*Figure 2: Recommended Anchor Rod Hole Dimension from DG1*

<img src="/assets/img/blog/baseplate2.png" style="width:75%;"/>
*Figure 3: Recommended Anchor Rod Hole Dimension Comparison*

Base plate holes are huge! This is because constructing them is a pain. Anchor rods are typically cast first into the foundation element, then base plates are then lowered onto the rods. Rods are often slightly off, or bent/damaged during pour. Hence the extra huge holes. 


The table below provides recommended extension lengths based on the worst case of 1.) minimum edge distance and 2.) providing enough clearance for 5/16" weld around washer. Let:

* $$a$$ = washer dimension
* $$c_{edge}$$ = minimum edge distance per AISC 360
* $$b, \mbox{clear}, \alpha$$ = see figure 1

$$b = (d_{hole} - d_{rod})/2$$

$$\mbox{clear} = a/2 + b + 3/8 $$

$$\alpha = max(\mbox{clear}, c_{edge}) \times 2$$

<img src="/assets/img/blog/baseplate3.png" style="width:75%;"/>
*Figure 4: Minimum Edge Distances and Recommended Base Plate Size*


In summary, here are my recommendations for preliminary base plate dimensions.

<u>Recommended Width - B</u>

Knowing the column width ($$b_f$$) and anchor rod diameter of your choosing: (see suggested alpha value in Figure 4)

$$B_{req} = b_f + 2 \alpha$$



<u>Recommended Depth - N</u>

Knowing the column depth ($$d$$) and anchor rod diameter of your choosing: (see suggested alpha value in Figure 4)

$$N_{req} = d + 2 \alpha$$



<u>Recommended Thickness - t</u>

Required thickness can be approximated using a simple cantilever beam model with uniform load + some fudge factors for conservatism.

For columns with minimal moment demand:

$$\sigma = P_u/A$$

$$\phi F_y \frac{t^2}{4} \geq \sigma \frac{(1.1 l)^2}{2}$$

$$t_{req} \geq \sqrt{\frac{2.4 \sigma (l)^2}{\phi F_y}}$$


For columns with significant moment demand, replace $$\sigma$$ with the expression below (bearing capacity equation from ACI 318)

$$\sigma = 0.65(2)(0.85)f'_{c}$$



<u>Recommended Anchor Rod</u>

There are three anchor rod grades commonly used.

* ASTM 1554 GR 36 (Fu = 58 ksi)
* ASTM 1554 GR 55 (Fu = 75 ksi)
* ASTM 1554 GR 105 (Fu = 125 ksi)

There are plenty of options for anchor rod diameter but try to stick to diameters listed in Figure 2. Pick diameter in 1/4" increments. Typically I have three buckets:

* Light: 0.75 in
* Medium: 1.25 in
* Heavy: 2.0 in

Do not specify different grade anchors with the same diameter. It gets confusing on-site.

Picking the appropriate anchor rod is somewhat more iterative, but a good starting point would be to do the following:

1. For gravity columns and columns with very small moment and no net uplift, it is probably okay to go with a smaller anchor rods (say 1" GR 36). These base plates are categorized as "small moment" and the anchor rods don't experience much, if any, tension demand. They might need to resist some shear if no shear lug is provided. But since the moment is small, shear is likely small too.

2. For columns classified as "large moment" or having net uplift, we can use the following expression to get somewhere in the ball park. Select anchor grade (see Fu above), number of anchor rods ($$n_{rod}$$), and base plate depth (N). Ignore interior anchors contribution.

$$\phi (0.75F_u) A_s \geq \frac{T_u}{n_{rod}} + \frac{M_u}{jN (n_{rod}/2)}$$

$$D \geq \sqrt{ \left( \frac{T_u}{n_{rod}} + \frac{2.22M_u}{N n_{rod}} \right) / (0.442F_u)}$$






## 1.3 Other Things to Consider Before You Begin

Rather than specifying an unique designs for every single base plate in the building, the better approach is to come up with reasonable number of base plate design "groups" from the outset. This will save you a lot of trouble later on when you put your design on the drawings.

No one wants to build a building where every base plate is different. We need to shrink our number of design to a manageable amount anyways. Therefore, create a base plate design schedule first. Something like below from the outset:


<img src="/assets/img/blog/baseplate5.png" style="width:75%;"/>
*Figure 5: Create A Base Plate Schedule From The Outset*






















<div style="page-break-after: always;"></div>
<hr>

# 2.0 Base Plate Load Distribution - Demand

<hr>


## 2.1 Analysis Model And Load Combinations

Base reactions can be extracted from any analysis software. We are interested in the axial demand, shear demand, and moment demand from the most critical load combination.

$${P_u, V_u, M_u} $$

Column base connections are technically designed to remain elastic. So we need to use the appropriate overstrength load combinations:

$$1.2D + 0.5L \pm 1.0E_{mh}$$

The equation above is just for reference purposes. Ideally, your design combination is an envelope of many other load combinations that takes into account:

* 100%-30% seismic force directional combinations if applicable (e.g. 100X+30Y, 30X+100Y, -30X+100Y, ...)
* Accidental mass eccentricities
* Other assumed loading configurations


## 2.2 Loading Scenario

Furthermore, we need to consider two "load scenarios". A high compression case, and a uplift (or low compression) case. 

* High compression case:

$$P_{u,max} + V_u + M_u $$

* Low compression/uplift case:

$$P_{u,min} + V_u + M_u $$

The need to evaluate uplift is self-explanatory. Even if your column never experiences uplift, it is important to look at low-compression case because base plate classification is a function of axial demand. In other words, the base plate may change from small eccentricity where anchor rods don't experience tension to large eccentricity case where they do.

Since demands are enveloped, it is difficult to say low or high axial demand necessarily corresponds to high or low shear or moment. The easiest and most conservative approach is to just always extract the absolute maximum value for shear and moment.



## 2.3 Fixed Base or Pin Base Model?

It's easier to design for pinned condition, but make sure your jurisdiction allows for such assumption. 

* HCAI and DSA projects will probably require rigorous justification if you want to use pinned model
* As your moment frame system gets bigger, it is tough to justify full pinned condition...
* Behavior of pinned and fixed based moment frames are quite different. So it's probably a good idea to get base fixity sorted out early
* While it is more "correct" to design for at least some moment, many practitioners have complained about the massive base plate that results from doing so

If you are designing for moment, follow AISC 341-16 Section D.2.6c which specifies the required flexural demand as the minimum of:

1. Expected moment capacity of the column $$1.1R_y M_p$$
2. Moment demand from analysis model using overstrength load combination (base must be fixed or spring to get any value)

If there are shear lugs, an additional moment is generated by the eccentric bearing. See the shear lug section for more information.

$$M_u = M + M_{lug}$$

The reality is probably somewhere in between (i.e. partial fixity). Refer to the appendix for some discussion on how to calculate a rotational spring stiffness.





## 2.4 Base Plate Design Classification

Base plates can be classified into two categories:
* Small moment - resultant is within kern (column is stable without any tie down force from anchors)

<img src="/assets/img/blog/baseplate6.png" style="width:40%;"/>
*Figure 6: Small Moment Base Plate*

* High moment - resultant outside kern

<img src="/assets/img/blog/baseplate7.png" style="width:45%;"/>
*Figure 7: Large Moment Base Plate*

The dividing line between the two categories is known as the **critical eccentricity**. 

Although we use the term **kern** above, it should be noted that AISC Design Guide 1 suggests a less conservative approach:

* Elastic assumption ($$e < N/6$$)
    * Think adding rectangles and triangles (P/A - M/S)
    * $$e_{crit}$$ denotes the limit at which one end is just on the verge of uplifting. Often used for footing analysis
* Plastic assumption ($$e < N/2 - Y/2 $$)
    * Think in terms of Net moment = overturning moment - restoring moment. If restoring moment is larger, anchor rods are numerically not needed. In other words, even if part of the base plate is not in contact anymore, fixture is still overall stable without relying on anchor rods.
    * $$e_{crit}$$ denotes the limit at which overturning moment is larger than restoring moment. 

<img src="/assets/img/blog/baseplate8.png" style="width:65%;"/>
*Figure 8: Kern Comparison*

For example, in the chart above, we are looking at a 24" x 48" base plate with moment demand of 500 kip.ft. 

* Using "elastic" kern, "small moment" if P > 750 kips
* Using "plastic" kern, "small moment" if P > 250 kips (3x lower!)

The logic behind plastic stress distribution is as follows:

1. Moment increases, thus eccentricity increases (e = M/P) which shifts our downward pointing arrow shifts more and more to the edge
2. Bearing contact area decreases, bearing stress increases (i.e. down arrow and up arrow coincide for equilibrium)
3. Bearing stress is limited to the capacity of the concrete. Eventually the reaction force resultant can no longer follow (i.e satisfy equilibrium) without exceeding bearing capacity of concrete
4. At this point, anchor rods are engaged for equilibrium (transition from figure 6 to 7)


<u>Procedure</u>

1. Calculate eccentricity (remember to convert moment from kip.ft to kip.in!)

    $$e = \frac{M_u}{P_u}$$

2. Calculate concrete bearing capacity. See section 3 for more info.

    $$1 \leq \alpha = \sqrt{A_2 / A_1} \leq 2$$

    $$f_{pmax} = \phi \alpha 0.85 f'_c $$

3. Normalize bearing stress from ksi to kip/in along depth of base plate

    $$q_{max} = f_{pmax}B$$

4. Calculate critical eccentricity (N is base plate depth)

    $$e_{crit} = N/2 - \frac{P_u}{2q_{max}}$$

5. Refer to section 2.5 for small moment case; refer to section 2.6/2.7 for large moment case.


## 2.5 Small Moment Base Plate ($$e \leq e_{crit}$$)

Design of small moment base plate is easy! No anchor rod tension to worry about which means we get to skip all tension-related failure modes.

<img src="/assets/img/blog/baseplate6.png" style="width:40%;"/>

One caveat is that small moment reduces base plate contact area, thus increasing bearing stress.

$$\epsilon = N/2 - Y/2$$

$$\epsilon$$ is equal to e for small moment case, rearrange and solve for Y:

$$Y = N - 2e$$

$$A_{bearing} = B \times Y$$

Again, moment demand is self-resolving. No tension demand on anchor rods.

$$T = 0$$



## 2.6 Large Moment Base Plate ($$e > e_{crit}$$) - Simplified Closed Form Solution

AISC Design Guide 1 provides a closed-form solution that assumes one row of anchor at each end. This is a convenient approach because we have two unknowns (Y and T), and they both can be readily solved using the quadratic equation. However, there are two very **important limitations**!

* Cannot handle tension + moment case. Anchor on the right side mathematically does not exist and cannot take tension
* Cannot account for interior anchors

<img src="/assets/img/blog/baseplate7.png" style="width:45%;"/>

Vertical force equilibrium. T and Pu is always positive; bearing resultant always negative.

$$\sum F_{y} = 0$$

$$0 = T + P_u - q_{max}Y \tag {eq.A}$$

Take moment equilibrium about point B (location of tension anchor). Bearing resultant contribution will always be positive. Pu contribution always negative.

$$\sum M = 0$$

$$0 = q_{max}Y (f + N/2 - Y/2) - P_u (f+e) \tag {eq.B}$$

Combine eq.A and eq.B, and solve via quadratic equation:

$$Y = (f+N/2) \pm \sqrt{   (f + N/2)^2 - \left( \frac{2P_u(f+e)}{q_{max}}   \right)  }$$

For cases where Pu = 0, the equation above must be modified because e is infinite (denominator is zero). Substitute $$P_u e = M_u$$.

Finally, substitute Y value into eq.A to get anchor tension.

$$T = q_{max}Y - P_u$$

Be careful of sign convention! Design Guide 1 assumes your axial demand will always be compression (point downward) and took care of the signs for you.

* $$P_u$$ is always positive
* $$e$$ is always positive
* $$q_{max}Y$$ should always be positive. Bearing actually acts in the negative direction but the equation has already been adjusted for you. 


Here is the python implementation of the equations above:

```python
def DG1_closed_form(width, depth, fpc, Mu, Pu, f, 
                    alpha = 0.85, alpha1 = 2.0, phi = 0.65):
    """
    Closed-form solution outlined in AISC Design Guide 1. 
    Assumes one row of anchor rod on each end. 
    Interior anchor rods ignored.

    Arguments:
        width = width of base plate (in)
        depth = depth of base plate (in)
        fpc = concrete strength (ksi)
        Mu = moment demand (kip.in). Always positive
        Pu = axial demand (kip). Positive is compression
        f = distance from center of base plate to exterior anchor
        alpha (optional) = 0.85 (rectangular stress block parameter)
        alpha1 (optional) = 2.0 (concrete bearing confinement factor)
        phi (optional) = 0.65 (concrete resistance factor)
    Return:
        T = tension force in exterior anchor row
        Y = neutral axis depth
    """
    # concrete capacity
    fpmax = phi * alpha * alpha1 * fpc
    qmax = fpmax * width
    
    # check eccentricity
    if Pu < 0:
        raise RuntimeError("Cannot handle negative Pu case (tension)")
    elif Pu == 0:
        e = None
        isSmall = False
    else:
        e = Mu/Pu
        ecrit = depth/2 - Pu/2/qmax
        isSmall = (e < ecrit)
    
    # small eccentricity
    if isSmall:
        Y = depth - 2*e
        T = 0
        return T, Y
    
    # large eccentricity
    else:
        if e == None:
            Y = (f + depth/2) - (  (f + depth/2)**2 - (2*Mu)/qmax   )**(1/2)
        else:
            Y = (f + depth/2) - (  (f + depth/2)**2 - 2*Pu*(f+e)/qmax   )**(1/2)
        T = qmax*Y - Pu
        return T, Y

```

For example, given this 24" x 36" base plate:

<img src="/assets/img/blog/baseplate9.png" style="width:45%;"/>
*Figure 9: Base Plate Example*

<img src="/assets/img/blog/baseplate10.png" style="width:35%;"/>

If we were to use the general methodology (see next section) that takes into account contribution from the middle row:

<img src="/assets/img/blog/baseplate11.png" style="width:45%;"/>

Ignoring the middle row of anchors is likely overly conservative. Furthermore, the fact that the closed-form solution above only works for compression + moment is a severe flaw.



## 2.7 Large Moment Base Plate ($$e > e_{crit}$$) - General Solution

We can generalize the closed-form solution above using the **rigid plate assumption**. Also known as "plane section remain plane" if you are dealing with section analysis. Either way, we are essentially assuming a linear strain profile.

Rather than conducting a full moment curvature analysis on a fiber section, the rigid plate methodology effectively turns this into a univariate root-finding problem.

* Assume rectangular bearing stress block with peak bearing stress ($$q_{max}$$). Consistent with large moment base plate classification
* Assume rigid plate where anchor forces can be related linearly (i.e similar triangle)

<u>Derivation</u>

<img src="/assets/img/blog/baseplate12.png" style="width:65%;"/>
*Figure 10: Free Body Diagram of Base Plate*


Vertical force equilibrium:

$$\sum F_y = 0$$

$$0 = \sum T_i + C + P_u \tag{eq.A}$$

Individual anchors can be related to each other using similar triangles:

$$\frac{t_i}{e_i} = \frac{t_n}{e_n}$$

$$t_i = \frac{e_i}{e_n} t_n $$


Summation of anchor forces can be rewritten as:

$$\sum T_i = \sum t_i N_i = \sum \left( \frac{e_i}{e_n}t_n \right) N_i$$

$$\sum T_i = (\sum e_i N_i)\frac{t_n}{e_n} \tag{eq.B}$$

Suppose we know the depth of neutral axis ($$Y$$), then we can solve for $$t_n$$ which is the force in anchor furthest from pivot point. Combining eq.A and eq.B and solve for $$t_n$$

$$t_n = \frac{(-C-P_u)(e_n)}{\sum e_i N_i}$$

Once we know $$t_n$$, other anchors can be calculated using our linear strain assumption:

$$t_i = \frac{e_i}{e_n} t_n$$

The big question is how do we find the depth of neutral axis? The answer is to iteratively search for it using any root-finding algorithm. Or Solver in Excel. 

<u>For an assumed neutral axis depth (Y):</u>

Compression bearing resultant: (equals to zero if Y is negative)

$$q_{max} = \phi  \alpha  0.85 f'_c $$

$$C = max(q_{max}Y, 0)$$

Anchor distance from neutral axis: (anchors within neutral axis depth are inactive and cannot take tension or compression, set to 0)

$$e_i = max(x_i - Y, 0)$$

Anchor forces:

$$t_n = \frac{(-C-P_u)(e_n)}{\sum e_i N_i}$$

$$t_i = \frac{e_i}{e_n} t_n$$

Total anchor row along each row:

$$T_i = t_i N_i$$

Moment contribution of each row:

$$M_i = T_i x_i$$

Force equilibrium is satisfied through our use of similar triangles to calculate $$t_n$$

$$\sum F = 0 = \sum N_i t_i  + C + P_u$$

Moment equilibrium is only true if we have the correct neutral axis depth.

$$\sum M = 0 = \sum M_i + P_u(N/2) + C (Y/2) + M_u$$

Keep trying different Y values until $$\sum M = 0$$

<u>Python Implementation</u>

```python
def rigid_plate_distribution(width, depth, fpc, Mu, Pu, x_i, N_i, beta = 0.80,
                             alpha = 0.85, alpha1 = 2.0, phi = 0.65):
    """
    Determine anchor rod uplift based on rigid base plate assumption.
    down = +ve, counter-clockwise = +ve
    Arguments:
        width = width of base plate (in)
        depth = depth of base plate (in)
        fpc = concrete strength (ksi)
        Mu = moment demand (kip.in). Always positive
        Pu = axial demand (kip). Positive is compression
        xi = depth of anchors from the edge [x1,x2,...]
        Ni = number of anchor along one row [N1,N2,...]
        beta (optional) = 0.80 (rectangular stress block parameter)
        alpha (optional) = 0.85 (rectangular stress block parameter)
        alpha1 (optional) = 2.0 (concrete bearing confinement factor)
        phi (optional) = 0.65 (concrete resistance factor)
    Return:
        T_i = list of total anchor force at each row []
        t_i = list of anchor force at each row [] = Ti / Ni
        Y_final = depth of neutral axis (in)
        sum_F = force equilibrium. Should always return 0
        sum_M = moment equilibrium. Should always return 0
    """
    # check eccentricity
    if Pu <= 0:
        e = None
        isSmall = False
    else:
        fpmax = phi * alpha * alpha1 * fpc
        qmax = fpmax * width
        e = Mu/Pu
        ecrit = depth/2 - Pu/2/qmax
        isSmall = (e < ecrit)
    
    # small eccentricity
    if isSmall:
        zeros = [0 for x in x_i]
        Y_final = depth - 2*e
        return zeros, zeros, Y_final, 0, 0
    
    # large eccentricity
    else:
        # secant method good for root finding
        def secant_method(func,x0=depth/2,x1=depth/2-1,TOL=0.1):
            while abs(func(x0)[0])>=TOL:
                x2 = x1 - func(x1)[0] * (x1 - x0) / (func(x1)[0] - func(x0)[0])
                x0 = x1
                x1 = x2
                print(f"Trial NA: {x0} \t {x1}")
            return x2
        
        # set up equation for root-finding
        def equilibrium_equations(Y):
            # Y could be negative. In which case no bearing.
            comp = min(0, -width*Y*phi*beta*alpha*alpha1*fpc)
            e_i = [max(0,x - Y) for x in x_i]
            omega_i = [a*b for a,b in zip(N_i,e_i)]
            if sum(omega_i) == 0:
                t_n=0
            else:
                t_n = (-Pu-comp) * (e_i[-1])/ sum(omega_i)
            t_i = [max(0, a/e_i[-1]*t_n) for a in e_i]
            T_i = [a * b for a,b in zip(t_i, N_i)]
            M_i = [a * b for a,b in zip(T_i, x_i)]
            sum_M = sum(M_i) + Pu*(depth/2) + comp*(Y/2) - Mu
            return sum_M, t_i, T_i, comp
        
        # start root-finding
        try:
            Y_final = secant_method(equilibrium_equations)
        except:
            raise RuntimeError("Did not converge")
            
        # final load distribution
        sum_M, t_i, T_i, comp = equilibrium_equations(Y_final)
        sum_F = sum(T_i) + Pu + comp
        
        return T_i, t_i, Y_final, sum_F, sum_M

```

User notes:

* Y can be negative. Indicates uplift without bearing ($$\sum T_i = P_u$$)
* Stress profile for individual anchors (t) is linear which makes sense due to strain compatibility. Stress profile of entire row of anchor (T) does not have to be linear! Rows with more anchors (N) will have higher total force
* Keeping track of signs is a pain in the neck especially when moments get involved. I have a habit of auto-converting and losing consistency.
    * Origin is at the right edge pivot point (see figure 10)
    * left is +x, down is +y, by right-hand rule, counter-clockwise moment is positive (z axis is out of page)
* Therefore:
    * C is always negative pointing up (or 0 if Y is negative)
    * xi and ei should always be positive. Anchors within bearing region becomes inactive (set to 0)
    * ti is always positive pointing down
    * Mi is always positive because ti and xi are always positive
    * Summation of moment and force should all be additions. Let the signs do the work.

<img src="/assets/img/blog/baseplate9.png" style="width:45%;"/>


<img src="/assets/img/blog/baseplate13.gif" style="width:65%;"/>
*Figure 11: Example Base Plate with 200 Kips Tension*


<img src="/assets/img/blog/baseplate14.gif" style="width:65%;"/>
*Figure 12: Example Base Plate with 200 Kips Compression*


























<div style="page-break-after: always;"></div>
<hr>

# 3.0 Failure Mode 1: Concrete Bearing

<hr>

The bearing capacity equation provided in AISC 360 J8 and ACI 318 22.8 are equivalent. If you've followed the recommended base plate size in section 2, this limit state likely won't govern. 

For base plate classified as large moment, skip this check. Bearing DCR will always be 100% because contact with concrete is minimal and purely for equilibrium of a base plate on the verge of overturning. The contact area is equal to the neutral axis depth and bearing stress is equal to bearing capacity of concrete per our assumptions.

On the other hand, for small-moment base plate:

1. Determine confinement factor. $$\alpha$$ is the confinement factor. Alpha is equal to 2 if concrete confined on all sides. $$c_{amin}$$ is the smallest distance to edge of pedestal or footing

    <img src="/assets/img/blog/aciprimer14.png" style="width:65%;"/>

    $$A_1 = BY$$

    $$A_2 = (B+2 c_{amin}) \times (Y + 2c_{amin})$$

    $$1 \leq \alpha = \sqrt{A_2 / A_1} \leq 2$$

2. Calculate allowable bearing stress of concrete (resistance factor phi = 0.65):

    $$f_{pmax} = \phi \alpha 0.85 f'_c $$

3. Calculate bearing contact area. Recall contact length is reduced by presence of moment:

    $$A_{bearing} = BY$$

4. Bearing demand:

    $$f_p = P_u / A_{bearing}$$

5. Bearing DCR:

    $$DCR = f_p/f_{pmax}$$





















<div style="page-break-after: always;"></div>
<hr>

# 4.0 Failure Mode 2: Base Plate Bending

<hr>

Next, check to see if base plate is thick enough to withstand the design bearing stress. The procedure for doing so is well-documented in AISC design guide but not codified. In essence, we are checking four yield mechanisms:

* Plate bending in major direction (cantilever extension along the depth direction)
    * lever arm (m)
* Plate bending in minor direction (cantilever extension along the width direction)
    * lever arm (n)
* Plate bending between web (based on yield line theory)
    * lever arm ($$\lambda$$n')
* Plate bending from anchor tension (if applicable)
    * lever arm (xt)

The theory behind base plate bending is described in the 1990 Thornton paper titled: "Design of Small Base Plates for Wide Flange Columns". It's only 3 pages long and very concisely written.

<img src="/assets/img/blog/baseplate15.png" style="width:35%;"/>

* Note how dimension n is inset more. Bending along two flange tip is more flexible than bending against an entire flange width
* The third bending mode ($$\lambda$$n') does not apply for HSS columns
* The 0.8 and 0.95 coefficient shown above is empirical. You may wish to adjust it as you see fit (if you've added stiffeners for instance). HSS columns would have 0.95bf instead of 0.8bf
* Some design software also checks a diagonal bending yield line at the corner of base plate. Although I don't know if this is explicitly addressed in the codes.

1. Calculate bending lever arm in major and minor direction:

    $$m = \frac{N-0.95d}{2}$$

    $$n = \frac{B-0.8b_f}{2}$$

2. Calculate "lever arm" for bending between flange

    $$X = \left(   \frac{4db_f}{(d+b_f)^2} \right) (P_u/ \phi P_p) \leq 1$$

    $$\lambda = \frac{2\sqrt{X}}{1 + \sqrt{1-X} } \leq 1$$

    $$\lambda n' = \frac{\lambda \sqrt{db_f}}{4}$$

3. Calculate moment demand due to bearing stress (fp) which we've determined from the previous section (**unit is kip.in/in**)

    $$M_m = f_p (m^2/2)$$

    $$M_n = f_p (n^2/2)$$

    $$M_{n'} = f_p (n'^2/2)$$

4. If you have large-moment base plate, an additional tension plate bending mode should be evaluated. 
    * AISC design guide 1 recommends calculating the lever arm (xt) from center of anchor rod to mid flange thickness. 
    * Refer to figure 7 for dimension "f". The equation below assumes tension anchor at EQ distance from flange edge to base plate edge. You may need to determine xt for your specific case (say if you want to calculate tension bending in minor direction as well)
    * Note that we've divided the moment demand by base plate (B) width for consistent unit (kip.in/in) with the other modes of bending

    $$f = d/2 + (N-d)/4$$

    $$x_t = f - d/2 + t_f/2$$

    $$M_t = T x_t / B$$

5. Rather than comparing moment capacity/demand, I like to convert the moment demand to a "thickness demand" or a **required thickness**, which is easier to interpret. 

    $$t_{m,req} = $$

6. Base plate with GR 36 or GR 50 are readily available. You can get them as thick as 4". Add stiffeners if you need more thickness. Adding stiffeners will significantly increase labor and complexity, but sometimes you have to do what you have to do.

$$Y_{ENA} = \frac{  bt_p^2 /2 + 2ht_s(t_p + h/2)  }{ bt_p + 2ht_s   }$$

$$I = bt_p^3/12 + (2) t_sh^3/12 + bt_p(Y-t_p/2)^2 + 2ht_s(Y-(t_p+h/2)^2$$

$$S = \frac{I}{h+t_p - y}$$

$$A = bt_p + 2t_sh$$

$$Z_x = Bt^2 /4$$

$$
Y_{PNA}= \left\{
    \begin{array}\\
        h-A/2t_w & \mbox{if }  t_f>A/2b \\
        A/2b & \mbox{if } t_f>A/2b
    \end{array}
\right.
$$

$$Z_x =\frac{ t_w(h-t_f)^2}{4} + \frac{bht_f}{2} - \frac{b^2t_f^2}{4t_w}$$

$$Z_x = \frac{t_wh^2}{2}+\frac{bt_f^2}{4} - \frac{ht_ft_w}{2} - \frac{(h-t_f)^2 t_w^2}{4b}$$

$$t_{equiv} = \sqrt{\frac{max(Z,1.6S)}{b}}$$


Base plate footprint should be as large as possible to reduce bearing stress (to the extent that the base plate is thick enough to prevent bending failure). In other words, try to keep your plate-bending DCR in all three directions to as close to 1.0 as possible for the most efficient base plate design.





















<div style="page-break-after: always;"></div>
<hr>

# 5.0 Failure Mode 3: Anchor Rod Tension

<hr>

For large-moment base plate only. Capacity can be calculated two ways:

* ACI 318
    * uses a reduced area for threaded region
* AISC 360
    * uses a reduced strength instead to account for threaded region area reduction

1. Determine maximum tension demand for an individual anchor


2. Check per AISC

$$\phi r_n = \phi F_{nt} A_b$$

$$\phi T_n = min(\phi r_n, \phi N_{sa})$$

3. Check per ACI 
$$A_b = \pi d_b^2 / 4$$

$$A_{se,N} = 0.8A_b$$

$$\phi N_{sa} = \phi A_{se,N} f_{uta}$$









<div style="page-break-after: always;"></div>
<hr>

# 6.0 Failure Mode 4: Anchor Rod Pullout

<hr>



$$\phi N_p = 0.75 \times \Psi_{c,p} \phi 8 A_{brg} f'_c$$













<div style="page-break-after: always;"></div>
<hr>

# 7.0 Failure Mode 5: Concrete Tension Breakout

<hr>


$$A_{Nco} = 9h_{ef}^2$$

$$X = 1.5h_{ef} + s_1 + min(c_{a1},1.5h_{ef})$$

$$Y = 1.5h_{ef} + s_2 + min(c_{a2},1.5h_{ef})$$

$$A_{Nc} = XY \leq nA_{Nco}$$

$$N_b = 0.75 k_c \lambda_a \sqrt{f_c'} h^{1.5}_{ef} $$

$$\Psi_{ed,N} = 0.7 + \frac{0.3 c_{a,min}}{1.5h_{ef}}$$

$$\Psi_{ec,N} = 1 / (1 + 2e_N'/3h_{ef})$$

$$\phi N_{cbg} = 0.75 \times \phi \frac{A_{Nc}}{A_{Nco}} \Psi_{ec,N} ~ \Psi_{ed,N} ~ \Psi_{c,N} ~ \Psi_{cp,N}$$

$$\phi N_n = \phi A_s f_y$$











<div style="page-break-after: always;"></div>
<hr>

# 8.0 Failure Mode 6: Concrete Side Face Blowout

<hr>




$$N_{sb} = 160 \lambda_a c_{a1} \sqrt{A_{brg}} \sqrt{f_c'} $$

$$\alpha = (1 + s/6c_{a1})$$

$$N_{sbg} = \alpha N_{sb}$$













<div style="page-break-after: always;"></div>
<hr>

# 9.0 Treatment of Shear Demand

<hr>













<div style="page-break-after: always;"></div>
<hr>

# 10.0 Option 1: Base Plate Design With Shear Lugs

<hr>



## 10.1 Failure Mode 5a: Shear Lug Bearing

$$A_{ef,sl} = b_{sl} h_{sl}$$

$$
\Psi_{brg,sl}= \left\{
    \begin{array}\\
        1.0 & \mbox{for no axial load} \\
        1 + \frac{P_u}{n N_{sa}} \leq 1.0 & \mbox{for tension} \\
        1 + \frac{4P_u}{f_c' A_{bp}} \leq 2.0 & \mbox{for compression }
    \end{array}
\right.
$$

$$V_{brg,sl} = 1.7f_c' A_{ef,sl} \Psi_{brg,sl}$$





## 10.2 Failure Mode 6a: Shear Lug Bending

$$M_u = V_u (3.5" + h/2)$$

$$I = t_{ss}h^3/6 + bt_s^3/12 + 2(ht_{ss})(t_s/2 + h/2)^2$$

$$S = \frac{I}{t_s/2 + h}$$

$$Z = bt_s^2/4$$

$$\phi M_n = \phi f_y Z$$





## 10.3 Failure Mode 7a: Shear Lug Breakout

$$A_{Vco} = 4.5 c_{a1}^2$$

$$A_{Vc} = (b_{sl} + 3c_{a1})(h_{sl} + 1.5 c_{a1}) - b_{sl} h_{sl}$$

$$\Psi_{h,V} = \sqrt{1.5c_{a1}/h_a} > 1.0$$

$$\phi V_{cbg} = \phi \frac{A_{Vc}}{A_{Vco}} \Psi_{ed,V} \Psi_{c,V} \Psi_{h,V} \times V_b$$

$$\phi V_n = \phi A_s f_y$$












<div style="page-break-after: always;"></div>
<hr>

# 11.0 Option 2: Base Plate Design Without Shear Lugs

<hr>



## 11.1 Failure Mode 5b: Anchor Rod Shear and Pryout

$$L_b = 3.5" + 0.5d_{bolt} + t_p$$

$$S = \pi d^3 / 32$$

$$M_s = 1.2 F_u S (1 - T_u / \phi T_n)$$

$$\phi V_S^M = \alpha_m \phi M_s / L_b$$

$$\alpha_m = 2$$

$$V_{cpg}$$


## 11.2 Failure Mode 6b: AISC Combined Tension and Shear Interaction

$$(DCR_t)^2 + (DCR_v)^2 \leq 1.0$$


## 11.3 Failure Mode 7b: ACI Combined Tension and Shear Interaction

$$(DCR_t)^{5/3} + (DCR_v)^{5/3} \leq 1.0$$























<div style="page-break-after: always;"></div>
<hr>

# Appendix A: Base Rotational Spring Stiffness

<hr>

$$k_{rot} = \frac{M_y}{\theta_y}$$

$$M_y = min(M_y^{pl,c}, M_y^{pl,t}, M_y^{rod})$$

$$\theta_y = (\Delta_{rod} + \Delta_{t,plate} + \Delta_{c,plate} + \Delta_{concrete} ) / (s + N/2)$$

$$\Delta_{rod} = \frac{T_{rod}L_{rod}}{A_{rod}E_{rod}}$$

$$\Delta_{plate} = (PL^3 / 3EI ) + (PL / AG)$$

$$\Delta_{concrete} = \frac{f_{max}}{E_{concrete}} d_{footing}$$










