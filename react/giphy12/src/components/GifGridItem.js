import React from 'react'

export const GifGridItem = ({ title, url }) => {
    return (
        <div className='col-12 col-md-4 col-lg-3'>
            <div className='card'>
                <img src={url} class="card-img-top" alt={title} />
                <div className='card-body'>
                    <h5 className='card-title'>{title}</h5>
                </div>
            </div>
        </div>

    )
}
