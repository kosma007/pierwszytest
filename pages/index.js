import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000 // czas w milisekundach
  };

  return (
    <div>
      <div>
        <p>
        <Link href="/Strona1" style={{ color: 'red' }}>
            Link do następnej strony
          </Link>{' '}
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Slider {...sliderSettings} style= {{width:'50%'}} >
        <div>
          <img src="/img/strefawiedzylogo.png" alt="Slide 1" style={{ width: '100%', borderRadius: '25%' }} />
        </div>
        <div>
          <img src="/img/strefawiedzylogo.png" alt="Slide 2" style={{ width: '100%', borderRadius: '25%' }} />
        </div>
        <div>
          <img src="/img/strefawiedzylogo.png" alt="Slide 3" style={{ width: '100%', borderRadius: '25%' }} />
        </div>
      </Slider>
    </div>

<div style={{ display: 'flex', justifyContent: 'center', marginTop:'50px' }}>
  <p style={{width:'50%'}}>
  Ewrol to firma, która oprócz dystrybucji wysokiej jakości komponentów i mieszanek paszowych przeznaczonych dla bydła, trzody chlewnej oraz drobiu, specjalizuje się również w doradztwie żywieniowym wszystkich grup zwierząt hodowlanych. Jakie korzyści niesie to dla klientów?

Polska jest 6. największym producentem żywności w Europie. W strukturze krajowej produkcji znaczące miejsce zajmuje przemysł mięsny. Jesteśmy pierwszym w Unii Europejskiej producentem mięsa drobiowego, a w produkcji wieprzowiny i wołowiny zajmujemy odpowiednio 4. i 7. miejsce. Warto zaznaczyć, że produkcja tych trzech rodzajów żywca w ciągu ostatnich dwóch dekad wzrosła o 75%. Również przetwory mleczne wytwarzane w ilości 14,5 mln ton rocznie plasują nasz kraj na wysokim, 5. miejscu, a co dziesiąte jajko na terenie UE znosi polska kura. Liczby te pokazują jak wielkie znaczenie ma chów zwierząt w Polsce. Duże pogłowie kreuje popyt na surowce i materiały paszowe, które sprzedawane są przez wiele podmiotów w kraju. Jednak tak mocna pozycja na rynku wynika nie tylko z dużej ilości utrzymywanych zwierząt, ale przede wszystkim z profesjonalizmu polskich hodowców i ciągłego dążenia do poprawy wyników.

Oferując naszym klientom komponenty paszowe nie chcemy być jedynie sprzedawcą, którego rola kończy się w momencie wystawienia faktury i dostarczenia towaru, ale partnerem wspierającym hodowcę na każdym etapie produkcji. Tak naprawdę sprzedaż to dopiero początek. Mając świadomość ciągłych zmian i rosnących potrzeb współczesnej hodowli, Ewrol zajmuje się również doradztwem żywieniowym. 

Jak działamy?

Zaczynamy od siebie. Doradcy Ewrolu to zespół kilkudziesięciu osób, które każdego dnia pracują na rzecz klientów, handlowców i całej firmy, operując na różnych polach. Główni technolodzy ds. drobiu, trzody chlewnej i bydła zajmują się opracowywaniem i doskonaleniem produktów oraz kompleksowych rozwiązań żywieniowych dla każdego gatunku i grupy technologicznej zwierząt. Są również odpowiedzialni za kontakty z ośrodkami naukowymi, które badają m.in. nasze innowacyjne produkty. 

Ważną rolą doradców jest wsparcie merytoryczne handlowców. Każda osoba zaczynająca pracę w handlu otrzymuje pakiet szkoleń dotyczących nie tylko produktów, ale również technologii produkcji trzody chlewnej, bydła oraz drobiu. Później, w trakcie pracy, każdy pracownik handlowy otoczony jest opieką doradców, którzy na bieżąco rozwiązują problemy związane z doborem produktów z oferty, odpowiadają na pytania dotyczące technologii i indywidualnych problemów w  stadach naszych klientów. Zespół doradczy dba również o to, by handlowcy mieli bieżące informacje na temat sytuacji w hodowli każdego gatunku zwierząt, aktualnych problemów i trendów w żywieniu. Odbywa się to w formie cyklicznych szkoleń, spotkań i warsztatów. Dzięki takim działaniom handlowcy stale podnoszą swoją wiedzę i mogą być pierwszą linią wsparcia w rozwiązywaniu problemów w hodowli oraz sprzedawać nie tylko surowce i materiały paszowe, ale również kompleksowe rozwiązania żywieniowe.

  </p>
</div>


    </div>
  );
};
    


