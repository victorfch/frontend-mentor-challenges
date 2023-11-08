export const CenterPanel = ({children}) => {
  return (
    <div className="w-full mt-14 md:mt-0 md:w-2/3 flex items-center flex-col justify-center">
      {children}
    </div>
  )
}