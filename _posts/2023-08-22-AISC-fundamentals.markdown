---
layout: blog-post
categories: engineering
title: "Primer: AISC 360-16 Chapter J Connection Design"
description: "Structural steel connection design fundamentals"
image: assets/img/blog/AISC.png
date: 2023-08-22
tags: primer
---

*"Primer" is my personal reference notebook. It's a collection of notes where I attempt to organize the many things I'm learning on the job. The goal is to be concise, and hopefully useful when I take the SE exam. Code documents and design guides are meant to be information dense. These articles help me organize information and condense my thoughts.*

*Please note that these notes are for my own use. Reader discretion is advised (in fact discouraged). No warranty is expressed or implied by me on the validity of the information presented herein.*




- [1.0 Fundamentals](#10-fundamentals)
  * [1.1 Overview](#11-overview)
  * [1.2 Focus on Limit State Rather Than Connections](#12-focus-on-limit-state-rather-than-connections)
  * [1.3 Content Organization - Demand And Capacity](#13-content-organization---demand-and-capacity)
- [2.0 Demands - Bolt Groups](#20-demands---bolt-groups)
  * [2.1 Elastic Method](#21-elastic-method)
  * [2.2 Instant Center of Rotation Method](#22-instant-center-of-rotation-method)
- [3.0 Demands - Weld Group](#30-demands---weld-group)
  * [3.1 Preamble](#31-preamble)
  * [3.2 Elastic Method](#32-elastic-method)
- [4.0 Capacity - Base Material](#40-capacity---base-material)
  * [4.1 General Material Information](#41-general-material-information)
  * [4.2 Shear Yielding/Rupture](#42-shear-yielding-rupture)
  * [4.3 Tension Yielding/Rupture](#43-tension-yielding-rupture)
  * [4.4 Block Shear of Welded Sections](#44-block-shear-of-welded-sections)
  * [4.5 Flexure](#45-flexure)
  * [4.6 Compression](#46-compression)
  * [4.7 Local Concentrated Load - Flange Bending](#47-local-concentrated-load---flange-bending)
  * [4.8 Local Concentrated Load - Web Local Yielding](#48-local-concentrated-load---web-local-yielding)
  * [4.9 Local Concentrated Load - Web Local Crippling](#49-local-concentrated-load---web-local-crippling)
  * [4.10 Local Concentrated Load - Web Sidesway Buckling](#410-local-concentrated-load---web-sidesway-buckling)
  * [4.11 Local Concentrated Load - Web Buckling](#411-local-concentrated-load---web-buckling)
  * [4.12 Local Concentrated Load - Concrete Bearing](#412-local-concentrated-load---concrete-bearing)
- [5.0 Capacity - Bolts](#50-capacity---bolts)
  * [5.1 General Bolt Information](#51-general-bolt-information)
  * [5.2 Bolt Tension and Shear](#52-bolt-tension-and-shear)
  * [5.3 Combined Shear and Tension Interaction Equation](#53-combined-shear-and-tension-interaction-equation)
  * [5.4 Slip Critical Bolts Tension and Shear](#54-slip-critical-bolts-tension-and-shear)
  * [5.5 Bolt Bearing and Tear Out](#55-bolt-bearing-and-tear-out)
  * [5.6 Bolt Connection Shear and Tension Rupture](#56-bolt-connection-shear-and-tension-rupture)
  * [5.7 Bolt Connection Block Shear](#57-bolt-connection-block-shear)
- [6.0 Capacity - Welds](#60-capacity---welds)
  * [6.1 General Weld Information](#61-general-weld-information)
  * [6.2 Weld Shear Rupture Capacity](#62-weld-shear-rupture-capacity)



WORK IN PROGRESS....






<div style="page-break-after: always;"></div>
<hr>
# 1.0 Fundamentals
<hr>

## 1.1 Overview

Connection design is simply the creation of a viable **load path** between two base materials. Through this load path, the designer must ensure all failure modes (**limit states**) are accounted for. Each limit state has a corresponding capacity, and the goal is to ensure **Capacity > Demand** in all cases.

<img src="/assets/img/blog/aisc100.png" style="width:90%;"/>
*Figure 1.11: Load Path Through Connection*


For example, take a single-plate shear connection (shear tab) which is shown in the figure below. The gravity load must flow from the girder to the supporting column.

<img src="/assets/img/blog/aisc101.png" style="width:90%;"/>
*Figure 1.12: Shear Tab Connection*

Each step of the load path must be carefully examined (e.g. the bolts can't be too small, the plates can't be too thin, etc). There are also detailing and serviceability considerations that we will also discuss later. For a simple shear tab connections, the following limit states must be checked:

1. Bolt shear
2. Bolt bearing and tear out on the plate
3. Plate shear yielding
4. Plate shear rupture
5. Block shear
6. Weld rupture

Like a chain link, **the capacity of the overall connection is equal to the lowest capacity of all relevant limit states**. In general, there are two approaches to designing connections:

1. Design: Calculate an overall connection capacity (one number) based on all applicable limit states. This number can be used repeatedly later on for any demand.
2. Analysis: Calculate both capacity and demand. Given a connection and applied loads, calculate DCR of every single limit state.


## 1.2 Focus on Limit State Rather Than Connections

Broadly speaking, steel connections can be categorized into 4 categories:
* Tension connection
* Compression connection
* Shear connection (flexible enough to avoid transferring moment)
* Moment connection (partial restraint & full restraint)

<img src="/assets/img/blog/aisc1.png" style="width:90%;"/>
*Table 1.21: Different Types of Connections*

Most structural steel connections are standardized with well-formulated design procedures. Often, a connection type is completely tabulated such that the engineer does not need to do any calculation whatsoever. This is convenient for experienced engineers but pedagogically harmful for new engineers.

Rather than focusing on one specific connection type, it is more productive and useful to understand the limit states; as this knowledge is transferable to all connection types. Most connection limit states are presented in Section J of AISC 360-16. 


## 1.3 Content Organization - Demand And Capacity

The foundation of structural design is to ensure **Capacity > Demand**, or that the demand-capacity-ratio (DCR) is less than 1.0. This article will be in **LRFD**. In the equation below, the subscript "u" is used to denote "ultimate" demand, and the subscript "n" is used to denote "nominal" capacity.

$$\phi R_n \geq R_u$$

$$DCR = \frac{demand}{capacity} =\frac{R_u}{\phi R_n} \leq 1.0 $$

We will look at connection design through the lens of capacity and demand, and you will undoubtedly hear me use these two words again and again. Here are the sections that follows:

* Section 2.0 - Determining Demands of Bolt Groups
* Section 3.0 - Determining Demands of Welds
* Section 4.0 - Capacity of Base Material
* Section 5.0 - Capacity of Bolts
* Section 6.0 - Capacity of Welds



















<div style="page-break-after: always;"></div>
<hr>
# 2.0 Demands - Bolt Groups
<hr>

Demands on the members (base material) are the stress resultants we often see in structural engineering. 

* $$P_{u}$$ - axial demand
* $$T_{u}$$ - torsion demand
* $$V_{uy}$$ - shear demand along y (coupled with Mx)
* $$M_{ux}$$ - major-axis moment demand
* $$V_{ux}$$ - shear demand along x (coupled with My)
* $$M_{uy}$$ - minor-axis moment demand

Let's clarify sign conventions before we go further.

<img src="/assets/img/blog/aisc2.0.png" style="width:70%;"/>
*Figure 2.01: Common Sign Conventions*

The first sign convention is the most common for general analysis. The second sign convention is unique to CSI products (ETABS, SAP) that is essentially a renaming of the first (x=1, y=2, z=3). These conventions are great for member-level analysis. However, notice that if you were particularly concerned with a member cross-section, it is awkward to work with a z-axis that points to the left.

AISC adopts a unique sign convention where the x-axis rotates from being the longitudinal axis along member length to being the major section axis. **We will use the AISC sign convention for the rest of this primer.** Note that all three sign conventions respect the right-hand rule.




## 2.1 Elastic Method

The transfer of member forces onto a bolt group can be simple. For example, applying 99 kips of concentric shear on 3 bolts, we know intuitively that each bolt can be assumed to takes about 99/3 = 33 kips.

But what about a group of bolts arranged in an unique way? With Torsion? With Out-of-plane moment? How do you convert several different demands on a bolt group to the individual bolts? It's clear that we need a closer examination.

A bolt group can take shear, moment, and torsion. However, **a single bolt can only take shear or tension**. Moment and torsion demand on a bolt group must be translated to a local tension or shear.


<img src="/assets/img/blog/aisc102.png" style="width:90%;"/>
*Figure 2.11: Demand on Bolts and Bolt Groups*

<u>Bolt Group Geometric Properties</u>

Before we discuss how to calculate bolt demands, here are some useful geometric properties that will come in handy later. **Bolt groups are like sections**, in that they have geometric properties like centroids and moment-of-inertias.

Centroid:

$$\bar{x} = \frac{\sum x_i}{N_{bolts}}$$

$$\bar{y} = \frac{\sum y_i}{N_{bolts}}$$

Moment of inertia about x and y axis:

$$I_x = \sum (y_i - \bar{y})^2$$

$$I_y = \sum (x_i - \bar{x})^2$$

Polar moment of inertia:

$$I_z = I_x + I_y$$

Product moment of inertia (equal to zero at principal axis):

$$I_{xy} = \sum (x_i - \bar{x})(y_i - \bar{y})$$



<u>Concentric Shear and Concentric Tension</u>

First the simplest case of concentric shear and tension. The resulting demand on individual bolts is simply total force divided by number of bolts. The assumption of equal strain is actually not entirely true, but sufficient for design purposes.

$$v_i = \frac{V_u}{N_{bolts}}$$

$$t_i = \frac{T_u}{N_{bolts}}$$

<img src="/assets/img/blog/aisc103.png" style="width:90%;"/>
*Figure 2.12: Concentric Shear and Tension Demand on Bolt Group*




<u>In-Plane Torsion</u>

In plane torsion is converted to additional shear on the individual anchors. The x and y components, and well as the resultant is shown below.

$$v_{tx} = \frac{M_z (y_i - \bar{y})}{I_z}$$

$$v_{ty} = \frac{-M_z (x_i - \bar{x})}{I_z}$$

$$v_{t} = \sqrt{v_{tx}^2 + v_{ty}^2}$$

The equations above should be very familiar. They're identical to the torsion shear stress on beam sections ($$\tau = Tc/J$$). Essentially, bolt force varies linearly radiating from the centroid. Bolts furthest away from the centroid naturally takes more force.

The example below shows 100 kip.in of torque applied to a group of 4 bolts arranged in a 6"x6" square. Note how the resisting shear vector revolves around the centroid where the torque is applied. Each bolt is 4.24 in away from centroid ($$4.24\times5.9\times4 = 100 k.in$$). The demand and reactions are in equilibrium.

<img src="/assets/img/blog/aisc104.png" style="width:45%;"/>
*Figure 2.13: Torsion Demand on Bolt Group*






<u>Out-of-Plane Moment</u>

There are several methods available for calculating tension due to out-of-plane moment (overturning). We will discuss two methods here.

<img src="/assets/img/blog/aisc105.png" style="width:90%;"/>
*Figure 2.14: Moment Demand on Bolt Group*

Let's talk about the second method because it is simpler but quite conservative. The tension on the bolts can be easily calculated with the equation below. Again, they're essentially the same as equation for flexural stress on beam sections (i.e. $$\sigma = Mc/I$$).

$$t_i = \frac{M_{ux} y_i}{I_x} + \frac{M_{uy} x_i}{I_y}$$

The more rows of bolt you have, the more conservative the number above becomes. This is because we are systematically underestimating the internal lever arm available to the bolts in resisting the moment. This brings us to the first method.

The first method is more representative of what actually happens. However, it is more difficult to use as neutral-axis depth has to be found through some iterative or root-finding procedure. A rectangular bearing stress block is usually assumed for concrete, and a triangular bearing stress block is usually assumed for steel. 

Let $$d_i$$ be the distance from compression resultant (pivot point which is unknown) to the bolt location, then the tension demand for the bolt furthest from pivot point is:

$$t_{max} = \frac{M_{u}}{\sum d_i^2 / d_{max}}$$

The tension demand in the other bolts can be determined in proportion to their distance to the pivot point.

$$t_i = \frac{d_i}{d_{max}} \times T_{max}$$

Alternatively, we can set $$T_{max}$$ equal to the tension capacity of the bolt and back-calculate $$M_u$$ which is equal to the overall connection moment capacity.

Let's do an example. In the figure above, we have a 6"x6" arrangement of bolt centered on a 8"x8" plate.

* First method: If we were to assume pivot point is about 0.1d (0.8") from extreme compression fiber, two bolts will be 0.2" away, and the other two bolts will be 6.2" away: $$t_{max} = 100 (6.2) / (2(6.2)^2 + 2(0.2)^2) = 8.02 kips$$
    * With a more sophisticated analysis, we can determine that the neutral axis is around 1.5" away from compression fiber. Two of the bolts are actually ineffectual. The actual tension demand is around 7.7 kips
* Second method: Size of bearing plate doesn't matter. $$Ix=\sum (y_i - \bar{y})^2 = 4(3)^2 = 36$$, $$t_{max} = 100(3)/36 = 8.3 kips$$



<u>Principle of Superposition</u>

Putting it all together, what if you had a connection that is experiencing multiple type of demands (e.g. torsion + moment_x + moment_y + shear_x + shear_y). Now we arrive at one of the best feature of the elastic method: **Principle of Superposition - demands can be superimposed (added) together.** In other words, we can look at each action separately, then add them together at the end.


A few caveats about superposition.

* The key assumption of elastic method is that rotational and translational actions are decoupled and do not influence each other. This is technically not true and result in **very conservative results**. Elastic method is good enough for design purposes. Should we require greater accuracy, the instant center of rotation (ICR) method might be better suited (although more complicated to apply)
* For biaxial moment with method 1, bolt tension demands is NOT the linear combination of results from two arbitrarily selected basis (that can be conveniently added together). We would instead need to find a diagonally oriented neutral axis which makes this method impossible to do by hand. Note the orientation of neutral axis and moment vector are rarely aligned.
* For biaxial moment with method 2, bolt tension demands due to moment can only be added if it's about the principal axes (which is usually the case for rectangular arrangement of bolts). Otherwise, we need to convert the applied moment vector to its component parts with respect to the principal axes. The orientation of principal axes can be found using Mohr's circle.


<img src="/assets/img/blog/aisc200.png" style="width:60%;"/>



## 2.2 Instant Center of Rotation Method


TODO



















<div style="page-break-after: always;"></div>
<hr>
# 3.0 Demands - Weld Group
<hr>

## 3.1 Preamble

Two important note about weld before we proceed.

1. Whether a weld is subjected to tension or shear is irrelevant, **all weld fail in shear along the throat length**. The throat thickness of a fillet weld is illustrated in the figure below.

    <img src="/assets/img/blog/aisc108.png" style="width:30%;"/>
    *Figure 3.12: Weld Throat Thickness*

2. Unlike mechanical engineers who prefer to work with stress (ksi), **weld demand in structural engineering is typically expressed as force per linear length (kip/in)**. In other words, how much force can be resisted per linear inch of weld. By working with demand with one length dimension less, we get the added benefit of being able to calculate demand without knowing the weld throat thickness (a design parameter that we typically specify later). To convert one to the other, simply divide by the throat length. 

$$(kip/in) / L_{throat} = ksi$$



## 3.2 Elastic Method

Calculating weld stress is essentially analogous to calculating cross-section elastic stress. There is an excellent figure from the "Design of Welded Structures" textbook by Omer W. Blodgett that illustrates this concept superbly.

<img src="/assets/img/blog/aisc106.png" style="width:60%;"/>
*Figure 3.11: Demand on Weld Groups Analogous to Sections*



<u>Weld Group Geometric Properties</u>

The geometric properties of various weld groups are shown in the figure below. 

<img src="/assets/img/blog/aisc107.png" style="width:80%;"/>
*Figure 3.13: Weld Group Geometric Properties*

* You may also calculate these properties manually using moment of inertia equations for composite shapes. Width of weld is assumed to be unity (hence why the unit is slightly different). 

$$I = \sum (I_i + A d_i^2) $$

$$J_w = I_x + I_y$$

* For example, a single vertical line of weld => $$I = bd^3/12 = (1)d^3/12 = d^3/12$$, then the section modulus is equal => $$S = I/c = \frac{d^3/12}{d/2} = d^2/6$$ which matches the table above.





<u>Elastic Method for Weld Group Example</u>

Once we have the geometric properties, we can apply the formulas in figure 3.11 and use principle of superposition to calculate a final weld demand (kip/in). An example is shown below.


<img src="/assets/img/blog/aisc109.png" style="width:80%;"/>
*Figure 3.14: Weld Group Elastic Method Example*

If we have a 5/16" fillet weld with capacity of 31.5 ksi or 6.96 kip/in.

Looking at it as a structural engineer (force per unit length):

$$DCR = \frac{4.7 k/in}{6.96 k/in} = 0.675$$

Looking at it as a mechanical engineering (stress). 5/16" fillet weld has a throat thickness of 0.22"

$$(4.7 kip/in) / (0.22 in) = 21.27 ksi$$

$$DCR = \frac{21.27 ksi}{31.5 ksi} = 0.675$$

The instant center of rotation method is available for welds as well, though much less commonly used. Refer to Blodgett's excellent textbook on welding for more info. ICR method for weld will not be discussed here.






















<div style="page-break-after: always;"></div>
<hr>
# 4.0 Capacity - Base Material
<hr>

## 4.1 General Material Information

The most commonly specified material properties for various structural shapes are shown below. Refer to Table 2-4 to 2-6 of the steel construction manual for more info.

Steel Sections:
* ASTM A36 (plates, bars, angles, channels)
  * $$F_y$$ = 36 ksi
  * $$F_u$$ = 58 ksi
* ASTM A572 Gr. 50 (plates)
  * $$F_y$$ = 50 ksi
  * $$F_u$$ = 65 ksi
* ASTM A992 (W-sections)
  * $$F_y$$ = 50 ksi
  * $$F_u$$ = 65 ksi
* ASTM A913 Gr. 65 (W-sections)
  * $$F_y$$ = 65 ksi
  * $$F_u$$ = 80 ksi
* ASTM A500 Gr. C (HSS rectangular)
  * $$F_y$$ = 50 ksi
  * $$F_u$$ = 62 ksi
* ASTM A500 Gr. C (HSS round)
  * $$F_y$$ = 46 ksi
  * $$F_u$$ = 62 ksi


## 4.2 Shear Yielding/Rupture

Shear Yielding ($$\phi = 1.0$$):

$$\phi R_n = \phi 0.6 F_y A_{gv}$$

Shear Rupture ($$\phi=0.75$$):

$$\phi R_n = \phi 0.6 F_u A_{nv}$$

Additional Remarks:

* Yielding is always checked with the **gross shear area** without considering bolt hole reductions. While yielding at the net section will occur first, the deformation is fairly localized and does not impact member performance until rupture. On the other hand, if the entire gross area yields, it's likely that the deformation will spread throughout the tension member
* Rupture is always check with the **net shear area**. For welded sections without holes. Net shear area is equal to gross shear shear. Refer to section 5.6 for how this is calculated with bolt-holes. 
* The subscript "v" is meant to denote shear. For example, for wide-flange sections, Agv only includes the area of the web.

Example Calculation:

<img src="/assets/img/blog/aisc4.2.png" style="width:80%;"/>

<img src="/assets/img/blog/aisc4.3rupture.png" style="width:75%;"/>


## 4.3 Tension Yielding/Rupture

Tension Yielding ($$\phi = 0.90$$):

$$\phi R_n = \phi F_y A_{g}$$

Tension Rupture ($$\phi=0.75$$):

$$\phi R_n = \phi F_u A_{e}$$

Additional Remarks:

* Refer section 4.2 for note about gross area and net area.
* To clarify on the notations:
    * $$A_g$$ = gross area
    * $$A_n = A_g - A_{holes} - A_{tolerance}$$ = net area. For welded sections, net area and gross area are the same. **Refer to Section 5.6 for net area for bolted sections.**
    * $$A_e = U A_e$$ = effective area. Due to shear lag effects, the net area may not be fully available. Refer to the table below for how the shear lag factor U is calculated.
* For design of gusset plates, the gross area is not obvious and need to be reduced as well. The standard practice is use use the **Whitmore Section** which is shown below.

<img src="/assets/img/blog/aisc4.24.png" style="width:70%;"/>
*Figure 4.31: Whitmore Section for Tension and Compression of Gusset Plates*

What is shear lag? To explain it conceptually, imagine water being released into an empty small channel which suddenly transitions to a larger channel. Does the water flow perpendicularly to fill the entire width immediately? 

<img src="/assets/img/blog/aisc4.23.png" style="width:70%;"/>
*Figure 4.32: Shear Lag Analogy*

Similarly for forces "flowing" through a member, it takes time for all the area to be fully utilized. One can say that there is a "lag" between where the force is transferred, and where the full section area can be utilized. For example, if a wide-flange member is spliced only at the web, we can only fully engage flange area some distance away and not immediately. This phenomenon is sometimes referred to as **St. Venant Principle**.

<img src="/assets/img/blog/aisc4.22.png" style="width:80%;"/>
*Table 4.31: Shear Lag Factor for Tension Members*

Example Calculations:

<img src="/assets/img/blog/aisc4.3.png" style="width:85%;"/>

<img src="/assets/img/blog/aisc4.2rupture.png" style="width:85%;"/>


## 4.4 Block Shear of Welded Sections

Block shear is essentially a combination of tension and shear yielding/rupture failure, whereby a "block" of the base material is sheared off. We will first look at block shear of welded section. **Refer to section 5.7 for block shear of bolted connections.**

<img src="/assets/img/blog/aisc4.41.png" style="width:50%;"/>
*Figure 4.41: Block Shear is Possible for Welded Sections*

In the figure above, notice how there is generally two cases of block shear to consider for welded tension connections.

Welded Block Shear ($$\phi=0.75$$):

$$R_n = 0.6F_uA_{nv} + U_{bs}F_uA_{nt} \leq 0.6F_yA_{gv} + U_{bs}F_uA_{nt}$$

Since $$A_{gv} = A_{nv}$$ for welded sections, we know that the ceiling value governs because Fy is less than Fu. Therefore, block shear capacity for welded section is equal to shear yielding + tension rupture.

$$\phi R_n = \phi (0.6F_yA_{gv} + U_{bs}F_uA_{nt})$$

$$U_{bs}$$ is a shear lag factor for block shear that is usually equal to 1.0. Refer to the figure below for when it is equal to 0.5.

<img src="/assets/img/blog/aisc4.42.png" style="width:60%;"/>

Example Calculation:

<img src="/assets/img/blog/aisc4.4.png" style="width:90%;"/>


## 4.5 Flexure

Generally speaking, flexure at a local level can be calculated with AISC 360-16 F.11. Moment Capacity of Rectangular Bars ($$\phi = 0.9$$). Note the shape factor of a rectangular section is 1.5, therefore the ceiling value will never govern.

$$\phi M_n = \phi F_y Z \leq 1.6F_yS_x$$

In order for the above equation to be applicable, we must preclude any stability-related limit states (which is a given for minor-axis bending). The limiting unbraced length for major-axis bending is:

$$L_b \leq \frac{0.08E t^2}{F_y d}$$

Additional Remarks:

* As the span gets longer, the local member is treated like a beam and we need to consider lateral-torsional buckling per Chapter F.11.2 of AISC 360-16.
* For coped beams connections, there are special provisions to bending that is fair bit more complex. Refer to the Steel Construction Manual Section 8.

Example Calculation:

<img src="/assets/img/blog/aisc4.5.png" style="width:80%;"/>


## 4.6 Compression

Compression in connections can be divided into 3 categories:

Bearing Capacity. $$A_{pb}$$ is the projected area in bearing. See special case equations for rockers and rollers in AISC 360-16 J7.b ($$\phi = 0.75$$).

$$\phi R_n = \phi 1.8 F_y A_{pb}$$

Non-slender Element Compression Capacity ($$\phi = 0.90$$):

$$\phi R_n = \phi F_y A_{g}$$

For the above equation to apply, the slenderness ratio must be below 25:

$$\frac{KL}{r} \leq 25 $$

If a slenderness ratio of 25 is exceeded, we must use the typical column equations per AISC 360-16 chapter E ($$\phi = 0.90$$):

$$\phi R_n = \phi F_{cr} A_g$$

$$F_e = \frac{\pi E}{(KL/r)^2}$$

$$
F_{cr} = \left\{
    \begin{array}\\
        F_y (0.685^{F_y/F_e}) & \mbox{if } F_y/F_e \leq 2.25\\
        0.877F_e & \mbox{if } F_y/F_e > 2.25
    \end{array}
\right.
$$


Additional Remarks:
* Many questions arise regarding non-slender compression design of connections. What to do when KL/r > 25? The biggest question seems to be what effective length factor (k) to use. In short, since we are mostly concerned with local effects, **k = 1.0 will suffice for most situations**. Member and system level stability should be evaluated separately considering stiffness of connections. The figure below from AISC 360-16 Commentary on Appendix 7 should be helpful.

<img src="/assets/img/blog/aisc4.62.png" style="width:60%;"/>
*Figure 4.61: Recommended K-Factor from AISC*

* Compression check of gusset plate is a fairly common in connection design check and is well-researched. According to [Dowswell (2006)](https://www.aisc.org/Effective-Length-Factors-for-Gusset-Plate-Buckling#), the recommended K-factors and unbraced lengths for gusset plates are summarized below:

<img src="/assets/img/blog/aisc4.61.png" style="width:100%;"/>
*Figure 4.62: Recommended K-Factor for Gusset Plates*


Example Calculation:
<img src="/assets/img/blog/aisc4.6.png" style="width:80%;"/>
<img src="/assets/img/blog/aisc4.6slender.png" style="width:90%;"/>
<img src="/assets/img/blog/aisc4.6local.png" style="width:90%;"/>



## 4.7 Local Concentrated Load - Flange Bending

Section 4.7 to 4.12 are all related to concentrated forces. The first limit state we will look at is flange bending. 

Local Flange Bending Capacity ($$\phi = 0.90$$):

$$\phi R_n = \phi 6.25 F_y t_f^2 C_t$$

$$
C_t = \left\{
    \begin{array}\\
        1.0 & \mbox{if force is at interior location}\\
        0.5 & \mbox{if force is less than 10tf away from end support} 
    \end{array}
\right.
$$


Additional Remarks:

* This limit state is only checked for **tension** (i.e forces applied away from the web) because the primary failure mode is weld fracture at the web. It can be argued that this limit state doesn't apply to rolled-shapes. Nevertheless, it's often checked and usually doesn't govern.
* A more typical check for both tension AND compression is to assume a **2.5:1 yield line radiating from point load to the web**, then calculating the plastic moment capacity of a certain width of flange. Alternatively, the AISC commentary recommends effective width of 12tf (radiating 6tf in each direction).
* If the beam is already highly stressed, the flange will be in significant bi-axial stress in which case we should check Von-Mises stress.
* Web stiffeners are typically provided which essentially preclude this failure mode.


Example Calculation:
<img src="/assets/img/blog/aisc4.7.png" style="width:90%;"/>




## 4.8 Local Concentrated Load - Web Local Yielding

Unlike the previous failure mode, this one applies to both tension and compression and may govern especially for thin webs.

Local Web Yielding Capacity ($$\phi = 1.0$$):

$$\phi R_n = \phi F_y t_w L_{web}$$

The length of web engaged in compression/tension is determined assuming a **2.5:1 spread** through the flange. "k" is the distance from tip of flange to start of k-region and "lb" is the length of bearing. This is illustrated graphically below.

$$
L_{web} = \left\{
    \begin{array}\\
        5k + l_b & \mbox{if force at interior location}\\
        2.5k + l_b & \mbox{if force is less than "d" away from end support} 
    \end{array}
\right.
$$

<img src="/assets/img/blog/aisc4.81.png" style="width:60%;"/>
*Figure 4.81: Illustration of Effective Web Width*


Additional Remarks:

* Stiffeners or doubler plates may be provided to increase the gross area in bearing or tension

Example Calculation:
<img src="/assets/img/blog/aisc4.8.png" style="width:85%;"/>





## 4.9 Local Concentrated Load - Web Local Crippling

Before 1986, local web yielding an crippling are considered the same. Afterwards, a distinction is made. **Web local crippling is more of a local crumpling and is more common for thin webs**, whereas local web yielding is more common for stockier webs.

Local Web Yielding Capacity ($$\phi = 0.75$$):

First equation is applicable for interior conditions:

$$R_{n1} = 0.80t_w^2 (1 + 3(\frac{l_b}{d}) (\frac{t_w}{t_f})^{1.5}) \sqrt{\frac{E F_y t_f}{t_w}} Q_f$$

Second equation is for end conditions with force less than d/2 away from support and $$l_b/d \leq 0.2$$:

$$R_{n2} = 0.40t_w^2 (1 + 3(\frac{l_b}{d}) (\frac{t_w}{t_f})^{1.5}) \sqrt{\frac{E F_y t_f}{t_w}} Q_f$$

Third equation is for end conditions with force less than d/2 away from support and $$l_b/d > 0.2$$:

$$R_{n3} = 0.40t_w^2 (1 + (\frac{4 l_b}{d}-0.2) (\frac{t_w}{t_f})^{1.5}) \sqrt{\frac{E F_y t_f}{t_w}} Q_f$$


Additional Remarks:
* $$l_b$$ is the length of bearing, $$Q_f$$ is equal to 1.0 for wide-flange members. Refer to AISC 360-16 for HSS members.
* Note this limit state only applies for **compression on one flange only**. Refer to section 4.11 for compression on both flanges.
* Stiffeners may be added to stabilize the web

Example Calculation:
<img src="/assets/img/blog/aisc4.9.png" style="width:90%;"/>





## 4.10 Local Concentrated Load - Web Sidesway Buckling

Web Sidesway Buckling is a stability-related limit state. In essence, a very localized load can cause compressive stress and sideways buckling of the web, overcoming the stabilizing effect of the tension flange. What is more peculiar is that buckling can occur even with the top flange fully braced. This limit state as more of **a member-level check, I like to think of it like an extended LTB check for point loads.**

Web Sidesway Buckling ($$\phi = 0.85$$):

When the compression flange is restrained against rotation and $$(h/t_w)/(L_b/b_f) \leq 2.3$$:

$$\phi R_n = \phi \frac{C_rt_w^3t_f}{h^2} \left[  1 + 0.4(\frac{h/t_w}{L_b/b_f})^3 \right]$$

When the compression flange is free to rotate and $$(h/t_w)/(L_b/b_f) \leq 1.7$$:

$$\phi R_n = \phi \frac{C_rt_w^3t_f}{h^2} \left[  0.4(\frac{h/t_w}{L_b/b_f})^3 \right]$$

For all other cases where the $$(h/t_w)/(L_b/b_f)$$ ratio is too high, web sidesway buckling need not be checked.

* $$L_b$$ is the largest unbraced length along either flange. Refer to the figure below for an illustration
* $$h$$ is the clear distance between flange minus the k-regions
* $$C_r$$ is a factor dependent on moment demand with respect to elastic moment capacity

$$
C_r = \left\{
    \begin{array}\\
        960000 & \mbox{if } M_u < M_y\\
        480000 & \mbox{if } M_u \geq M_y
    \end{array}
\right.
$$

<img src="/assets/img/blog/aisc4.101.png" style="width:50%;"/>
*Figure 4.101: Unbraced Length for Various Bracing Arrangements*


Additional Remarks:

* I've never seen this limit state govern (at least for common rolled shapes used in building structures. Pay particular attention to this when you have a **extraordinary large concentrated load or deep plate girder.**


Example Calculation:
<img src="/assets/img/blog/aisc4.10.png" style="width:90%;"/>





## 4.11 Local Concentrated Load - Web Buckling

Unlike section 4.9 or 4.10, this section applies to cases where compressive load is applied to both flanges. **The web essentially acts as a plate column compressed on both sides**.

Web Compression Buckling With Load at Both Flanges ($$\phi = 0.90$$)

$$\phi R_n = \phi (\frac{24t_w^3\sqrt{EF_y}}{h})Q_f C_t$$

* $$Q_f$$ is equal to 1.0 for wide flange sections. Refer to AISC 360-16 Table K3.2 for HSS conditions
* $$C_t$$ is equal to 1.0 for interior conditions, and 0.5 for end conditions when force is less than d/2 away from support.

The equation above applies for when $$L_b/d \leq 1.0$$ (roughly a square panel). If the ratio is higher, design the web like a column per AISC 360-16 chapter E. See below for an appropriate assumption of column dimensions.

Additional Remarks:

* Stiffeners may be added to stabilize the web, the resulting cruciform section is designed as a column with the following parameters (h is clear distance between flange minus k-region)

$$KL = 0.75h$$

$$
b_{web} = \left\{
    \begin{array}\\
        25t_w & \mbox{at interior location}\\
        12t_w & \mbox{at ends of member} 
    \end{array}
\right.
$$


Example Calculation:
<img src="/assets/img/blog/aisc4.11.png" style="width:80%;"/>



## 4.12 Local Concentrated Load - Concrete Bearing

This limit state is **identical to the one specified in ACI 318-19.** I am actually not sure why AISC is providing design recommendations for concrete. Typically, concrete bearing failure occurs at around 0.85f'c. If the support area is must larger than the load area, the surrounding concrete provides a confinement effect which results in up to double the bearing capacity.

Bearing Capacity of Concrete ($$\phi = 0.65$$)

$$\phi R_n = \phi \alpha 0.85 f_c^{'} A_1 \leq 1.7f_c^{'}A_1$$

$$\alpha = \sqrt{A_2/A_1}$$

* $$\alpha$$ is a confinement factor that is equal to 2.0 if the concrete support is well-confined by surrounding concrete. If the bearing area not confined (e.g. base plate on a pedestal of same size), then alpha is taken as 1.0
* $$A_1$$ is the loaded area
* $$A_2$$ is the projected area based on a 2H:1V line as shown in the figure below.

<img src="/assets/img/blog/aciprimer14.png" style="width:70%;"/>


Example Calculation:
<img src="/assets/img/blog/aisc4.12.png" style="width:70%;"/>















<div style="page-break-after: always;"></div>
<hr>
# 5.0 Capacity - Bolts
<hr>

## 5.1 General Bolt Information

Bolts and anchors:
* ASTM A1554 Gr. 36 (Anchor Rods)
  * $$F_y$$ = 36 ksi
  * $$F_u$$ = 58 ksi
* ASTM A1554 Gr. 55 (Anchor Rods)
  * $$F_y$$ = 55 ksi
  * $$F_u$$ = 75 ksi
* ASTM A1554 Gr. 105 (Anchor Rods)
  * $$F_y$$ = 105 ksi
  * $$F_u$$ = 125 ksi
* ASTM A307 Gr. A Common Bolts: $$F_u$$ = 60 ksi
* ASTM A325 Bolts: $$F_u$$ = 120 ksi
* ASTM A490 Bolts: $$F_u$$ = 150 ksi


## 5.2 Bolt Tension and Shear

<img src="/assets/img/blog/aisc5.2.png" style="width:80%;"/>


## 5.3 Combined Shear and Tension Interaction Equation

<img src="/assets/img/blog/aisc5.3.png" style="width:80%;"/>


## 5.4 Slip Critical Bolts Tension and Shear

<img src="/assets/img/blog/aisc5.4.png" style="width:80%;"/>


## 5.5 Bolt Bearing and Tear Out

<img src="/assets/img/blog/aisc5.5.png" style="width:80%;"/>


## 5.6 Bolt Connection Shear and Tension Rupture

<img src="/assets/img/blog/aisc5.6.png" style="width:80%;"/>


## 5.7 Bolt Connection Block Shear


<img src="/assets/img/blog/aisc5.7.png" style="width:80%;"/>








<div style="page-break-after: always;"></div>
<hr>
# 6.0 Capacity - Welds
<hr>

## 6.1 General Weld Information


## 6.2 Weld Shear Rupture Capacity


<img src="/assets/img/blog/aisc6.2.png" style="width:80%;"/>











