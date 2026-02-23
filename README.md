Answers to Questions

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   Ans: getElementById is for a single element, getElementsByClassName is for multiple elements that include the given class, and the output is a pseudo-array of all the elements called 'htmlcollection.' querySelector and query SelectorAll also uses the CSS style searching method, but the difference between them is the query. The selector gives the 1st element to match the search request and query. SelectorAll gives out all of the matching elements in a pseudo-array structure called 'nodelist'.
2. How do you create and insert a new element into the DOM?
   Ans: By using the createElement and appendChild features.
3. What is Event Bubbling? And how does it work?
   Ans: Because DOM is like a tree, for an event to happen, it needs to go through all of its parents; it's called the capture phase until it reaches the target of the event. Event bubbling is the phase where, like a ripple in water triggering an event, it causes its parents to be triggered too, the exact opposite of the capture phase.
4. What is Event Delegation in JavaScript? Why is it useful?
   Ans: Event delegation is when we utilize event bubbling to lessen code. Instead of adding a listener for multiple child nodes, we add a single listener to their parent node. When the event bubbles, the listener activates and functions properly for all children of that parent, thus creating an efficient script.
5. What is the difference between preventDefault() and stopPropagation() methods?
   Ans: preventDefault() is preventing the default behavior of an element. Mostly used for elements that force unnatural actions like going to a link or refreshing the page, etc. stopPropagation() is simply stopping event bubbling to reach the parent to prevent unintended parent-calling.
