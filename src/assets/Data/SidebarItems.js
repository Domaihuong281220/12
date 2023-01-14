import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    className: 'side-text'
  },
  {
    title: 'Day Care',
    path: '/daycare',
    icon: <IoIcons.IoIosPaper />,
    className: 'side-text'
  },
  {
    title: 'Services',
    path: '/history-booking',
    icon: <FaIcons.FaCartPlus />,
    className: 'side-text'
  },
  {
    title: 'Account',
    path: '/user',
    icon: <IoIcons.IoMdPeople />,
    className: 'side-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    className: 'side-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    className: 'side-text'
  }
];
