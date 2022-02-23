import "./NewSkillForm.css"



export default function NewSkillForm() {

    return (
        <form className="NewSkillForm">
            <div className="NewSkillFormDiv">
            <label>Skills</label>
            <input></input>
            <label>Level  
                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
            </div>
            <button>Add Skill</button>
        </form>    
    )
}