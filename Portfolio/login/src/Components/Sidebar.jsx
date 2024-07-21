import React from 'react'
import '../styel.css';
import Userlist from '../Admin/Userlist';
import UserTable from '../Admin/UserTable';
import Test from './Test';
export default function Sidebar({isOpen,setIsopen}) {

  return (
    
    <div className='Pages'>
        <div className={`sidebar${isOpen ? '.open':''}`}>
        </div>
        <div className='Container' id='userTable'>
          <UserTable></UserTable>
        </div>
        <div className='Container'>
            <Test></Test>
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
