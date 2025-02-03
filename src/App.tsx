import {Header} from "./header/Header.tsx";
import {MyInformation} from "./MyInformation/MyInformation.tsx";
import {SectionAboutMe} from "./SectionAboutMe/SectionAboutMe.tsx";
import { MySkils } from "./MySkils/MySkils.tsx";
import {MyWorkExpereance} from "./MyWorkExpireance/MyWorkExpereance.tsx";





function App() {

    return (
        <>
            <Header></Header>
            <MyInformation></MyInformation>
            <SectionAboutMe></SectionAboutMe>
            <MySkils></MySkils>
            <MyWorkExpereance></MyWorkExpereance>

        </>
    )
}


export default App
