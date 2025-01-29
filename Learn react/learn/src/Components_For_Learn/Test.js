// Start Create Test Component
import "./Test.css"

export default function Test(props) {
    const children = props.children;

    return (
      <>
        {children}
      </>
    );
}

