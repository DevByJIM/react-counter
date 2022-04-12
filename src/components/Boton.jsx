import React from "react";
import '../stylesheets/Boton.css'

const Boton = ({ texto, isButtonClic, handleClic }) => {
    return (
        <button
            className={isButtonClic ? "button-clic" : "button-reset"}
            onClick={handleClic}
        >
            {texto}
        </button>
    );
};

export default Boton;
