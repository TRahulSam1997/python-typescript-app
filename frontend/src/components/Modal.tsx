import React, { Component } from "react";
import { TodoItems } from '../App';

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export interface State {
  activeItem: TodoItems;
}

export default class CustomModal extends Component <any, State> {
    constructor(props: State) {
        super(props);
        this.state = {
          activeItem: this.props.activeItem,
        };
    }

    handleChange = (e: any) => {
      let { name, value } = e.target;

      if (e.target.type === "checkbox") {
        value = e.target.checked;
      }

      const activeItem = { ...this.state.activeItem, [name]: value };

      this.setState({ activeItem });
    };


}