import './Main.css';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import logo from '../../images/logo.png';
import { websiteLink } from '../../utils/constants';

import Description from '../Description/Description';
import CompleteSets from '../CompleteSets/CompleteSets';
import Extra from '../Extra/Extra';
import Advantages from '../Advantages/Advantages';
import Video from '../Video/Video';
import Map from '../Map/Map';

function Main({ handleCardSubmit }) {
  const location = useLocation();

  const completeSetsRef = useRef();
  const videoRef = useRef();
  const mapRef = useRef();

  function handleScroll(sectionName) {
    switch (sectionName) {
      case 'complete-sets':
        completeSetsRef.current.scrollIntoView();
        break;
      case 'video':
        videoRef.current.scrollIntoView();
        break;
      case 'map':
        mapRef.current.scrollIntoView();
        break;
      default:
        window.scrollTo(0, 0);
    }
  }

  useEffect(() => {
    if (location.state !== null) {
      handleScroll(location.state.scrollMain);
    }
  }, [location.state]);

  return (
    <main className='content'>
      <Helmet prioritizeSeoTags>
        <meta
          name='description'
          content='Специальные монтажные комплекты для профессиональной установки межкомнатных дверей. Дверная коробка монтируется в проем любой готовности. Справиться даже новичок, подходит для самостоятельного монтажа!'
        ></meta>
        <meta
          property='og:title'
          content='Крепеж для установки межкомнатных дверей в Москве'
        ></meta>
        <meta
          property='og:description'
          content='Специальные монтажные комплекты для профессиональной установки межкомнатных дверей. Дверная коробка монтируется в проем любой готовности. Справиться даже новичок, подходит для самостоятельного монтажа!'
        ></meta>
        <meta property='og:type' content='website'></meta>
        <meta property='og:url' content={websiteLink}></meta>
        <meta property='og:image' content={logo}></meta>
        <title>Крепеж для установки межкомнатных дверей в Москве</title>
      </Helmet>
      <Description />
      <CompleteSets handleCardSubmit={handleCardSubmit} sectionRef={completeSetsRef} />
      <Extra handleCardSubmit={handleCardSubmit} />
      <Advantages />
      <Video sectionRef={videoRef} />
      <Map sectionRef={mapRef} />
    </main>
  );
}

export default Main;
