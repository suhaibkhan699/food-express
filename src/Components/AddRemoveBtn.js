import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../utils/cartSlice'


const AddRemoveBtn = (item) => {
  const cartItems = useSelector((store) => store.cart.items)
  const dispatch = useDispatch()
  const itemsCount = cartItems.filter(cartItem => cartItem.id === item.id)
  let [counter, setCounter] = useState(itemsCount.length)
  const addRemoveButton = {
    border: '1px solid black', width: '80px',
    display: 'flex',
    padding: '5px 5px',
    marginTop: '1px',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
  const button = {
    cursor: 'pointer'
  }
  return (
    <div style={addRemoveButton}>
      <i className="fa-solid fa-minus" style={button} onClick={() => {
        setCounter(counter => {
          if ((counter - 1) < 0) {
            return 0
          } else {
            return counter - 1
          }
        })
        if (counter > 0) {
          dispatch(removeItem(item.id))
        }
      }}></i>
      {counter}
      <i className="fa-solid fa-plus" style={button} onClick={() => {
        setCounter(counter => {
          return counter + 1
        })
        dispatch(addItem(item))
      }}></i>
    </div>
  )
}

export default AddRemoveBtn