---
layout: blog-post
categories: engineering
title: "Right-Hand Rule Simplified"
description: "Which finger points which way? What does it all mean?"
image: assets/img/blog/thumbup.png
date: 2021-03-25
tags: analysis fundamentals
---

If you have have taken any engineering or physics class in highschool or university, you have undoubtedly heard of the "right-hand rule". It is apparently a useful mnemonic for remembering conventions and orientation of axes. I can't really vouch for its usefulness given the fact that I keep having to do quick google searches to remind myself which finger points in which direction.

Recently While developing MSApy, I had to really familiarize myself with the sign conventions of moment/torque vector, as well as ensuring my axes orientations made sense. That is when it all clicked for me; perhaps out of necessity. There seem to be two versions of the right-hand rule. One that looks like a chicken claw, and another that looks like you are giving a thumbs up. I am here to say the "thumbs up" version is undoubtedly superior (at least for my use case).

![](/assets/img/blog/right-hand-rule.png)
*Figure 1: Illustration of Two Versions of Right Hand Rule (source: Wikipedia)*

To make it short and sweet, here are the three most common cases where I had to apply the right-hand rule.


## General Cross Products
Given two vectors ($$\bar{a}$$ and $$\bar{b}$$), what is the orientation of the cross product ($$\bar{a} \times \bar{b}$$)?

1. With your four fingers, curl from the first vector ($$\bar{a}$$) to the second vector ($$\bar{b}$$)
2. Your thumb is the orientation of the cross product vector

![](/assets/img/blog/RHR1.png)
*Figure 2: Examples for Cross Product*


## Orientation of Cartesian Coordinate
By extension, we can derive the correct right-hand Cartesian coordinate orientation. We know that the unit vectors for a 3-D Cartesian coordinate system are:

$$\hat{i}=\{1,0,0\}, \:  \hat{j}=\{0,1,0\}, \:  \hat{k}=\{0,0,1\}$$

If we perform the cross product of $$\hat{i}$$ and $$\hat{j}$$, we can prove that:

$$\hat{k}=\hat{i} \times \hat{j}$$

From this, we can derive the correct direction of the z-axis. This is extremely useful when working with local and global axis of frame members in analysis of structures.

1. Curl from x-axis to y-axis
2. Your thumb points towards z-axis


![](/assets/img/blog/RHR2.png)
*Figure 3: Examples for Cartesian Coordinate Orientation*


## Sign Convention of Torque/Rotation
Lastly, let's talk about the use of right-hand rule for moment/torque and rotation; which is perhaps the most common use case for me. For brevity, I will henceforth refer to torque, moment, rotation, under the umbrella term of "moment". They are not the same, but the same concept that applies to moment also applies to rotation and torque (actually torque is just moment about a member's longitudinal axis so should not even be in a separate category).

The main takeaway here is to <u>represent moment as vectors (double-headed arrows) </u>. There are two benefits to doing this:

1. Vector addition now applies to moment and it is more intuitive to add one moment to another; rather than "adding" two circular rotation arrows.
2. Rather than remembering "counter-clockwise is positive", or vice versa, which may not even be true and depends on orientation of local vs. global axis, it is much easier to distinguish when a moment is positive vs. negative when they are represented as straight, double-headed arrows.
    * for example, consider a moment about the global x-axis. The moment is positive if the double-headed arrow aligns with the +x axis.

Therefore, to determine the sign of a rotation or moment:
1. curl your four fingers in the same direction of the rotation/moment
2. if your thumb points towards the positive direction of the global axes, then positive. Otherwise negative.

![](/assets/img/blog/RHR3.png)
*Figure 4: Examples for Using Right-Hand Rule For Torque/Moment Vectors*




