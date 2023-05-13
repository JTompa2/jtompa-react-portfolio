import React from 'react';
import profilePicture from "../../../static/assets/images/bio/photo.png";

export default function() {
    return (
        <div className="content-page-wrapper">
            <div className="left-column" 
                style={{
                    background: "url(" + profilePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />
            <div className="right-column">
                Casimir and all the Saints, 
                in Thy mercy, grant us health and peace, 
                that after all adversity and error is removed, 
                Thy Church may serve Thee in freedom and safety, 
                through the same Jesus Christ, Thy Son, Our Lord, 
                Who liveth and reigneth with Thee in the union of 
                the Holy Ghost world without end. Amen.
            </div>
        </div>
    );
}