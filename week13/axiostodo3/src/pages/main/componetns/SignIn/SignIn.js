import { useNavigate } from "react-router-dom";

import * as S from "../style";
import BasicButton from "components/Button/Button";
import axios from "axios";
import SIGN_API from "apis/signApi";

const SignInForm = () => {

    const onPressSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        SIGN_API.login(email, password)
    };

    return (
        <S.Form onSubmit={onPressSignIn}>
            <S.InputBox>
                <label>이메일</label>
                <input name="email" />
            </S.InputBox>
            <S.InputBox>
                <label>비밀번호</label>
                <input name="password" />
            </S.InputBox>
            <BasicButton size={"full"} shape={"default"} variant={"primary"}>
                로그인
            </BasicButton>
        </S.Form>
    );
};
export default SignInForm;
