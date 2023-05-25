# periodic

I made this one to test a tool called Browserify that allowed some pretty cool stuff.

> Browsers don't have the require method defined, but Node.js does. With Browserify you can write code that uses require in the same way that you would use it in Node.
>
> -- Browserify's Website

I was hopping to understand more about bundles and how they work, the different environments and their characteristics. So instead of bundling a whole app together, this tool only bundles the JS file to me in a simple way.

So if i have a simple static website with HTML, CSS and JS, and i just want to use some library from NPM in this project even tho it is far from being a node project, that's one simple solution that helped me understand more about bundles at the same time.

Nowadays i just use unpkg and everything works

So this is the motivation behind the project

- I'm using a package from NPM to get all of the periodic table elements
- Using normal JS but importing data from the package
- Using normal CSS for styling and animation
- Using browserify to bundle my main JS file: index.js

![ezgif com-video-to-gif](https://github.com/brianmirandadev/periodic/assets/94651050/d31ad6ca-e0de-4ee7-b9b4-437720c66988)
