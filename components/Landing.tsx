import { Fragment } from "react"
import NavBar from "./Navbar"
import Footer from "./Footer"
import Content from "./Content";


const Landing = (): JSX.Element => (
    <Fragment>
        <div className="flex flex-col h-screen">
        <NavBar />
        <Content />
        <Footer />
        </div>


    </Fragment>
)



export default Landing;