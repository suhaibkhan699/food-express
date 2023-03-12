import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem, removeItem } from '../utils/cartSlice'


const AddRemoveBtn = (item) => {
  // const item = { ...item }
  let [counter, setCounter] = useState(0)
  const dispatch = useDispatch()
  return (
    <div>
      <i className="fa-solid fa-circle-minus" onClick={() => {
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
      <i className="fa-solid fa-circle-plus" onClick={() => {
        setCounter(counter => {
          return counter + 1
        })
        dispatch(addItem(item))
      }}></i>
    </div>
  )
}

export default AddRemoveBtn