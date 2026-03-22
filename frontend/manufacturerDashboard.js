import React, {useEffect, useState} from "react";
import api from "../services/api";
import QRCode from "qrcode.react";

function manufacturerDashboard(){
    const [batches, setBatches] = useState([]);
    const [stage, setStage] = useState("");

    useEffect(() => {
        fetchBatches();
    }, []);

    const fetchBatches = async() => {
        const res = await api.get("/trace/all"); 
        setBatches(res.data);
    };

    const updateStage = async(batch_id) => {
        await api.post(
            "/process",
            {batch_id, stage},
            {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            }
        );
        alert("Processing stage updated");
        fetchBatches();
    };

    return(
        <div style={{padding: "20px"}}>
            <h2>Manufacturer Dashboard</h2>

            {batches.map((b)=> (
                <div
                key={b.batch_id}
                style={{
                    border: "1px solid #ccc",
                    marginBottom: "15px",
                    padding: "10px",
                }}>
                    <p><b>Herb:</b> {b.herb_name}</p>
                    <p><b>Current Stage:</b>{b.current_stage || "Raw"}</p>

                    <input
                    placeholder="New processing stage"
                    onChange={(e) => setStage(e.target.value)}
                    />
                    <button onClick={() => updateStage(b.batch_id)}>
                        Update Stage
                    </button>

                    <h4>QR Code</h4>
                    <QRCode
                    value={`http://localhost: 3000/verify/${b.batch_id}`}
                    size={140}
                    />
                </div>
            ))}
        </div>
    );
}
export default manufacturerDashboard;