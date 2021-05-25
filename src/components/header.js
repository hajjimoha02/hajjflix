import React, { Component } from 'react'
import './header.css'

export default class Header extends Component {
  componentDidMount () {
    document.getElementById(this.props.pageid).className = 'btn btn-header'
  }

  render () {
    return (
      <>
        <div className='navbar navbar-expand navbar-dark bg-dark '>

          <img className='img-fluid col-md-1 col-sm-2' alt='logo' width='20%' src='/img/logo.gif' />

          <div className='col-11 d-flex'>
            <div className='col-4' />
            <div className='collapse navbar-collapse'>
              <ul className='col-7 navbar-nav'>
                <li className='nav-item '>
                  <i className='bi bi-film' />
                  <a id='home' className='btn nav-link ' href='/'>Home 🎬</a>
                </li>
                <li className='nav-item '>
                  <a id='movies' className='btn nav-link  ' href='/movies'>Movies 📀</a>
                </li>
                <li className='nav-item '>
                  <a id='series' className='btn nav-link  ' href='/series'>Series 💿</a>
                </li>
              </ul>
              <div className='row col-5'>
                <div className='col-4 justify-content-end' />
                <div className='col-2 justify-content-end'>
                  <button type='button' className='btn btn-dark'>Login</button>
                </div>
                <div className='col-6 justify-content-end'>
                  <button type='button' className='btn btn-freetrial'>Start your free trial</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </>
    )
  }
}
