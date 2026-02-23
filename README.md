1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? Ans: getElementById – selects a element by its id.
getElementsByClassName > selects elements with the same classname.
querySelector / querySelectorAll – selects elements using CSS selectors;
querySelector > slecet single first matching element
querySelectorAll > select all matching elements

2.How do you create and insert a new element into the DOM?

Ans.
Frist i will creat element with document.CreatElement() method than will set this HTML, or attributes for the element. and than will insert the element by appendChild(), prepend(), insertBefore(), or append()

3.What is Event Bubbling? And how does it work?

 Ans: Event Bubbling is a event propagation where an event starts from the main (target) element and then bubbles up to its parent elements,(like water bubling) all the way to the document root. when You will click an element the target. The event clikced on the target element. The same event bubbles up to each parent element.

4.What is Event Delegation in JavaScript? Why is it useful? 

Ans.Event delagation is a syestem in Javascriot, Where we add evnet listener in parent element and this listener handle events of this parent elments Child elements why useful? if in future child element add than it will work dynamically and to use difrent difent event listner for child element it's very heavy work for memory .

5.What is the difference between preventDefault() and stopPropagation() methods? 

Ans: preventDefault() Stops the default behavior of browser for an event.
stopPropagation() Stops the event from bubbling up or capturing down the DOM tree.