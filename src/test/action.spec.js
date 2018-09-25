import React from "react";
import { shallow } from "enzyme";
import  {addUser}  from "../action/SaveUserAction";
import  {getMoreUsers}  from "../action/GetMoreUserAction";
import  {deleteUser}  from "../action/DeleteUserAction";



describe("action test case", () => {

  it("called addUser", () => {
    const data = 'data';
    const obj = {
      type:'ADD_USER',
      payLoad: data
    }
    const adduser = addUser(data);
    expect(adduser).toEqual(obj);
  });



  it("called getMoreUsers", () => {
    const obj = {
      type:'GET_MORE_USERS'
    }
    const adduser = getMoreUsers();
    expect(adduser).toEqual(obj);
  });



  it("called deleteUser", () => {
    const data = 'data';
    const obj = {
      type:'DELETE_USER',
      payLoad: data
    }
    const adduser = deleteUser(data);
    expect(adduser).toEqual(obj);
  });
})
