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
            src='https://www.youtube.com/embed/FKFllxbXSR8'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            srcdoc="
              <style>
                  body, .full {
                      width: 100%;
                      height: 100%;
                      margin: 0;
                      position: absolute;
                      display: flex;
                      justify-content: center;
                      object-fit: cover;
                  }
              </style>
              <a
                  href='https://www.youtube.com/embed/FKFllxbXSR8?autoplay=1'
                  class='full'
              >
                  <img
                      src='https://vumbnail.com/FKFllxbXSR8.jpg'
                      class='full'
                  />
                  <svg
                      version='1.1'
                      viewBox='0 0 68 48'
                      width='68px'
                      style='position: relative;'
                  >
                      <path d='M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z' fill='#f00'></path>
                      <path d='M 45,24 27,14 27,34' fill='#fff'></path>
                  </svg>
              </a>
          "
          ></iframe>
          <iframe
            className='video__iframe'
            loading='lazy'
            src='https://www.youtube.com/embed/EOYErFyWZIw'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            srcdoc="
              <style>
                  body, .full {
                      width: 100%;
                      height: 100%;
                      margin: 0;
                      position: absolute;
                      display: flex;
                      justify-content: center;
                      object-fit: cover;
                  }
              </style>
              <a
                  href='https://www.youtube.com/embed/EOYErFyWZIw?autoplay=1'
                  class='full'
              >
                  <img
                      src='https://vumbnail.com/EOYErFyWZIw.jpg'
                      class='full'
                  />
                  <svg
                      version='1.1'
                      viewBox='0 0 68 48'
                      width='68px'
                      style='position: relative;'
                  >
                      <path d='M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z' fill='#f00'></path>
                      <path d='M 45,24 27,14 27,34' fill='#fff'></path>
                  </svg>
              </a>
          "
          ></iframe>
          <iframe
            className='video__iframe'
            loading='lazy'
            src='https://www.youtube.com/embed/eK8cfGMZySc'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            srcdoc="
              <style>
                  body, .full {
                      width: 100%;
                      height: 100%;
                      margin: 0;
                      position: absolute;
                      display: flex;
                      justify-content: center;
                      object-fit: cover;
                  }
              </style>
              <a
                  href='https://www.youtube.com/embed/eK8cfGMZySc?autoplay=1'
                  class='full'
              >
                  <img
                      src='https://vumbnail.com/eK8cfGMZySc.jpg'
                      class='full'
                  />
                  <svg
                      version='1.1'
                      viewBox='0 0 68 48'
                      width='68px'
                      style='position: relative;'
                  >
                      <path d='M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z' fill='#f00'></path>
                      <path d='M 45,24 27,14 27,34' fill='#fff'></path>
                  </svg>
              </a>
          "
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Video;
