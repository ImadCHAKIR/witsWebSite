import React from 'react'

const SelectTagForm = () => {
    const [selectedChoice,setSelectedChoice]=React.useState();

    const handleChange = (event)=> {
        setSelectedChoice(event.target.value);
    }
    
    const handleSubmit = (event)=> {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <label>
            Pick your favorite flavor:
            <select value={selectedChoice} onChange={handleChange}>
              <option value="choice 1">choice 1</option>
              <option value="choice 2">choice 2</option>
              <option value="choice 3">choice 3</option>
              <option value="choice 4">choice 4</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default SelectTagForm