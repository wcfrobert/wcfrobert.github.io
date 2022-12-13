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
  * [2.1 Analysis Model. Pinned or Fixed?](#21-analysis-model-pinned-or-fixed-)
  * [3.0 Base Plate Design Classification](#30-base-plate-design-classification)
    + [3.1 Load Distribution (Compression + Moment)](#31-load-distribution--compression---moment-)
    + [3.2 Load Distribution (Tension + Moment)](#32-load-distribution--tension---moment-)
  * [4.0 Failure Mode 1: Concrete Bearing](#40-failure-mode-1--concrete-bearing)
  * [5.0 Failure Mode 2: Base Plate Flexure](#50-failure-mode-2--base-plate-flexure)
  * [6.0 Failure Mode 3: Anchor Rod Tension Yielding](#60-failure-mode-3--anchor-rod-tension-yielding)
  * [7.0 Failure Mode 4: Anchor Rod Pullout](#70-failure-mode-4--anchor-rod-pullout)
  * [8.0 Failure Mode 8: Concrete Tension Breakout](#80-failure-mode-8--concrete-tension-breakout)
  * [9.0 Failure Mode 9: Concrete Side Face Blowout](#90-failure-mode-9--concrete-side-face-blowout)
  * [10.0 Treatment of Shear Demand](#100-treatment-of-shear-demand)
  * [11.0 Option 1: Base Plate Design With Shear Lugs](#110-option-1--base-plate-design-with-shear-lugs)
    + [11.1 Failure Mode 5a: Shear Lug Bearing](#111-failure-mode-5a--shear-lug-bearing)
    + [11.2 Failure Mode 6a: Shear Lug Bending](#112-failure-mode-6a--shear-lug-bending)
    + [11.3 Failure Mode 7a: Shear Lug Breakout](#113-failure-mode-7a--shear-lug-breakout)
  * [12.0 Option 2: Base Plate Design Without Shear Lugs](#120-option-2--base-plate-design-without-shear-lugs)
    + [12.1 Failure Mode 5b: Anchor Rod Shear and Pryout](#121-failure-mode-5b--anchor-rod-shear-and-pryout)
    + [12.2 Failure Mode 6b: AISC Combined Tension and Shear Interaction](#122-failure-mode-6b--aisc-combined-tension-and-shear-interaction)
    + [12.3 Failure Mode 7b: ACI Combined Tension and Shear Interaction](#123-failure-mode-7b--aci-combined-tension-and-shear-interaction)
  * [Appendix: Base Rotational Stiffness Modeling](#appendix--base-rotational-stiffness-modeling)

















<div style="page-break-after: always;"></div>
<hr>

# 1.0 Introduction and Procedure

<hr>

The design of base plate is relatively straight forward compared to other seismic components. Although technically simple, base plates are usually the interface between two different materials (namely steel and concrete). As a result, a comprehensive design considering all potential failure mode is lengthy and tedious. 

As of the time of this writing (November 2022), there really isn't a unified software that does a complete design (that I know of). The closest thing would be RISA connections or RAMS, but they only check the steel failure modes; after which you need to export your design to HILTI PROFIS for concrete anchorage checks.

This goal of this article is to present the theoretical background for base plate design, from load distribution to limit state checks. By the end, you'll hopefully have enough know-how to build your own base plate calculation tool, or gain enough technical background such that you can have more confidence using existing tools.

Three must-read references:
* AISC Design Guide 1 - most important read
* AISC 360-16 - for steel limit states
* ACI 318-19 - for concrete anchorage limit states (chapter 17)


## 1.1 Procedure

Base plate design procedure is as follows:

1. Determine axial, shear, and moment demand (Pu, Vu, Mu)
2. Classify base plate type based on moment magnitude (AISC 360 Design Guide 1)
3. Determine load distribution (AISC 360 Design Guide 1)
4. Check concrete bearing (ACI 318)
5. Check base plate bending (AISC 360)
6. Check anchor rod tensile rupture (AISC 360, ACI 318)
7. Check anchor rod pullout (ACI 318)
8. Choose how shear demand is resisted (AISC 360 Design Guide 1)
9. For base plate with shear lugs, tension and shear design can be decoupled:
    * Check shear lug bearing (ACI 318)
    * Check shear lug bending (ACI 318)
    * Check shear lug edge breakout (ACI 318)
10. For base plate without shear lug, need to check tension + shear interaction
    * Check anchor rod shear rupture (AISC 360, ACI 318, ETAG 001)
    * Check anchor rod shear pryout (ACI 318)
    * Check AISC combined tension + shear interaction (AISC 360)
    * Check ACI combined tension + shear interaction (ACI 318)
11. Check concrete tension breakout (ACI 318)
12. Check concrete side face blowout (ACI 318)



## 1.2 Preliminary Sizing

Our base plate footprint: width (B) and length (N) are obviously dependent on the demand. But base plate sizes usually don't deviate much. Most of the time, you'll see there is more than enough bearing area. In which case selecting a base plate size is more of a detailing exercise. Here are some things to consider:

* Anchor rods are usually cast first into the foundation element, the base plate is then lowered onto the rods. This process is notorious annoying to contractors. Rods are often slightly off, or bent/damaged during pour. As a result, recommended base plate anchor rod holes are EXTRA oversized! These are huge holes meant to give contractors an easier time plumbing and fitting the damn thing.
* Typically, you would want at least (4) anchor rods to fit adequately outboard of the column footprint (i.e. no rods between webs). Our base plate footprint (B and N) must respect all edge and minimum spacing requirements taking into account these massive holes.
* Base plate footprint should be as large as possible to reduce bearing stress (to the extent that the base plate is thick enough to prevent bending failure). In other words, try to keep your plate-bending DCR to as close to 1.0 as possible in both bending directions (i.e. maximize base plate extension "m" and "n").


The recommended hole dimensions are shown in the table below. Notice how AISC design guide 1 recommends vastly larger holes (even larger than OVS).

<img src="/assets/img/blog/baseplate1.png" style="width:75%;"/>
*Figure 1: Recommended Anchor Rod Hole Dimension from DG1*


<img src="/assets/img/blog/baseplate2.png" style="width:75%;"/>
*Figure 2: Recommended Anchor Rod Hole Dimension Comparison*

Minimum edge dimension is specified in AISC 360-16 Table J3.4 and J3.5. However, these minimum edge distance usually does not govern. Instead, we need to take into account the worst case of a misaligned anchor rod + washer dimension. See illustration and table below.

Figure 4 below provides recommended extension lengths based on the worst case of 1.) minimum edge distance and 2.) providing enough clearance for 5/16" weld around washer.

Let:

* $$a$$ = washer dimension
* $$c_{edge}$$ = minimum edge distance per AISC 360
* $$b, \mbox{clear}, \alpha$$ = see figure 3

$$b = (d_{hole} - d_{rod})/2$$

$$\mbox{clear} = a/2 + b + 3/8 $$

$$\alpha = max(\mbox{clear}, c_{edge}) \times 2$$

<img src="/assets/img/blog/baseplate4.png" style="width:75%;"/>
*Figure 3: Misaligned Rod + Washer Dimension*

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

For columns with minimal moment demand, calculate bearing stress $$\sigma = P/A$$ and determine base plate extension which I will assume you've taken as alpha ($$l=\alpha$$). The approximate required thickness can be calculated using a simple cantilever beam model with uniform load. Note the extension (l) is amplified a bit. The reason will become clear in the next section.

$$\sigma = P_u/A$$

$$\phi F_y \frac{t^2}{4} \geq \sigma \frac{(1.1 l)^2}{2}$$

$$t_{req} \geq \sqrt{\frac{2.4 \sigma (l)^2}{\phi F_y}}$$


For columns with significant moment demand (i.e. classified as large moment base plate), the bearing stress will actually reach a ceiling value = bearing capacity of the concrete. In these situations, replace $$\sigma$$ with the expression below which is just the bearing capacity equation from ACI 318 assuming good confinement.

$$\sigma = 0.65(2)(0.85)f'_{c}$$



<u>Recommended Anchor Rod</u>

There are three anchor rod grades commonly used.

* ASTM 1554 GR 36 (Fu = 58 ksi)
* ASTM 1554 GR 55 (Fu = 75 ksi)
* ASTM 1554 GR 105 (Fu = 125 ksi)

There are plenty of options for anchor rod diameter but I recommend using the sizes shown in Figure 4. Pick diameter in 1/4" increments. Typically I have three buckets. I wouldn't go below 3/4" unless its for a really small base plate.

* Light: 0.75 in
* Medium: 1.25 in
* Heavy: 2.0 in

Depth of anchor rod embed can be determined when we get to it. It's self-contained and does not affect rest of our calculation.

Picking the appropriate anchor rod is somewhat more iterative, but a good starting point would be to do the following:

1. For gravity columns and columns with very small moment and no net uplift, it is probably okay to go with a smaller anchor rods (say 1" GR 36). These base plates are categorized as "small moment" and the anchor rods don't experience much, if any, tension demand. They might need to resist some shear if no shear lug is provided. But since the moment is small, shear is likely small too.

2. For columns classified as "large moment" or having net uplift, we can use the following expression. Knowing the grade of anchor (see Fu above), the number of anchor rods on our base plate($$n_{rod}$$), and the base plate depth (N)

$$\phi (0.75F_u) A_s \geq \frac{T_u}{n_{rod}} + \frac{M_u}{jN (n_{rod}/2)}$$

$$D \geq \sqrt{ \left( \frac{T_u}{n_{rod}} + \frac{2.22M_u}{N n_{rod}} \right) / (0.442F_u)}$$


<u>General Recommendation</u>

Rather than specifying an unique designs for every single base plate in the building, the better approach is to come up with reasonable number of base plate design "groups" from the outset. This will save you a lot of trouble later on when you put your design on the drawings.

No one wants to build a building where every base plate is different. We need to shrink our number of design to a manageable amount anyways. Therefore, create a base plate design schedule first. Something like below from the outset:


<img src="/assets/img/blog/baseplate5.png" style="width:75%;"/>
*Figure 5: Create A Base Plate Schedule From The Outset*
















<div style="page-break-after: always;"></div>
<hr>

# 2.0 Base Plate Load Distribution - Demand

<hr>


Base plate resist axial, shear, and moment demand. The first question we must answer is how the loads are distributed. What does the free-body diagram look like? What is the bearing stress? How much tension and shear are the anchors taking? 


## 2.1 Analysis Model And Load Combinations

The base reactions can be extracted from any analysis software. We are interested in the axial demand, shear demand, and moment demand from the most critical load combination. For moment frame systems, these demands can be extracted either from the internal forces of column members on the ground floor or the base nodal reactions (they should be in equilibrium).

$${P_u, V_u, M_u} $$

Column base connections are technically designed to remain elastic. So we need to use the relevant overstrength load combinations:

$$1.2D + 0.5L \pm 1.0E_{mh}$$

The equation above is just for reference purposes. Ideally, your design combination should be an envelope of many other load combinations:

* Live load may need to have a 1.0 factor depending on occupancy. Also need to consider live load reduction factor which is significant for ground floor columns. Ideally your design software should automatically deal with these accounting tasks
* Your design load combination should be an envelope of that takes into account:
    * 100%-30% seismic force directional combinations if applicable (e.g. 100X+30Y, 30X+100Y, -30X+100Y, ...)
    * Accidental mass eccentricities
    * Other assumed loading configurations

Furthermore, we need to consider two "load scenarios". A high compression case, and a uplift (or low compression) case. The need to evaluate uplift is self-explanatory. Even if your column never experiences uplift, evaluating low-compression case is important too because base plate classification is a function of axial demand (the base plate may change from small eccentricity where anchor rods don't experience tension to large eccentricity case where they do)

* High compression case:

$$P_{u,max} + V_u + M_u $$

* Low compression/uplift case:

$$P_{u,min} + V_u + M_u $$


Since demands are enveloped, it is difficult to say low or high axial demand necessarily corresponds to high or low shear/moment demand. The easiest and most conservative approach is to just always extract the absolute maximum value for shear and moment.



## 2.2 Fixed Base or Pin Base Model?

It's easier to design for pinned condition (no moment to consider!) but make sure your jurisdiction allows such assumption. 

* HCAI and DSA projects will probably not allow you to use pinned model without rigorous justification
* As your moment frame system gets bigger, it is tough to justify full pinned condition...
* Behavior of pinned and fixed based moment frames are quite different (assuming no backstay affect is present). So it's probably a good idea to get base fixity sorted out early


I think it is more "correct" to design for some moment. Many practitioners have complained about the massive base plate that results from doing so... At any rate, if you are designing for moment, follow AISC 341-16 Section D.2.6c which specifies the required flexural demand as the minimum of:

1. Expected moment capacity of the column $$1.1R_y M_p$$
2. Moment demand from analysis model using overstrength load combination (base must be fixed or spring to get any value)


If there are shear lugs, an additional moment is created from the shear lug eccentricity. See the shear lug section for more information.

$$M_u = M + M_{lug}$$


The reality is probably somewhere in between (i.e. partial fixity). Refer to the appendix for some discussion on how to calculate a rotational spring stiffness.





## 2.3 Base Plate Design Classification

Base plates can be classified into two categories:
* Low moment - resultant is within kern (column is stable without any tie down force from anchors)

<img src="/assets/img/blog/baseplate6.png" style="width:40%;"/>
*Figure 6: Small Moment Base Plate*

* High moment - resultant outside kern

<img src="/assets/img/blog/baseplate7.png" style="width:45%;"/>
*Figure 7: Large Moment Base Plate*

Although we use the term **kern** above, it should be noted that base plate "kern" is not calculated in the same way as footings or anything else that assumes an elastic (triangular) stress distribution (i.e. $$e < L/6$$). AISC Design Guide 1 suggests a less conservative approach which assumes a plastic stress distribution. 

Referring to figure 6, the reaction force resultant (up arrow) follows the bearing force (down arrow) exactly for moment equilibrium, and the magnitude increases for force equilibrium. However, as moment continue to increase:

1. Eccentricity increases (e = M/P) which shifts our downward pointing arrow shifts more and more to the edge
2. Bearing area decreases, bearing stress increases
3. Bearing stress is limited to the capacity of the concrete. Eventually the reaction force resultant can no longer follow (i.e satisfy equilibrium) without exceeding bearing capacity of concrete
4. At this point, the anchor rods are engaged for equilibrium

The dividing line between the two categories is known as the **critical eccentricity**. 

The procedure to classify base plate is as follows:

1. Calculate eccentricity (remember to convert moment from kip.ft to kip.in!)

    $$e = \frac{M_u}{P_u}$$

2. Calculate concrete bearing capacity. Resistance factor for bearing is 0.65, $$\alpha$$ is a confinement factor. Refer to ACI 318 or AISC 360 for more information. A1 is the contact area, A2 is the project area down at 45 degree angle.

    $$1 \leq \alpha = \sqrt{A_2 / A_1} \leq 2$$

    $$f_{pmax} = \phi \alpha 0.85 f'_c $$

3. Normalize bearing stress from ksi to kip/in along depth of base plate

    $$q_{max} = f_{pmax}B$$

4. Calculate critical eccentricity (N is base plate depth)

    $$e_{crit} = N/2 - \frac{P_u}{2q_{max}}$$


## 2.4 Small Moment Base Plate ($$e \leq e_{crit}$$)

Design of small moment base plate is much easier! No anchor rod tension to worry about! The small moment reduces your base plate contact area, thus increasing your bearing stress:

$$Y = N - 2e$$

$$A_{bearing} = B \times Y$$

Again, base plate moment is self-resolving. No tension demand on anchor rods.

$$T = 0$$

We can now move on to check all the limit states. Can skip all tension-related failure modes!


## 2.5 Large Moment Base Plate ($$e > e_{crit}$$)


$$e = \frac{M_u}{P_u}$$

$$f = d/2 + (N-d)/4$$

$$Y = (f+N/2) - \sqrt{   (f + N/2)^2 - \left( \frac{2P(e+f)}{q_{max}}   \right)  }$$

$$T = q_{max}Y - P_u$$


```python

def rigid_plate_distribution(width, depth, fpc, Mu, Pu, x_i, N_i, beta = 1.0,
                             alpha = 0.85, alpha1 = 2.0, phi = 0.65):
    """
    Determine anchor rod uplift based on rigid base plate assumption.
    up = +ve, clockwise = -ve
    Args:
        width = width of base plate (in)
        depth = depth of base plate (in)
        fpc = concrete strength (ksi)
        Mu = moment demand (kip.in). Always positive
        Pu = axial demand (kip). Positive is compression
        xi = depth of anchors from the edge [x1,x2,...]
        Ni = number of anchor along one row [N1,N2,...]
        beta (optional) = 1.0 (rectangular stress block parameter)
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
    # check eccentricity:
    fpmax = phi * alpha * alpha1 * fpc
    qmax = fpmax * width
    ecrit = depth/2 + Pu/2/qmax
    e = abs(Mu/Pu) if Pu!=0 else ecrit+1
    
    # if small eccentricity
    if Pu<0 and e <= ecrit:
        zeros = [0 for x in x_i]
        return zeros, zeros, None, 0, 0
    
    # if large eccentricity
    else:
        # initial guess for neutral axis usually close to pivot point
        Y0 = 0.0
        Y1 = 1.0
        
        # function set up to check equilibrium
        def equilibrium_equations(Y):
            # width, depth, and other constants accesible within inner function scope
            comp = max(0, width*Y*phi*beta*alpha*alpha1*fpc)
            e_i = [x - Y for x in x_i]
            omega_i = [a*b / e_i[-1] for a,b in zip(N_i,e_i)]
            t_n = (-Pu-comp) / sum(omega_i)
            t_i = [a * t_n / b for a,b in zip(omega_i, N_i)]
            T_i = [a * b for a,b in zip(t_i, N_i)]
            M_i = [a * b for a,b in zip(T_i, x_i)]
            sum_M = -sum(M_i) - Pu*(depth/2) - comp*(Y/2) - Mu
            return sum_M, t_i, T_i, comp
        
        # use secant method to find root
        def secant_method(x0,x1,func,TOL=0.1):
            while abs(func(x1)[0])>=TOL:
                xnew = x1 - func(x1)[0] * (x1 - x0) / (func(x1)[0] - func(x0)[0])
                x0 = x1
                x1 = xnew
            return xnew
        
        # start root-finding
        try:
            Y_final = secant_method(Y0,Y1,equilibrium_equations)
        except:
            raise RuntimeError("Did not converge")

        # final load distribution
        sum_M, t_i, T_i, comp = equilibrium_equations(Y_final)
        sum_F = sum(T_i) + Pu + comp
        
        return T_i, t_i, Y_final, sum_F, sum_M
```





$$e_i = x_i - Y$$

$$\alpha = N_i e_i / e_1$$

$$C = Yq_{max}$$

$$t_1 = (P_u + C) / (\sum \alpha)$$

$$t_i = \alpha t_1 / N_i$$


$$\sum F = 0 = \sum N_i t_i  - C - P_u$$

$$\sum M = 0 = \sum T_i x_i - P_u(N/2 +e) - C (Y/2)$$






















<div style="page-break-after: always;"></div>
<hr>

# 3.0 Failure Mode 1: Concrete Bearing

<hr>


## 4.0 Failure Mode 1: Concrete Bearing

$$f_{pmax} = \phi \alpha 0.85 f'_c $$

$$A_1 = BN$$

$$A_2 = (B+2 c_{amin}) \times (N + 2c_{amin})$$

$$1 \leq \alpha = \sqrt{A_2 / A_1} \leq 2$$

$$A_{bearing} = BY$$

$$f_p = P / A_{bearing}$$







## 5.0 Failure Mode 2: Base Plate Flexure

$$f = d/2 + (N-d)/4$$

$$m = \frac{N-0.95d}{2}$$

$$n = \frac{B-0.8b_f}{2}$$

$$n = \frac{B-0.95(b_f+2t_s)}{2}$$

$$X = \left(   \frac{4db_f}{(d+b_f)^2} \right) (P_u/ \phi P_p) \leq 1$$

$$\lambda = \frac{2\sqrt{X}}{1 + \sqrt{1-X} } \leq 1$$

$$\lambda n' = \frac{\lambda \sqrt{db_f}}{4}$$

$$M_m = f_p (m^2/2)$$

$$M_n = f_p (n^2/2)$$

$$M_{n'} = f_p (n'^2/2)$$

$$M_t = T x_t / B$$

$$x_t = f - d/2 + t_f/2$$



Convert moment demand to an equivalent thickness demand:

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




## 6.0 Failure Mode 3: Anchor Rod Tension Yielding

$$A_b = \pi d_b^2 / 4$$

$$A_{se,N} = 0.8A_b$$

$$\phi N_{sa} = \phi A_{se,N} f_{uta}$$

$$\phi r_n = \phi F_{nt} A_b$$

$$\phi T_n = min(\phi r_n, \phi N_{sa})$$



## 7.0 Failure Mode 4: Anchor Rod Pullout

$$\phi N_p = 0.75 \times \Psi_{c,p} \phi 8 A_{brg} f'_c$$



## 8.0 Failure Mode 8: Concrete Tension Breakout

$$A_{Nco} = 9h_{ef}^2$$

$$X = 1.5h_{ef} + s_1 + min(c_{a1},1.5h_{ef})$$

$$Y = 1.5h_{ef} + s_2 + min(c_{a2},1.5h_{ef})$$

$$A_{Nc} = XY \leq nA_{Nco}$$

$$N_b = 0.75 k_c \lambda_a \sqrt{f_c'} h^{1.5}_{ef} $$

$$\Psi_{ed,N} = 0.7 + \frac{0.3 c_{a,min}}{1.5h_{ef}}$$

$$\Psi_{ec,N} = 1 / (1 + 2e_N'/3h_{ef})$$

$$\phi N_{cbg} = 0.75 \times \phi \frac{A_{Nc}}{A_{Nco}} \Psi_{ec,N} ~ \Psi_{ed,N} ~ \Psi_{c,N} ~ \Psi_{cp,N}$$

$$\phi N_n = \phi A_s f_y$$





## 9.0 Failure Mode 9: Concrete Side Face Blowout

$$N_{sb} = 160 \lambda_a c_{a1} \sqrt{A_{brg}} \sqrt{f_c'} $$

$$\alpha = (1 + s/6c_{a1})$$

$$N_{sbg} = \alpha N_{sb}$$




## 10.0 Treatment of Shear Demand





## 11.0 Option 1: Base Plate Design With Shear Lugs


### 11.1 Failure Mode 5a: Shear Lug Bearing

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





### 11.2 Failure Mode 6a: Shear Lug Bending

$$M_u = V_u (3.5" + h/2)$$

$$I = t_{ss}h^3/6 + bt_s^3/12 + 2(ht_{ss})(t_s/2 + h/2)^2$$

$$S = \frac{I}{t_s/2 + h}$$

$$Z = bt_s^2/4$$

$$\phi M_n = \phi f_y Z$$





### 11.3 Failure Mode 7a: Shear Lug Breakout

$$A_{Vco} = 4.5 c_{a1}^2$$

$$A_{Vc} = (b_{sl} + 3c_{a1})(h_{sl} + 1.5 c_{a1}) - b_{sl} h_{sl}$$

$$\Psi_{h,V} = \sqrt{1.5c_{a1}/h_a} > 1.0$$

$$\phi V_{cbg} = \phi \frac{A_{Vc}}{A_{Vco}} \Psi_{ed,V} \Psi_{c,V} \Psi_{h,V} \times V_b$$

$$\phi V_n = \phi A_s f_y$$




## 12.0 Option 2: Base Plate Design Without Shear Lugs


### 12.1 Failure Mode 5b: Anchor Rod Shear and Pryout

$$L_b = 3.5" + 0.5d_{bolt} + t_p$$

$$S = \pi d^3 / 32$$

$$M_s = 1.2 F_u S (1 - T_u / \phi T_n)$$

$$\phi V_S^M = \alpha_m \phi M_s / L_b$$

$$\alpha_m = 2$$

$$V_{cpg}$$


### 12.2 Failure Mode 6b: AISC Combined Tension and Shear Interaction

$$(DCR_t)^2 + (DCR_v)^2 \leq 1.0$$


### 12.3 Failure Mode 7b: ACI Combined Tension and Shear Interaction

$$(DCR_t)^{5/3} + (DCR_v)^{5/3} \leq 1.0$$



## Appendix: Base Rotational Stiffness Modeling

$$k_{rot} = \frac{M_y}{\theta_y}$$

$$M_y = min(M_y^{pl,c}, M_y^{pl,t}, M_y^{rod})$$

$$\theta_y = (\Delta_{rod} + \Delta_{t,plate} + \Delta_{c,plate} + \Delta_{concrete} ) / (s + N/2)$$

$$\Delta_{rod} = \frac{T_{rod}L_{rod}}{A_{rod}E_{rod}}$$

$$\Delta_{plate} = (PL^3 / 3EI ) + (PL / AG)$$

$$\Delta_{concrete} = \frac{f_{max}}{E_{concrete}} d_{footing}$$










