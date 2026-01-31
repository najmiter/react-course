import './App.css';
import Button from './components/button';
import Card from './components/card';

export default function App() {
  return (
    <div className="bahr-wali-div">
      <style>{'.bahr-wali-div {display: flex;}'}</style>
      <Card></Card>
      <Button></Button>
      <button>Global Button</button>
    </div>
  );
}
