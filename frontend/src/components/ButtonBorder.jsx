import React from 'react'

const ButtonBorder = ({ text }) => {
    return (
        <button className="text-lightBrown border-[1px] border-lightBrown p-2 mt-10 hover:rounded-md text-base hover:bg-lightBrown hover:text-white transition-all duration-300">{text}</button>
    )
}

export default ButtonBorder