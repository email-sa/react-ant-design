import { Row, Col, Card  } from 'antd';
import React, { Component } from 'react';
// 引入 ECharts 主模块
// import echarts from 'echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';


const cardList = [
    {content:'访问量',number:1000},
    {content:'总用户',number:100},
    {content:'在线用户',number:10},
    {content:'销量',number:10000},
]


// 首页
export default class Main extends Component{
    render(){
        return (
            
            <>
            <Row gutter={16}>
                    {
                        cardList.map((item,index)=>{
                            // return <Card.Grid key={item} style={gridStyle}>{item.content}</Card.Grid>
                            return <Col className="gutter-row" span={6} key={index}>
                                    <Card title={item.content} bordered={false}>{item.number}</Card>
                                </Col>
                        })
                    }            
            </Row>
            </>
        )
    }
    
}