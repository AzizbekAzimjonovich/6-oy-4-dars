import './Navbar.css'


function navbar({usersLength}) {
  return (
    <div className='navbar'>
    <div className='navbar-container container'>
      <h1 className='navbar-logo'>CUser</h1>
      <h3 className='navbar-counter'>
        {usersLength>0?'you have :'+usersLength:'No user :('}
      </h3>
    </div>
  </div>
  )
}

export default navbar
