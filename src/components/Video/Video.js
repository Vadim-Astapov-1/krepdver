import './Video.css';

function Video() {
  return (
    <section className='video'>
      <div className='container video__container'>
        <h2 className='video__title'>Видео</h2>
        <div className='video__list'>
          <iframe
            className='video__iframe'
            src='https://www.youtube.com/embed/eK8cfGMZySc'
            title='Как установить межкомнатную дверь'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
          <iframe
            className='video__iframe'
            src='https://www.youtube.com/embed/FKFllxbXSR8'
            title='Установка дверей на СК 3'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
          <iframe
            className='video__iframe'
            src='https://www.youtube.com/embed/EOYErFyWZIw'
            title='Установка дверей инструкция СМС К 1 0'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Video;
