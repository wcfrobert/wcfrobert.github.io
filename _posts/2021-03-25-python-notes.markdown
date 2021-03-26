---
layout: blog-post
categories: engineering
title: "Personal Python Handbook"
description: "I've gathered a whole bunch of code snippets and syntax examples that helps me along in my side projects"
image: assets/img/blog/python.png
date: 2021-03-25
tags: python
---

In this notebook, I've gathered a whole bunch of code snippets and syntax examples that helps me along in my side projects. I thought of putting a collection together like this after searching the same syntactical and how-to question over and over and going to the same StackOverflow page.

- [1.0 Getting Started](#10-getting-started)
  * [Fundamentals](#fundamentals)
  * [Installing Python](#installing-python)
- [2.0 Basic Syntax](#20-basic-syntax)
  * [Code Structure](#code-structure)
  * [Basics](#basics)
  * [Functions](#functions)
  * [Flow Control](#flow-control)
  * [Raising Exceptions](#raising-exceptions)
  * [Importing Modules](#importing-modules)
- [3.0 Containers](#30-containers)
  * [Lists []](#lists-)
  * [Strings ""](#strings-)
  * [Dictionaries {}](#dictionaries-)
  * [Tuples ()](#tuples-)
  * [Sets {}](#sets-)
- [4.0 File I/O](#40-file-io)
- [5.0 Classes](#50-classes)
- [6.0 numpy and scipy](#60-numpy-and-scipy)
  * [Importing](#importing)
  * [Basic Commands](#basic-commands)
  * [Indexing and Slicing](#indexing-and-slicing)
  * [Other Common Operations](#other-common-operations)
- [7.0 sympy](#70-sympy)
  * [Basics](#basics-1)
  * [Substitution and Simplifying](#substitution-and-simplifying)
  * [Plotting](#plotting)
- [8.0 Plotly](#80-plotly)
  * [Fundamentals](#fundamentals-1)
  * [Example](#example)
  * [Frames - Animations](#frames---animations)
  * [How-To's](#how-tos)
- [9.0 Images, Graphics, and Animation](#90-images-graphics-and-animation)
  * [Some Image Manipulation Algorithms](#some-image-manipulation-algorithms)
  * [Graphics and Animation](#graphics-and-animation)
- [APPENDIX A: Conceptual Stuff](#appendix-a-conceptual-stuff)
  * [Virtual Environment, Interpreter, PATH](#virtual-environment--interpreter--path)
  * [Pass by reference vs. pass by value](#pass-by-reference-vs-pass-by-value)
  * [Garbage Collection. Heaps and Stacks.](#garbage-collection-heaps-and-stacks)
- [APPENDIX B: Styling Guide](#appendix-b-styling-guide)
  * [Basics](#basics-2)
  * [Common](#common)
  * [Docstring standard](#docstring-standard)
- [Personal Notes](#personal-notes)



<br>
<hr>

## 1.0 Getting Started
### Fundamentals
* The most important skill to learn in programming is how to break down (decompose) a large problem into smaller pieces. One common approach is to tackle the problem "top-down". Outline the solution in abstract form and divide tasks into functions. You can call the function *that you are going to write* thus putting structure to your thought process

{% highlight python %}
def main():
    a=task1()
    b=task2()
    task3()
{% endhighlight %}

* When debugging, forget temporarily why you are writing the program. Read the code without any bias of what *you* want it to do
* Always put concise comment. You will likely spend more time reading code than writing them


### Installing Python
To get started, we need to install python. There are different ways of doing this but by far the most expedient way to install python along with hundreds of its useful packages is to install [Anaconda](https://www.anaconda.com/). Otherwise you would have to install and manage package along with its dependencies yourself which no one wants to do.

There are three ways to work with Python:

* Option 1: Write code in a text editor like [Sublime Text](https://www.sublimetext.com/), then run script from Terminal (cmd, PowerShell, Bash, etc) as shown in the code snippet below

{% highlight python %}
# If you ever need to run code from the terminal. Type in command line:
python myscript.py arg1 arg2

# To receive arguments from the terminal, within python:
import sys

# Note that all inputs are strings initially! sys.argv[0] is myscript.py
user_input1 = int(sys.argv[1])
user_input2 = int(sys.argv[2])

# Handling exception where there is not enough input argument
if len(sys.argv) < 3: 
    print("Not enough arguments")
    print("    $ python3 generatedata.py ref_file reads_file align_file")
    print("Example:")
    print('    $ python3 generatedata.py \"reffile.txt\" \"readsfile.txt\" \"alignfile.txt\"')
    sys.exit()
{% endhighlight %}

* Option 2: Write, debug, and run code from a Integrated Developer Environment (IDE). (Pycharm, Spyder, VSCode, etc)
    * Spyder is most similar to Matlab's "code as you go" style with *REPL* Interface (Read, Evaluate, Print, Loop), as well as a variable window to see all the variables you've defined in the namespace
* Option 3: Work in notebooks like [Jupyter Notebook](https://jupyter.org/), or Google Colab. This is most popular with Data Scientist because you can annotate and provide visualizations as you code (as if you are writing in a notebook)






<br>
<hr>

## 2.0 Basic Syntax
### Code Structure
The basic code structure follows something like shown. Since any python code can be imported directly like modules, we use the structure below to prevent our code from running if imported.

For instance, say our script is called myscript.py. If we run it in the terminal, its "\_\_name\_\_" is "\_\_main\_\_" . If the script is imported, then the "\_\_name\_\_" is "\_\_myscript\_\_".

{% highlight python%}
# Have imports in alphabetical order if there are a lot
import numpy

def main():
    print("your code in here")
    
def myfunction():
    print("functions can be anywhere. No need to define at top")

if __name__ = "__main__":
    main():
{% endhighlight %}


### Basics
{% highlight python %}
# Comment with # or triple quote """
# End lines that are too long with back slash \
if 1900 < year < 2100 and 1 <= month <= 12 \
   and 1 <= day <= 31 and 0 <= hour < 24 \
   and 0 <= minute < 60 and 0 <= second < 60:
        return 1
    
# Multiple variables can be assigned in one line via tuple unpacking
varA,VarB,VarC = 1,2,3
user_input = input("User can enter a value. Returned as string type")

# Printing (:.2f signals two decimal place float)
# Other types {:.2e} two decimal engineering
# {} for string and integer
print('this is {:.2f}, Called {} string formatting'.format(varA,varB))
print("print without moving to next line",end="")

# Math operations. Integer automatically converted to float if there is another float
a+b, a-b, a*b, a/b
a**2		# exponent is NOT done using ^ but two *
a//b		# floor division 5//2=2
a%b		# modulo (remainder) 5%2=1
abs(a)		# absolute value

# Other math operation located in math module. For example:
import math
math.sin(x)
math.sqrt(x)		# or just use x**(1/2)
math.isclose(a,b)	# never compare two floats using ==. Use this instead
{% endhighlight %}


### Functions
{% highlight python %}
# Defining functions
def someFunction(arg1,arg2,arg3=defaultval,*kwargs):
	if condition:
    	return x,y,z
    else:
        return a,b,c
# Notice we can set default values, and play around with return statement within ifs

# Sometimes we don't know how many arguments will be passed. Or functions have a lot
# arguments but we only care about a few. In these cases we pass in a dictionary. In
# these situations, order do not matter.
def test_args_kwargs(othervar = 3, arg1, arg2, arg3, , test = 4):
    print("arg1:", arg1)
    print("arg2:", arg2)
    print("arg3:", arg3)
>>> kwargs = {"arg3": 3, "arg2": "two", "arg1": 5}
>>> test_args_kwargs(**kwargs)
arg1: 5
arg2: two
arg3: 3
{% endhighlight %}


### Flow Control
{% highlight python %}
# If statements. The "pass" syntax is just a blank filler statement
if condition:
    pass
elif:
    pass
else:
    pass

# While loops
while condition:
    pass

# For loops and the behavior of range(n). if n = 10, then we will run
# 10 loops from 0 to 9. Not includsive of 10. This designed with in mind 
# the fact that indices in python starts at 0
for i in range(10): #Loops from 0,1,2,...,9
    pass 

for i in range(4,10): # Loops from 4,5,6,7,8,9
    pass # 10-4 = 6 loops
{% endhighlight %}


### Raising Exceptions
{% highlight python %}
# Raising Exceptions and Errors
if somecondition:
    raise RuntimeError('Mismatch dimension for pressure coefficient')

# If you want a more descriptive, custom message to accompany an error.
# If no error occurs, The statement within "Try" runs as if there is no
# try-exception flow control
try:
    step3=float(step2)
except ValueError:
    raise RuntimeError('wrong data type')
{% endhighlight %}


### Importing Modules
{% highlight python %}
# python code can be considered a module. When you import a module
# you are allowed to use all its defined functions

# Generic import (need to always use prefix). Only imports functions from module
import numpy as np
np.array(mylist)

# Function import - import only the function you need. Don't need prefix
from math import sqrt
sqrt(25)

# Universal import - Akin to a giant copy-paste running the code in module on line 1.
# All variables in mymodule namespace gets copied over. Say the module you are
# importing also imports moduleX. You will now have access to moduleX as well
from mymodule import *
{% endhighlight %}







<br>
<hr>

## 3.0 Containers
Working with containers is perhaps the most important skill to have at least for engineers and scientist. There are four main types of containers:

1. List - Ordered and mutable (can be modified). Lists are used when you want to easily append or index
2. Tuples - Ordered list can is immutable (cannot be modified). Cannot assign any value to a tuple index
3. Sets - Lists with only unique elements. Use when we care about existence but not duplicity. It is also useful for finding intersection/union of two sets
4. Dictionaries - Conventionally referred to as a map. It is a key-value pair. Order is not guaranteed and you should NEVER try to sort or index a dictionary. If you are, there is probably a better way to approach the problem

Strings can also be thought of as a container of characters. Indeed, indexing a string is exactly the same as indexing a list.

### Lists []
{% highlight python %}
# Fundamentals
myList = []
mylist.append('new item')
mylist[index]='index with square bracket'

# Unique python behavior. Assigns list by reference
a = [1,2,3]
b = a
b[0] = 99
# In the code above, Both a and b points to the same list in memory.
# changing b also changes a. To avoid this
b = a.copy() # Copy a separate instance


# Finding things in list (first occurence)
index = mylist.index(elementimlookingfor)

# Checking existence of something in a list
if element in list: 	#check existence with python "in"

# Adding and removing elements from list
a = mylist.pop() 	# return last element and returns it (also modifies the list)
a = mylist.pop(3) 	# pop element in index 3
mylist.remove(element) 	# remove first occurence
del mylist[0:4] 	# use to remove a slice of list
list1.extend(list2) 	# append list2 to list1
list3 = list1 + list2 	# this is the simpler way to accomplish the same thing
list1.insert(index,val) #val becomes element at index. Everything else pushed back

# Other useful operations
mylist.sort() 		# sort in increasing order
random.choice(list) 	# returns a random item from list
mylist.reverse() 	# reverse a list. First item becomes last
max(list), min(list), sum(list)


# List Comprehension is very useful when you want to perform operations on all 
# element of a list in a very compact manner
squaredlist = [x*x for x in mylist]
filteredlist = [x for x in mylist if x>2==1]

# subtract every item in the list by Y
[x - Y for x in ListA]

# Given two list, multiply elementwise
[a*b for a,b in zip(ListA,ListB)]

# Extract only the unique items from a list
list(set(originallist))

# Checking if list is empty
if len(list):
    pass

# Sets, strings, dictionaries, tuples can all be converted to list
list(myset), list(string), list(tuples), list(mydict.values())
{% endhighlight %}




### Strings ""
String operations are sometimes called "parsing" strings. It is one of the most common tasks in programming. Mastering string parsing will also translate to a mastery of operating with lists.

{% highlight python %}
# String Slicing
mystr='abcdefghijklmn'
mystr[1] 		# returns b
mystr[4:8] 		# returns efgh
mystr[:4] 		# returns abcd (first 4 letters)
mystr[4:] 		# returns efghijklmn (everything after first 4 letters)
mystr[-4:] 		# returns klmn (last 4 letters)
"""
The trick is to picture index on the left of char. Imagine boundary line on left 
 a b c d e f g h
0 1 2 3 4 5 6 7 8
We want to make cut at 4 and 8. Leaving us efgh

Since string is just a list of characters. The above operation also works on lists
"""

# Note that strings are immutable and when you use a string method, you must
# assign it to another variable. The original string is not affected.
newstring = mystring.split()	# does not affect mystring
mystring[3] = "a"				# THIS IS NOT ALLOWED


# Other useful string operations for parsing
concat = str1 + str2		# concatenate strings
string.in("word")		# checks if "word" is in the string. Returns boolean
string.find("word")		# find the index where "word" occurs. Returns -1 if failed
string.strip() 			# removes spaces and \n \t
string.strip(",.abc:;") 	# remove occurence of these characters
string.split(" ") 		# Split into list of strings at white space
string.split(",") 		# Split into list of strings at comma or any other character
string.count("word")		# count how many times substring "word" occured
string.uppercase()		# convert all to uppercase
string.lowercase()		# convert all to lowercase
string.swapcase()		# swap lower and upper case. Vice versa
string.startwith("2020")	# see if string starts with prefix "2020"
string.endswith(".jpeg")	# see if string ends in suffix ".jpeg"
{% endhighlight %}

The figure below illustrates a good way of thinking about list/spring slicing in Python:

![](/assets/img/blog/listslice.PNG)
*Figure: Illustration of List Slicing*




### Dictionaries {}
{% highlight python %}
# Dictionaries are key-value Pairs. Key must be unique, value doesn't have to be
# Basics
myDict = {}
myDict['key1']=123123 
myDict = {
    'key1':123
    'key2':223}
myval = myDict['key1']

# To look through dictionaries. ORDER NOT GUARANTEED!!!!! Things might shuffle around
for key in myDict.keys():
    pass
for value in myDict.Values():
    pass

# Other useful methods
mydict.items()				# return tuples of key-value pair
mydict.values()				# return values
mydict.keys()				# return keys
list(mydict.values) 		    # create a list of keys or values
'key' in dict 				# returns boolean indicating presence of key in dict
mydict[key1]=None 			# if you want to disassociate a value to key
mydict.pop(key) 			# remove entire key-value pair
del mydict[key]				# remove entire key-value pair
{% endhighlight %}


### Tuples ()
{% highlight python %}
# Tuple are just lists that cannot be modified nor appended
myTuple = (1,2,3)

# Tuple unpacking - assigns two variables at once. This is useful when
# a function returns multiple variables
mytuple = 4,5
var1,var2 = mytuple

def func():
    return a,b
var1,var2 = func()
{% endhighlight %}


### Sets {}
{% highlight python %}
# Sets are kind of like list, but they only contain unique entries
myset = set(myList)
myset ={1,2,3}

# Can use intersection of sets or union of sets
iteminboth = set(setA & setB) 		# Intersection
itemineither = set(setA | setB) 	# Union

# Other methods
myset.add()			# appending value to set
difference(set1,set2) 		# returns value that only occur in set1 but not set2
issubset(set1,set2)		# Check if set1 is subset of set2
issuperset(set1,set2)		# Check if set1 is superset of set2
discard(set1,set2) 		# Discard element from set1 if it exists in set 2
{% endhighlight %}




<br>
<hr>

## 4.0 File I/O
Reading and writing files in your operating system. One thing to always remember is that all data read will be in string format. 

{% highlight python %}
# Open and read file in python. Make sure to close it after
f1 = open('xy.txt','r')
someoperation()
f1.close()

# Check if file is closed
f1.closed()

# Reading data in columns from File
with open('file.txt', 'r') as f1:
    firstline = next(f) # skip first line
    secondline = next(f) # skip to second line
    Col1=[]
    Col2=[]
    Col3=[]
    for lines in f1: # Loop through each line
        split_data = lines.split() #split line
        Col1.append(float(split_data[0])) #extract column 1 data
        Col2.append(float(split_data[1])) #extract column 2 data
        Col3.append(float(split_data[2])) #extract column 3 data

# Read entire file in one go. Get a list of all lines
linesdata=f1.readlines()

# Writing to File
with open(outputfilename,'w') as f2:
    for items in mylist:
        f2.write('{},{},{}\n'.format(items[0],items[1],items[3]))
{% endhighlight %}




<br>
<hr>

## 5.0 Classes
Object-Oriented Programming (OOP) is a programming construct that has its benefits and drawbacks. The most important benefit is that it provides us a good way of organizing data with similar attributes and methods. Three commonly listed benefit are:

* Reusability. Very scalable as you are able to reuse much of the code through inheritance
* Greater level of abstraction. Data begins to take real-world meaning
* Encapsulation. Data and methods are better organized and hidden away

In recent years there has been some pushbacks especially amongst data scientist and programmers. Many times, the same goal can be accomplished with non-OOP methodologies; often in simpler ways. Here is a quote that describes it aptly.

> Because the problem with object-oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle. - Joe Armstrong

Make sure to develop good OOP architecture otherwise the benefit is not as great.

Some key terms that you will see very often:

* Class = The blueprint to constructing an object. (e.g. CarClass)
* Object = Programming construct with its own functions and data. Objects are an instance of a class. Creating an object is sometimes referred to as instantiating (e.g. car1)
* Method = Functions belonging to an object (e.g. car1.checkoil())
* Properties = Variables belonging to an object (e.g. car1.oil_level)

Note that the crucial piece of syntax is the dot notation access, which allows you to access methods and properties of an object. When an object is instantiated, the commands within the *constructor* runs first.

{% highlight python %}
# Typical class definition. Note places where "self" is required
class myclass:
    def __init__(self,arg1,arg2):
        self.property1=arg1
        self.property2=self.ComputeLength(arg2)
        # Private properties are defined with double underscore
        # This is just a trick through variable obfuscation. Everything is public in python
        self.__privateproperty = inputarg2 

    def ComputeLength(self,arg2):
        return self.property1*arg2
    
# Create instance of class with:
myobject = myclass(arg1,arg2)
a.property1
a.ComputeLength

# inheritence
class class1(myclass):
    pass
{% endhighlight %}





<br>
<hr>

## 6.0 numpy and scipy
For scientist and engineers, you will spend most of your time working with numpy and scipy. Numpy was created specifically to emulate the matrix and array functionalities of Matlab. Scipy is an extension of numpy and includes things like optimization, signal processing, FFT, ODE solvers, etc.

If you are already familiar with Matlab. This quick start guide is all you need: https://numpy.org/doc/stable/user/numpy-for-matlab-users.html. If a command exists in Matlab, it will likely also exist in numpy; often with the same syntax. The most tricky thing to get used to is 0-based indexing and slicing!

### Importing
{% highlight python %}
import numpy as np
import scipy as sp
# Scipy sub-packages have to be imported separately. There are also sub-sub-packages!
import scipy.sparse
import scipy.sparse.linalg
{% endhighlight %}


### Basic Commands
{% highlight python %}
"""
All matrices and vectors are considered np.arrays.

If an array is one-dimensional. Numpy does not make a distinction between column or row vector
It's 1-D shape will be adjusted automatically to whatever is workable. Of course, you can force
an array to be column if needed by putting more square brackets.
"""

# Creating arrays
mylist = [1,2,3,4,5]
A = np.array(mylist)
M = np.array([
    [1,2,3],
    [4,5,6],
    [7,8,9]
])

# Create random arrays or matrices
np.random.rand(m,n)		# element number from 0 to 1 uniform dist
np.random.randn(m,n)	# element number from 0 to 1 normal dist
np.randint(a,b,(m,n))	# integer from a to b

# Uniformly spaced array. Used for plotting.
# Create an array from i to j in N steps
x = np.linspace(i,j,N)

# Elementwise operations
A + 3.1415		# adding a scalar
A + B			# elementwise addition
A - B			# elementwise subtraction
A * B			# elementwise multiplication
A / B			# elementwise division
np.sqrt(A)		# elementwise squareroot
A**2			# elementwise squared

# Matrix multiplication with @
A @ B

# Other useful operations: 
A.sum()			# sum of all elements
A.shape()		# checking shape of array
A.T()			# transpose of the matrix
np.eye()		# identity matrix
np.one((m,n))		# matrix filled with 1
np.one((m,n))*N		# matrix filled with N
np.zero((m,n))		# matrix filled with 0
# https://numpy.org/doc/stable/user/numpy-for-matlab-users.html for more
{% endhighlight %}



### Indexing and Slicing
There are three very important distinctions to be made between Matlab and Python, concisely summarized below:

* Python uses 0-based indexing. Must subtract by 1 when indexing individual elements
* Slicing is inclusive of the range start value, but not inclusive of the range end value. Therefore; when slicing multiple elements, subtract start value by 1 but NOT the end value
* When retrieving individual elements, assignment is passed by value. For slices, the assignment is passed by reference! Don't forget to add .copy()

Python uses 0-based indexing which may take some getting used to if you are proficient in Matlab already. In the case of indexing a single element, you just need to remember to <u>subtract by one for each index</u>.

{% highlight python %}
# For single index. Just subtract by one. e.g. for the (2,3) element of A
A[1,2]

# For last element, use -1
A[-1]

# For an entire column or row
A[:,0]		# first column
A[3,:]		# fourth row
{% endhighlight %}

Slicing works differently. When slicing from A to B, A is inclusive whereas B is not! Let's do an example:

$$
A=
\begin{bmatrix}
a&b&c&d \\
e&f&g&h \\
i&j&k&l \\
m&n&o&p \\
\end{bmatrix}
$$

For instance, let's say I want to extract the sub-matrix 
$$\begin{bmatrix}g&h\\k&l \end{bmatrix}$$

Meaning row 2->3 and column 3->4. In Matlab, it's fairly intuitive A(2:3, 3:4). In python, we need to use A[1:3, 2:4]. Remember the end value of the range is not included in Python. Therefore; <u>you are subtracting by 1 for the start value, but NOT subtracting for the end value</u>. All of this is very confusing but gets better the more you work with arrays in Python. Here is an illustration that could potentially clear things up a little.

![](/assets/img/blog/matrixslice.png)
*Figure: Illustration Showing Indexing of Matrices*

{% highlight python %}
# Notice we need to add .copy() to pass a copy rather than a reference
a = A[1:3,:].copy()		# second to third row
a = A[:,1:2].copy()		# is actually equivalent to A[:,1].
a = A[:,1].copy()		# however, this returns a flexible numpy array rather than a col vector

# Mesh indexing (e.g. in Matlab A([2,4,6],[1,3]))
A[np.ix_([1,3,5],[0,2])]
{% endhighlight %}

Additionally, we can create sub-matrices by passing to it list of index.  This process is illustrated in the figure below:

![](/assets/img/blog/subarray.PNG)
*Figure: Mesh Indexing*



### Other Common Operations
{% highlight python %}
# Finding max/min value within row or column
a.max()		        # returns scalar. Max in entire matrix
a.max(0)	        # returns vector. Max in each column
a.max(1)	        # returns vector. Max in each row
a.max(0)[2]	        # returns max in third column

# Returning index of value matching a certain condition
np.nonzero(a<3)		# returns i,j coord of element matching condition

# Appending to matrices in blocks
np.hstack((a,b))	# stack two column vector. b to the right of a
np.vstack((a,b))	# stack two row vector. b below a

# Say we want to stack four 2x2 matrices
np.block([ 
    [a,b],
    [c,d] 
])
{% endhighlight %}






<br>
<hr>

## 7.0 sympy
Here are the most basic commands. Please note that all assignments are passed by value. In other words. A.changesomething() does not alter the memory location where A is stored. Instead, an entire copy is created that you assign to another variable.


### Basics
{% highlight python %}
# Initiating symbols
A,B,c,d,e = sy.symbols('A B c d e')

# At this point, all of the symbols can be used as variables
# If you are using say Jupyter Notebook. The output will render 
# and show up nicely
A = B + C

# Integrating and differentiation
sy.integrate(f, (x,a,b))	# integrate f(x) from a to b
sy.diff(f,x)			# differentiate f(x) with respect to x

# symbolic matrix or vector
sy.Matrix([
    [a,b],
    [c,d]
])

# Solving. First rewrite expression with one side = 0
f = 2*x**2 + 3*x - 13
sy.solveset(f,x)
{% endhighlight %}


### Substitution and Simplifying
{% highlight python %}
# Simplifying
sy.simplify(f)

# Substitution
f2 = f.subs([(a,10),(b,22)])        # substitute a=10 and b=22
sy.N(f2)                            # convert symbol to float
f2.evalf()                          # another way of doing the same thing
{% endhighlight %}

Note that all variables stay a "symbol" even if you have already substituted everything. For instance, f = a + b. Both a and b are equal to 10. Then f = 20. At this moment the number 20 is actually still a symbol until you use sy.N() or .evalf().


### Plotting
{% highlight python %}
import sympy as sy
from sympy.plotting import plot3d
x, y = sy.symbols('x y')
plot3d(sy.cos(x*3)*sy.cos(y*5)-y, (x, -1, 1), (y, -1, 1))
{% endhighlight %}



<br>
<hr>

## 8.0 Plotly
The number of attributes to a Plotly figure can be overwhelming. 

Under the hood, your python code is actually converted to a JSON file which is then interpreted by a JavaScript library. You can actually convert your figure to a JSON format or a python dictionary format:

{% highlight python %}
fig.to_json()
fig.to_dict()
{% endhighlight %}

This one-page reference here is a must-have: [https://plotly.com/python/reference/](https://plotly.com/python/reference/)


### Fundamentals
At the most basic level, a **figure** can be represented by the following hierarchy of attributes; each of which has their own sub attributes.

* **figure** - a dictionary of three attributes:
  * **data** - raw data organized into a list of dictionaries
    * Each dictionary represents one subplot which is referred to as a **trace**. A trace can be one of more than 40 different plots (e.g. bar, scatter, scatter3d, pie, etc.
  * **layout** - customize the look and feel of your figure. Organized as a dictionary containing various attributes
    * Some example layouts you can play around with: title, legend, axis, fonts, hover, hover labels, annotations, etc.
  * **frames** - used for animations. Organized as a list of dictionaries of data along with some other attributes.

As you can see, the data structure gets convoluted fast and you start having a dictionary of a dictionary of a list of dictionaries. Knowing this, there are two ways to generate plotly graph; using **classes** or using **dictionaries**.

* Creating figure by creating a python dictionary

{% highlight python %}
import plotly.io as pio
fig = dict(
    {
    "data": [{"type": "bar", "x": [1, 2, 3],"y": [1, 3, 2]}],
    "layout": {"title": {"text": "A Figure Specified By Python Dictionary"}}
    }
)
pio.show(fig)

# Note on dictionary creation
mydict1 = dict(mykey = 123) #OK
mydict2 = {'mykey':123} #OK
mydict3 = {mykey=123} #NOT OK
mydict4 = {mykey:123} #NOT OK
{% endhighlight %}

* Creating a figure by using the graph-object class (RECOMMENDED)

{% highlight python %}
import plotly.graph_objects as go
fig = go.Figure(
    data = [go.Bar(x=[1, 2, 3], y=[1, 3, 2])],
    layout = go.Layout(title={'text': "this is a title"})
)
fig.show()
{% endhighlight %}

The recommended workflow by plotly is to create a graph object first with default values (using plotly express), then using .add_trace() and .update_layout() to polish your figure.



### Example
{% highlight python %}
# Import module
import plotly.graph_objects as go

# Initialize an empty figure
fig = go.Figure()

# Adding data to figure
custom_hover ='<b>%{text}</b><extra></extra>'
text = "X: {}, <br>Y: {}, <br>Z: {}".format(11,22,33)
plot_data = go.Scatter3d(
    x=[1,2,3], y=[1,2,3], z=[1,2,3],
    mode='markers', opacity=0, marker = dict(size = 25),
    hovertemplate = custom_hover,
    text = [text]
)
fig.add_trace(plot_data)

# Customizing layout
my_scene = dict(
    xaxis = dict(showticklabels=False, gridcolor='#e3e4e6', backgroundcolor='white', showspikes=False, visible=False),
    yaxis =dict(showticklabels=False, gridcolor='#e3e4e6', backgroundcolor='white', showspikes=False, visible=False),
    zaxis =dict(showticklabels=False, gridcolor='#e3e4e6', backgroundcolor='white', showspikes=False,visible=False)
)

my_title = {'text': "Figure Title", 'y':1, 'x':0, 'xanchor':'left', 'yanchor':'top'}
my_footnote = [
    dict(xref='paper', yref='paper', x=0.9, y=-0.1, xanchor='right', yanchor='top',
        showarrow=False, 
        text='Copyright (c) 2020 RW',
        font=dict(family='Arial',size=12,color='rgb(150,150,150)'))
]

my_camera = dict(
    up=dict(x=0,y=1,z=0),center=dict(x=0,y=0,z=0),eye=dict(x=1.25,y=1.25,z=1.25)
)

fig.update_layout(
    scene=my_scene, showlegend=False, hoverlabel=dict(bgcolor="white"),
    annotations=my_footnote, scene_camera=my_camera, scene_dragmode='orbit',
    margin=dict(l=50,r=50,b=100,t=10,pad=4), height=650
)
{% endhighlight %}


### Frames - Animations
An inconvenient aspect of animation in Plotly is that, unlike layout and data, you cannot append frames because it is stored as a tuple. As such, all frames must be inserted as soon as the figure is created.

Animation example with [play] button:

{% highlight python %}
import plotly.graph_objects as go
import numpy as np

# Generate curve data
t = np.linspace(-1, 1, 100)
x = t + t ** 2
y = t - t ** 2
xm = np.min(x) - 1.5
xM = np.max(x) + 1.5
ym = np.min(y) - 1.5
yM = np.max(y) + 1.5
N = 50
s = np.linspace(-1, 1, N)
xx = s + s ** 2
yy = s - s ** 2
vx = 1 + 2 * s
vy = 1 - 2 * s  # v=(vx, vy) is the velocity
speed = np.sqrt(vx ** 2 + vy ** 2)
ux = vx / speed  # (ux, uy) unit tangent vector, (-uy, ux) unit normal vector
uy = vy / speed

xend = xx + ux  # end coordinates for the unit tangent vector at (xx, yy)
yend = yy + uy

xnoe = xx - uy  # end coordinates for the unit normal vector at (xx,yy)
ynoe = yy + ux

# Create figure
fig = go.Figure()

# Add data
mydata=[
    go.Scatter(x=x, y=y,name="frame",mode="lines",line=dict(width=2, color="red")),
    go.Scatter(x=x, y=y,name="curve",mode="lines",line=dict(width=2, color="blue"))
]

# Update layout
mylayout = go.Layout(
    width=600, height=600, 
    xaxis=dict(range=[xm, xM], autorange=False, zeroline=False),
    yaxis=dict(range=[ym, yM], autorange=False, zeroline=False),
    title="Moving Frenet Frame Along a Planar Curve",
    hovermode="closest",
    updatemenus=[
        dict(
            buttons = [
                dict(
                    args = [
                        None, 
                        {
                            "frame": {"duration": 0, "redraw": False},
                            "fromcurrent": False, 
                            "transition": {"duration": 0}
                        }
                    ],
                    label = "Play",
                    method = "animate"
                )
            ],
            type='buttons',
            showactive=False
        )
    ]
)

# Add frames
myframes=[
    go.Frame(
        data = [go.Scatter(x=[xx[k], xend[k], None, xx[k], xnoe[k]], y=[yy[k], yend[k], None, yy[k], ynoe[k]],
                mode="lines",
                line=dict(color="red", width=2))]
    ) for k in range(N)
]

fig = go.Figure(
    data = mydata,
    layout = mylayout,
    frames = myframes
)

fig.show()
{% endhighlight %}



Animation example with play, pause, and slider:

{% highlight python %}
# Create figure
fig = go.Figure()

# Add data
mydata=[
    go.Scatter(x=x, y=y,name="frame",mode="lines",line=dict(width=2, color="red")),
    go.Scatter(x=x, y=y,name="curve",mode="lines",line=dict(width=2, color="blue"))
]

# Slider dictionary
slider_dict = {
    "active": 0,
    "yanchor": "top",
    "xanchor": "left",
    "currentvalue": {
        "font": {"size": 20},
        "prefix": "Step:",
        "visible": True,
        "xanchor": "right"
    },
    "transition": {"duration": 0, "easing": "cubic-in-out"},
    "pad": {"b": 10, "t": 50},
    "len": 0.9,
    "x": 0.1,
    "y": 0,
    "steps": []
}

for i in range(N):
    slider_step = {
        "args": [
            [i],
            {
                "frame": {"duration": 0, "redraw": False},
                 "mode": "immediate",
                 "transition": {"duration": 0}
            }
        ],
        "method": "animate",
        "label": i
    }
    slider_dict["steps"].append(slider_step)

# Update layout
mylayout = go.Layout(
    width=600, height=600, 
    xaxis=dict(range=[xm, xM], autorange=False, zeroline=False),
    yaxis=dict(range=[ym, yM], autorange=False, zeroline=False),
    title="Moving Frenet Frame Along a Planar Curve",
    hovermode="closest",
    updatemenus=[
        dict(
            buttons = [
                dict(
                    args = [
                        None, 
                        {
                            "frame": {"duration": 0, "redraw": False},
                            "fromcurrent": True, 
                            "transition": {"duration": 0}
                        }
                    ],
                    label = "Play",
                    method = "animate"
                ),
                dict(
                    args = [
                        [None], 
                        {
                            "frame": {"duration": 0, "redraw": False},
                            "mode": "immediate", 
                            "transition": {"duration": 0}
                        }
                    ],
                    label = "Pause",
                    method = "animate"
                )
            ],
            type='buttons',
            showactive=False
        )
    ],
    sliders = [slider_dict]
)


# Add frames
myframes=[
    go.Frame(
        data = [go.Scatter(x=[xx[k], xend[k], None, xx[k], xnoe[k]], y=[yy[k], yend[k], None, yy[k], ynoe[k]],
                mode="lines",
                line=dict(color="red", width=2))],
        name = k
    ) for k in range(N)
]

fig = go.Figure(
    data = mydata,
    layout = mylayout,
    frames = myframes
)

fig.show()
{% endhighlight %}



### How-To's
{% highlight python %}
# Adding buttons that change camera angle:
button1 = dict(
	method = "relayout",
    args = [{"scene.camera.up": {'x':0,'y':1,'z':0},
		"scene.camera.eye": {'x':1.25,'y':1.25,'z':1.25},
		"scene.camera.center":{'x':0,'y':0,'z':0}}], 
    label = "Axonometric"
)

button2 = dict(
	method = "relayout",
	args = [{"scene.camera.up":{'x':0, 'y':1,'z':0},
		"scene.camera.eye":{'x':0,'y':2,'z':0},
		"scene.camera.center":{'x':0,'y':0,'z':0}}], 
	label="Top View XZ"
)

fig.update_layout(
    updatemenus = [
        dict(buttons=[button1, button2], direction="right", pad={"r": 10, "t": 10}, 
            showactive=True, x=0.1, xanchor="left", y=0.1, yanchor="top")
    ]
)

# Adding annotation to data point
X = go.Scatter3d(
    x=[0,1],y=[0,0],z=[0,0],
	mode='lines+text', hoverinfo = 'skip',
    line=dict(color='blue', width=4),
	text=["","something"],
	textposition="middle right",
	textfont=dict(family="Arial", size=6, color="blue")
)
{% endhighlight %}


Quick reference:

* Hiding hover info
  * data.hoverinfo = 'skip'
* Making vertical axis Y instead of Z
  * layout.scene.camera.up:{"x":0, "y":1, "z":0}
* Hiding trace legend
  * layout.showlegend = False
* Change marker style
  * data.marker:{size, color, symbol}





<br>
<hr>

## 9.0 Images, Graphics, and Animation
Pillow is a python package is used for image manipulation. tkinter stands for "tk/tcl interface". it is used to create graphic user interfaces but can also be used for animation and graphics.

An important concept to understand is that images are just matrices where each i,j position has three values (R,G,B) ranging from 0 to 255 specifying the intensity of red, green, and blue at that specific pixel. Modifying these three integers allow us to manipulate images. (For example, some photo filters are just these RGB value manipulations).

### Some Image Manipulation Algorithms

**Darker Image:** 

1. Floor divide R, G, and B value by 2

**Red channeling:**

1. Set G and B value to 0

**Green screening:**

1. Calculate the intensity of green at every pixel in the image. Note in the equation below "//" represents floor division, I represents an intensity threshold constant (A good value is 1.6)

    $$
    \mbox{intensity} = (R + G + B) //3 \quad \times \quad I
    $$

2. If the green intensity at a pixel is above a given threshold, replace it with the pixel from another image

**Mirroring an image:**

1. Create a new blank canvas and loop through each row of the image
2. Extract pixel from original image and put it from left to right

**Post-process removal of object:**

First of all we must have multiple images to allow for post-process removal. At every (x,y) point of the image, the outlier RGB value tells us there is something some object to be removed. Outlier pixels are determined via "color distances". Ensure your collection of images are of the same width and height.

1. Loop through every pixel in the image
2. Compute the average RGB values for the set of pixels at one location (we have many since there are multiple images. Say we have N images)

    $$\mbox{R}_{average} = average(R_1,R_2,\dots,R_{N})$$

    $$\mbox{G}_{average} = average(G_1,G_2,\dots,G_{N})$$

    $$\mbox{B}_{average} = average(B_1,B_2,\dots,B_{N})$$
    

3. Compute the color distance of the pixel under consideration in the set of N images. Square root is often omitted for simplicity.

    $$
    \mbox{color distance} = (R - R_{avg})^2 +(G - G_{avg})^2 + (B - B_{avg})^2
    $$

4. Choose the pixel in the set of N that has the smallest color distance


### Graphics and Animation
{% highlight python %}
import time
import tkinter

# Creating a drawing canvas
top = tkinter.Tk()
top.title("title of window")
canvas = tkinter.Canvas(top, width+1, height+1)
canvas.pack()
canvas.xview_scroll(8, 'units')  # add this so (0, 0) works correctly
canvas.yview_scroll(8, 'units')  # otherwise it's clipped off
    
# Create shapes - x1 top left corner, x2 bottom right corner
graphic_object = canvas.create_rectangle(x1,y1,x2,y2,fill="blue")
go1 = canvas.create_line(x1,y1,x2,y2)
go2 = canvas.create_oval(x1,y1,x2,y2)

# Create text. "w" stands for left middle point
go3 = canvas.create_text(x,y,text="hi",anchor="w", font="Courier 52")

# Display canvas
canvas.mainloop()

# Import images
image = ImageTk.PhotoImage(Image.open("myphoto.png"))
canvas.create_image(x,y,anchor="nw",image=image)

# Animation loop
while True:
	canvas.move(graphic_object,pixel_right,pixel_down)
	canvas.update()
	time.sleep(delay) -> delay = 1/60 = 60 fps

# Getting coordinate of graphic object
x= canvas.coords(graphic_object)[0]
y= canvas.coords(graphic_object)[1]

# Getting x location of mouse
mouse_x = canvas.winfo_pointerx()

# Find list of element in a rectangular area
results = canvas.find_overlapping(x1,y1,x2,y2)
{% endhighlight %}



<br>
<hr>

## APPENDIX A: Conceptual Stuff

This section is dedicated to random conceptual stuff that I had to wrap my head around.

### Virtual Environment, Interpreter, PATH

When installing python with Anaconda, it comes with its own virtual environment with its separate instance of python installation. This lets you have multiple versions of python on your machine at the same time.

PATH environment variable allows the computer to execute an .exe in the command line without knowing the entire directory. For example, you can type calc.exe in terminal and a calculation will open. However, you cannot type firefox.exe unless you are currently in C:\Program Files\Mozilla Firefox. 

Adding the python installation directory to PATH allows the terminal to run python just by typing "python myscrip.py". Otherwise you will get an error. Navigate to settings or control panel and search "Environment Variables" to configurate PATH

![](/assets/img/blog/path.PNG)

### Pass by reference vs. pass by value

Passing by reference is akin to sending the URL to an object like a variable. This is usually done for *big* elements like a list or a plot. The caller and callee use the same variable.

Passing by parameter makes a whole separate copy (e.g. integers, strings, booleans, floats). I found this excellent. The caller and callee use two independent variables. I found an excellent visualization that sums it up nicely:

![](/assets/img/blog/passbyreference.gif)

### Garbage Collection. Heaps and Stacks.

Stack is used for static memory allocation. It is optimized quite closely by the CPU and you do not need to do any memory management. Stack variables are local in nature and are deleted after a function executes. Size is limited and variables cannot be resized.

Heaps are used for dynamic memory allocation that you have to manage carefully. It is a larger floating region of memory. You have to allocate it to use it, and deallocate it when you are done. Memory leak may occur if not properly deallocated. Heap variables are global in nature.

In python, you never have to worry about memory as it is automatically managed for you. The downside is some loss in speed (this is why programmers sometimes implement code initially in python and then convert to C++ when performance is a concern)

{% highlight python %}
# Garbage collector in python
a=[1,2,3,4]
a='new string'
# the list 'a' is now unreferenced is garbage collected
{% endhighlight %}





<br>
<hr>

## APPENDIX B: Styling Guide
For styling and standard formatting of your code. Refer to PEP 8: [Python Style Guide](https://www.python.org/dev/peps/pep-0008/). You don't need to follow the guideline exactly. But abiding by some of the rules here greatly improves readability. Some of the more common guidelines:

### Basics

{% highlight python %}
# Always use 4-space indentation. Never mix & match. Most editors have options 
# to convert tab to 4 spaces
	# Tab indentation
    # 4-space indentation

# Blank line separation: 2 for functions, 1 for methods. Use lines in code 
# for logical sections (sparingly)
    
# Try to limit line length to ~80 characters if possible. Don't go over 120
#000000000000000000000000000000000000000000000000000000000000000000000000000000
#0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

# Comments start with space and capital letter
myvar = 1 # Inline comment can be distracting
{% endhighlight %}

### Common
{% highlight python %}
# Don't compare boolean values to True or False
if boolean:
    print("Don't do boolean == True or False")

# Constants should be in all caps
MYCONSTANT = 3.14

# Naming convention for variables
a = "single letter for simple variables"
lowercase = "most optimal choice"
_ = "underscore usually used for temp variable that you have no interest in"

# For more descriptive variable name: (don't make too long)
lowercase = "used for module or function names"
lower_case_with_underscore = "used for function names"
CapWordStyle = "used for class names"
mixedCase = "usually dont use"

# There are too many arguments
myfunction(argument1, argument2, argument3, argument4, argument5,
           argument6, argument7, argument8, argument9, argument10)

# Defining a matrix
np.array([
    [1,2,3],
    [4,5,6]
])

# Usually have blank space after comma or math operator. Not always
a = income + 3*(a + n) - 3
b = c
somelist = [a, b, c, d]
{% endhighlight %}

### Docstring standard

{% highlight python %}
def myfunction(arg1,arg2):
    """Single-line docstring. Do something and return value a"""
    return a

class myclass
    """
    Multi-line docstring for more complex functions or classes. Provide a 
    concise summary of the behavior. For classes list out the public methods
    and instance variables.
    Args:
    	parameter1: 
    	parameter2:
    Returns:
    	Description of what is returned
    """
    return a
{% endhighlight %}



<br>

## Personal Notes
I put random notes here. Pretty much anything I found helpful can appear here. Slowly they will migrate to the other sections

{% highlight python %}
# Never check condition where float == exact value
b==17
# Instead use is close command
math.isclose(b,17)

# Open a website and read its content to a string (bypassing 403 forbidden)
# Simpler method is to use urllib.request.urlretrieve('example.com', 'test.txt')
import urllib.request
site= "https://ikea-status.dong.st/latest.json"
user_agent = 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.7) Gecko/2009021910 Firefox/3.0.7'
headers={'User-Agent':user_agent,} 
request=urllib.request.Request(site,None,headers) #The assembled request
response = urllib.request.urlopen(request)
myfile = response.read()
data=str(myfile)


# Convert time zone
#convert from gmt to pst
PST = GMT - datetime.timedelta(hours = 7)

#Loop for 30 seconds:
import time
t_end = time.time() + 60 * 15
while time.time() < t_end:
    pass

#make beeping sound:
import winsound
winsound.Beep(2500, 1000)


#Sending email
# make an unsecure gmail account first
import smtplib
import ssl
    port = 465
    address = 'test1@gmail.com'
    password = 'putyourpasswordhere'
    context = ssl.create_default_context()

    sender_email = address
    receiver_email = 'test@gmail.com'
    subject = 'Ikea Click & Collect Available' + ' at ' + store + '| Time: ' + currentTime
    text = 'mail generated via python'
    message = "Subject: {}\n\n{}".format(subject, text)

    with smtplib.SMTP_SSL("smtp.gmail.com", port, context=context) as server:
        server.login(address, password)
        server.sendmail(sender_email, receiver_email, message)



# Working with word documents
'''
Document Object -> paragraph Object -> Run Object
Run object are collection of words. Within a paragraph, there might be several 
run object because any change in styling creates a new run.
'''
pip install python-docx
import docx

def getText(filename):
    doc = docx.Document(filename)
    fullText=[]
    for paragraph in doc.paragraphs:
        fullText.append(paragraph.text)
{% endhighlight %}

