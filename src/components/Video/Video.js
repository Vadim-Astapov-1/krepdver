import './Video.css';

function Video({ sectionRef }) {
  return (
    <section className='video' ref={sectionRef}>
      <div className='container video__container'>
        <h2 className='video__title'>Видео</h2>
        <div className='video__list'>
          <iframe
            className='video__iframe'
            loading='lazy'
            src='https://www.youtube.com/embed/eK8cfGMZySc'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
          <iframe
            className='video__iframe'
            loading='lazy'
            src='https://www.youtube.com/embed/FKFllxbXSR8'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
          <iframe
            className='video__iframe'
            loading='lazy'
            src='https://www.youtube.com/embed/EOYErFyWZIw'
            title='YouTube video player'
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
