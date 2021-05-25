import React, { Component } from 'react'
import './slider.css'
class Slider extends Component {
  componentDidMount () {
    document.getElementById('slider').src = '/video/video1.mp4'
  }

  render () {
    const SliderChange = (hmmm) => {
      document.getElementById('slider').src = `/video/${hmmm}.mp4`
    }

    return (

      <>
        <section>
          <video id='slider' autoPlay muted loop>
            <source src='' type='video/mp4' />
          </video>
          <div>
            <ul className='navigation'>
              <li onClick={() => SliderChange('video1')}><img src='/img/thumb1.jpg' alt='Trailer' /></li>
              <li onClick={() => SliderChange('video2')}><img src='/img/thumb2.jpg' alt='Trailer' /></li>
              <li onClick={() => SliderChange('video3')}><img src='/img/thumb3.jpg' alt='Trailer' /></li>
              <li onClick={() => SliderChange('video4')}><img src='/img/thumb4.jpg' alt='Trailer' /></li>
              <li onClick={() => SliderChange('video5')}><img src='/img/thumb1.jpg' alt='Trailer' /></li>
              <li onClick={() => SliderChange('video1')}><img src='/img/thumb1.jpg' alt='Trailer' /></li>


            </ul>
          </div>

        </section>

      </>
    )
  }
}

export default Slider
