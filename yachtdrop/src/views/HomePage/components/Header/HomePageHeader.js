import HeaderIcon from '../../img/yd1.jpg'
import Sea from '../../img/sea.jpg'
import { HeaderWrapper, HeaderImg, Yachtdrop, LogIn } from './styles'


const HomePageHeader = ({ src }) => {
    return (
        <HeaderWrapper>
            <HeaderImg src={ Sea }/* src={require('../../img/yd1.jpg').default} */ />
            <Yachtdrop href="/">yachtdrop</Yachtdrop>
            <LogIn href="/ShopPage">Log in</LogIn>
        </HeaderWrapper>  
    )
}

export default HomePageHeader
