import { useNavigate, useLocation} from 'react-router-dom';

const SideBar = () => {

  const navigate = useNavigate()
  const location = useLocation() 

  const pathMatchRoute = (route) => {
   if (route === location.pathname){
       return true
   }
  }
  return (
    <div className="sidebar">
        <h3>Menu</h3>
        <div className="sidebarNav">
          <ul className="sidebarListItems">
            <li className="sidebarListItem" onClick={() => navigate('/dashboard')}>
                <p className={pathMatchRoute('/dashboard') ? 'navbarListItemNameActive': 'navbarListItemName'}>Outgoing</p>
            </li>
            <li className="sidebarListItem" onClick={() => navigate('/dashboard')}>
                <p className={pathMatchRoute('/dashboard') ? 'navbarListItemNameActive': 'navbarListItemName'}>Incoming</p>
            </li>
            <li className="sidebarListItem" onClick={() => navigate('/dashboard')}>
                <p className={pathMatchRoute('/dashboard') ? 'navbarListItemNameActive': 'navbarListItemName'}>Service</p>
            </li>
            <li className="sidebarListItem" onClick={() => navigate('/dashboard')}>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default SideBar