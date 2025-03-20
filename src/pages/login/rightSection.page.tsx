import GoogleButton from "react-google-button";
import { Controller, useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { Input } from "antd";
import {
  InputLabel,
  InputType,
  TextInputComponents,
} from "../../component/form/input.component";

type LoginParams = {
  label: any;
};
interface ICrediential {
  email: string;
  password: string;
}

const userLoginDTO = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
});

const RightSection = ({ label }: LoginParams) => {
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    } as ICrediential,
    resolver: joiResolver(userLoginDTO),
  });

  const SubmitForm = (data: ICrediential) => {
    console.log("submit", data);
  };
  console.log(errors);

  return (
    <div className="w-full md:w-1/2 p-5 flex flex-col justify-center">
      <h1 className="text-xl font-extrabold text-green-900 text-center md:text-left">
        Login
      </h1>
      <form onSubmit={handleSubmit(SubmitForm)}>
        <div className="mt-4 flex flex-col text-teal-900 md:flex-row">
          <InputLabel>Username:</InputLabel>
          <div>
            <TextInputComponents
              control={control}
              type={InputType.EMAIL}
              errorMsg={errors.email?.message ?? null}
              name={InputType.EMAIL}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-1 text-teal-900">
          <InputLabel>Password:</InputLabel> 
          <div>
            <TextInputComponents
              control={control}
              type={InputType.PASSWORD}
              errorMsg={errors?.password?.message ?? null}
              name={InputType.PASSWORD}
            />
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
            <GoogleButton />
          </div>
        </div>
      </form>
    </div>
  );
};
export default RightSection;
