import SkillList from './SkillList';
import SkillListForm from './SkillListForm';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillList />
      <hr />
      <SkillListForm />
    </div>
  );
}

export default App;
