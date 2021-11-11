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

export interface Props {
  activeItem: TodoItems;
}

export default class CustomModal extends Component <any, Props> {
    constructor(props: Props) {
        super(props);
        this.state = {
          activeItem: this.props.activeItem,
        };
    }
}