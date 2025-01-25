import './App.css'

function App() {


  return (
    <>
      <div className="App">
        <h1 className='to'>To Do List</h1>

        <div>
          <input type="search" className='task' placeholder='Add your task' />
          <button className='btn'>+</button>
        </div>
        <h5 className='item'>Todo item Created Successfully</h5>
        <button className='bt1'>Edit list</button><br /><br />
        <button className='bt2'>Delete list</button>
      </div>
    </>
  )
}

export default App
