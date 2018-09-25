import React from "react";
import { shallow } from "enzyme";
import { put, takeLatest } from 'redux-saga/effects';
import  getUserListSaga, {getUserList,result} from "../saga/UserListSaga";
import { addUser } from '../action/SaveUserAction';

describe("getUserListSaga", () => {

  let userListSaga;

    beforeEach(() => {
      userListSaga = getUserListSaga();
    });

    it('should start task to watch for GET_MORE_USERS action', () => {
      const takeLatestDescriptor = userListSaga.next().value;

      expect(takeLatestDescriptor).toEqual(
        takeLatest('GET_MORE_USERS', getUserList)
      );
    });

    it('should dispatch the "addUser" action for success response', () => {
      let userSaga = getUserList();
       userSaga.next();
      const list = [
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
      const response = {
        body: {
          data: list,
          total: 12,
        },
      };
      let putDescriptor = userSaga.next(response).value;
      expect(putDescriptor).toEqual(
        put(addUser(response))
      );
    });


})
