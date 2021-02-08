import { Form, Input, Button, Checkbox } from 'antd';
import React, { Component } from 'react';

import { onFinish,onFinishFailed } from "./add.ts";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default class AddPlan extends Component{
    constructor(props){
        super(props)
        this.state={
            form:{
                name:'',
                content:''
            }
        }
    }
    componentDidMount(){
      const { store } = this.context;
    }

    handlerClick() {
      console.log(this)
  }

    render(){
    // const [form] = Form.useForm()
const { store } = this.context;
    const state = store.getState();
    console.log('111',state)
        return (
            <div>
              <div>111</div>
              <Button onClick={()=>{this.handlerClick()}}>增加</Button>
              <Button>减少</Button>
            </div>
          );
    }
};