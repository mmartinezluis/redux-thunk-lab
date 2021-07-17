// write your CatList component here
import React from 'react'

const CatList = props => {
    const pics = props.catPics.map((pic) => <img key={pic.id} src={pic.url} alt={pic.source_url} />)
    
    return(
        <ul>{pics}</ul>
    )
}

export default CatList