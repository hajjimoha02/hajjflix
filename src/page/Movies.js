import React, { Component } from 'react'
import Container from '../components/container'
import Header from '../components/header'
import './Movies.css'

export default class Movies extends Component {
  state = {
    api: []
  }

  componentDidMount () {
    fetch('https://hajjflix-default-rtdb.europe-west1.firebasedatabase.app/.json')
      .then(response => response.json())
      .then(movies => this.setState({ api: movies }))
  }


  render () {
    const messages = Object.keys(this.state.api.entries)
    .map(key => (
      this.state.api.entries[key].programType === 'movie' ? 
                  <Container titre={this.state.api.entries[key].title.slice(0,26)}
                            description={this.state.api.entries[key].description.slice(0,100) + ' ...'}
                            img={this.state.api.entries[key].images.PosterArt.url}
                            type={this.state.api.entries[key].programType}
                            dateSortie={this.state.api.entries[key].releaseYear}/> : null
    ))
    .slice(0, -30)



    return (
      <>
        <div>
          <Header pageid='movies' />
          <div className='couleur-background '>

            <div className='row' style={{ marginRight: 0 }}>
              <center><img className='img-fluid' width='33%' alt='logo' src='/img/titleseries.gif' /></center>
            </div>
            <div className='row' style={{ marginRight: 0 }}>
              {messages}

            </div>
          </div>

        </div>

      </>
    )
  }
}
