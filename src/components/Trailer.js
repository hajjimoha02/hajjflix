import React, { Component } from 'react'
import YouTube from 'react-youtube'

export default class Trailer extends Component {
  render () {
    return (
      <>
        <div class='container test'>

          <div class='row'>
            <div class='col-4 imgtrailer'>
              <img style={{ float: 'right' }} src={this.props.img} height='400' />
            </div>

            <div class='col-7 '>
              <h1 style={{ color: '#ffc107' }}>TRAILER</h1>
              <YouTube videoId={this.props.vid} />
            </div>
          </div>
        </div>
      </>
    )
  }
}
