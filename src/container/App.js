import ClassComponent from '../components/ClassComponent';
import FunctionComponent from '../components/FunctionComponent';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
    <h3>Convidado:</h3>
    <ClassComponent nome="Amanda" estaNaLista={true} />
    <ClassComponent nome="Ana" estaNaLista={false} />
    <ClassComponent nome="Katia" estaNaLista={false} />
    <ClassComponent nome="Júlio" estaNaLista={true} />
    <h3>Tarefas: </h3>
    <FunctionComponent nome="Amanda" tarefa="Bolo" />
    <FunctionComponent nome="Ana" tarefa="Brigadeiro" />
    <FunctionComponent nome="Katia" tarefa="pizza" />
    <FunctionComponent nome="Júlio" tarefa="Pipoca" />
     </div>
  );
}

export default App;
