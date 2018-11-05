import React from 'react';
import './homepage.css';
import 'antd/dist/antd.css';

import {Progress, Button} from 'antd';
import {Link} from 'react-router-dom';

import SocialCardSection from './social-card-section';
import Sidebar from './sidebar';

export default class HomePage extends React.Component {
    render (){
        return(
            <div>
                {/* <div className="sidebar">
                    <Sidebar />
                </div> */}
                <div className="content-page">
                    <div className="top-header">
                        <div className="user-display">
                            <p>Martin Tirtawisata</p>
                            <p className="user-title">Software Engineer</p>
                        </div>
                        <div className="progress-checklist-display">
                            <Progress type="circle" percent={100} width={60} format={() => "Done"}  />
                            <Progress type="circle" percent={100} width={60} format={() => "Done"}  />
                            
                        </div>
                    </div>
                    
                    <Link to='/social-card-form'><Button className="add-social-card-btn" type="dashed" size="large">Create a social card</Button></Link>
                    <Link to='/question-form'><Button type="dashed" size="large">Team reflection</Button></Link>
                    


                    <SocialCardSection />
                </div>
            </div>
        )
    }
}
