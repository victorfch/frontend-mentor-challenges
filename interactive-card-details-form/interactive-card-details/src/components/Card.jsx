export const Card = ({imgPath, imgAltText, children, position}) => {
  let positionStyle = "z-[1] md:z-0 top-36 md:top-0 left-[5%] md:left-1/3"

  if (position == "bottom") {
    positionStyle = "bottom-36 md:bottom-0 left-[20%] md:left-1/2"
  }

  return (
    <div className={`${positionStyle} w-3/4 md:w-fit shadow-2xl relative rounded-lg overflow-hidden`}>
      <img className="w-full h-auto" src={imgPath} alt={imgAltText} />
      {children}
    </div>
  )
}