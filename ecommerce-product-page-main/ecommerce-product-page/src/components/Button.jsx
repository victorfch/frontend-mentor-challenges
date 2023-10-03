export const Button = ({handleBtn, children}) => {
  return (
    <button 
			onClick={handleBtn} 
			className="btn w-full bg-primary hover:bg-orange-400 hover:shadow-lg hover:shadow-orange-300 duration-500 transition-all border-none rounded-lg h-10 flex justify-center items-center gap-3 text-white"
		>
			{children}
		</button>
  )
}