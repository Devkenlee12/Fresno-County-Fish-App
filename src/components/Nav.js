import React from "react";
import Mod from "./Mod";


function Nav () {

    return (
        <nav class="navbar bg-light fixed-top">
            <div class="container-fluid">
                
                    <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top" />
                        Fresno County Fish App
                
                    <Mod />
            </div>
        </nav>
    )
}

export default Nav;