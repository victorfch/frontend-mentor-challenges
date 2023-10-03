import {useState} from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { Icon } from "./Icon";


const Dots = (dots) => (
  <div style={{bottom: 'auto'}}>
    <div className="hidden md:flex thumbnail-images justify-between mt-4">
      {dots}
    </div>
  </div>
)

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    customPaging: function (i) {
      return (
        <img
          src={`/product/image-product-${i + 1}.jpg`}
          alt={`Image ${i + 1}`}
          onClick={() => setCurrentIndex(i)}
          className={`cursor-pointer w-24 xl:w-28  rounded-xl h-auto object-contain ${currentIndex === i ? "slick-active" : ''}`}
        />
      );
    },
    appendDots: Dots,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_, next) => setCurrentIndex(next),
  }

  const images = [
    {src: "/product/image-product-1.jpg", alt: "Image 1"},
    {src: "/product/image-product-2.jpg", alt: "Image 2"},
    {src: "/product/image-product-3.jpg", alt: "Image 3"},
    {src: "/product/image-product-4.jpg", alt: "Image 4"}
  ]

  return (
    <div className="w-full">
      <div className="w-full relative">
        <Slider {...settings}  >
          {images.map((image, id) => (
            <div key={id}>
              <img
                className="w-full h-[30vh] md:h-auto object-cover rounded-none md:rounded-xl hover:cursor-pointer" 
                {...image}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

const NextArrow = ({onClick}) => (
  <div className="block md:hidden absolute top-1/2 right-2 -translate-y-1/2 z-[1]">
    <button onClick={onClick} className="bg-white rounded-full flex justify-center items-center h-8 w-8">
      <Icon width="13" height="18" icon="next" />
    </button>
  </div>
)

const PrevArrow = ({onClick}) => (
  <div className="block md:hidden absolute top-1/2 left-2 -translate-y-1/2 z-[1]">
    <button onClick={onClick} className="bg-white rounded-full flex justify-center items-center h-8 w-8">
      <Icon width="12" height="18" icon="previous" />
    </button>
  </div>
)
