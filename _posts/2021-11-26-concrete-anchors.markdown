---
layout: blog-post
categories: engineering
title: "Primer: ACI 318-19 Chapter 17 Concrete Anchorage Design"
description: "Foundational knowledge for concrete anchorage design"
image: assets/img/blog/concreteanchors.png
date: 2021-11-26
tags: concrete primer
---
*"Primer" is a personal reference notebook and a side project where I can organize and digest some of the things I've learned on the job. The goal is to be concise, and hopefully useful when I take the SE exam. Code documents and design guides are meant to be information dense. These articles help me organize information and condense my thoughts.*

*Please note that these notes are for my own use. It is not peer-reviewed and was most likely written late Thursday night after a long day of work. Reader discretion is advised (in fact reading discouraged). No warranty is expressed or implied by me on the validity of the information presented herein.*


- [1.0 Fundamentals](#10-fundamentals)
- [2.0 ACI 318-19 Design Criteria](#20-aci-318-19-design-criteria)
- [3.0 Tensile Strength](#30-tensile-strength)
  * [3.1 Failure Mode 1: Steel Failure](#31-failure-mode-1--steel-failure)
  * [3.2 Failure Mode 2: Anchor Pullout](#32-failure-mode-2--anchor-pullout)
  * [3.3 Failure Mode 3: Concrete Breakout](#33-failure-mode-3--concrete-breakout)
  * [3.4 Failure Mode 4: Concrete Splitting](#34-failure-mode-4--concrete-splitting)
  * [3.5 Failure Mode 5: Side Face Blowout](#35-failure-mode-5--side-face-blowout)
  * [3.6 Failure Mode 6: Epoxy Anchor Bond Failure](#36-failure-mode-6--epoxy-anchor-bond-failure)
  * [3.7 Failure Mode 7: Supplemental Breakout Reinforcement](#37-failure-mode-7--supplemental-breakout-reinforcement)
- [4.0 Shear Strength](#40-shear-strength)
  * [4.1 Failure Mode 1: Steel Failure](#41-failure-mode-1--steel-failure)
  * [4.2 Failure Mode 2: Anchor Pryout](#42-failure-mode-2--anchor-pryout)
  * [4.3 Failure Mode 3: Shear Edge Breakout](#43-failure-mode-3--shear-edge-breakout)
  * [4.4 Failure Mode 4: Reduced Steel Strength Due to Lever Arm](#44-failure-mode-4--reduced-steel-strength-due-to-lever-arm)
- [5.0 Shear Lugs](#50-shear-lugs)




<div style="page-break-after: always;"></div>
<hr>
# 1.0 Fundamentals
<hr>

The topic of concrete anchorage is guided entirely by experimental testing, much of which can be attributed to University of Stuttgart. Because of its empirical nature, there seems to be an overabundance of variables and factors that can simply be overwhelming for first-time users. The good thing about this is that all of the complexities of concrete anchorage mechanics has been abstracted away into empirical factors, leaving only the concepts that are essential and fairly intuitive to understand. Nevertheless, if you ever want to do a deep dive into where these factors came from, there is an excellent textbook by Dr. R Eligehausen, R Mallee, and J Silva that summarizes decades of research and is surprisingly readable. [[Amazon Link Here](https://www.amazon.com/Anchorage-Concrete-Construction-Rolf-Eligehausen/dp/3433011435)]

ACI 318-19 covers the topic of concrete anchorage fairly comprehensively in Chapter 17. Truth of the matter is, anchorage calculation is very tedious. Furthermore, because of the abundance of empirical factors, and the plethora of code requirements, in practice, it is more common to use anchor design softwares like HILTI PROFIS. The intent of this article is to give a primer, in the most concise manner possible, to someone who wish to understand concrete anchorage rather than relying on third-party softwares.

Fundamentally, demand on an anchor can ultimately be separated into either tension or shear. Moments can be resolved locally into axial force couples which induces additional tension on the anchors. Torque, which is just moment applied about an axis out-of plane to the fixure plate, induces additional shear. In practice, analysis of shear and tension is done separately, and then combined in the end using various T+V interaction equations.

1. Tension
2. Shear Load (Without Lever Arm)
4. Shear Load (With Lever Arm)
3. Combined Shear + Tension


<img src="/assets/img/blog/anchoraction.png" style="width:55%;"/>
*Figure 1: Anchorage Actions*
<div style="page-break-after: always;"></div>

Technically, an anchor can also be placed into bending by a standoff. This is not explicitly covered in ACI 318-19, but they do exist in things like cladding attachments, or base plate with large grout layer that may spall. The European code does address shear with lever arm in ETAG-001 Annex C and I'll include the relevant sections in this article.

The anchor types can be separated into 3 groups:
1. Cast-In-Place Anchors
2. Post-Installed Expansion Anchors
3. Post-Installed Adhesive Anchors

Cast-in-place anchors rely on mechanical interlock, expansion anchors rely on friction induced by a wedge at the tip of the anchor, and epoxy anchors rely on bond or chemical interlock. Furthermore, as their name implies, installation occurs at different stage of construction. Post-installed expansion anchors seem to be a contractor favorite as they are easy to install and require no coordination before concrete pour.









<div style="page-break-after: always;"></div>
<hr>
# 2.0 ACI 318-19 Design Criteria
<hr>
17.5.2 - Similar to the rest of ACI 318-19, all concrete anchorage calculations are in LRFD. Capacity and demand associated with tension is denoted with letter "N", capacity and demand associated with shear is denoted with letter "V". In both cases, they represent the lowest capacity

$$\phi N > N_{ua} \tag 1$$

$$\phi V > V_{ua} \tag 2$$

R17.8.3 - The general procedure for any anchorage design is to analyze all the various failure modes associated with shear and tension separately to get the governing (lowest) capacity, and then combine together in the form of an interaction equation.

$$(\frac{N_{ua}}{\phi N_n})^{5/3} + (\frac{V_{ua}}{\phi V_n})^{5/3} <1.0 \tag 3$$

There are a whole lot of subscripts and combination of subscripts appended to the two variables above. Here is a comprehensive list:

Demand:
* $$N_{ua} \mbox{ or } N_{ua,i}$$ = tension demand of single anchor
* $$N_{ua,g}$$ = tension demand of anchor group
* $$V_{ua} \mbox{ or } V_{ua,i}$$ = shear demand of single anchor
* $$V_{ua,g}$$ = shear demand of anchor group

Capacities:
* $$N_{sa}$$ = steel tensile strength
* $$N_{cb}$$ = concrete tension breakout strength
* $$N_{cbg}$$ = concrete tension breakout strength (anchor group)
* $$N_{pn}$$ = anchor tension pullout
* $$N_{sb}$$ = concrete side-face breakout strength in tension
* $$N_{a}$$ = Tensile bond strength of adhesive anchor
* $$V_{sa}$$ = steel shear strength
* $$V_{cb}$$ = concrete shear breakout strength
* $$V_{cbg}$$ = concrete shear breakout strength (anchor group)
* $$V_{cp}$$ = concrete shear pryout strength
* $$V_{cpg}$$ = concrete shear pryout strength (anchor group)

Factors:
* $$\Psi_{ec,N}$$ = tension breakout eccentricity factor (17.6.2.3)
* $$\Psi_{ed,N}$$ = tension breakout edge distance factor (17.6.2.4)
* $$\Psi_{c,N}$$ = tension breakout cracking factor (17.6.2.5)
* $$\Psi_{cp,N}$$ = tension breakout splitting factor (17.6.2.6)
* $$\Psi_{c,P}$$ = pullout cracking factor (17.6.3.3)
* $$\Psi_{ec,Na}$$ = bond eccentricity factor (17.6.5.3)
* $$\Psi_{ed,Na}$$ = bond edge factor (17.6.5.4)
* $$\Psi_{cp,Na}$$ = bond splitting factor (17.6.5.5)
* $$\Psi_{ec,V}$$ = shear breakout eccentricity factor (17.7.2.3)
* $$\Psi_{ed,V}$$ = shear breakout edge distance factor (17.7.2.4)
* $$\Psi_{c,V}$$ = shear breakout cracking factor (17.7.2.5)
* $$\Psi_{h,V}$$ = shear breakout thickness factor (17.7.2.6)


17.5.3 - Resistance factors ($$\phi$$) are listed below.

* Steel Tension Failure
  * $$\phi = 0.75$$: Ductile steel (more common)
  * $$\phi = 0.65$$: Brittle steel
* Steel Shear Failure
  * $$\phi = 0.65$$: Ductile steel (more common)
  * $$\phi = 0.60$$: Brittle steel
* Tension Breakout, Bond, Side-Face Blow Out
  * $$\phi = 0.70$$: for cast-in anchors
  * $$\phi = 0.75$$: for cast-in anchors w/ supplemental reinforcement
  * $$\phi = 0.65$$: for post-installed anchors (Category 1*). No supp. reinf.
  * $$\phi = 0.55$$: for post-installed anchors (Category 2*). No supp. reinf.
  * $$\phi = 0.45$$: for post-installed anchors (Category 3*). No supp. reinf.
  * Increase factor for post-installed anchor by 0.1 if supp. reinf. is present
* Shear Breakout
  * $$\phi = 0.75$$: shear breakout w/ supplemental reinforcement
  * $$\phi = 0.70$$: all other cases
* Anchor Tension Pullout
  * $$\phi = 0.70$$: for cast-in anchors
  * $$\phi = 0.65$$: for post-installed anchors (Category 1*)
  * $$\phi = 0.55$$: for post-installed anchors (Category 2*)
  * $$\phi = 0.45$$: for post-installed anchors (Category 3*)
* Shear Pryout
  * $$\phi = 0.7$$: All cases

*Note that anchor categories are defined in ACI 355.2 or ACI 355.4. The anchor manufacturer usually provides the appropriate category of their anchors. Category 1 indicates high reliability. Category 2 indicates medium reliability. Category 3 indicates low reliability.

*Supplementary reinforcement refers to any reinforcement within the concrete that is preventing splitting cracks. It does not need to be explicitly designed.

17.2.1 - Shear and tension demand is calculated with an elastic analysis. Where more rigor is required, a plastic analysis is also permitted.

17.3.1 - Due to lack of available test data, $$f'_c$$ for calculation purposes cannot exceed 10 ksi for cast-in-place anchors, and 8 ksi for post-installed anchors.

17.10.5.3 - For seismic applications, all concrete anchorage must be design for $$\Omega$$ level forces (2x to 3x amplification). There are ways to avoid this by doing some more rigorous detailing and design (see code clause), but the common practice is to just amplify anchorage demand by $$\Omega_o$$ (see ASCE 7-16).

$$E_h = \Omega_o E \tag 4$$

17.10.5.4 - For seismic applications, concrete should be assumed to be cracked unless demonstrated otherwise. In addition, the following tension capacities must be reduced by 25%.
* Reduce tension breakout capacity ($$0.75 \phi N_{cb} \mbox{ and }0.75 \phi N_{cbg}$$) - does not apply if breakout resisted by supplemental reinforcement
* Reduce anchor pullout capacity ($$0.75 \phi N_{pn}$$)
* Reduce tension side-face breakout capacity ($$0.75 \phi N_{sb} \mbox{ and }0.75 \phi N_{sbg}$$)
* Reduce anchor bond capacity ($$0.75 \phi N_{a} \mbox{ and }0.75 \phi N_{ag}$$)










<div style="page-break-after: always;"></div>
<hr>
# 3.0 Tensile Strength
<hr>

<img src="/assets/img/blog/anchortension.png" style="width:65%;"/>
*Figure 2: Anchor Tension Failure Modes*

## 3.1 Failure Mode 1: Steel Failure

17.6.1.1 - Nominal steel strength of anchor in tension is calculated as follows:

$$N_{sa} = A_{se,N} f_{uta} \tag 5$$

where:
* $$f_{uta}$$ = ultimate steel rupture strength (Fu) and shall not exceed 1.9Fy or 125 ksi
* $$A_{se,N}$$ = net cross section area in threaded region of anchor that is usually in the range of 0.7 to 0.9A<sub>g</sub> (typically provided by manufacturer). If threaded area is not given, it can be calculated per ASME B1.1 as follows. 

$$A_{se,N}= \frac{\pi}{4} (d - \frac{0.9743}{n_t})^2 \tag 6$$

n<sub>t</sub> is the number of thread per inch. Thread geometry for unified coarse (UNC) can be found online. [Example](https://www.trfastenings.com/products/knowledgebase/thread-geometry/unified-coarse-unc)

<img src="/assets/img/blog/netarea.png" style="width:65%;"/>
*Table 1: Net Area of Threaded Section Estimation per UNC*

Alternatively, follow the AISC 360 provisions and use gross area along with a reduced material strength.


<div style="page-break-after: always;"></div>
<hr>
## 3.2 Failure Mode 2: Anchor Pullout

Pullout is calculated as the force at the onset of local concrete crushing at the bearing end of the anchor head. This is thought to be the beginning of a pullout failure because of the rapid decrease in stiffness afterwards. In other words, pullout capacity is purely a function of end bearing area, and is not related to embedment length (friction neglected).

17.6.3.2.1 - Pullout mechanism for expansion anchors, screws, and undercut anchors are fundamentally different and cannot be calculated per ACI 318. Instead, refer to manufacturer ESR report for suggested pullout strength.

17.6.3.2.2 - For cast-in headed studs or bolts:

$$N_{pn} = \Psi_{c,p} \times 8A_{brg}f'_c \tag 7$$

17.6.3.2.2 - For hooked ends anchors

$$N_{pn} = \Psi_{c,p} \times 0.9f'_c e_h d_a \tag 8$$

* $$A_{brg}$$ is the net bearing area of the headed stud
* $$e_h$$ is distance from inner surface of shaft to tip of J or L-bolt. Must be between $$3d_a$$ and $$4.5d_a$$
* $$d_a$$ is the diameter of anchor
* $$\Psi_{c,p}$$ is the pullout cracking factor. Use 1.0 for cracked concrete (almost always), use 1.4 for uncracked concrete.

17.10.5.4 - For seismic application, reduce anchor capacity in pullout by 25%

$$0.75 \phi N_{pn} \tag 9$$

<div style="page-break-after: always;"></div>
<hr>
## 3.3 Failure Mode 3: Concrete Breakout

<img src="/assets/img/blog/anchorbreakout.png" style="width:45%;"/>
*Figure 3: Concrete Tension Breakout Failure Cone*

17.6.2.1a - For a single anchor:

$$N_{cb} = N_b \times ( \frac{A_{Nc}}{A_{Nco}} ) ( \Psi_{ed,N} \Psi_{c,N} \Psi_{cp,N})  \tag {10}$$

17.6.2.1b - For an anchor group:

$$N_{cbg} = N_b \times (\frac{A_{Nc}}{A_{Nco}}) (\Psi_{ec,N} \Psi_{ed,N} \Psi_{c,N} \Psi_{cp,N}) \tag {11}$$

That is a lot of variables. Let's go through them one by one.

**17.6.2.2 - Basic single anchor breakout capacity**

This is the basic concrete breakout strength, of a single anchor, in cracked concrete. We will use this value as a starting point and apply several modification factors for other conditions.

$$N_{b} =  k_c \lambda_a \sqrt{f'_c} h_{ef}^{1.5} \tag {12} $$

where:

* $$h_{ef}$$ = embedment depth
* $$k_c$$ = 24 for cast-in anchors, and 17 for post-installed anchors (may be increased if proven by manufacturer)

ACI also permits a slightly less conservative equation for anchors embedded between 11 in to 25 in (17.6.2.2.3), however it becomes unconservative beyond 25 inch; making it only applicable for anchors embedded between 11" to 25". For simplicity, it is convenient to just use equation 12 above. But it is good to know that you can perhaps squeeze out 10 to 30 kips.


**17.6.2.3 - Breakout Eccentricity Factor ($$\Psi_{ec,N}$$)**

This factor is unique to anchor groups. If the resultant tension on an anchor group is concentric, or if we are looking at a single anchor:

$$\Psi_{ec,N} =  1.0 \tag {13} $$

On the other hand, when a moment is applied to an anchor group, the resultant tension is not concentric meaning some anchors are more stressed in tension than others.

$$\Psi_{ec,N} =  \frac{1}{1+\frac{e'_N}{1.5h_{ef}}}  <=1.0 \tag {14} $$

$$e_N$$ is the distance from centroid of anchor loaded in tension to the resultant tensile force.

<img src="/assets/img/blog/anchorecc.png" style="width:75%;"/>
*Figure 4: Anchor Tension Eccentricity Factors*


**17.6.2.4 - Breakout Edge Effect Factor ($$\Psi_{ed,N}$$)**

If the minimum edge distance is at least $$1.5h_{ef}$$, then a full breakout cone can form and no edge reduction factor is necessary. 

$$\Psi_{ed,N} =  1.0 \tag {15} $$

Otherwise, if the anchor or anchor group is close to an edge:

$$\Psi_{ed,N} =  0.7 + 0.3 \frac{ c_{a,min} }{ 1.5h_{ef} } \tag {16} $$

$$c_{a,min}$$ is the minimum edge distance.

17.6.2.1.2 - If there are 3 or more edges (less than $$1.5h_{ef}$$), such as at the end of a narrow grade beam, the effective embedment must also be reduced in all equations that involve embedment depth.

$$h_{ef} = max( c_{a,max}/1.5, s/3) \tag {17}$$

where "s" is the maximum spacing between anchors, and $$c_{a,max}$$ is the maximum edge distance that is less than $$1.5h_{ef}$$


**17.6.2.5 - Breakout Cracking Factor ($$\Psi_{c,N}$$)**

Modification factor for cracking. Typically assume all concrete are cracked for conservatism unless more rigor is required. Cracked concrete has a modification factor of 1.0.

* $$\Psi_{c,N} = 1.0$$ for cracked condition (most commonly used)
* $$\Psi_{c,N} = 1.25$$ for cast-in anchors (uncracked)
* $$\Psi_{c,N} = 1.4$$ for post-installed anchors (uncracked). Or use value from manufacturer ESR report.

**17.6.2.6 - Breakout Splitting Factor ($$\Psi_{cp,N}$$)**

For cast-in anchors, or any anchors designed for cracked concrete, the splitting factor can be taken as 1.0. Since we will mostly be assuming cracked concrete, this will be the case.

$$\Psi_{cp,N} = 1.0 \tag {18}$$

For post-installed anchors designed for uncracked condition:
* $$\Psi_{cp,N} = 1.0 $$ if the critical edge spacing $$c_{ac}$$ is met. Otherwise:

$$\Psi_{cp,N} = \frac{c_{a,min}}{c_{ac}} >= \frac{1.5h_{ef}}{c_{ac}} \tag {19} $$

The critical edge spacing $$c_{ac}$$ is required for post-installed anchors installed to uncracked condition without supplemental reinforcement to prevent splitting cracks.

<img src="/assets/img/blog/anchorcac.png" style="width:45%;"/>
*Table 2: Anchor Critical Edge Distance for Splitting Failure*


**17.6.2.1.4 - Full Projected Failure Area of Single Anchor ($$A_{Nco}$$)**

Based on a 35 degree breakout cone, the projected failure area is a square with side length of $$2 \times 1.5h_{ef}$$ (see figure 3). Note that the failure area is taken as a rectangle rather than an ellipse for simplicity.

$$A_{Nco} = 9h_{ef}^2 \tag {20} $$


**17.6.2.1.1 - Actual Projected Concrete Failure Area ($$A_{Nc}$$)**

The actual breakout area must be adjusted. 

For anchor group with 1 or 2 edges, this can be represented in equation form as:

$$A_{Nc} =  (1.5h_{ef}+s_1+c_{a1}) \times (1.5h_{ef}+s_2+c_{a2}) \tag {21} $$

However, the projected area must not exceed $$(n A_{nco})$$ where n is the number of anchor in the anchor group.

For anchor group with 3 or more edges, effective embedment depth has to be reduced per 17.6.2.1.2. See figure below for example breakout area calculation. In essence, the breakout cone will extend $$1.5h_{ef}$$ orthogonally beyond the outermost anchor unless interrupted by an edge.

<img src="/assets/img/blog/anchorarea.png" style="width:45%;"/>
*Figure 5: Concrete Breakout Area Example*


17.10.5.4 - For seismic application, reduce tension breakout capacity by 25%

$$0.75 \phi N_{cb} \tag {22}$$


<div style="page-break-after: always;"></div>
<hr>
## 3.4 Failure Mode 4: Concrete Splitting

There is no capacity to calculate for concrete splitting failure. Instead, ACI 318 forces specific detailing requirements to preclude the possibility of splitting failure. Also most manufacturer ESR report will have these information. Here are some of the most important ones:

17.9.5 - minimum edge distance for post-installed anchor (shown above in table 2)

17.9.4 - effective embedment of post-installed anchors should not exceed 2/3 of slab depth to prevent blowout on the opposite side. For example, in a 12" slab, the embedment should not be greater than 8". Note this does not apply to epoxy or cast-in anchors.

17.9.2 - in general, try to have spacing of at least $$6d_b$$ and edge distance at least $$8d_b$$

<img src="/assets/img/blog/anchorsplit.png" style="width:55%;"/>
*Table 3: Splitting Failure Spacing and Edge Distance Requirements*



<div style="page-break-after: always;"></div>
<hr>
## 3.5 Failure Mode 5: Side Face Blowout

This failure mode is only applicable for anchors near an edge.

17.6.4.1 - For single headed anchor with $$h_{ef} > 2.5 c_{a1}$$:

$$N_{sb} = 160 c_{a1} \sqrt{A_{brg}} \lambda_a \sqrt{f'_c} \tag {23}$$

17.6.4.1.1 - if $$c_{a2} < 3c_{a1}$$, then multiply the above equation by the factor:

$$0.25(1+ \frac{c_{a2}}{c_{a1}}) \tag {24}$$

* $$A_{brg}$$ is the net bearing area of the headed stud
* $$c_{a1}$$ is the edge distance in the direction of applied shear. If no shear is applied, use the minimum edge distance
* $$c_{a2}$$ is the edge distance perpendicular to $$c_{a1}$$
* In equation 24, $$\frac{c_{a2}}{c_{a1}}$$ should be between 1.0 to 3.0


17.6.4.2 - For head anchor group with $$h_{ef} > 2.5 c_{a1}$$ and anchor spacing along the edge $$s< 6c_{a1}$$:

$$N_{sbg} = (1+ \frac{s}{6c_{a1}}) N_{sb} \tag {25}$$

Only the anchors close to the edge ($$c_{a1}<0.4h_{ef}$$) should be considered.


17.10.5.4 - For seismic application, reduce side face blowout capacity by 25%

$$0.75 \phi N_{sb} \tag {26}$$


<div style="page-break-after: always;"></div>
<hr>
## 3.6 Failure Mode 6: Epoxy Anchor Bond Failure

This failure mode is only applicable for adhesive anchors.

Because adhesive anchor bond capacity is highly product dependent. You'll likely need to refer to the manufacturer's product catalog and ESR report. It may be easier to use their proprietary software for the design of these anchors.

17.6.5.1a - For single adhesive anchor:

$$N_a = N_{ba} \times (\frac{A_{Na}}{A_{Nao}})(\Psi_{ed,Na} \Psi_{cp,Na}) \tag {27}$$

17.6.5.1b - For group of adhesive anchors:

$$N_{ag} = N_{ba} \times (\frac{A_{Na}}{A_{Nao}})(\Psi_{ec,Na} \Psi_{ed,Na} \Psi_{cp,Na}) \tag {28}$$

Again, this is a lot of variables. Let's go through them one by one.

**17.6.5.2 - Basic Single Anchor Bond Strength ($$N_{ba}$$)**

The basic bond strength of a single adhesive anchor in tension in cracked concrete is:

$$N_{ba} = \lambda_a \tau_{cr} \pi d_a h_{ef}\tag {29}$$

where $$t_{cr}$$ is the allowable bond stress provided by the manufacturer. Alternatively, we can use the minimum bond stress value provided in 17.6.5.2.5:

* $$\tau_{cr} = 200 psi$$, for outdoor condition cracked
* $$\tau_{cr} = 300 psi$$, for indoor condition cracked
* $$\tau_{uncr} = 1000 psi$$, for indoor condition uncracked
* $$\tau_{uncr} = 600 psi$$, for outdoor condition uncracked

17.6.5.2.5 - If anchor is under sustained tension, multiply $$t_{cr}$$ by a factor of 0.4

17.6.5.2.5 - If anchor is under earthquake induced tension, multiply $$t_{cr}$$ by a factor of 0.8


**17.6.5.1.2 - Bond Breakout Influence Area ($$A_{Nao}, A_{Na}$$)**

<img src="/assets/img/blog/epoxyanchor.png" style="width:65%;"/>
*Figure 6: Concrete Breakout Area For Adhesive Anchors*

The breakout influence area is fundamentally different than typical anchors. Rather than $$1.5h_{ef}$$, we need to calculate the projected length $$c_{Na}$$ which is a function of uncracked bond stress:

$$c_{Na} = 10d_a \sqrt{\frac{\tau_{uncr}}{1100}} \tag {30}$$

Then the full breakout area can be calculated as:

$$A_{Nao} = (2c_{Na})^2\tag {31}$$

Similarly to before, the projected breakout cone extends a length of $$c_{Na}$$ (rather than $$1.5h_{ef}$$) unless interrupted by an edge. Refer to figure 6 for a sample calculation.


**17.6.5.3 - Bond Eccentricity Factor ($$\Psi_{ec,Na}$$)**

Similar to the typical breakout eccentricity factor, just swap $$1.5h_{ef}$$ and $$c_{Na}$$.

$$\Psi_{ec,Na} = \frac{1}{(1-\frac{e'_N}{C_{Na}})} <= 1.0 \tag {32}$$

**17.6.5.4 - Bond Edge Effect Factor ($$\Psi_{ed,Na}$$)**

Similar to the typical breakout edge factor, just swap $$1.5h_{ef}$$ and $$c_{Na}$$. If the minimum edge distance is at least $$c_{Na}$$, then a full breakout cone can form and no edge reduction factor is necessary. Otherwise, if the anchor or anchor group is close to an edge:

$$\Psi_{ed,Na} =  0.7 + 0.3 \frac{ c_{a,min} }{ c_{Na} } \tag {33} $$


**17.6.5.5 - Bond Splitting Factor ($$\Psi_{cp,Na}$$)**

Similar to the typical splitting factor, just swap $$1.5h_{ef}$$ and $$c_{Na}$$. For anchors designed for cracked concrete, the splitting factor can be taken as 1.0. Since we will mostly be assuming cracked concrete, this will be the case.

For anchors designed for uncracked condition:
* $$\Psi_{cp,Na} = 1.0 $$ if the critical edge spacing $$c_{ac}$$ is met, otherwise:

$$\Psi_{cp,Na} = \frac{c_{a,min}}{c_{ac}} >= \frac{c_{Na}}{c_{ac}} \tag {34} $$


**Other Modification Factors**

17.5.2.2 - If adhesive anchors are to resist sustained tension, then the capacity must be reduced by 45%.

$$0.55 \phi N_{sa} \tag {35}$$

17.10.5.4 - For seismic application, reduce bond capacity by 25%.

$$0.75 \phi N_{sa} \tag {36}$$


As you can probably tell already, adhesive anchors are terrible under sustained tension. Reduction factor from 17.5.2.2 and 17.6.5.2.5 stack resulting in a reduction of almost 80%(0.55*0.4=0.22).




<div style="page-break-after: always;"></div>
<hr>
## 3.7 Failure Mode 7: Breakout Anchor Reinforcement

<img src="/assets/img/blog/anchorsupp.png" style="width:45%;"/>
*Figure 7: Anchor Reinforcement in Blue, Supplementary Reinforcement in Green*

17.5.2.1 - Occasionally, it may be impossible to rely on concrete breakout capacity alone. In these cases, we may take breakout capacity as equal to the strength of all anchor reinforcements that can be developed on both ends of the splitting plane.

$$\phi N_{cbg} = \phi f_y A_s \tag {37}$$

* fy is the yield strength of anchor reinforcement
* As is the total steel area of anchor reinforcement
* use $$\phi = 0.75$$ per 17.5.3, 

There are stringent detailing requirements in order to take advantage of anchor reinforcements, here are some of the important ones:

* Reinforcement must be developed on both sides of the breakout line
* For tension breakout, anchor reinf. should be placed as close to the resultant tension as possible. No more than $$0.5h_{ef}$$ from anchor centerline
* For shear breakout, anchor should be placed as close to top of slab as possible while basically touching the anchors.
* For shear breakout, anchor reinf. are effective within a width equaling to $$min(0.5c_{a1},0.3c_{a2})$$
* Available research data is based on #5 bars. Larger bend radii of larger bars may reduce effectiveness. Bar larger than #6 not recommended but not prohibited by code either.

<img src="/assets/img/blog/suppanchor.png" style="width:65%;"/>
*Figure 8: Effective Region for Anchor Reinforcement*










<div style="page-break-after: always;"></div>
<hr>
# 4.0 Shear Strength
<hr>

<hr>
## 4.1 Failure Mode 1: Steel Failure

<hr>
## 4.2 Failure Mode 2: Anchor Pryout

<hr>
## 4.3 Failure Mode 3: Shear Edge Breakout

<hr>
## 4.4 Failure Mode 4: Shear with Lever Arm









<div style="page-break-after: always;"></div>
<hr>
# 5.0 Shear Lugs
<hr>



