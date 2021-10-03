import React from 'react';
import { useGlobalContext } from './context';

function Sidebar() {
  const {
    day_of_week,
    day_of_year,
    timezone,
    week_number,
    datetime,
    isSidebarOpen,
  } = useGlobalContext();

  const themeHour = Number(datetime.slice(0, 2));

  if (isSidebarOpen) {
    return (
      <div
        className={`${
          themeHour > 17 && isSidebarOpen
            ? 'sidebar-night-theme sidebar '
            : 'sidebar-day-theme sidebar '
        }`}
        // className={`${isSidebarOpen ? 'show-sidebar sidebar' : 'sidebar'}`}
      >
        <article className='first-info'>
          <div className='sidebar-single-info'>
            <h4>current timezone</h4>
            <h2>{timezone}</h2>
          </div>
          <div className='sidebar-single-info'>
            <h4>day of the year</h4>
            <h2>{day_of_year}</h2>
          </div>
        </article>
        <article className='second-info'>
          <div className='sidebar-single-info'>
            <h4>day of the week</h4>
            <h2>{day_of_week}</h2>
          </div>
          <div className='sidebar-single-info'>
            <h4>week number</h4>
            <h2>{week_number}</h2>
          </div>
        </article>
      </div>
    );
  } else return [];
}

export default Sidebar;
