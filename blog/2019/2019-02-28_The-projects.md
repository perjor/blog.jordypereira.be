---

title: The projects - Our own style-guide

date: 2019-03-13

published: false

tags: ['internship']

description: Deciding to make our own style-guide and I implement a company wide tailwind.js config file and export it into less variables.

---

The project I'm working on, the Printout Template Editor, indirectly involves 2 other projects.

One is our style-guide which we have started working on last month. I guess the UX designer is also part of our little team, but he only works 50% of the time.

So our UX designer writes specs and designs for the components that we will be using in our projects. One of these components is a Tag component, which I recently fabricated.

Soon I'll be making a Table component as well. But that one is pretty advanced. It covers a lot of use cases, even if it's only the first version.

Before we had our own style-guide, we were using components of an other UI library. The company contributed a lot to that project, but eventually they both went different directions and the branches didn't get merged anymore.

So finally the company decided to completely go their own route.

Right now we're still working in a branch of a fork of the original UI library, but we will have more meetings to discuss the project structure.

Since I was the one suggesting Tailwind, I got to make the repository where the tailwind config will sit in. This repository has a tailwind config file and builds the config file into Less variables.

In our UI Library we will import the Less variables and work with those. While in our projects, we will be importing the tailwind config and build it using Webpack. This way we can still use all the advantages of Tailwind.

The first thing I did was throw all the default styles out, and only added the ones we need.  
We have replaced the colors with a number scaling from 100 to 900.

Since our UX designer makes his designs in sketch and uploads them to Zeplin, we developers will get all our css info from Zeplin.

So I decided to match them up as much as possible.  
I made a file named `sizes.js`, which is an object that gets imported into padding, margin, width and height. These sizes match the pixels displayed in Zeplin (base 16px = 1rem) and returns the value in rem. e.g. w-16 will get you a width of 1 rem.

For the ones that aren't customizable in the tailwind.js file, you can override with a plugin.  
At the moment I've added a plugin for gradients and I've overridden the cursors, to add a grabbing one and remove the ones we don't use.

As a developer I now have access to the layout classes which will speed up my development, and our theme stays consistent by limiting the colors and sizes we can use.