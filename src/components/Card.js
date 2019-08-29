import React from 'react'

import './Card.css'

class Card extends React.Component {

  render() {
    return (
      <div className='col-4'>

        <div className='row justify-content-center'>
          <div className='col-11 card-container'>

            <div className='row justify-content-center my-3'>
              <div className='col-8'>
                <img className='img-fluid img-card' src={'https://i.imgur.com/J0BD0Fd.png'} alt={'Foto Tarjeta'} />
              </div>
            </div>

            <div className='text-center px-2'>
              <h1>Francisco Cobas</h1>
              <h3>Profesor de Desarrollo Web</h3>
            </div>

            <div className='text-center py-3'>
              <button>Seleccionar</button>
            </div>

          </div>
        </div>

      </div>
    )
  }
}

export default Card;