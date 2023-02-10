import React from 'react'
import '../css/modal.css'


export const ModalComponente = ({children,isOpen,closeModal,title}) => {
  return (
    <article className={`modal ${isOpen && "is-open"}`}>
        <h2>{title}</h2>
        <div className='modal-container'>
            <button className='modal-close' onClick={closeModal}>X</button>
        </div>

        {children}
    </article>
  )
}
