import React, {useEffect, useState} from "react";
import api from "../services/api";

function verifyPage({batchId}){
    const [data, setData] = useState(null);

    useEffect(() => {
        api.get(`/trace/${batchId}`).then(res=> setData(res.Data));
    }, []);

    if (!data) return <p>Loading...</p>;

    return (
        <div>
            <h2>{data.herb_name}</h2>
            <p>Scientific Name: {data.scientific_name}</p>
            <p>Source Type: {data.source_type}</p>
            <p>Location: {data.latitude}, {data.longitude}</p>
        </div>
    );
}

export default verifyPage;