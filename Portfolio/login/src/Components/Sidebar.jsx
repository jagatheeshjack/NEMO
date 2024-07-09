import React from 'react'
import '../styel.css';
import Userlist from '../Admin/Userlist';
export default function Sidebar({isOpen,setIsopen}) {

  return (
    
    <div className='Pages'>
        <div className={`sidebar${isOpen ? '.open':''}`}>
        </div>
        <div className='Container'>
                
        </div>
        <div className='Container'>
            <h1>Content2</h1>
        </div>
        <div className='Container'>
            <h1>Content3</h1>
        </div>
        <div className='Container'>
            <h1>Content4</h1>
        </div>
    </div>
    
  )
}
