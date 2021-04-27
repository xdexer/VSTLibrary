import React, {useState} from "react";

export default Vst()
{
    const [details, setDetails] = useState({
        type:"",
        cost:"",
        rating:0,
        link:""
    });

    return (
        <div className="vst">
            <p>Type: {details.type}</p>
            <p>Cost: {details.cost}</p>
            <p>Rating: {details.rating}</p>
            <p>URL: {details.link}</p>
        </div>
    );
}