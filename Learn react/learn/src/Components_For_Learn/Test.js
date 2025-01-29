// Start Create Test Component
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

export default Test;
