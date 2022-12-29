import React from 'react'
import { useState, useRef, useEffect } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

const Color = () => {
    const [color, setColor] = useState("");
    const [data, setData] = useState({});
    const [saveColor, setSaveColor] = useState("")
    const new_ref = useRef("")

    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then((r) => r.json())
            .then((saveColor) => setSaveColor(saveColor));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        setData({ color })
        fetch("http://localhost:5000/user").then(r => r.json()).then(clor => setSaveColor(clor))

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label >Enter Color</label><br />
                <input type='text' placeholder='enter color name'
                    value={color} autoFocus
                    onChange={(event) => { setColor(event.target.value); (new_ref.current.style.color = event.target.value) }} />
                <button type='submit' className='btn btn-primary'>submit</button>

                {/* {data.color && <h1 ref={new_ref}>Name: {data.color}</h1>} */}
                <h1 ref={new_ref}>color_name : {data.color}</h1>
            </form>

            <div>
                {saveColor.map(u => <div>{u.name}</div>)}
    </div> 


        </div>
    )
}

export default Color