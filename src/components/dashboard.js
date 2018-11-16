import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchProtectedCard, deleteCard} from '../actions/actionIndex';
// Import Components

// Import third party libraries
import './dashboard.css';
import 'antd/dist/antd.css';
import {Card, Icon} from 'antd';
const {Meta} = Card;




export class Dashboard extends React.Component {
    componentDidMount(){
        this.props.dispatch(fetchProtectedCard())
    }

    handleClick(cardId){
        return this.props.dispatch(deleteCard(cardId))
    }

    render(){
        const cardFlexBoxStyle = {
            minWidth: '285px',
            margin: '20px',
            borderRadius: '7px'
        }

        const createNewProfileStyle = {
            width: '285px',
            margin: '20px auto 0 auto',
            borderRadius: '7px'
        }

        const cardInfo = Object.keys(this.props.card).map((key, index) => {
            let i = parseInt(key, 10);
            let cards = (this.props.card[i]); 
            // console.log(cards)
            return (
                <div key={index}>
                    <Link to={`/userboard/${cards._id}`}>
                        <Card 
                            hoverable 
                            style={cardFlexBoxStyle} 
                            actions={[<Link to={`card-form-edit/${cards._id}`}><Icon type="edit" /></Link>, <Link to="/dashboard"><Icon onClick={this.handleClick(cards._id)} type="delete" /></Link>]}>
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
                        <Card hoverable style={createNewProfileStyle}>
                            <p>Create A New Profile</p>
                        </Card>
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

