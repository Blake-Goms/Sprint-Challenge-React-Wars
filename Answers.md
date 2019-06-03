# Answers

1.  What is React JS and what problems does it try and solve?
    React introduces the virtual DOM to websites. It allows the web app to render data extremely quickly and then push ONLY the changes to the physical DOM.

2.  What does it mean to _think_ in react?
    It means to think of components and how everything can be broken into it's own component, then making a REACTive web app using specific components

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    Class components use this.state and functional components use props.whatever

4.  Describe state.
    State is similar to props, but it is private and fully controlled by the component.

5.  Describe props.
    Props are read only, which is one reason why it's so much faster than state. Props stands for properties and Components must act like pure functions with respect to Props.