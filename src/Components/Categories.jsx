import React from 'react'

function Categories(props) {
    return (
        <div className='cate' >
            {props.categories && props.categories.map((c) => {
                return (
                    <span> {c.strCategory} </span>
                )
            })}</div>
    )
}

export default Categories