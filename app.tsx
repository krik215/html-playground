import "react";
import { useState } from "react";
import ReactDOM from "react-dom";

const Application = () => {
    const [counter, setcounter] = useState(0);
    return (
        <div>
            {counter}
            <br/>
            <button onClick={() => setcounter(counter + 1)}>Increase</button>
            Hello, world! !
        </div>
    );
}

const root = document.getElementById("root");

ReactDOM.render(<Application />, document.getElementById('root'));
