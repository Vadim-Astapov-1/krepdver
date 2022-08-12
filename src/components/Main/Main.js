import './Main.css';
import { useEffect } from 'react';

import { websiteName } from '../../utils/constants';

import Description from '../Description/Description';
import CompleteSets from '../CompleteSets/CompleteSets';
import Extra from '../Extra/Extra';
import Advantages from '../Advantages/Advantages';
import Video from '../Video/Video';
import Map from '../Map/Map';

function Main({ handleCardSubmit }) {

  useEffect(() => {
    document.title = websiteName;
  }, [])

  return(
    <main className='content'>
      <Description />
      <CompleteSets handleCardSubmit={handleCardSubmit} />
      <Extra handleCardSubmit={handleCardSubmit} />
      <Advantages />
      <Video />
      <Map />
    </main>
  );
}

export default Main;

// <CompleteSets handleCardSubmit={handleCardSubmit} />
//<Extra handleCardSubmit={handleCardSubmit} />
//<Advantages />
//<Video />
//<Map />
