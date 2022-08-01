import './Main.css';

import Description from '../Description/Description';
import CompleteSets from '../CompleteSets/CompleteSets';
import Pistols from '../Pistols/Pistols';
import Advantages from '../Advantages/Advantages';
import Videos from '../Videos/Videos';
import Map from '../Map/Map';

function Main() {
  return(
    <main className='content'>
      <Description />
      <CompleteSets />
      <Pistols />
      <Advantages />
      <Videos />
      <Map />
    </main>
  );
}

export default Main;
