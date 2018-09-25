import React from 'react';

const List = (props) => {
	if(!props.user){
      return <div>Loading...</div>

	}
	const userList = props.user;
	const userItem = userList.map((user) => 
		<div className="user-block-wrapper" key={user.id}>
			<div className="user-block" >
				<div className="text--center">
					<img src={user.avatar} alt={user.first_name} />
				</div>
				<h2>{user.first_name +' '+ user.last_name}</h2>
				<button onClick={() => props.onUserDelete(user.id)}>Delete</button>
			</div>
		</div> 
	);
	return userItem;    
};



export default List;