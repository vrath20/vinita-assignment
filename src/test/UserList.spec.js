import React from "react";
import { shallow } from "enzyme";
import configureStore from 'redux-mock-store';
import  List  from "../components/UserList";

let state;

describe("UserList", () => {
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


  it("renders  for empty props", () => {
    const component = shallow(<List  />);
    const div = component.find("div");
    expect(div.first().text()).toEqual("Loading...");
  });

  it("renders  when props is available", () => {
    const component = shallow(<List user={state} />);
    const h2 = component.find("h2");
    expect(h2.first().text()).toEqual("Eve Holt");
  });



})
