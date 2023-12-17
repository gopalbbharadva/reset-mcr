import { useState } from 'react'

const data = [
  { name: 'first', id: '1', checked: false, currentBox: 'left' },
  { name: 'second', id: '2', checked: false, currentBox: 'left' },
  { name: 'third', id: '3', checked: false, currentBox: 'left' },
  { name: 'fourth', id: '4', checked: false, currentBox: 'left' },
]

export const TransferList = () => {
  const [items, setItems] = useState(data)
  const itemSelectHandler = (name: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, checked: true } : item
      )
    )
  }

  const switchItemsHandler = (boxPlacement: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.checked
          ? { ...item, currentBox: boxPlacement, checked: false }
          : { ...item, checked: false }
      )
    )
  }

  return (
    <div className='flex justify-between items-center gap-10'>
      <div className='border-2 border-black p-20'>
        {items
          .filter((item) => item.currentBox === 'left')
          .map((item) => (
            <div
              key={item.id}
              onClick={() => itemSelectHandler(item.name)}
              className={`p-2 border-2 border-black rounded-lg my-4 cursor-pointer ${
                item.checked ? 'bg-black text-white' : ''
              }`}
            >
              {item.name}
            </div>
          ))}
      </div>

      <div className='flex flex-col gap-10'>
        <button
          disabled={
            !items.some((item) => item.checked && item.currentBox !== 'right')
          }
          onClick={() => switchItemsHandler('right')}
          className={`text-white 
           ${
             items.some((item) => !item.checked)
               ? 'disabled:opacity-60 disabled:cursor-not-allowed'
               : ''
           }`}
        >
          RIGHT
        </button>
        <button
          disabled={
            !items.some((item) => item.checked && item.currentBox !== 'left')
          }
          onClick={() => switchItemsHandler('left')}
          className={`text-white 
           ${
             items.some((item) => !item.checked)
               ? 'disabled:opacity-60 disabled:cursor-not-allowed'
               : ''
           }`}
        >
          LEFT
        </button>
      </div>

      <div className='border-2 border-black w-52 self-stretch flex justify-center items-center flex-col'>
        {items
          .filter((item) => item.currentBox === 'right')
          .map((item) => (
            <div
              key={item.id}
              onClick={() => itemSelectHandler(item.name)}
              className={`p-2 border-2 border-black rounded-lg my-4 cursor-pointer ${
                item.checked ? 'bg-black text-white' : ''
              }`}
            >
              {item.name}
            </div>
          ))}
      </div>
    </div>
  )
}
