import React, { Component } from 'react';
import { Router,Route,HashRouter, Switch,  Redirect } from 'react-router-dom';
import { IndexRoute, hashHistory/* , Redirect */ } from 'react-router'



import Home from '../views/home/home.js'
import About from '../views/about/about.js'
import AddPlan from '../views/addPlan/addPLan.jsx'
import Main from '../views/main/main.js'

export default class RouteConfig extends Component{
    render(){
        return(
            <HashRouter>
                <Home>
                    <Route path="/main" component={Main}/>
                    <Route path="/about" exact component={About}/>
                    <Route path="/addPlan" exact component={AddPlan}/>
                </Home>
            </HashRouter>
            // <HashRouter>
            //     <Switch>
            //         // 设置一个exact来强制绝对匹配
            //         <Route path="/" exact component={home}/>
            //         <Route path="/about"  component={about}></Route>
            //         <Route path="/addPlan"  component={addPlan}></Route>
            //         <Redirect to="/"/>
            //     </Switch>
            // </HashRouter>
        )
    }
}