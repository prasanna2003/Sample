import React from 'react'
import ListItems from './ListItems'
           
const Content = ({items,handleCheck,handleDelete}) => {


  return (
    <main>
      {(items.length) ? (
      <ListItems 
      items={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
      ) : (
        <label>Your List is Empty !</label>
      )}
      </main>
  )
}

export default Content