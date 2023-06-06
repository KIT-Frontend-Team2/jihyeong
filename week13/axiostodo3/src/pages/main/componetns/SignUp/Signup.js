import BasicButton from "../../../../components/Button/Button";
import useInputs from "../../../../hooks/use-inputs";
import * as S from "../style";
import SIGN_API from "apis/signApi";
import useValidation from "pages/main/hooks/use-validation";

const SignUpForm = () => {
    const [{ email, password, passwordConfirm }, onChangeForm] = useInputs({
        email: "",
        password: "",
        passwordConfirm: "",
    });

    const [isPasswordConfirm] = useValidation({ password, passwordConfirm })

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) return;
        if (!isPasswordConfirm) return;
        SIGN_API.signUp(email, password)
    }

    return (
        <S.Form>
            <S.InputBox>
                <label>이메일</label>
                <input onChange={onChangeForm} name="email" />
            </S.InputBox>
            <S.InputBox>
                <label>비밀번호</label>
                <input onChange={onChangeForm} name="password" />
            </S.InputBox>
            <S.InputBox>
                <label>비밀번호 확인</label>
                <input onChange={onChangeForm} name="passwordConfirm" />
            </S.InputBox>
            {!isPasswordConfirm ? <p>비밀번호가 일치하지 않습니다.</p> : null}
            <BasicButton size={"full"} shape={"default"} variant={"primary"}
                onClick={handleSignUpSubmit}
            >
                회원가입
            </BasicButton>
        </S.Form>
    );
};
export default SignUpForm;
