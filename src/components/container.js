import React, { Component } from 'react'
import './container.css'
import YTSearch from 'youtube-api-search'

export default class Container extends Component {
  state = {
    video: null
  }


  videoSearch = (term) => {
    YTSearch({key: 'AIzaSyCDh1XfVfKpn6qPinTKa6uVMPEu-hexgJg', term: term}, (videos) => {
      this.props.trailer(this.props.img, videos[0].id.videoId)
    })
    
  }





  render () {

    return (
      <>
        <div className='col-3'>
          <div className='card caard'>
            <div className='img1'><img src={this.props.img} height='600' alt='img1' /></div>
            <div className='title'>{this.props.titre}</div>
            <div className='x '>
              <div className='text'>{this.props.description}
              <a href='#' onClick={() => this.videoSearch(this.props.titre + ' Trailer')}>
                <img className='readmore' src='readmore.gif' alt='readme' height='50' />
              </a>
              </div>
            </div>

            <a href='#'><div className='catagory'>{this.props.type.toUpperCase()} <i className='fas fa-film' /></div></a>
            <a href='#'><div className='views'>{this.props.dateSortie}  <i className='bi bi-calendar' /> </div></a>

          </div>
        </div>
      </>
    )
  }
}
