import { useEffect, useState } from "react"

export const Cart = () => {
  const [openCart, setOpenCart] = useState(false)
  const [number, setNumber] = useState(0)

  const handleCart = ({detail}) => {
    setNumber(oldvalue => oldvalue + detail)

  }

  useEffect(() => {
    window.addEventListener('add-cart', handleCart);

    // cleanup this component
    return () => {
      window.removeEventListener('add-cart', handleCart);
    };
  }, []);

  return (
    <div>
      <button onClick={() => setOpenCart(!openCart)} className="relative">
        <svg height="20" width="22">
          <use xlinkHref="/svg/icon-cart.svg#icon-cart"></use>
        </svg>

        { number > 0 && <span className="absolute bg-primary -top-3 -right-2 rounded-full w-5 h-5 flex justify-center items-center">
          {number}
        </span>}
      </button>
      
      <div className={`absolute b-0 max-h-0 min-w-[90vw] md:min-w-[20rem] right-0 shadow-xl md:right-1 mt-10 md:mt-6 bg-white z-[1] rounded transition-all ease-in-out duration-500 opacity-0  ${openCart ? 'max-h-80 opacity-100 ' : ''}`}>
        <div className="border-b border-hsl-gray-blue px-4 py-4 font-bold">Cart</div>
        <div className="min-h-[100px] md:min-h-[80px] flex justify-center items-center text-gray-500 font-medium">
          Your cart is empty.
        </div>
      </div>
    </div>
  )
}