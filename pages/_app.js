import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect } from 'react';
import './index.css'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Add your side effects here
  }, []);

  return (
    <>
    <div style={{ width:'100%'}}>


    <div>
      <Header />
      </div>
    <div style={{ textAlign: 'center', minHeight: '50vw', marginTop:'300px', marginBottom:'300px' }}>
      <Component {...pageProps} />
    </div>
    <div>
      <Footer />
      </div>

      </div>
    </>
  );
}

export default MyApp;