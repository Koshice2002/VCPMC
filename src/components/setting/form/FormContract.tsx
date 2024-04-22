import { Checkbox } from 'antd';
import React, { useState } from 'react';

const FormContract = () => {
  const [tableData1, setTableData1] = useState([
    {
        STT: '1',
        LoaiHopDong: 'Giá trị bài hát',
        DoanhThu: '20%',
    },
    {
        STT: '2',
        LoaiHopDong: 'Trọn gói',
        DoanhThu: '20%',
    },
  ]);

  return (
    <div className='form-horizon'>
        <div style={{width: '868px', height: '180px', backgroundColor: '#2F2F41', border: '1px solid transparent', borderRadius: '16px'}}>
            <table style={{margin: '16px 24px'}}>
                <thead>
                    <tr>
                    <th style={{width: '225px', color: '#FFAC69',height: '47px', textAlign: 'left' }}>STT</th>
                    <th style={{width: '310px', color: '#FFAC69',height: '47px', textAlign: 'left' }}>Loại hợp đồng</th>
                    <th style={{width: '371px', color: '#FFAC69',height: '47px', textAlign: 'left' }}>Doanh thu VCPCM/hợp đồng (Đơn vị: %)</th>
                    </tr>
                </thead>
                <tbody >
                    <>
                    {tableData1.map((row, index) => (
                        <tr key={index}>
                            <td style={{ width: '310px', height: '47px', borderTop: '1px solid gray' }}>{row.STT}</td>
                            <td style={{ width: '310px', height: '47px', borderTop: '1px solid gray' }}>{row.LoaiHopDong}</td>
                            <td style={{ width: '371px', height: '47px', borderTop: '1px solid gray' }}>{row.DoanhThu}</td>
                        </tr>
                    ))}
                    </>
                </tbody>
            </table>
        </div>
        <div style={{width: '649px', height: '180px', backgroundColor: '#2F2F41', border: '1px solid transparent', borderRadius: '16px', marginLeft: '24px'}}>
            <div style={{margin: '16px 24px'}}>
                <h1 style={{marginBottom: '40px'}}>Cảnh báo hết hạn khai thác tác phẩm</h1>
                <h3><strong style={{marginRight: '10px'}}>Hợp đồng được cảnh báo trước thời gian hết hạn:</strong> 365 ngày</h3>
            </div>
        </div>                
    </div>
  );
};

export default FormContract;
