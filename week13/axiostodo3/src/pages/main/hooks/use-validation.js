import { useEffect, useState } from "react";

const useValidation = (validationData) => {
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

    useEffect(() => validationData.password === validationData.passwordConfirm ? setIsPasswordConfirm(true) : setIsPasswordConfirm(false), [validationData.password, validationData.passwordConfirm])

    return [isPasswordConfirm]
}


export default useValidation