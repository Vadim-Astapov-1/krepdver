import './Main.css';

import Description from '../Description/Description';
import CompleteSets from '../CompleteSets/CompleteSets';
import Extra from '../Extra/Extra';
import Advantages from '../Advantages/Advantages';
import Video from '../Video/Video';
import Map from '../Map/Map';

function Main({ handleCardSubmit }) {
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
