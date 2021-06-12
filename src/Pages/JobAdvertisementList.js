import React from 'react'
import { Divider, Grid, Image, Segment, Card, List, Button } from 'semantic-ui-react'
function JobAdvertisementList() {
    return (
        <Segment>
            <Grid columns={2}>
                <Grid.Column >
                    <List>
                        <List.Item>
                            <Card fluid>
                                <Card.Content>
                                <Image
                                        floated='right'
                                        size='mini'
                                        src='/images/avatar/large/steve.jpg'
                                    />
                                    <Card.Header>Steve Sanders</Card.Header>
                                    <Card.Meta>Friends of Elliot</Card.Meta>
                                    <Card.Description>
                                        Steve wants to add you to the group <strong>best friends</strong>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </List.Item>
                    </List>
                </Grid.Column>
                <Grid.Column>
                    <h2>Formik Kısmı buraya gelicek</h2>
                </Grid.Column>
            </Grid>

            <Divider vertical></Divider>
        </Segment >
    )
}

export default JobAdvertisementList
