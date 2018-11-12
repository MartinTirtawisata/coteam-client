import React from 'react';
import './homepage.css';
import 'antd/dist/antd.css';

import {Progress, Button} from 'antd';
import {Link} from 'react-router-dom';

import SocialCardSection from './social-card-section';
// import Sidebar from './sidebar';

export default class HomePage extends React.Component {
    // componentDidMount(){
    //     this.props.dispatch()
    // }
    render (){
        return(
            <div className="main-section">
                <div className="content-page">

                    <div className="top-header">
                        <div className="user-display">
                            <p>Martin Tirtawisata</p>
                            <p className="user-title">Software Engineer</p>
                        </div>
                        <div className="progress-checklist-display">
                        <Link to='/social-card'><Progress style={{paddingRight:'20px'}} type="circle" percent={100} width={80} format={() => "Social Card"}  /></Link>
                        <Link to='/survey'><Progress style={{paddingRight:'20px'}} type="circle" percent={50} width={80} format={() => "Team Reflection"}  /></Link>
                        {/* <Link to='/survey'><Progress type="circle" percent={0} width={80} format={() => "Timeline"}  /></Link>
                             */}
                        </div>
                    </div>
                    
                    <SocialCardSection />

                </div>
                <div className="sidebar-menu">
                    <Link to='/social-card'><Button style={{width:'100%'}} type="dashed" size="large">Create a social card</Button></Link>
                    <Link to='/survey'><Button style={{width:'100%'}}type="dashed" size="large">Team reflection</Button></Link>
                    {/* <Link to='/survey'><Button style={{width:'100%'}}type="dashed" size="large">Your Timeline</Button></Link> */}
                </div>
            </div>
        )
    }
}
