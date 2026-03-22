import React, {useState} from "react";
import api from "../services/api";

function collectorForm(){
    const [form, setForm] = useState({});

    const submit = async ()=>{
        const res = await api.post("/collect", form, {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        });
        alert("Batch ID:" +res.data.batch_id);
    };

    return (
        <div>
            <h2>Herb Collection</h2>
            <input placeholder="Herb Name" onChange={e=>setForm({...form, herb_name:e.target.value})}/>
            <input placeholder="Scientific Name" onChange={e=>setForm({...form, scientific_name:e.target.value})}/>
            <input placeholder="Latitude" onChange={e=>setForm({...form, latitude:e.target.value})}/>
            <input placeholder="Longitude" onChange={e=>setForm({...form, longitude:e.target.value})}/>
            <button onClick={submit}>Submit</button>
        </div>
    );
}

export default collectorForm;