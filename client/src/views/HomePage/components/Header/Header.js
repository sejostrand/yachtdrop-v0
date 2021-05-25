import { HeaderWrapper, HeaderImg, Yachtdrop, LogIn } from './styles'


const Header = ({ image }) => {
    return (
        <HeaderWrapper>
            <HeaderImg src={ image } />
<<<<<<< HEAD
            {/* <Yachtdrop href="/">yachtdrop</Yachtdrop>
            <LogIn href="/ShopPage">Log in</LogIn> */}
=======
            <Yachtdrop href="/">yachtdrop</Yachtdrop>
            <LogIn href="/ShopPage">Log in</LogIn>
>>>>>>> ea90d30c360c2026f9839a8a04e797fe2e53fc8a
        </HeaderWrapper>  
    )
}

export default Header
