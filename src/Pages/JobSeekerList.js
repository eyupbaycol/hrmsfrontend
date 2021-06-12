import React, { useState, useEffect } from 'react';
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import {Link} from 'react-router-dom';
import jobSeekerService from '../services/JobSeekerService';
function JobSeekerList() {

    const [jobSeekers, setJobSeekers] = useState([]);

    useEffect( async () => {
        let JobSeekerService = new jobSeekerService();
        let {data:{data}} =  await JobSeekerService.getJobSeekers()
        setJobSeekers(data)
    }, [])
    return (
        <div>
        <Table celled>
        <Table.Header>   
          <Table.Row>
            <Table.HeaderCell>Ad</Table.HeaderCell>
            <Table.HeaderCell>Soyad</Table.HeaderCell>
            <Table.HeaderCell>Kimlik No</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {jobSeekers.map((jobSeeker) => (
            <Table.Row key={jobSeeker.userId}>
              <Table.Cell>{jobSeeker.firstName}</Table.Cell>
              <Table.Cell>{jobSeeker.lastName}</Table.Cell>
              <Table.Cell>{jobSeeker.identityNo}</Table.Cell>
              <Table.Cell>{jobSeeker.user.email}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="4">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
        </div>
    )
}

export default JobSeekerList
