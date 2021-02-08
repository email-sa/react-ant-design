import { Component } from 'react';
import React from 'react'
import {  
    Form,
    Input,
    Checkbox,
    Radio,
    Modal } from 'antd';
import {onFinish,onFinishFailed} from './model'
 



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
          this.formRef=React.createRef()
      }
      componentDidMount(){
      // console.log('###',this.props)  
        // this.props.setFormValues()
      this.formRef.current.setFieldsValue(this.props.data)

      }
    componentDidUpdate(){
      this.formRef.current.setFieldsValue(this.props.data)
      // this.props.setFormValues()

    }
    
      render(){
        return (
          <Form
            {...layout}
            name="basic"
            ref={this.formRef}
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
                <CheckboxGroup options={likeOptions}/>
            </Form.Item>
          </Form>
        );
      }
    
  };


//  const EditModel =(props)=>{
//   this.formRef=React.createRef()
       
//     console.log('this',props)
//     return(
//     <Modal title="Basic Modal" visible={props.visible} 
//         onOk={props.clickOk()} onCancel={props.clickCancel}
//         cancelText="取消" okText="确定"
//       >
//         <ModelForm data={props.data} form={form}/>
//       </Modal>
//   )
//   }
//   export default EditModel
export default class  EditModel extends Component{
    constructor(props){
      super(props)
      // this.formRef=React.createRef()
      // this.setFormValues = this.setFormValue.bind(this)
      
    }
    // setFormValues(){
    //   this.formRef.current.setFieldsValue(this.props.data)
    // }
    render(){
    //    const {form} = Form.useForm()
       
    //   console.log('this',this.props)
      return(
      <Modal title="Basic Modal" visible={this.props.visible} 
          onOk={this.props.clickOk} onCancel={this.props.clickCancel}
          cancelText="取消" okText="确定"
        >
          <ModelForm data={this.props.data} formRef={this.formRef} setFormValues={this.setFormValues}/>
        </Modal>
    )
    }
  }