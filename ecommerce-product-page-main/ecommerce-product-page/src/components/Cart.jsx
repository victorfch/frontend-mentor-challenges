import { useEffect, useState } from "react"
import { Button } from "./Button"
import {Icon} from "./Icon"

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
        <Icon height="20" width="22" icon="cart" />

        { number > 0 && <span className="absolute bg-primary -top-3 -right-2 rounded-full w-5 h-5 flex justify-center items-center">
          {number}
        </span>}
      </button>
      
      <div className={`absolute b-0 max-h-0 min-w-[90vw] md:min-w-[20rem] right-0 shadow-xl md:right-1 mt-10 md:mt-6 bg-white z-[1] rounded transition-all ease-in-out duration-500 opacity-0  ${openCart ? 'max-h-80 opacity-100 ' : ''}`}>
        <div className="border-b border-hsl-gray-blue px-4 py-4 font-bold">Cart</div>
        <div className="min-h-[100px] md:min-h-[80px] flex items-center text-gray-500 font-medium">
          {false && <span> Your cart is empty.</span>}
          {true && (
            <div className="px-4 py-6 flex flex-col gap-4">
              <div className="w-full flex justify-between items-center">
                <div className="w-1/5 h-1/5">
                  <img className="h-auto rounded object-contain" src="/product/image-product-1-thumbnail.jpg" alt="" />
                </div>
                <div className="flex flex-col justify-between">
                  <div>Fall Limited Edition Sneakers</div>
                  <div>$125.00 x 3 <span className="font-bold text-black">$375.00</span></div>
                </div>
                <div className="cursor-pointer">
                  <Icon height="16" width="14" icon="delete"  />
                </div>
              </div>
              <Button>
                Checkout
              </Button>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}