// What is React Js
/*
    A free and open-source JavaScript library
    :::::::::::::::::::
    developed by Meta (formerly Facebook).
    :::::::::::::::::::
    React Based on the concept of Component
    :::::::::::::::::::
    Some Concepts:
        Vite: A fast tool to start React projects.
        JSX: A way to write HTML inside JavaScript.
        Components: Small parts of a webpage you can reuse.
        Props: Data you give to components.
        State: Data that changes inside a component.
        Hooks: Special functions, like useState to manage state.
        Virtual DOM: React's way to update only what changes on the page.
    :::::::::::::::::::
    From Component (Button) --> <button>Click Here</button>
        The Switch From Component To tags do by React Not Browser
    :::::::::::::::::::
    Write React code directly without Framworks like Next.js or Remix.
    Use only React and maybe libraries like Vite or Webpack to build your app.
    Handle everything manually, like routing or server tasks.
    :::::::::::::::::::
    Vite: Fast tool for React.
    Next.js: Full framework with more features (Routing, SSR, APIs).
    :::::::::::::::::::
    HOT RELOAD: is a React library used to edit your code and
        automatically reflect that change in your running app
        --> which means you don't need to refresh your browser t see the result
*/




// Installation
/*
    npx create-react-app learn
*/




// React Structure
/*
    public Folder is for assets:
        images, audio files, ...
    
    src Folder is your project
        App.js: is root component that contain all other component

    .gitignore for thing that I do not want to push in github
    package.json && package-lock.json for depencies for the projects
        (like libs that you use)
*/




// Create First Component
/*
    You Create Component By [Function || Class]

    --> Function components are simpler and more lightweight,
        defined as JavaScript functions that return JSX.
    --> Class components provide more control over component
        behavior.
    
    NOTE: for best practice create for each component a file

    import CompoName from "pathToCompon";
        --> this for use this component in other filies
    
    import "FilePath";
        --> this for import filies in react (css, js, ....) filies
    
    import logo from "public/logo.png";
        --> import images
        --> use like: <img src={logo} alt="Logo" />
    
    Nested Component: is component inside another component
*/

// in App.js
function Test( ) {
    return (
      <h1>Hello Test Component</h1>
    );
}
// in Test.js
function Test( ) {
    return (
      <h1>Hello Test Component</h1>
    );
}
export default Test;
// Use this for work with Test Component
import Test from "./Components/Test";




// What JSX
/*
    Is combine HTML code inside Js Code
    This Code:
        return (
        <>
            <h1>Hello Test Component</h1>
        </>
        );
        --> this code for JSX not for HTML

    With JSX format there is a lot of resctriction
        --> use emmet extentions
 
    To Call Component:
        <Test/>
        <Test></Test>

    Inside root eles you should be return just one element

    To Write Javascript Inside JSX Use {}

    Use "className" instead "class"
*/
// Test.js
function Test() {
    let x = 10;
    const person = {
      "name": "abdellah",
      "age": 20
    }
    return (
    <>
        <h3>{person.age}</h3>
        <h1>{person.name} Hello Test Component</h1>
        <p>
        {
            console.log("Hello World" + x + SayHello)
        }
        {
            // this an error because push JS object inside HTML --> Not Supported
            console.log(person.name)
        }
        </p>
    </>
    );
}
function SayHello() {
return "Hello World";
}




// Styling in JSX
/*
    Use Attribute Must write in this format:
        Attribute={Value}
*/

// Test.js
function Test() {
    const eleStyle = {
        color: "blue",
        fontSize: "40px",
    }
    return (
    <>
        <h1 style={eleStyle}>React is Awesome</h1>
        <button onClick={sayHello}>Click</button>
    </>
    );
}
function sayHello() {
alert("Hello World");
}





// Classes in JSX
/*
    ClassName="red": simple notation
    ClassName={"red, green"}: you can add JS code inside Class
        

    import CSS file use:
        import "PathToCssFile"
*/
// Test.js
import "./Test.css"
function Test() {
  const person = {
    name: "taha"
  }
    return (
      <div className={"box active container"}>
        <h1>Hello World</h1>
        <h1 className={person.name == "taha" ? "greenText": "redText"}>
          Check Name
        </h1>
      </div>
    );
}




