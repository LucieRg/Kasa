import logo from "../../assets/logo/logo.png"
import "../../styles/footer.scss"
function Footer () {
    return (
        <div className="footer-container">
            <img src={logo}  alt="Logo" />
            <div className="footerText">
            <p>© 2020 Kasa. All</p>
                <p>rights reserved</p>
            </div>
        </div>
    )
}
export default Footer