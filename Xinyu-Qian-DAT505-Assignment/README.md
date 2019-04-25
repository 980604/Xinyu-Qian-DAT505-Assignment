# Xinyu-Qian-DAT505-Assignment

My name is Xinyu Qian.

My student number is B161006076.

My Github link:

#MUSIC Box
========
##introduction

My project name is music box, which is a visual music box. You can see two different kinds of animal, one pig and alpaca, rotate with music. Actually, they are playing on a swing. To represent  happiness, the pig will blink and the alpaca will dance.

##inspiration

The reason why I chose to do a music box is that it is too expensive to buy a music box. What is important is that the music box is easy to be broken.Therefore, I want to create a dreamy world to make everyone can have a music box.
I was inspired by Karim Maaloul, who created a collection of interesting works. He combined Coordinate System with geometries to create live creature and made some interactive effect. Therefore, I want to did some try.

##methods

First, I need to create 3 folders, which is 'build','css','js'and a html file to define the style of page and script source. Actually, I find a cloud library, so I can find files directly online. Then, I have to  build the scene. It is a complex process to create many geometries and define their names, position and material. To be clear, they are divided into a group. Next, I add animation and render. Finally, I import music.In the period of this project, I also use TweenMax

##failure

In fact, I want to add audio visualizer in the music box. However, it is more difficult to analyze the audio and transparent it into visulization.

##idea
I want to express the theme of childhood in this project. Many people undertake huge pressure in the modern life. Most of them may want to escape from the city and recall the light-hearted life of childhood. I hope that people can have a break to relax themselves when they see this project.

##development
 I’ll create a simple 3D scene with a few interactions in two major parts. In the first part i will explain the basics of Three.js and how to set up a very simple scene. The second part I will go into some details on how to refine the shapes, how to add some atmosphere and better movements to the different elements of the scene.

The most difficult thing in this project is the design of geometries. I have did some sketches in the early stage and matched color. I have to use simple pattern to show characteristic.

![Image text](https://raw.githubusercontent.com/980604/Xinyu-Qian-DAT505-Assignment/master/Xinyu Qian-DAT505-Assignment/image/animal.jpg)

Before starting to code the scene, I  define a color palette that will be used consistently throughout the project. For this project I choose the following colors:

![Image text](https://raw.githubusercontent.com/980604/Xinyu-Qian-DAT505-Assignment/master/Xinyu Qian-DAT505-Assignment/image/color1.jpg)
![Image text](https://raw.githubusercontent.com/980604/Xinyu-Qian-DAT505-Assignment/master/Xinyu Qian-DAT505-Assignment/image/color2.jpg)

Let me do it

 The first thing to do is to import the library in my HTML header.Then you need to add a container element in the HTML to hold the rendered scene.I simply style it like the following to make it fill the entire viewport.

THE SECOND STEP: make the structure and add all the main functions we need to create are put into the init function:

![Image text](https://raw.githubusercontent.com/980604/Xinyu-Qian-DAT505-Assignment/master/Xinyu Qian-DAT505-Assignment/image/1.jpg)
![Image text](https://raw.githubusercontent.com/980604/Xinyu-Qian-DAT505-Assignment/master/Xinyu Qian-DAT505-Assignment/image/2.jpg)
![Image text](https://raw.githubusercontent.com/980604/Xinyu-Qian-DAT505-Assignment/master/Xinyu Qian-DAT505-Assignment/image/3.jpg)

The lights will set the mood of the whole scene and must be determined carefully. At this step of the project, I will just try to make the lightning good enough to make the objects visible.

![Image text](https://raw.githubusercontent.com/980604/Xinyu-Qian-DAT505-Assignment/master/Xinyu Qian-DAT505-Assignment/image/lights.jpg)

The mouse event

![Image text](https://raw.githubusercontent.com/980604/Xinyu-Qian-DAT505-Assignment/master/Xinyu Qian-DAT505-Assignment/image/mouseevent.jpg)

THE THIRLD STEP: create a pig and a alpaca and a swing.
 The scripts are too long, so I summarize what we need in order to create an object. We need to
a.create a geometry
b.create a material
c.pass them into a mesh
d.add the mesh to our scene
With these basic steps, I can create many different kinds of primitive objects. Now, if I combine them, I can create much more complex shapes.

The FORTH STEP: add animation
The pig and alpaca blinks, raotates.
The swing rotates.

![Image text](https://raw.githubusercontent.com/980604/Xinyu-Qian-DAT505-Assignment/master/Xinyu Qian-DAT505-Assignment/image/blink.jpg)
![Image text](https://raw.githubusercontent.com/980604/Xinyu-Qian-DAT505-Assignment/master/Xinyu Qian-DAT505-Assignment/image/animation.jpg)

THE FINAL STEP: add audio
I just add in html, which is much easy and faster.

I think It is a pity that I do not do something interactive.
