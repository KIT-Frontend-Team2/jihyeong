import React from 'react'
import styled from "styled-components";

const ProductDetailTemplate = () => (
    <S.Wrapper>
        <S.Container>
            <S.FlexBox>
                <S.LeftSection>
                    <S.Imgbox></S.Imgbox>
                </S.LeftSection>
                <S.RightSection>

                </S.RightSection>
            </S.FlexBox>
        </S.Container>
    </S.Wrapper>
)

export default ProductDetailTemplate

export const S = {}

S.Wrapper = styled.div`
  width: 100%;
  height: auto;
`
S.Container = styled.div`
  max-width: 1100px;
  width: 90%;
  margin: 0 auto;
`

S.FlexBox = styled.div`
  display: flex;
  
  > div {
    width: 50%;
  }
`

S.LeftSection = styled.div`
`

S.RightSection = styled.div`
`

S.Imgbox = styled.div`
  width: 500px;
  height: 0;
  padding-bottom: 100%;
  background: gray;
`