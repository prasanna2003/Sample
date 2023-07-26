import React from 'react'
import {useRef} from 'react'
const AddItems = ({newItem,setNewItem,handleSubmit}) => {
const inputRef = useRef()
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addItem'>Add Item</label>
        <input type='text'
        placeholder='Add Item'
        required
        ref = {inputRef}
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        />
        <button type='submit'
        onClick={() => inputRef.current.focus()}
        >
            Add Item
        </button>
    </form>
  )
}

export default AddItems
