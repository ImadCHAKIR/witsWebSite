import React from 'react'

const EssayForm = () => {
    const [essay,setEssay]=React.useState();
    
    const handleChange =(event)=> {
        setEssay(event.target.value);
    }

    const handleSubmit=(event) =>{
        alert('An essay was submitted: ' + essay);
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label>
                Essay:
                <textarea value={essay} onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default EssayForm