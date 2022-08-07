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
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
          <iframe
            className='video__iframe'
            src='https://www.youtube.com/embed/FKFllxbXSR8'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
          <iframe
            className='video__iframe'
            src='https://www.youtube.com/embed/EOYErFyWZIw'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Video;
