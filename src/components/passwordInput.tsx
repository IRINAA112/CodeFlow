import { useState } from "react";
import { Input } from "@nextui-org/react";
import { UseFormRegisterReturn } from "react-hook-form";


export default function Password({register}: {register: UseFormRegisterReturn<any>;}){
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    return(
        <Input
        {...register}
        label="password"
        variant="bordered"
        placeholder="Enter your password"
        endContent={
          <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
            {isVisible ? (
              <p className="fa-solid fa-eye text-gray-400"/>
            ) : (
              <p className="fa-solid fa-eye-slash text-gray-400"/>
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
        className="max-w-xs"
      />
    );
}
