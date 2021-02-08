import { Form, Input, Button, Checkbox } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {increment, 
  decrement } from './../../store/actions'


const mapStateToProps = state => {
  console.log('state',state)
  return({
  number: state.counter
})
};
const mapDispatchToProps=(dispatch, ownProps)=>{
  console.log('dispatch',dispatch)
  return {
    increase: (...args) => dispatch(increment(...args)),
    decrease: (...args) => dispatch(decrement(...args))
  }
}


 class AddPlan extends Component{
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
      console.log(this)
    }

    handlerClick() {
      console.log(this)
  }

    render(){
        return (
            <div>
              <div>{this.props.number}</div>
              <Button onClick={()=>{this.props.increase()}}>增加</Button>
              <Button onClick={()=>{this.props.decrease()}}>减少</Button>
            </div>
          );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPlan);
