import {useState} from "react"
import { Button } from "./Button"
import { Icon } from "./Icon"

export const InputGroup = () => {
  const [value, setValue] = useState(0)

	const addToCart = () => {
		const customEvent = new CustomEvent("add-cart", {
			detail: value
		})

		window.dispatchEvent(customEvent)
	}

  return (
		<div className="flex flex-col lg:flex-row gap-4">
    	<div className="flex justify-between items-center bg-light-gray-blue rounded-lg h-10">
				<button onClick={() => setValue(value-1)} className="px-5 h-full" >
					<Icon height="4" width="12" icon="minus" />
				</button>
				<input type="text" onChange={({target}) => setValue(target.value)} value={value} className="text-center bg-light-gray-blue outline-none" />
				<button onClick={() => setValue(value+1)} className="px-5 h-full">
					<Icon height="12" width="12" icon="plus" />
				</button>
			</div>
			<Button handleBtn={addToCart}>
				<Icon height="20" width="22" icon="cart" />
				Add to cart
			</Button>
		</div>
  )
}