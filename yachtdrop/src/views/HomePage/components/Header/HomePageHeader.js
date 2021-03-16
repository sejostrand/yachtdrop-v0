import HeaderIcon from '../../img/yd1.jpg'
//import Illustration from '../img/7896.jpg'
import { HeaderWrapper, HeaderImg, Yachtdrop, LogIn } from './styles'


const HomePageHeader = () => {
    return (
        <HeaderWrapper>
            <HeaderImg src={require('../../img/yd1.jpg').default} />
            <Yachtdrop href="/HomePage">yachtdrop</Yachtdrop>
            <LogIn href="/ShopPage">Log in</LogIn>
        </HeaderWrapper>  
    )
}

export default HomePageHeader
