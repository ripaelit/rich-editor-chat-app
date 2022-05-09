import './DrawerToggle.css';
import { ReactComponent as ThreeDashIcon } from '../../../assets/svg/three-dash.svg';

const DrawerToggle = (props) => {
  return (
    <div className='DrawerToggle'>
      <ThreeDashIcon className='drawer__icon' onClick={props.sidebarToggle}/>
    </div>
  );
};

export default DrawerToggle;
