import React from 'react';
import FullCalendar from '@fullcalendar/react';
import daygridPlugin from '@fullcalendar/daygrid';
 
const NewCalendar = () => {
    return (
        <div>
            <FullCalendar 
                plugins={[daygridPlugin]}
            />
        </div>
    )
}

export default NewCalendar
