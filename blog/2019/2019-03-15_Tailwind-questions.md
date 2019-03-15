---

title: In Depth Tailwind Questions

date: 2019-03-17

published: false

tags: ['internship']

description: "I've been working with tailwind for our company and want to customize everything. This brings up al lot of questions."

---

# In Depth Tailwind Questions

I've been scratching my head about how tailwind really works.

I would really appreciate a more detailed article that goes past the regular installation process.

I have added the compiler to my post-css config, and added the @tailwind stuff to my css. But what does that even do? What decides when and where I can use the classes and what my editor needs to autocomplete the class names?

Where can I use @apply, on which classes can I use it. Why does it work on the classes generated from the config file but not the ones I added below the @tailwind. Or in what situation does it work?

What do the key value objects in the tailwind.js file get used for? Is it a straight conversion of the names or do they get converted to something completely else?

> Seems they all have a personal javascript file with pre set names that loops over the object and converts all of them into a css property with a hard-coded prefix.

How customizable is it really? Are the objects enough? What about the classes not in there?
Can I override them with plugins?

What if I want to change the class names that get generated?

Do you want answers to these questions? How would you like me to answer these? Simple, detailed, with pictures, with code, with real world examples,

Please let me know if the answers already exist or if there is any need for them on my Twitter. @perjor