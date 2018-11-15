import React from 'react';
import './homepage.css';
import 'antd/dist/antd.css';

import {Progress, Button, Avatar, Icon, Steps, Card, Tag} from 'antd';
import SocialCardSection from './social-card-section';
// import Sidebar from './sidebar';
const Step = Steps.Step;

export default class HomePage extends React.Component {
    // componentDidMount(){
    //     this.props.dispatch()
    // }
    
    render (){

        function log(e) {
            e.preventDefault();
        }

        const socialMediaStyle = {
            paddingRight: '5px',
            paddingLeft: '5px',
            fontSize: '16px'
        }
        
        return(
            <div className="homepage">

                <div className="banner">
                    <div className="banner-header">
                        <div className="banner-header-avatar">
                            <Avatar shape="square" size={90} icon="user" />
                        </div>
                        <div className="banner-header-user">
                            <h1>Martin</h1> 
                            <p>Software Engineer</p>
                            <p>Personality: Introvert</p>
                        </div>
                        <div className="banner-header-progress">
                            <Progress style={{paddingRight:'100px'}} type="dashboard" percent={90} width={100} format={(percent) => `${percent}% Profile Done`}  />
                        </div>
                    </div>
                    <div className="banner-footer">
                        <a href="https://facebook.com"><Icon style={{paddingRight: '15px', fontSize: '24px', paddingLeft: '10px', paddingBottom: '10px'}} type="facebook" /></a>
                        <a href="https://instagram.com"><Icon style={{paddingRight: '15px', fontSize: '24px'}} type="instagram" /></a>
                        <a href="https://github.com"><Icon style={{paddingRight: '15px', fontSize: '24px'}} type="github" /></a>
                        <a href="https://medium.com"><Icon style={{paddingRight: '15px', fontSize: '24px'}} type="medium" /></a>
                        <a href="https://linkedin.com"><Icon style={{paddingRight: '15px', fontSize: '24px'}} type="linkedin" /></a>
                        <Icon style={{paddingRight: '15px', fontSize: '24px'}} type="loading" />
                    </div>
                </div>
                <div className="section">
                    <div className="section-header">
                        <h1>Thoughts on teamwork</h1>
                        <Tag>I think that teamwork is the core of the team and essential to success.</Tag>
                    </div>

                    <div className="mid-section">
                        <div className="section-left">
                            <h1>Experiences</h1>
                            <Steps progressDot direction="vertical" size="default" current={2}>
                                <Step title="Rebelworks" description="I went to Rebelworks for my intership in Indonesia" />
                                <Step title="BJames" description="An intern I took in the US" />
                                <Step title="Thinkful" description="A Online Intensive bootcamp that I took to enchance my web developing skills" />
                            </Steps>
                        </div>
                        <div className="section-right">
                            <h1>About</h1>
                                <Card title="Interests" style={{ width: '100%', borderRadius: '10px', backgroundColor: 'transparent'}}>
                                    <Tag style={{backgroundColor: 'transparent'}} closable onClose={log}>Basketball</Tag>
                                    <Tag style={{backgroundColor: 'transparent'}} closable onClose={log}>Gaming</Tag>
                                    <Tag style={{backgroundColor: 'transparent'}} closable onClose={log}>Solving Problems</Tag>
                                    <Tag style={{backgroundColor: 'transparent'}} closable onClose={log}>Singing</Tag>
                                    <Tag style={{backgroundColor: 'transparent'}} closable onClose={log}>Watching</Tag>
                                </Card>
                                <br></br>
                                <Card title="Skills" style={{ width: '100%', borderRadius: '10px', backgroundColor: 'transparent'}}>
                                    <Tag style={{backgroundColor: 'transparent'}} closable onClose={log}>Basketball</Tag>
                                    <Tag style={{backgroundColor: 'transparent'}} closable onClose={log}>Gaming</Tag>
                                    <Tag style={{backgroundColor: 'transparent'}} closable onClose={log}>Solving Problems</Tag>
                                    <Tag style={{backgroundColor: 'transparent'}} closable onClose={log}>Singing</Tag>
                                    <Tag style={{backgroundColor: 'transparent'}} closable onClose={log}>Watching</Tag>
                                </Card>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


// <div className="content-page">
//                     <div className="top-header">
//                         <div className="user-display">
//                             <p>Martin Tirtawisata</p>
//                             <p className="user-title">Software Engineer</p>
//                         </div>
//                         <div className="progress-checklist-display">
//                         <Link to='/social-card'><Progress style={{paddingRight:'20px'}} type="circle" percent={100} width={80} format={() => "Social Card"}  /></Link>
//                         <Link to='/survey'><Progress style={{paddingRight:'20px'}} type="circle" percent={50} width={80} format={() => "Team Reflection"}  /></Link>
//                         {/* <Link to='/survey'><Progress type="circle" percent={0} width={80} format={() => "Timeline"}  /></Link>
//                              */}
//                         </div>
//                     </div>
                    
//                     <SocialCardSection />

//                 </div>
//                 <div className="sidebar-menu">
//                     <Link to='/social-card'><Button style={{width:'100%'}} type="dashed" size="large">Create a social card</Button></Link>
//                     <Link to='/survey'><Button style={{width:'100%'}}type="dashed" size="large">Team reflection</Button></Link>
//                     {/* <Link to='/survey'><Button style={{width:'100%'}}type="dashed" size="large">Your Timeline</Button></Link> */}
//                 </div>