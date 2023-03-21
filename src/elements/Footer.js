import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer mb-0 mt-auto">
            <div id="footer" className="card sharp-corners">
                <div className="card-body mb-0 my-0" style={{bottom: "0"}}>
                    <div className="align-items-center">
                        <span className="text-muted">© 2023 HNOI - SDSU - <NavLink to="/about" >About</NavLink></span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
