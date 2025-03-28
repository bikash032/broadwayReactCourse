import axios from "axios";
import GoogleButton from "react-google-button";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa6";

import {
    InputLabel,
    InputType,
    PasswrodInput,
    TextInputComponents,
} from "../../../component/form/input.component";
import { Button } from "antd";
import { NavLink } from "react-router";

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

const RightSection = () => {
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

    const SubmitForm = async (data: ICrediential) => {
        try {
            console.log("login page");

            await axios.post("http://localhost:9000/api/v1/auth/login", data, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
        } catch (exception) {
            console.log({ exception });
        }
    };

    return (
        <div className="w-full md:w-1/2 p-5 flex flex-col justify-center">
            <h1 className="text-xl w-full font-extrabold text-green-900 text-center md:text-left">
                Login
            </h1>
            <form onSubmit={handleSubmit(SubmitForm)}>
                <div className="mt-4 flex-row text-teal-900 md:flex-row">
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
                <div className=" md:flex-row mt-1 text-teal-900">
                    <InputLabel>Password:</InputLabel>
                    <div>
                        <PasswrodInput
                            control={control}
                            type={InputType.PASSWORD}
                            errorMsg={errors?.password?.message ?? null}
                            name={InputType.PASSWORD}
                        />
                    </div>
                </div>
                <div className="mt-4 flex justify-end space-x-6">
                    <Button
                        // style={}
                        htmlType="reset"
                        className="bg-red-600! text-white! font-bold! px-6!"
                    >
                        <FaRegTrashAlt />
                        Cancel
                    </Button>
                    <Button
                        htmlType="submit"
                        className="bg-teal-700! hover:bg-teal-800! text-white! font-bold! px-6!"
                    >
                        <FaRegPaperPlane />
                        Submit
                    </Button>
                </div>
                <div className="font-medium text-green-900 italic underline flex justify-end mt-4">
                    <NavLink to="/forget-password">Forget Password?</NavLink>
                </div>
                <div className="flex space-x-5 justify-center">
                    <div className="text-sm text-black  flex space-x-1 mt-3">
                        <p>Don't Have Account?</p>
                        <NavLink
                            to="/register"
                            className="text-sm italic underline text-teal-700"
                        >
                            Sign Up here !!
                        </NavLink>
                    </div>
                    <hr className="mt-5 text-teal-900 " />
                </div>
                <hr className="my-4 text-teal-100 md-" />
                <div className=" gap-2">
                    <NavLink
                        className="hover:cursor-pointer"
                        to="/google-login"
                        target="_blank"
                    >
                        <GoogleButton />
                    </NavLink>
                </div>
            </form>
        </div>
    );
};
export default RightSection;
