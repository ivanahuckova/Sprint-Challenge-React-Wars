# Answers

1.  What is React JS and what problems does it try and solve?

        React is a JavaScript library for building user interfaces. React’s simplicity lies in that it makes it easy to declare user-interfaces in self-contained independent components. In React, every UI is composed of components, so there is no mismatch of multiple types to worry about. Since there is only one common object, it makes it easy to nest components inside components and encourages the principle of single responsibility for each component.

1)  What does it mean to _think_ in react?

        One of the many great parts of React is how it makes you think about apps as you build them. First of all, React makes you think about each part of the website as component and subcomponent. Secondly, you should make static version of app in React. Than you should start to think about state. State of the app should be allways be in the main container. Lastly, you should add data.

1)  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

        Main differences:
        - Syntax - A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element.A class component requires you to extend from React.Component and create a render function which returns a React element.
        - State - Because a functional component is just a plain JavaScript function, you cannot use setState() in your component. If you need a state in your component you will either need to create a class component or you lift the state up to the parent component and pass it down the functional component via props.

1)  Describe state

        The heart of every React component is its state, an object that determines how that component renders and behaves. State is like a data store to the ReactJS component. It is mostly used to update the component when user performed some action like clicking button, typing some text, pressing some key, etc.

1)  Describe props.

        In React, we use props to send data to components. In React props are equivalent to parameters of a pure javascript function.
