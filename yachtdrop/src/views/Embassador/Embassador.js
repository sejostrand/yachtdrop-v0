import Header from '@views/HomePage/components/Header/Header';
import Footer from '@components/Footer/Footer';
import Image from '@assets/img/yd1.jpg';
import Main from './Main';

const Embassador = () => {
  return (
    <>
      <Header image={Image} />
      <Main />
      <Footer />
    </>
  );
};

export default Embassador;
