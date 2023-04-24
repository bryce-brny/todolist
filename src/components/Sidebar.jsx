
import {FaInbox,FaCalendar,FaCalendarAlt,FaChevronDown } from 'react-icons/fa'
export function Sidebar(){
    return (
        <aside className='sidebar'>
        <section className='sidebar__generic'>
        <ul className='generic__lists'>
           <li className='action'>
             <span>
                 <FaInbox />
             </span>
             <h6>Inbox</h6> 
           </li>
           <li>
             <span>
                 <FaCalendar />
             </span>
             <h6>Today</h6> 
           </li>
           <li>
             <span>
                 <FaCalendarAlt />
             </span>
             <h6>Next 7 Days</h6> 
           </li>
        </ul>
        </section> 
        <section className='sidebar__middle'>Projects</section> 
        
   
   
        <section className='sidebar__projects'>
       <ul className='project__lists'>
       <li className=''>
             <span>
                 <FaChevronDown />
             </span>
             <h6>ProjectA</h6> 
           </li>
           <li>
             <span>
                 <FaChevronDown />
             </span>
             <h6>ProjectA</h6> 
           </li>
       </ul>
   
   
   
        </section> 
       
         
       </aside>

    )
}