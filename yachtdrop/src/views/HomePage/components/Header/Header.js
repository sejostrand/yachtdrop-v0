import { HeaderWrapper, HeaderImg, Yachtdrop, LogIn } from './styles'


const Header = (props) => {
    return (
        <HeaderWrapper>
            <HeaderImg src={ props.image } />
            <Yachtdrop href="/">yachtdrop</Yachtdrop>
            <LogIn href="/ShopPage">Log in</LogIn>
        </HeaderWrapper>  
    )
}

export default Header
