
import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const TestArea = () => {
    console.log('Component ran')

    const [name, setName] = useState(null)
    const [menu1, setmenu1] = useState(false)
    const [menu2, setmenu2] = useState(false)
    function insertName() {
        setName('Pradip')
    }
    return (
        <div className="navigation bg-gradient-to-r from-blue-700 to-blue-300 flex min-w-full">
            <div className="logo p-1 flex-1 text-white">Navbar</div>
            <div className="rightMenu flex-1 flex justify-evenly relative">
                <div className="dropMenu-1 p-1 mr-2">
                    <button className="focus:outline-none" onClick={()=> {setmenu1(!menu1); menu2 ? setmenu2(false):setmenu2(false)}}>Menu 1<FontAwesomeIcon icon="caret-down" /></button>
                </div>
                <div className="dropMenu-2 p-1 mr-2">
                    <button className="focus:outline-none" onClick={() => {setmenu2(!menu2); (menu1 ? setmenu1(false): setmenu1(false))}}>Menu 2 <FontAwesomeIcon icon="caret-down" /> </button>
                </div>
                <div className={"menu1 absolute top-7 right-56 bg-blue-300" + (menu1 ? '':' hidden')}>
                    <ul className="p-1">
                        <li>
                            <input type="checkbox" value="Option1" id="opt1"/>
                            <label htmlFor="opt1" className="p-1">Option 1</label>
                        </li>
                        <li>
                            <input type="checkbox" value="Option1" id="opt2"/>
                            <label htmlFor="opt2" className="p-1">Option 2</label>
                        </li>
                    </ul>
                </div>
                <div className={"menu2 absolute top-7 right-20 bg-blue-300" + (menu2 ? '':' hidden')}>
                    <ul className="p-1">
                        <li><a href="">Option 1</a></li>
                        <li><a href="">Option 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TestArea
