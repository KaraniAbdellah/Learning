// Start Create Test Component
import "./Test.css"

export default function Test(props) {
    console.log(props);
    console.log(props.name);
    console.log(props.email);
    console.log(props.link);
    return (
      <>
        <h1>{props.name}</h1>
        <h3>{props.email}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Qui, tempora.
        </p>
        <a href={props.link}>click here</a>
      </>
    );
}

