import './Nav.scss';
import menu from '../assets/menu.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import { strings } from './App';


function Nav({appData, ...props}) {

  const [open, setOpen] = React.useState(false);
  const [menuStyle, setMenuStyle] = React.useState();

  const onClick = (event) => {
    setMenuStyle({
      'left': (event.clientX - 5) + 'px',
      'top': (event.clientY - 5) + 'px'
    });
    setOpen(!open);
  };

  return (
    <div className={open ? 'Nav Nav-open' : 'Nav Nav-closed'} onClick={onClick}>
      <button className="Nav-toggle">
        <img src={menu} alt="Menu icon" />
      </button>
      <nav className="Nav-menu" style={menuStyle}>
        <Link to={ appData.classroom ? `/${appData.classroom.code}` : '/'}>
          {strings.buildNetwork}
        </Link>
        <Link to={ appData.classroom ? `/${appData.classroom.code}/trained` : '/trained'}>
          {strings.pretrainedModel}
        </Link>
        <Link to={ appData.classroom ? `/${appData.classroom.code}/stats` : ''} disabled={!appData.classroom}>
          {strings.classroomStats}
        </Link>
        <hr/>
        { appData.classroom && (
          <>
            <a onClick={() => {props.onCommand('leave-classroom')}} disabled={!appData.connected}>
              {strings.leaveClassroom}
            </a>
          </>
        )}
        { !appData.classroom && (
          <>
            <a onClick={() => {props.onCommand('join-classroom')}} disabled={!appData.connected}>
              {strings.joinClassroom}
            </a>
            <a onClick={() => {props.onCommand('create-classroom')}} disabled={!appData.connected}>
              {strings.createClassroom}
            </a>
          </>
        )}
      </nav>
    </div>
  );
}

export default Nav;
