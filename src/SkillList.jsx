import SkillListItem from "./SkillListItem"

export default function SkillList ({ skills }) {
    const skillListItems = skills.map((s, idx) => <SkillListItem index={idx} skill={s} key={idx} />) 
    return (
        <ul>
            {skillListItems}
        </ul>
    )
}