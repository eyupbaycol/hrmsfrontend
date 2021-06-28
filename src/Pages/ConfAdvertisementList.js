import React, { useState, useEffect } from 'react'
import { Icon, Label, Menu, Table, Container, Button, Header } from 'semantic-ui-react'
import { getJobAdvertiesmentList, updateAdvertisementActivation } from '../services/JobAdvertisementService';
import { toast } from 'react-toastify';
export default function ConfAdvertisementList() {
    const [advertiesmentList, setAdvertisementList] = useState([]);
    useEffect(() => {
         getList();
    }, [])
    const getList = async () => {
        let response = await getJobAdvertiesmentList(false);
        setAdvertisementList(response);
    }
    const confirmationHandler = async (advertisementId) => {
        let message = await updateAdvertisementActivation(advertisementId, true);
        toast.success(message.message)
        getList();
    }
    return (
        <div>
            <Container className="advertiesmentContainer">
                <Header color="orange" as='h2' icon textAlign='center'>
                    <Icon name='users' circular />
                    <Header.Content>İş İlanları Listesi</Header.Content>
                </Header>
                <Table padded celled >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                            <Table.HeaderCell>Email Adresi</Table.HeaderCell>
                            <Table.HeaderCell>Web Adresi</Table.HeaderCell>
                            <Table.HeaderCell>Şirket Telefonu</Table.HeaderCell>
                            <Table.HeaderCell>Aranılan Pozisyon</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {advertiesmentList.map((advertisement) => (
                            <Table.Row key={advertisement.id} warning>
                                <Table.HeaderCell>{advertisement.employer.companyName}</Table.HeaderCell>
                                <Table.HeaderCell>{advertisement.employer.user.email}</Table.HeaderCell>
                                <Table.HeaderCell>{advertisement.employer.companyWebsite}</Table.HeaderCell>
                                <Table.HeaderCell>{advertisement.employer.companyPhone}</Table.HeaderCell>
                                <Table.HeaderCell>{advertisement.jobPosition.position}</Table.HeaderCell>
                                <Table.HeaderCell textAlign="center">
                                    <Button basic color="green" size="tiny" onClick={() => {
                                        confirmationHandler(advertisement.id)
                                    }}>Onayla</Button>
                                </Table.HeaderCell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='6'>
                                <Menu floated='right' pagination>
                                    <Menu.Item as='a' icon>
                                        <Icon name='chevron left' />
                                    </Menu.Item>
                                    <Menu.Item as='a'>1</Menu.Item>
                                    <Menu.Item as='a'>2</Menu.Item>
                                    <Menu.Item as='a'>3</Menu.Item>
                                    <Menu.Item as='a'>4</Menu.Item>
                                    <Menu.Item as='a' icon>
                                        <Icon name='chevron right' />
                                    </Menu.Item>
                                </Menu>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
            </Container>
        </div>
    )
}
