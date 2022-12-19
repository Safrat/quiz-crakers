import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h4><h3>Ques 1: </h3>Purpose of React Router?</h4>
                <h5>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</h5>
            </div>
            <div>
                <h4><h3>Ques 2: </h3>How does context api work?</h4>
                <h5>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</h5>
            </div>
            <div>
                <h4><h3>Ques 3: </h3>What is useref in react?</h4>
                <h5>Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with , React will set its .current property to the corresponding DOM node whenever that node changes.</h5>
            </div>
        </div>

    );
};

export default Blogs;