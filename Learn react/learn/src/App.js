import Test from "./Components_For_Learn/Test.js";
import "./Components_For_Learn/Test.css";

const showHeader = true;
function App() {
    return (
        <div className="app container">
            {
                AppTest(showHeader)
            }
        </div>
    );
}

function AppTest(showHeader) {
    if (showHeader) {
        return (<Test></Test>);
    } else {
        return (
            <div>
                <h1>this not a header</h1>
            </div>
        )
    }
}

export default App;
