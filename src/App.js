import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import { useState, useEffect } from 'react';
import AddItems from './AddItems';
import SearchItem from './SearchItem';


function App() {
  const [items,setItems] = useState([]);
  
  const [newItem,setNewItem] = useState('')

  const [search,setSearch] = useState('')

  useEffect (() => {
    JSON.parse(localStorage.getItem('TO-DO-LIST'))
  },[])
  const addItem = (item) =>
  {
    const id = items.length ? items[items.length-1].id+1 :1
    const addNewItem = {id,checked:false,item}
    const listItem = [...items,addNewItem]
    setItems(listItem)
    localStorage.setItem("TO-DO-LIST",JSON.stringify(listItem))
  }

  const handleCheck=(id) => {
    const listItem = items.map((item) =>
    item.id === id ? {...item, checked:!item.checked} : item)
    setItems(listItem)
    localStorage.setItem("TO-DO-LIST",JSON.stringify(listItem))
  }
  
  const handleDelete=(id) => {
  const listItem = items.filter((item) => 
  item.id !== id )
  setItems(listItem)
  localStorage.setItem("TO-DO-LIST",JSON.stringify(listItem))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submitted")
    addItem(newItem)
    setNewItem('')
  }



  return (
    <div className='App'>
    <Header title = "To-Do-List" />
    <AddItems 
    newItem={newItem}
    setNewItem={setNewItem}
    handleSubmit={handleSubmit}
    />
    <SearchItem 
    search = {search}
    setSearch = {setSearch}
    />
    <Content 
    items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase())) }
    handleCheck={handleCheck}
    handleDelete={handleDelete}
    />
    <Footer />
    </div>
  )
}
export default App;