import {useState} from "react"

export const InputGroup = () => {
  const [value, setValue] = useState(0)

	const addToCart = () => {
		const customEvent = new CustomEvent("add-cart", {
			detail: value
		})

		window.dispatchEvent(customEvent)
	}

  return (
		<div className="flex flex-col md:flex-row gap-4 h-8">
    	<div className="flex justify-evenly items-center bg-light-gray-blue rounded-lg p-5">
				<button onClick={() => setValue(value-1)} >
					<svg height="4" width="12">
						<use xlinkHref="/svg/icon-minus.svg#icon-minus"></use>
					</svg>
				</button>
				<input type="text" onChange={({target}) => setValue(target.value)} value={value} className="text-center bg-light-gray-blue outline-none " />
				<button onClick={() => setValue(value+1)}>
					<svg height="12" width="12">
						<use xlinkHref="/svg/icon-plus.svg#icon-plus"></use>
					</svg>
				</button>
			</div>
			<button onClick={addToCart} className="btn w-full bg-primary border-none rounded-lg p-5 flex justify-center items-center gap-3 text-white">
				<span>
					<svg height="20" width="22">
						<use xlinkHref="/svg/icon-cart.svg#icon-cart"></use>
					</svg>	
				</span>
				Add to cart
			</button>
		</div>
  )
}