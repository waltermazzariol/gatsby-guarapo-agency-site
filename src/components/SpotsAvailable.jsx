import React from "react"

function SpotAvailable(props) {
    return (
       <div className="spot d-flex flex-column justify-content-center mt-5">
            <div className="d-flex justify-content-center">
                <span className="spot-fill"></span>
                <span className="spot-fill"></span>
                <span className="spot-fill"></span>
                <span className="spot-fill"></span>
                <span className="spot-fill"></span>
                <span className="spot-empty"></span>
            </div>
            <div className="spot-text text-center">
                1 CUPO DISPONIBLE
            </div>
       </div>
    )
}

export default SpotAvailable