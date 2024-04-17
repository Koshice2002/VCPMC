import React, { useState } from 'react';

const FormSchedule = () => {
    const days = [
        '',
        'Thứ hai',
        'Thứ ba',
        'Thứ tư',
        'Thứ năm',
        'Thứ sáu',
        'Thứ bảy',
        'Chủ nhật',
    ];

    const hours = [
        '01:00',
        '02:00',
        '03:00',
        '04:00',
        '05:00',
        '06:00',
        '07:00',
        '08:00',
        '09:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
        '23:00',
        '24:00',
    ];

    return (
        <div className="schedule-dashboard">
            <div className="schedule-row">
                {days.map((day) => (
                    <div className="schedule-cell" key={day}>
                        {day}
                    </div>
                ))}
            </div>
            <div className="schedule-column">
                {hours.map((hour) => (
                    <div className="schedule-cell line" key={hour}>
                        {hour} 
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FormSchedule;