import './App.css';
import { useState } from 'react';

import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import UserList from './components/userlist/UserList.jsx';
import NewUserForm from './components/newuser/NewUser.jsx'


function App() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false)

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const addUser = (newUser) => {
    setUsers((prev) => [...prev, newUser]);
  };
  const closeModal=(e)=>{
    if (e.target.className==="overlay") setShowModal(false) 
    if(e.key==="Escape") setShowModal(false)
    
  }
  const addUs = (user) => {
    setUsers((prev) => {
      return [...prev, user];
    })
    setShowModal(false) 

  };
  

  return (
    <>
      <div onClick={closeModal} onKeyDown={closeModal} className="App">
        <Navbar usersLength={users.length} />
        <main>
          <div className="no-users">
            {users.length === 0 && <h2>No Users</h2>}
          </div>
          <UserList users={users} deleteUser={deleteUser} />
        </main>
        {showModal && <NewUserForm addUser={addUser}/>}
        <button onClick={() => setShowModal(true)} className="create-user">Create user</button>
        <Footer />
      </div>
    </>
  );
}


export default App;
