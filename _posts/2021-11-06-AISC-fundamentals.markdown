---
layout: blog-post
categories: engineering
title: "Primer: AISC 360-16 Connection Design"
description: "Foundational knowledge for steel connection design"
image: assets/img/blog/AISC.png
date: 2021-11-06
tags: steel primer
---

*"Primer" is a personal reference notebook and a side project where I can organize and digest some of the things I've learned on the job. The goal is to be concise, and hopefully useful when I take the SE exam. Code documents and design guides are meant to be information dense. These articles help me organize information and condense my thoughts.*

*Please note that these notes are for my own use. It is not peer-reviewed and was most likely written late Thursday night after a long day of work. Reader discretion is advised (in fact reading discouraged). No warranty is expressed or implied by me on the validity of the information presented herein.*

- [1.0 Fundamentals](#10-fundamentals)
- [2.0 Calculating Demand](#20-calculating-demand)
  * [2.1 Elastic Method for Bolts](#21-elastic-method-for-bolts)
  * [2.2 Elastic Method for Welds](#22-elastic-method-for-welds)
  * [2.3 Instantaneous Center of Rotation Method](#23-instantaneous-center-of-rotation-method)
- [3.0 Base Material](#30-base-material)
  * [3.1 Tension/Shear Yielding](#31-tension-shear-yielding)
  * [3.2 Tension/Shear Rupture](#32-tension-shear-rupture)
  * [3.3 Compression](#33-compression)
  * [3.4 Flexure](#34-flexure)
  * [3.5 Block Shear](#35-block-shear)
  * [3.6 Bearing on Steel](#36-bearing-on-steel)
  * [3.7 Bearing on Steel](#37-bearing-on-steel)
  * [3.8 Bearing on Concrete](#38-bearing-on-concrete)
  * [3.9 Concentrated Loads](#39-concentrated-loads)
- [4.0 Bolted Connections](#40-bolted-connections)
  * [4.1 Basics](#41-basics)
  * [4.2 Bolt Shear/Tension Rupture](#42-bolt-shear-tension-rupture)
  * [4.3 Bolt Combined Shear and Tension](#43-bolt-combined-shear-and-tension)
  * [4.4 Bolt Bearing and Tear Out](#44-bolt-bearing-and-tear-out)
  * [4.5 Bolt With Eccentric Shear (Bending)](#45-bolt-with-eccentric-shear--bending-)
- [5.0 Welded Connections](#50-welded-connections)
  * [5.1 Welding Basics](#51-welding-basics)
  * [5.2 Fillet Welds](#52-fillet-welds)



<hr>
# Foreword
<hr>

Connection design is often glossed over in school for many reasons. The main one, in my opinion, is the fact that it is extremely tedious, and often academically uninteresting. Usually it's just the same few material mechanics principles repeated over and over sprinkled with some elusive code clause about size of bolt holes, minimum thicknesses, etc.

Furthermore, a majority of the profession (engineers East of the Mississippi River) don't really need to design steel connections. They specify forces that need to be transferred and the connection type, and an external consultant takes care of the rest. This separation of responsibilities is because steel erectors/fabricators tend to have their own standards, customs, and preferences. Thus it would be more expedient to let them handle it.

Nevertheless, it would seem to me that going through a connection design from start to finish, at least once, is tremendously valuable. You gain mastery in visualizing load paths, a better geometric intuition, experience in detailing, and a better grasp of mechanics of material principles that undergirds all of structural engineering. After all, conducting analysis and proportioning member size is only half the work (maybe less). Being able to detail connections is a skill often learned on the job and is the hallmark of a structural engineer.

The goal of this article is to present the fundamental failure modes (limit states) associated with steel connections, such that when presented with any connection, one is able to follow the load path and identify and calculate most if not all of the required limit states. Furthermore, I will try to collect relevant code references in one place as to avoid the need to flip through those voluminous code documents.




<div style="page-break-after: always;"></div>
<hr>
# 1.0 Fundamentals
<hr>


## Introduction 
Connection design can be done in either ASD (Allowable Stress Design) or LRFD (Load Resistance Factored Design). This article will be entirely in LRFD.
* Capacity is denoted by a $$\phi$$ factor and subscript "n" (e.g. $$\phi P_n$$)
* Demand is denoted by subscript "u". (e.g. $$P_u$$)

The basis of all design checks is to ensure a DCR (Demand-Capacity Ratio) of less than 1.0. There will be an abundance of resistance factors for every limit state. However, most will follow this pattern.
* Ductile failure mode => $$\phi = 0.9$$
* Non-ductile failure mode =>  $$\phi = 0.75$$

Broadly speaking, steel connections can be categorized into 4 categories:
* Tension connection
* Compression connection
* Shear connection (flexible enough to avoid transferring moment)
* Moment connection (partial restraint & full restraint)

<img src="/assets/img/blog/aisc1.png" style="width:90%;"/>
*Table 1: Different Types of Connections*

Rather than diving in on any specific connection type, it is more productive and useful to understand the limit states; as this knowledge is transferrable to all connection types. Most connection limit states are presented in Section J of AISC 360-16.

## Material Properties

Here are some common material properties. Refer to Table 2-4 to 2-6 of the steel construction manual for other material specifications that are recommended for different shapes

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
* ASTM A500 Gr. C (HSS rectangular)
  * $$F_y$$ = 50 ksi
  * $$F_u$$ = 62 ksi
* ASTM A500 Gr. C (HSS round)
  * $$F_y$$ = 46 ksi
  * $$F_u$$ = 62 ksi

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


## Load Path Example

<img src="/assets/img/blog/aisc2.png" style="width:20%;"/>
*Figure 1: Load Path example*

To provide a sneak peak at what connection design is like. Take this simple hanger connection as shown above. An angle is attached to a plate which is welded to the bottom of a beam. If we trace out the load path, here are the applicable limit states:

1. Angle in tension
  * proportion member => angle yielding
  * tension rupture at bolt hole location
  * block shear at bolt hole location
2. Shear transfer through bolts
  * bearing and tear out of connecting materials
  * bolt shear yielding
  * bolt shear rupture
3. Plate tension
  * block shear at bolt hole locations
  * plate tension rupture
  * plate tension yielding
4. Weld underneath bottom flange of beam
  * fillet weld rupture

As you can see, even for the simplest connection type, we have up to 10 different modes of failure! In this article, we will dive into how to calculate all of them. Visualizing load path feels intuitive because it's analogous to flowing water, but it is often too easy to skip a step or two. Luckily, most building connection types are standardized so you'll known exactly what to check. However, there may come a day when you need to "freestyle" and identify the limit states yourself.




<div style="page-break-after: always;"></div>
<hr>
# 2.0 Calculating Demand
<hr>

To adequately design any connection, we need a demand and a capacity. Let's look at the first half of that equation. Interestingly enough, codes and standard documents do not provide much guidance because demand is based entirely on statics and mechanics of material. 

There are more sophisticated methods, but my understanding is that most practicing engineers use the elastic method unless more rigor is required. The results from elastic method range from conservative to extremely conservative.

The elastic method is explained well in Part 7 and Part 8 of the steel construction manual. Flip through those for more information.
............................

<hr>
## 2.1 Elastic Method for Bolts

A single bolt has 3 degrees of freedom (tension or shear in 2 directions) whereas a bolt group has 6 degrees of freedom. Moments and torque on a bolt group are resolved into tension or shear on individual bolts.

<img src="/assets/img/blog/aisc3.png" style="width:80%;"/>
*Figure 2: Individual Bolts In Shear And/or Tension*

The force vectors on a bolt-group in all 6 degrees of freedom can be resolved separately, and then combined. Capacity of a bolt group is limited to the most critical bolt. In other words, the entire bolt assembly fails as soon as one bolt yields. This is obviously very conservative given the ductility of steel and its ability to redistribute forces. There are three possible conditions.

### 2.1.1 Concentric Force (T, V1, V2)
For concentric shear or tension, the force is assumed to distribute evenly between bolts. This is technically not true because the closer bolts obviously take more. However, as the bolt deforms, inelasticity allows forces to redistribute.

<img src="/assets/img/blog/aisc4.png" style="width:35%;"/>
*Figure 3: Concentric Forces*

$$ n_{u} = \frac{N_u}{\mbox{Number of bolts}} \tag 1$$



### 2.1.2 Moment (M1, M2)
This is also known as eccentricity normal to faying surface. There are many ways to treat this condition. One way is to calculate a triangular compression block (similar to reinforced concrete design). But this requires calculating a neutral axis depth which is tedious. Another simpler and more popular method is to assume plastic distribution.

<img src="/assets/img/blog/aisc5.png" style="width:80%;"/>
*Figure 4: Plastic Distribution for Moment*

The plastic assumption is conservative and simple to apply.

$$ n_{u} = \frac{M_u}{n' d_m} \tag 2$$

where:
* $$n'$$ is the number of bolt in tension or compression group
* $$d_m$$ is the internal lever arm between centroid of compression and tension group

Of course, do not forgot the shear component that must be superimposed. The above equation is meant to takes into account the moment produced by eccentricity (M=Pe), which resulted in tension. Additionally, one must account for shear imposed by P.

### 2.1.3 Torsion (T)

<img src="/assets/img/blog/aisc6.png" style="width:30%;"/>
*Figure 5: Eccentricity In Plane of Faying Surface Causing Torsion*

This is also known as eccentricity in plane of faying surface. When  this occurs, you get a torsion effect that induces additional shear. There are two approaches in this case:
* Elastic method
* Instant Center of Rotation Method

The former is easier to apply but extremely conservative with inconsistent safety factor (meaning it is a flawed, albeit conservative model). The latter is more accurate but requires tedious iteration (an alternative is to use design tables provided in the steel construction manual).

<u>Elastic Method</u>


<u>Instant Center of Rotation Method</u>





<hr>
## 2.2 Elastic Method for Welds


<hr>
## 2.3 Instantaneous Center of Rotation Method



















<hr>
# 3.0 Base Material
<hr>

<hr>
## 3.1 Tension/Shear Yielding

<hr>
## 3.2 Tension/Shear Rupture

<hr>
## 3.3 Compression

<hr>
## 3.4 Flexure

<hr>
## 3.5 Block Shear

<hr>
## 3.6 Bearing on Steel

<hr>
## 3.7 Bearing on Steel

<hr>
## 3.8 Bearing on Concrete

<hr>
## 3.9 Concentrated Loads




<hr>
# 4.0 Bolted Connections
<hr>

<hr>
## 4.1 Basics

<hr>
## 4.2 Bolt Shear/Tension Rupture

<hr>
## 4.3 Bolt Combined Shear and Tension

<hr>
## 4.4 Bolt Bearing and Tear Out

<hr>
## 4.5 Bolt With Eccentric Shear (Bending)



<hr>
# 5.0 Welded Connections
<hr>

<hr>
## 5.1 Welding Basics

<hr>
## 5.2 Fillet Welds


