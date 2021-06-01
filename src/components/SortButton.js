import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SortButton = ({ handleClick }) => {
    return (
        <button className="focus:outline-none transform active:scale-75" onClick={handleClick}>
            <FontAwesomeIcon className="ml-1" icon="sort" />
        </button>

    )
}

export default SortButton
