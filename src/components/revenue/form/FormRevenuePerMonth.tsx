import React from 'react';

const FormRevenuePerMonth = () => {
    const rows = Array.from({ length: 31 }, (_, index) => (index + 1).toString());

    const columns = Array.from({ length: 10 }, (_, index) => (9 - index) + ' triệu');

    return (
        <div className="chart-report">
            <div className="schedule-column">
                {columns.map((column) => (
                    <div className="schedule-cell line" key={column} style={{color: 'gray'}}>
                        {column} 
                    </div>
                ))}
            </div>
            <div className="schedule-row" style={{marginLeft: '50px'}}>
                {rows.map((row) => (
                    <div className="schedule-cell" key={row} style={{color: 'gray'}}>
                        {row}
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default FormRevenuePerMonth