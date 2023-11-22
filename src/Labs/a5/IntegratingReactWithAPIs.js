import React, {useEffect, useState} from "react";
import axios from "axios";

function IntegratingReactWithAPIs() {
    const [welcome, setWelcome] = useState("");
    const fetchWelcome = async () => {
        const response = await axios.get("https://kanbas-node-server-app-8h9s.onrender.com/a5/welcome");
        setWelcome(response.data);
    };
    useEffect(() => {
        fetchWelcome();
    }, []);

    return(
        <div>
            <h4>Integrating React with APIs</h4>
            <h5>Fetching Welcome</h5>
            <h6>{welcome}</h6>
        </div>
    );
}

export default IntegratingReactWithAPIs;