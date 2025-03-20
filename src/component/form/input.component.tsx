import { Input } from "antd";
import { Controller } from "react-hook-form";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export enum InputType {
    TEXT = "text",
    EMAIL = "email",
    PASSWORD = "password",
    URL = "url",
}

export interface ITextInputProps {
    control: any;
    errorMsg: string | null;
    name: string;
    type?: InputType;
}

export const TextInputComponents = ({
    control,
    errorMsg = "",
    name,
    type = InputType.TEXT,
}: ITextInputProps) => {
    return (
        <>
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <>
                        <Input
                            placeholder={`Enter your ${name}...`}
                            className="bg-teal-100! "
                            {...field}
                            type={type}
                            status={errorMsg ? "error" : ""}
                        />
                        <div className="flex text-red-700 italic text-sm">
                            {errorMsg}
                        </div>
                    </>
                )}
            />
        </>
    );
};

export interface IInputLabel {
    labelFor?: string;
    children: any;
    classes?: string;
}
export const InputLabel = ({
    labelFor,
    children,
    classes = "block text-md font-medium py-3 md:w-2/5",
}: IInputLabel) => {
    return (
        <>
            <label className={classes} htmlFor={labelFor}>
                {children}
            </label>
        </>
    );
};

export const PasswrodInput = ({
    control,
    errorMsg = "",
    name,
    type = InputType.TEXT,
}: ITextInputProps) => {
    return (
        <>
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <>
                        <Input.Password
                            placeholder={`Enter your ${name}...`}
                            iconRender={(visible) =>
                                visible ? <AiFillEyeInvisible /> : <AiFillEye />
                            }
                            className="bg-teal-100! "
                            {...field}
                            type="password"
                            status={errorMsg ? "error" : ""}
                        />
                        <div className="flex text-red-700 italic text-sm">
                            {errorMsg}
                        </div>
                    </>
                )}
            />
        </>
    );
};
