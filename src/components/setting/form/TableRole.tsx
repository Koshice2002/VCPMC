import { Checkbox } from 'antd';
import React, { useState } from 'react';

const TableRole = () => {
  const [tableData1, setTableData1] = useState([
    {
      maChucNang: 'nguoidung_tao',
      chucNang: 'Tạo người dùng',
    },
    {
      maChucNang: 'nguoidung_capnhat',
      chucNang: 'Cập nhật thông tin người dùng',
    },
    {
      maChucNang: 'nguoidung_phanquyen',
      chucNang: 'Phân quyền người dùng',
    },
    {
      maChucNang: 'nguoidung_xoa',
      chucNang: 'Xóa người dùng',
    },
    {
      maChucNang: 'nguoidung_xemchitiet',
      chucNang: 'Xem thông tin chi tiết',
    },
  ]);

  const [tableData2, setTableData2] = useState([
    {
      maChucNang: 'nguoidung_xemdanhsach',
      chucNang: 'Danh sách Media',
    },
    {
      maChucNang: 'nguoidung_capnhat',
      chucNang: 'Tải lên Media',
    },
    {
      maChucNang: 'nguoidung_chinhsua',
      chucNang: 'Chỉnh sửa thông tin Media',
    },
    {
      maChucNang: 'nguoidung_chinhsua',
      chucNang: 'Xóa Media',
    },
    {
      maChucNang: 'nguoidung_pheduyet',
      chucNang: 'Phê duyệt Media',
    },
  ]);

  return (
    <table >
      <thead>
        <tr>
          <th style={{width: '225px', color: '#FFAC69',height: '47px', textAlign: 'left' }}>Nhóm chức năng</th>
          <th style={{width: '63px', textAlign: 'left'  }}><Checkbox></Checkbox> </th>
          <th style={{width: '310px', color: '#FFAC69',height: '47px', textAlign: 'left' }}>Mã chức năng</th>
          <th style={{width: '371px', color: '#FFAC69',height: '47px', textAlign: 'left' }}>Chức năng</th>
        </tr>
      </thead>
      <tbody >
        <>
          {tableData1.map((row, index) => (
            <tr key={index}>
                {index === 0 && (
                    <td rowSpan={tableData1.length} style={{ width: '225px', height: '47px' }}>Quản lý người dùng</td>
                )}
                <td style={{ width: '63px', borderBottom: '1px solid gray' }}><Checkbox></Checkbox></td>
                <td style={{ width: '310px', height: '47px', borderBottom: '1px solid gray' }}>{row.maChucNang}</td>
                <td style={{ width: '371px', height: '47px', borderBottom: '1px solid gray' }}>{row.chucNang}</td>
            </tr>
          ))}

          {tableData2.map((row, index) => (
            <tr key={index}>
                {index === 0 && (
                    <td rowSpan={tableData2.length} style={{ width: '225px', height: '47px' }}>Quản lý thư viện</td>
                )}
                <td style={{ width: '63px', borderBottom: '1px solid gray' }}><Checkbox></Checkbox></td>
                <td style={{ width: '310px', height: '47px', borderBottom: '1px solid gray' }}>{row.maChucNang}</td>
                <td style={{ width: '371px', height: '47px', borderBottom: '1px solid gray' }}>{row.chucNang}</td>
            </tr>
          ))}
        </>
      </tbody>
    </table>
  );
};

export default TableRole;
