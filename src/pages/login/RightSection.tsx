
import GoogleButton from "react-google-button";
import { useForm } from "react-hook-form";
import Joi from "joi"
import { joiResolver } from "@hookform/resolvers/joi";
import { message } from "antd";
type LoginParams = {
  label: any;
};
interface ICrediential {
  email: string | null;
  password: string | null;
}

const userLoginDTO=Joi.object({
  email:Joi.string().email({tlds:{allow:false}}).required().messages({
    "string.base":"Email cannot be Empty"
  }),
  password:Joi.string().required()
})


export const RightSection = ({ label }: LoginParams) => {
const {register, formState:{errors}, handleSubmit}=useForm({
  defaultValues:{
      email:null,
      password:null
  } as ICrediential,
  resolver:joiResolver(userLoginDTO)
})

  const SubmitForm = (data:ICrediential) => {
  console.log("submit",data);
  
  };
  console.log(errors);
  
  return (
    <div className="w-full md:w-1/2 p-5 flex flex-col justify-center">
      <h1 className="text-xl font-extrabold text-green-900 text-center md:text-left" >
        Login
      </h1>
      <form onSubmit={handleSubmit(SubmitForm)}>
        <div className="mt-4 flex flex-col md:flex-row">
          <label className="block text-md font-medium py-3 md:w-2/5">
              
            {label}
          </label>
<div>
<input
            // name="email"
            type="email"
            // onChange={(event) => {
            //   setCrediential({
            //     ...crediential,
            //     email: event.target.value,
            //   });
            // }}
            {...register("email",{required:true})}
            placeholder="Enter your Email..."
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
          />
          <div className="flex text-red-700 italic text-sm">
            {
            errors.email?"*Email is required !":""
            }
          </div>
</div>
        </div>
        <div className="flex flex-col md:flex-row mt-4">
          <label className="block text-md font-medium py-3 md:w-2/5">
            Password:
          </label>
          <div>
          <input
          // name="passsword",
            type="password"
            placeholder="Enter your password..."
            // onChange={(event) => {
            //   setCrediential({
            //     ...crediential,
            //     password: event.target.value,
            //   });
            // }}
            {...register("password",{required:true})}
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
          />
          <div className="flex text-red-700 italic text-sm">
            {
             errors?.password?.message
            }
          </div>
          </div>
        </div>
        <div className="mt-4 flex justify-end space-x-6">
          <button className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 hover:cursor-pointer">
            Cancel
          </button>
          <button className="bg-green-800 text-white py-2 px-6 rounded-md hover:bg-green-900 hover:cursor-pointer">
            Submit
          </button>
        </div>
        <div className="font-medium text-green-900 italic underline flex justify-end mt-4">
          <a href="#">Forget password?</a>
        </div>
        <div className="flex space-x-5 justify-center">
          <div className="text-sm text-black  flex space-x-1 mt-3">
            <p>Don't Have Account?</p>
            <a href="#" className="text-teal-900 text-sm italic underline">
              {" "}
              Sign Up Here!!!
            </a>
          </div>
          <hr className="mt-5 text-teal-900 " />
        </div>
        <hr className="my-4 text-teal-100 md-" />
        <div className=" gap-2">
          <div>
            <GoogleButton className="" />
          </div>
        </div>
      </form>
    </div>
  );
};
