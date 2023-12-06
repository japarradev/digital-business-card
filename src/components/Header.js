import React from "react";

export function Header()
{
    return(<header>
        <img src="./images/profile-photo.png"/>
        <nav>
             <h1>Laura Smith</h1>
             <h2>Frontend Developer</h2>
             <h3>laurasemith.website</h3>
             <ul>
                <li className="button-icon"><a ><i class="fa-solid fa-envelope"></i><span>Email</span></a></li>
                <li className="button-icon blue-button"><a><i class="fa-brands fa-linkedin"></i><span>LinkedIn</span></a></li>
             </ul>
        </nav>
    </header>)
}