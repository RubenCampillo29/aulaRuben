import React from "react";
import "./Footer2.css";
import { FcLike } from "react-icons/fc";

export default function Footer2() {

return (

        <div className="footer"> 
           <h3>TODOS LO DERECHOS RESERVADOS
            <a href="https://moodle.org/">
             <img className="foto" src="https://aulavirtual.murciaeduca.es/theme/moove/pix/moodle-logo-white.png" alt="Logo moddle" />
            </a>
            </h3> 
            <p>
            El tema fue desarrollado por 
            <i>
            <FcLike/>
            </i> 
            <a href="https://conecti.me/">concecti.me</a> 
            </p>
        </div>

)



}


