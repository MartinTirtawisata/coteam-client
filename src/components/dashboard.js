import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchProtectedCard} from '../actions/actionIndex';

// Import third party libraries
import './dashboard.css';
import 'antd/dist/antd.css';
import {Card, Icon, Button, Avatar} from 'antd';
const {Meta} = Card;

export class Dashboard extends React.Component {
    componentDidMount(){
        this.props.dispatch(fetchProtectedCard())
    }

    render(){
        const cardFlexBoxStyle = {
            minWidth: '220px',
            margin: '20px',
            borderRadius: '7px'
        }

        const createNewProfileStyle = {
            display: 'block',
            margin: '10px auto 10px auto',
            borderRadius: '5px'
        }

        const cardInfo = Object.keys(this.props.card).map((key, index) => {
            let i = parseInt(key, 10);
            let cards = (this.props.card[i]); 
            return (
                <div key={index}>
                    <Link to={`/userboard/${cards._id}`}>
                        <Card 
                            className="hover-effect"
                            hoverable 
                            style={cardFlexBoxStyle} 
                            cover={<Avatar style={{width: '100%'}} shape="square" size={150} icon="user" />}
                            actions=
                            {[
                                <Link to={`card-form-edit/${cards._id}`}>
                                    <Icon type="edit" />
                                </Link>, 
                                <Link to={`/card-form-delete/${cards._id}`}>
                                    <Icon type="delete" />
                                </Link>
                            ]}
                        >
                            <Meta title={`${cards.first_name} ${cards.last_name}`}/>
                            
                        </Card>
                    </Link>
                </div>
            )
        });
       
        return (
            <div className="dashboard">
                <div className="dashboard-header">
                    <Link to="/card-form-add">
                        <Button className="hover-effect" style={createNewProfileStyle} type="dashed" size="large">Create A New Profile</Button>
                    </Link> 
                </div>
                <div className="dashboard-section">
                    {cardInfo}  
                </div>  
            </div>
        )
    }
}

const mapStateToProps = state => ({
    card: state.index.card
})

export default connect(mapStateToProps)(Dashboard);

