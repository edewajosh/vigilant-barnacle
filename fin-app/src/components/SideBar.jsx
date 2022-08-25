import { useNavigate, useLocation} from 'react-router-dom';
import { ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg';
import { ReactComponent as ExploreIcon } from '../assets/svg/exploreIcon.svg';
import { ReactComponent as PersonOutlineIcon } from '../assets/svg/personOutlineIcon.svg';

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
            <li className="sidebarListItem" onClick={() => navigate('/')}>
                <p className={pathMatchRoute('/') ? 'navbarListItemNameActive': 'navbarListItemName'}>Outgoing</p>
            </li>
            <li className="sidebarListItem" onClick={() => navigate('/about')}>
                <p className={pathMatchRoute('/about') ? 'navbarListItemNameActive': 'navbarListItemName'}>Incoming</p>
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