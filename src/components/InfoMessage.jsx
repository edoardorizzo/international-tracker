import React from 'react'

export default function InfoMessage({ caption }) {
    return (
        <div className="flex justify-start items-center">
            <div className="info_container me-3">
                <img className='w-full' src='/info_icon.svg' alt='icona informazioni'></img>
            </div>
            <p className="p-small text-white">
                {caption}
            </p>
        </div>
    )
}
