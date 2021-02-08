import { Table, Space,Button,Modal } from 'antd';
import { Component } from 'react';

import {tableList} from './../../assets/js/mock'
import EditModel from './editModel'




export default class About extends Component{
   constructor(props){
     super(props)
     this.state={
       visible:false,
       editData:{}
     }
   }
   getColumns(){
     let self = this
     return   [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <Button type="primary" onClick={()=>{self.edit(record)}}>编辑</Button>
            <Button type="danger"  onClick={()=>{self.delete(record.key)}}>删除</Button>
          </Space>
        ),
      }
    ];
   }
   // 编辑
   edit(data){
     console.log('bianji',data)
    this.setState({
      visible:true,
      editData:data
    })
   }
   // 删除
   delete(){
    console.log('删除')

   }


   // 确定修改
   handleOk(){
    console.log('确定修改')
   }
   // 关闭弹框，取消修改
   handleCancel(){
    this.setState({
      visible:false,
      editData:{}
    })
   }

    render(){
     

        return(
          <>
            <Table dataSource={tableList} columns={this.getColumns()} />
            <EditModel 
              visible={this.state.visible} 
              data={this.state.editData}
              clickOk={()=>this.handleOk()}
              clickCancel={()=>this.handleCancel()}
            />
          </>
                  
            
    ) 
    }
}