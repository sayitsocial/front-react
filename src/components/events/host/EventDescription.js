import React, { Component } from "react";
import {
  Badge,
  Button,
  Dropdown,
  DropdownButton,
  FormControl,
  Image,
  InputGroup,
} from "react-bootstrap";

class EventDescription extends Component {
  render() {
    return (
      <>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/register/about-you-model.png"}
            alt=''
          />
        </div>
        <div>
          <h2>Event Description</h2>
          <textarea placeholder='description'></textarea>
          <h6>Contact Information</h6>
          <div>
            <InputGroup className='mb-3'>
              <DropdownButton
                as={InputGroup.Prepend}
                variant='primary'
                title='+91 IND'
                id='input-group-dropdown-1'
              >
                <Dropdown.Item href='#'>India</Dropdown.Item>
                <Dropdown.Item href='#'>Australia</Dropdown.Item>
                <Dropdown.Item href='#'>Spain</Dropdown.Item>
                <Dropdown.Item href='#'>Germany</Dropdown.Item>
              </DropdownButton>
              <FormControl aria-describedby='basic-addon1' />
            </InputGroup>
          </div>
          <div>
            <h6>Virtual Points</h6>
            <Badge variant='dark'>
              <Image src={process.env.PUBLIC_URL + "/profile/medal.svg"} />
              150
            </Badge>
          </div>
          <br />
          <hr />
          <div>
            <Button variant='outline-danger'>Back</Button>
            <Button variant='danger'>Next</Button>
          </div>
        </div>
      </>
    );
  }
}

export default EventDescription;
