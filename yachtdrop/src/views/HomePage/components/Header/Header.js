import { HeaderWrapper, HeaderImg, Yachtdrop, LogIn } from './styles'


const Header = ({ image }) => {
    return (
        <HeaderWrapper>
            <HeaderImg src={ image } />
            <Yachtdrop href="/">yachtdrop</Yachtdrop>
            <LogIn href="/ShopPage">Log in</LogIn>
        </HeaderWrapper>  
    )
}

export default Header
