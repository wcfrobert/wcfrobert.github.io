---
layout: blog-post
categories: engineering
title: "spColumn API? How to Automate Section Analysis in spColumn"
description: "One of the best features of the spColumn is that it allows user to create model files in “.cti” format; which are plain text files that can be opened and viewed by any text editor"
image: assets/img/blog/sp-Column.png
date: 2021-05-07
tags: spColumn Automation
---

## Introduction

spColumn is probably the most popular concrete section analysis software in the US. Part of what makes it so great is its versatility and ease of use. Since strain compatibility analysis is not exclusive to columns, engineers use spColumn for shear walls and beams as well! It does one thing, and does it very well without too much unnecessary complexities.

Nevertheless, there are a few limitations:

1. For any moderate to large size projects, engineers have to evaluate hundreds if not thousands of column sections. The process of manually creating each section file can be tedious. Furthermore, any future change - which is a certainty - would require the user to manually update each section.
2. For shear walls, specifying bar location and geometry can be time-consuming with distributed vertical bars and boundary element bars
3. It is also time consuming to input all axial+moment combinations especially when some projects have over 50+ load combinations. The most critical load combination is not always obvious (ACI318-19 Figure R10.4.2.1)
4. To rerun analysis, you have to manually open spColumn and click execute

Some of these limitations can be overcome through the use of the import feature in spColumn, where one can import .txt or .csv files containing section geometry, rebar location, and P+M coordinate. Most design firms have their in-house spreadsheet that generates these plain text input files. Despite the import feature, the process of creating import files, importing, and running analysis is spColumn can still be quite tedious. 

What if I tell you it is possible to automate all of that?

## How to Automate Section Analysis in spColumn

There is a software engineering meme that goes something like this:
> why spend 1 hour doing something when you can waste 8 hours figuring out how to automate it?

Luckily, many engineers make their code open-sourced so we don't have to remake the wheel. I wanted to write this blog post so those of you reading don't have to make the same mistakes I did.
Hence is why I created spColumn-batcher. (Github link here).


```python
print("this is a test")
a = eeeee
```


```python
print("abcde")
print("abcde")
print("abcde")
```



## .cti File Format and Automation







## Batch Running Analysis
https://structurepoint.org/spcolumn-online-manual/spColumn/Appendix/spColumn_Text_Input_CTI_file_format.htm
https://structurepoint.org/spcolumn-online-manual/spColumn/Chapter_4/Executing_a_Run.htm


