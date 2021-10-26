import React from 'react'
import range from 'lodash/range';
import ChevronLeft from '../icons/chevron-left.svg'
import ChevronRight from '../icons/chevron-right.svg'

function Pagination({numberOfPages}) {
    return (
        <div className="w-full text-lg flex flex-wrap">
            <span className="w-5 h-5 rounded-full focus:bg-gray-500 hover:bg-gray-100"><ChevronLeft /></span>
            <div>
                {range(1, numberOfPages + 1).map((num) => <span className="w-5 h-5 rounded-full bg-gray-300 focus:bg-gray-500 hover:bg-gray-100">{num}</span>)}
            </div>
            <span className="w-5 h-5 rounded-full focus:bg-gray-500 hover:bg-gray-100"><ChevronRight /></span>
        </div>
    );
}

export default Pagination;
