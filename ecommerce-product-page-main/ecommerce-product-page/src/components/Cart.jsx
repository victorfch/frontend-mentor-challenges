import { useState } from "react"

export const Cart = () => {
  const [openCart, setOpenCart] = useState(false)

  return (
    <div>
      <button onClick={() => setOpenCart(!openCart)}>
        <svg height="20" width="22">
          <use xlinkHref="/svg/icon-cart.svg#icon-cart"></use>
        </svg>
      </button>
      
      <div className={`absolute b-0 max-h-0 w-screen md:w-80 -right-1/4 shadow-xl md:right-1 mt-10 md:mt-6 bg-white z-[1] rounded transition-all ease-in-out duration-500 opacity-0  ${openCart ? 'max-h-80 opacity-100 ' : ''}`}>
        <div className="border-b border-hsl-gray-blue px-4 py-4 font-bold">Cart</div>
        <div className="min-h-[80px] flex justify-center items-center text-gray-500 font-medium">
          Your cart is empty.
        </div>
      </div>
    </div>
  )
}