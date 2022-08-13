import './Main.css';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { websiteName } from '../../utils/constants';

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
    switch(sectionName) {
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
          console.log('Error: ошибка скроллинга');
    }
  }

  useEffect(() => {
    document.title = websiteName;
  }, []);

  useEffect(() => {
    if(location.state !== null) {
      handleScroll(location.state.scrollMain);
    }
  }, [location.state]);

  return(
    <main className='content'>
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
