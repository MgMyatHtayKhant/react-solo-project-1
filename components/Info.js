import React from "react"

function Info() {
    return (
        <div className="info">
            <img className="info-img" src="../laura-smith.png"/>
            <h2 className="info-name">Laura Smith</h2>
            <h3 className="info-job">Frontend Developer</h3>
            <h4 className="info-website">laurasmith.website</h4>
            <div className="info-btn">
                <button className="btn email-btn">
                    <i className="icon fa-solid fa-envelope"></i> 
                    <span>Email</span>
                </button>
                <button className="btn linkedin-btn">
                    <i className="icon fa-brands fa-linkedin"></i> 
                    <span>Linkedin</span>
                </button>
            </div>
        </div>
    )
}

export default Info;