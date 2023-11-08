import { useState } from "react";
import { useForm } from "react-hook-form";
import { CenterPanel } from "./CenterPanel.jsx";
import { Card } from "./Card.jsx"
import { Label } from "./Label.jsx";
import { Input } from "./Input.jsx";
import { Button } from "./Button.jsx";

export const Main = () => {
  const [cardData, setCardData] = useState({})
  const { register, formState: {errors}, handleSubmit } = useForm();
  const [success, setSuccess] = useState(false)
  const handleRegistration = () => setSuccess(true);

  const handleInput = ({target}) => {
    setCardData({
      ...cardData,
      [target.name]: target.value
    })
  }
  
  return (
    <main className="min-h-screen">
      <div className="flex flex-col md:flex-row">
        <div className='w-full md:w-1/3 md:h-screen bg-[url("/images/bg-main-mobile.png")] md:bg-[url("/images/bg-main-desktop.png")] bg-no-repeat bg-cover flex items-center justify-end'>
          <div className='flex flex-col gap-0 md:gap-10'>
            <Card imgPath="/images/bg-card-front.png" imgAltText="card front" position="top">
              <div className="absolute top-0 w-full h-full p-4 md:p-6 text-white flex flex-col justify-between">
                <div className="flex gap-4 items-center">
                  <div className="bg-white w-10 h-10 rounded-[100%]"></div>
                  <div className="border-white border w-5 h-5 rounded-[100%]"></div>
                </div>
                <div className="flex flex-col gap-1 md:gap-4">
                  <div className="font-semibold text-lg md:text-4xl tracking-wider">
                    {cardData.number ? cardData.number : '0000 0000 0000 0000'}
                  </div>
                  <div className="flex justify-between">
                    <div className="tracking-wider">
                      {cardData.name ? cardData.name : 'JANE APPLESEED'} 
                    </div>
                    <div className="tracking-wider">
                      {cardData.expMM ? cardData.expMM : '00'}/{cardData.expYY ? cardData.expYY : '00'}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <Card imgPath="/images/bg-card-back.png" imgAltText="card back" position="bottom">
              <div className="absolute text-white top-[40%] md:top-[43%] right-10 md:right-16 text-xl tracking-wider">
                {cardData.cvc ? cardData.cvc : '000'}
              </div>  
            </Card>
          </div>
        </div>

        { !success &&
          <CenterPanel>
            <form className="w-[95%] md:w-1/3 flex flex-col gap-4" onSubmit={handleSubmit(handleRegistration)}>
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">cardholder name</Label>
                <Input register={register} name={"name"} placeholder="e.g. Jane Appleseed" handleInput={handleInput} validation={{required: true}}  />
                {errors.name && <p className="text-red-500">Can't be blank</p>}  
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="number">card number</Label>
                <Input 
                  register={register} 
                  name="number" 
                  placeholder="e.g. 1234 5678 9123 0000" 
                  validation={{required: true, pattern:  /^\d{4} \d{4} \d{4} \d{4}$/ }}
                  handleInput={handleInput} />
                {errors.number && <p className="text-red-500">Wrong format</p>}
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col gap-2 w-80">
                  <Label htmlFor="expMM">Exp. date (mm/yy)</Label>
                  <div className="flex justify-between gap-3">
                    <Input 
                      register={register} 
                      name="expMM" 
                      handleInput={handleInput} 
                      placeholder="MM"
                      validation={{required: true, minLength: 2, maxLength: 2}} />

                    <Input 
                      register={register} 
                      name="expYY" 
                      handleInput={handleInput} 
                      placeholder="YY"
                      validation={{required: true, minLength: 2, maxLength: 2}} />
                  </div>
                  {(errors.expMM || errors.expYY) && <p className="text-red-500">Can't be blank</p>}
                </div>
                <div className="w-1/2 flex flex-col gap-2">
                  <Label htmlFor="cvc">cvc</Label>
                  <Input 
                    register={register} 
                    name="cvc" 
                    handleInput={handleInput} 
                    placeholder="CVC"
                    validation={{required: true, minLength: 3, maxLength: 3}} />
                  {errors.cvc && <p className="text-red-500">Can't be blank</p>}
                </div>
              </div>

              <Button>Confirm</Button>
            </form>
          </CenterPanel>
        }

        {
          success && (
            <CenterPanel>
              <div className="w-1/3 text-center">
                <img className="mx-auto" src="/images/icon-complete.svg" alt="complete" />
                <div className="font-bold text-4xl mt-8">
                  THANK YOU!
                </div>
                <div className="text-gray-400 mt-2">
                  We've added your card details
                </div>
                <div className="w-full">
                  <Button>Continue</Button>
                </div>
              </div>
            </CenterPanel>
          )
        }
      </div>
    </main>
  )
}