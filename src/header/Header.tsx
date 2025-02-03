import styled from "styled-components";

export function Header() {
    return (
        <>
            <BoxHeaderBtn>
                <BtnHeader>Home</BtnHeader>
                <BtnHeader>Git</BtnHeader>
                <BtnHeader>Contact</BtnHeader>
            </BoxHeaderBtn>

        </>

    )
}

const BoxHeaderBtn = styled.div.attrs(() => ({}))`
    width: 100%;
    display: flex;
justify-content: end`

const BtnHeader = styled.button.attrs(() => ({}))``

