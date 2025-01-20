import { useState } from 'react'

function RobotForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    mass: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
   
    const massValue = formData.mass && Number(formData.mass) >= 500 ? Number(formData.mass) : ''
    
    onAdd({
      name: formData.name,
      type: formData.type,
      mass: massValue
    })

 
    setFormData({
      name: '',
      type: '',
      mass: ''
    })
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="name"
        />
      </div>
      <div>
        <input
          id="type"
          type="text"
          value={formData.type}
          onChange={handleChange}
          placeholder="type"
        />
      </div>
      <div>
        <input
          id="mass"
          type="number"
          value={formData.mass}
          onChange={handleChange}
          placeholder="mass"
        />
      </div>
      <button type="submit" value="add">add</button>
    </form>
  )
}

export default RobotForm