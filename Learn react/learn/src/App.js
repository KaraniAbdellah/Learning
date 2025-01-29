import Test from "./Components_For_Learn/Test.js";
import "./Components_For_Learn/Test.css";

function App() {
    return (
        <div className="app container">
            <Test>
                {/* this ele come to Test function as "Props Children" */}
                <h1 className="greenText">Hello JSX I Am Good</h1>
            </Test>
        </div>
    );
}

export default App;
