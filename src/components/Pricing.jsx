import { CheckCircle2, SpaceIcon } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div id="pricing" className="prAnimation mt-20 mx-4 lg:mx-[100px]">
      <h2 className="text-3xl font-[500] sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">Pricing</h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && <span className="bg-gradient-to-tr from-orange-600 to-orange-400 text-transparent bg-clip-text text-xl mb-4 ml-2">(Most popular)</span> }
                </p>
                <p className="mb-8">
                  <span className="text-5xl mt-6 mr-2">{option.price}</span>
                  <span className="text-neutral-400 tracking-normal">/Month</span>
                </p>
                <ul>
                  {option.features.map((feature, index) => (
                    <li key={index} className="mt-8 flex items-center">
                      <CheckCircle2 />
                      <span className="ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#" className="text-xl mt-20 inline-flex w-full  justify-center items-center py-3 px-4 border rounded-lg border-orange-700 hover:bg-orange-600 transition duration-300 hover:scale-[1.05] active:scale-[1]  ease-in-out">Subscribe</a>
            </div>
          </div>  
        ))}
      </div>
    </div>
  )
}

export default Pricing;