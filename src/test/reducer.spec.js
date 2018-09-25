import React from "react";
import { shallow } from "enzyme";
import { combineReducers,createStore }from 'redux';
import  List,{deleteUser}  from "../reducer/UserListReducer";
import rootReducer from "../reducer/index";


describe("reducer case", () => {

  let state;

  beforeEach(() => {
    state = [
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
  });

  it('should return the initial state', () => {
    const expectedResult = state;

    expect(List(state=expectedResult, {})).toEqual(expectedResult);
  });

  it('DELETE_USER case', () => {
    const expectedResult =  [
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
      }
    ];

    expect(List(state=state, {type:'DELETE_USER',payLoad:6})).toEqual(expectedResult);
  });

  it('checking delete user method', () => {
    const expectedResult =  [
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
      }
    ];

    expect(deleteUser( 6,state=state)).toEqual(expectedResult);
  });

  it('checking combineReducer', () => {
    const List = () => [{
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
    }];
    const state = {UserList : List}
    const rootReducer = combineReducers(state);
    const store =createStore(rootReducer);
    expect(store.getState().UserList).toEqual(List());
  })

})
