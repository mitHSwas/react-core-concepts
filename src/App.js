import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const friends = [
    {name: "Protap", job: "Gagano", hobby: "Bari tana"},
    {name: "Sumon", job: "Tusion", hobby: "Prem kora"},
    {name: "Mithun", job: "Coading", hobby: "Chatting"},
    {name: "Joyti", job: "Nurshing", hobby: "Night duty"},
    {name: "Muntaha", job: "Army", hobby: "Carry rifel"},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Users></Users>
        <Counter></Counter>
        {
          friends.map( friend => <LocalFriend fnd={friend}></LocalFriend>)
        }
      </header>
    </div>
  );

  function Users() {
    const [user, setUser] = useState([]);
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUser(data))
    }, [])
    return(
      <div>
        <h1>Users are coming.....</h1>
        <h2>Total Users : {user.length}</h2>
        {
          user.map( user => <div>
              <h2>{user.name}</h2>
              <h4>{user.email}</h4>
             </div>)
        }
      </div>
    )
  }

  function Counter(){
    const [count, setCount] = useState(0)
    return(
      <div>
        <h1>Count: {count}</h1>
        <button onMouseDown={ () => setCount(count + 1)}>Increase</button>
        <button onMouseOut={ () => setCount(count - 1)}>Decrease</button>
      </div>
    )
  }

  function LocalFriend(props){    
    const friendStyle = { color: "yellow", height: "200px", width: "300px", borderRadius: "5px", border: "1px solid red", backgroundColor: "gray", margin: "10px",}
    const {name, job, hobby} = props.fnd;
    return(
      <div style={friendStyle}>
        <h2>Name: {name}</h2>
        <h3>Job: {job}</h3>
        <h4>Hobby: {hobby}</h4>
      </div>
    )
  }
}
export default App;
