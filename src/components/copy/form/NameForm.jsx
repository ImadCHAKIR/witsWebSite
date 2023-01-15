import React from 'react'

const NameForm = () => {
    const [name,setName] = React.useState("");

    const handleChange=(event) =>{
        setName(event.target.value);
    }

    const handleSubmit=(event) =>{
        alert('A name was submitted: ' + name);
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                Name:
                <input type="text" value={name} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default NameForm