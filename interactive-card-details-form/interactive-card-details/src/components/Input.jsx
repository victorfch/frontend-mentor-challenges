export const Input = ({name, placeholder, handleInput, validation, register}) => {
  return (
    <input
      id={name}
      onInput={handleInput}
      name={name}
      placeholder={placeholder}
      className="px-2 w-full h-10 border-light-grayish-violet border rounded-lg invalid:border-red-500"
      type="text" 
      {...register(name, validation)} />
  )
}