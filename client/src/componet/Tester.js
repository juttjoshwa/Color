
import React, { useRef, useState, useEffect } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.css"

const Tester = () => {
    const [color, setColor] = useState("")
    const [data, setData] = useState({})
    const [saveColor, setSaveColor] = useState([])
    const new_ref = useRef("");

    useEffect(() => {
        fetch("http://localhost:5000/user")
            .then(res => res.json())
            .then(colr => setSaveColor(colr))
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const payload = {saveColor:color} // if hum isko simple {name} bhi likho toh theek hai Q k ye ek jesa hi kam karte hain
        setData({ color })
        // fetch("http://localhost:5000/user").then(r => r.json()).then(clor => setSaveColor(clor))
        fetch("http://localhost:5000/addcolor", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        }).then((r) => console.log(r))
    }

    return (
        <div>
            <form method='post' onSubmit={handleSubmit}>
                <input type="text" placeholder='enter color'
                    value={color} autoFocus
                    onChange={(event) => { setColor(event.target.value); (new_ref.current.style.color = event.target.value) }} />

                <h1 ref={new_ref} onSubmit={handleSubmit} > {`color you entered is ${data.color}`}</h1>
            </form>
            <button type="submit" className="btn btn-primary">Submit</button>

            <div>
                {saveColor.map(u => <div key={u._id}>{u.name}</div>)}
            </div>
        </div>
    )



}

export default Tester;