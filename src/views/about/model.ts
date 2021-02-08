import { FormInstance } from 'antd/lib/form';
// import React from 'react'


const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

// const formRef = React.createRef<FormInstance>();


  export {
    onFinish,
    onFinishFailed,
    // formRef
  }