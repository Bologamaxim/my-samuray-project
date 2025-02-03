import styled from "styled-components";

export function MyInformation() {
    return (
        <>
            <BoxSectionMyInformation>
                <InfoContainer>
                    <BoxMyInformation> Hello</BoxMyInformation>
                    <HiMyInformation>Welcome!</HiMyInformation>
                    <MyIdMyInformation>my name is <br/>Bologa Maxim</MyIdMyInformation>
                </InfoContainer>

                <PhotoMyInformation
                    src={'https://sun9-65.userapi.com/s/v1/if2/ExEWSGMKLbKKPCWOqr37Cnoxfd6S4i5_QyJKRmRsr_OXLc6w5e6l_Cn6XdUfVGgiUgSvLWAubkNQGMKpzJKODPb8.jpg?quality=96&as=32x41,48x61,72x91,108x137,160x203,240x305,360x457,476x604&from=bu&u=-Je4knkE5uzyqcE2L2Eb-CwaI1whJ8JBplb9wD_WfHU&cs=476x604'}></PhotoMyInformation>

            </BoxSectionMyInformation>


        </>

    )
}

const BoxSectionMyInformation = styled.div`
    display: flex;
justify-content: space-between`
const InfoContainer = styled.div``
const BoxMyInformation = styled.div``
const HiMyInformation = styled.h2``
const MyIdMyInformation = styled.h1``
const PhotoMyInformation = styled.img.attrs((props) =>
    ({src: props.src}))`
    width: 300px`