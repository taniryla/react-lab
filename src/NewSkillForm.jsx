import "./NewSkillForm.css"
import { useState } from "react";


export default function NewSkillForm( { addSkill }) {
    const [formData, setFormData] = useState(
        {name: "", level: 3 })

    function handleChange (evt) {
        setFormData({...formData, [evt.target.name]: evt.target.value})
    }

    function handleAddNewSkill (evt) {
        evt.preventDefault();
        addSkill(formData);
        setFormData(
            {name: "", level: 3 })
      }

    return (
        <form className="NewSkillForm" onSubmit={handleAddNewSkill} >
            <div className="NewSkillFormDiv">
            <label>Skills</label>
            <input name="name" 
            value={formData.name}
            onChange={handleChange}
            ></input>
            <label >Level  
                <select name="level" value={formData.level} onChange={handleChange}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </label>
            </div>
            <button type="submit">Add Skill</button>
        </form>    
    )
}