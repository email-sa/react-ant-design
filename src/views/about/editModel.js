import { Component } from 'react';
import React from 'react'
import {  
    Form,
    Input,
    Checkbox,
    Radio,
    Select,
    Modal } from 'antd';
import {onFinish,onFinishFailed} from './model'
import { FormInstance } from 'antd/lib/form';
 



const CheckboxGroup = Checkbox.Group;


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
// checkbox
  const likeOptions = ['唱歌','跳舞','画画']
  const defaultCheckedList = ['唱歌'];

 
// radio
const radioList = [
    { label: '男', value: '0' },
    { label: '女', value: '1' }
]
const changeRadio = (e)=>{

}


  class ModelForm extends Component {
      constructor(props){
          super(props)
          this.state={
              form:{}
          }
          
      }
    componentDidUpdate(){
      console.log('@', this)  
    }
      
    
      render(){
        // const [form] = Form.useForm();
  
        const changeCheckBox= (e) =>{
            console.log('值改变')
        }
        console.log('props',this.props,this.props.data.name)
        return (
          <Form
            {...layout}
            name="basic"
            // ref={formRef}
            initialValues={this.props.data}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="姓名"
              name='name'
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input/>
            </Form.Item>
      
            <Form.Item label="性别" name="sex">
              <Radio.Group options={radioList} onChange={changeRadio}>
              </Radio.Group>
            </Form.Item>
      
            <Form.Item label="地址" name="address">
              <Input.TextArea/>
            </Form.Item>
            <Form.Item label="爱好" name="like">
                <CheckboxGroup options={likeOptions}   onChange={changeCheckBox} />
            </Form.Item>
    
            
          </Form>
        );
      }
    
  };


 const EditModel =(props)=>{
    const {form} = Form.useForm()
       
    console.log('this',props)
    return(
    <Modal title="Basic Modal" visible={props.visible} 
        onOk={props.clickOk} onCancel={props.clickCancel}
        cancelText="取消" okText="确定"
      >
        <ModelForm data={props.data} form={form}/>
      </Modal>
  )
  }
  export default EditModel
// export default class  EditModel extends Component{
//     constructor(props){
//       super(props)
      
//     }
//     render(){
//     //    const {form} = Form.useForm()
       
//     //   console.log('this',this.props)
//       return(
//       <Modal title="Basic Modal" visible={this.props.visible} 
//           onOk={this.props.clickOk} onCancel={this.props.clickCancel}
//           cancelText="取消" okText="确定"
//         >
//           <ModelForm data={this.props.data} form={form}/>
//         </Modal>
//     )
//     }
//   }