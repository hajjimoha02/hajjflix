import Header from '../components/header'
import Slider from '../components/slider'

import './Site.css'

function Home () {
  return (
    <>
      <div>

        <Header pageid='home' />

        {/* SLIDER */}
        <Slider />

        {/* NOS Series */}
        {/* <div class='card '>
          <div class='card-header '>
          <h1 class='display-4 font-italic'>Popular Series</h1>
        </div>
        </div>

        <div className='container-fluid' />

        <div className='row align-items-center'>
          <div className='col'>
          <Container />
        </div>
          <div className='col'>
          <Container />
        </div>
          <div className='col'>
          <Container />
        </div>
        </div> */}

        {/* NOS Films */}

        {/* <div class='card'>
          <div class='card-header '>
          <h1 class='display-4 font-italic'>Popular Films</h1>
        </div>
        </div>

        <div className='container-fluid' />

        <div className='row align-items-center'>
          <div className='col'>
          <Container />
        </div>
          <div className='col'>
          <Container />
        </div>
          <div className='col'>
          <Container />
        </div>
        </div> */}
      </div>

    </>

  )
}

export default Home
