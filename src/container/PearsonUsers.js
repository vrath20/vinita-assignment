import React , { Component } from 'react';
import { connect } from 'react-redux';

import List from '../components/UserList';
import { getMoreUsers } from '../action/GetMoreUserAction';
import { deleteUser } from '../action/DeleteUserAction';

class PearsonUsers extends Component {
	constructor(props){
		super(props);
		this.deleteUser = this.deleteUser.bind(this);
	}

	deleteUser(id) {
		this.props.delUser(id);
	}

	componentDidMount(){
		this.props.addMoreUser();
	}
	
	render(){

		const { usersList } = this.props;

		return(

			<div className="pearson-users">
		        <h1>Pearson User Management</h1>
		        <List user={usersList}  onUserDelete={this.deleteUser}/>
		    </div>

		)
	}

}


 function mapStateToProps(state){
	return {
		usersList: state.UserList
	};
}

export const mapDispatchToProps = (dispatch) => {
	return {
		addMoreUser(){
			dispatch(getMoreUsers());
		},
		delUser(id){
			dispatch(deleteUser(id));
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(PearsonUsers);
