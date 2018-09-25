import React from "react";
import { shallow } from "enzyme";
import configureStore from 'redux-mock-store';
import sinon from 'sinon';
import  PearsonUsers,{mapDispatchToProps}  from "../container/PearsonUsers";




const mockStore = configureStore([]);
const initialState = [
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

describe("PearsonUsers", () => {
  let component;
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    component = shallow(<PearsonUsers store={store}/>).dive();
  });

  it("renders a h1", () => {
    const h1 = component.find("h1");
    expect(h1.text()).toEqual("Pearson User Management");
  });

   it("addMoreUser() function is called", () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    props.addMoreUser();

    expect(dispatch).toHaveBeenCalledTimes(1);
  });



  it("delUser() function is called", () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    props.delUser();

    expect(dispatch).toHaveBeenCalledTimes(1);
  });



});
