const initialState =
[
  {
    id: 4,
    first_name: "Eve",
    last_name: "Holt",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
  },
  {
    id: 5,
    first_name: "Charles",
    last_name: "Morris",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
  },
  {
    id: 6,
    first_name: "Tracey",
    last_name: "Ramos",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
  }
];

function checkUniqueValues(state, data){
  const initialUsers = state;
  if(initialUsers) {
    var uniqueId = initialUsers.map(hero => hero.id);
    uniqueId = [...new Set(uniqueId)];
    if(data.data){
      let newUsers = data.data;
        var uniqueUsers =  newUsers.filter((user) => {
        let userId = user.id;
        return (!uniqueId.includes(userId));
      });
    }
    return [...state, ...uniqueUsers];
  }
}

export const  deleteUser = (id,state)=>{

  var deletedUserList =  state && state.filter((user) => {
      return (user.id !== id);
    });
    return deletedUserList ;
}

const List = (state= initialState, {type, payLoad}) => {
	switch(type){
		case 'ADD_USER' :
      const userData = checkUniqueValues(state,payLoad);
		  return userData;

    case 'DELETE_USER' :
      const deletedUserList = deleteUser(payLoad,state);
      return deletedUserList;

		default :
		  return state;
	}

}


export default List;
