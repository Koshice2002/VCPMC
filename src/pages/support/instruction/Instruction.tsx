import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import MainLayout from '../../../layout/MainLayout';
import FormInstruction from '../../../components/support/form/instruction/FormInstruction';

const Instruction = () => {

  return (
    <MainLayout>
        <h3 style={{ color: 'gray', marginBottom: '-10px' }}>
            Hỗ trợ <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Hướng dẫn sử dụng
        </h3>
        <h1> Hướng dẫn sử dụng </h1>
        
        <FormInstruction></FormInstruction>
    </MainLayout> 
  )
};

export default Instruction
