import { useState } from "react";
import { greetingMessage } from "../../utilities/helpers"

export const LeftSection = ()=>{
    const [data] = useState(
        "Welcome to our eCommerce platform! Please log in to continue shopping and enjoy exclusive deals. Our platform offers a wide range of products, secure payment options, and fast delivery services to enhance your shopping experience."
      );
    return(
        <div className="w-full md:w-1/2 bg-green-900 text-white p-6 flex flex-col justify-center rounded-t-lg md:rounded-l-lg md:rounded-t-none">
                  <h1 className="text-2xl font-bold mx-30">Welcome!!!</h1>
                  <h2 className="text-lg mt-2 font-bold text-amber-500  "><marquee behavior="" direction="">{greetingMessage()}</marquee></h2>
                  <p className="mt-4 text-sm">{data}</p>
                </div>
    )
}