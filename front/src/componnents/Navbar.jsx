import Menu from "./Menu"
const Navbar = () => {
    return (
        <>
            <header className="header">
                <div className="header__logo">
                    <img className="header__logo__img" src="/logo/logo2.svg" alt="Human beeing running on red backgroud" />
                    <h1 className="header__logo__text">SportSee</h1>
                </div>
                <Menu />
            </header>
        </>
    )  
}

export default Navbar