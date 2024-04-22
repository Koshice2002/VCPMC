import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import MainLayout from '../../../layout/MainLayout';
import FormFeedback from '../../../components/support/form/feedback/FormFeedback';

const Feedback = () => {

  return (
    <MainLayout>
        <h3 style={{ color: 'gray', marginBottom: '-10px' }}>
            Hỗ trợ <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Feedback
        </h3>
        <h1> Feedback </h1>
        
        <FormFeedback></FormFeedback>
    </MainLayout> 
  )
};

export default Feedback
