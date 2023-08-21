import React from 'react'

const ButtonBorder = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className="text-lightBrown border-[1px] border-lightBrown p-2 mt-4 md:mt-8 hover:rounded-md text-sm sm:text-base hover:bg-lightBrown hover:text-white transition-all duration-300">{text}</button>
    )
}

export default ButtonBorder