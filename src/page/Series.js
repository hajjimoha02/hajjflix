import React, { Component } from 'react'
import Header from '../components/header'
import Container from '../components/container'
import YouTube from 'react-youtube'
import Trailer from '../components/Trailer'

export default class Series extends Component {
  state = {
    api: [],
    trailer: false,
    trailerimage: '',
    trailervid: ''
  }

  addTrailer = (img, vid) => {
    this.setState({ trailer: true, trailerimage: img, trailervid: vid })
  }





 


  componentDidMount () {
    fetch('https://hajjflix-default-rtdb.europe-west1.firebasedatabase.app/.json')
      .then(response => response.json())
      .then(series => this.setState({ api: series }))
  }





  render () {
    const messages = Object.keys(this.state.api.entries)
    .map(key => (
      this.state.api.entries[key].programType === 'series' && this.state.api.entries[key].releaseYear >= 2010 ? 
                  <Container titre={this.state.api.entries[key].title.slice(0,26)}
                            description={this.state.api.entries[key].description.slice(0,100) + ' ...'}
                            img={this.state.api.entries[key].images.PosterArt.url}
                            type={this.state.api.entries[key].programType}
                            trailer={(img,vid) => this.addTrailer(img,vid)}
                            dateSortie={this.state.api.entries[key].releaseYear}/> : null
    ))
    .slice(0, 21)




    


    return (
      <>
        <div>
          <Header pageid='series' />
          <div className='couleur-background '>


            <div className='row' style={{ marginRight: 0 }}>
              <center><img className='img-fluid' width='33%' alt='logo' src='/img/titleseries.gif' /></center>
            </div>
            {this.state.trailer ? <Trailer img={this.state.trailerimage} vid={this.state.trailervid} /> : null}
            <div className='row' style={{ marginRight: 0 }}>
              {messages}

            </div>
          </div>


        </div>

      </>
    )
  }
}
