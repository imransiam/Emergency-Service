6. Answer the following questions clearly:
What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById is a unique name by which we can call a specific item

 getElementsByClassName is used to call the items taged same call name as we know class can be same for different items

 querySelector / querySelectorAll:  selecting any element by querySelector means it will select the first element it got at first on the other hand querySelectorAll select every same element available in the file




How do you create and insert a new element into the DOM?
We use document.createElement() to create new element and insert it into the DOM using appendChild()




What is Event Bubbling and how does it work?
Event Bubbling is a process in javaScript in which an event firstly occrus at the innermost or child element and then moves upto parent element until reaching root DOM



What is Event Delegation in JavaScript? Why is it useful?


Event Delegation is technique to short the length of code. It is a technique of adding a single event listener in the parent element which will dynamically use in child elements by event bubbling.

What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() stops browser's default behavior like page getting refreshed for filling up form 
stopPropagation() stops element bubbling up for DOM tree