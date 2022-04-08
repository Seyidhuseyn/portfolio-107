import React from 'react'
import Typed from 'react-typed';

const Header = () => {
  return (
    <div className='header-wrapper'>
        <div className="main-info">
            <h1>Graphic Designer and composer</h1>
            <Typed
            className='typed-text'
                strings={[
                    'Coposer',
                    'Graphic designer',
                    'Front-end developer']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                </Typed>

        </div>
    </div>
  )
}

export default Header