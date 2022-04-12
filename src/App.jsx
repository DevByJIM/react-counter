import { useState } from "react";
import "./App.css";
import Boton from "./components/Boton";
import Counter from "./components/Counter";

function App() {
    const [clics, setClics] = useState(0);
    const handleClic = () => {
        setClics(clics + 1);
    };

    const handleReset = () => {
        setClics(0);
    };

    return (
        <div className="app">
            <h1>CONTADOR ByJIM</h1>

            <div className="container">
                <Counter numClics={clics} />

                <Boton
                    texto={"Clicker"}
                    isButtonClic={true}
                    handleClic={handleClic}
                />
                <Boton
                    texto={"Reset"}
                    isButtonClic={false}
                    handleClic={handleReset}
                />
            </div>
        </div>
    );
}

export default App;
