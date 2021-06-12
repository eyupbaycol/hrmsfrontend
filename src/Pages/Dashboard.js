import React from 'react'
import Nav from '../Layouts/Nav'
import {Grid} from 'semantic-ui-react';
import { Route } from "react-router";
import JobAdvertisementList from './JobAdvertisementList';
import JobSeekerList from './JobSeekerList';

function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    {/* <Grid.Column width={4}> */}
                        {/* <Categories /> */}
                    {/* </Grid.Column> */}
                    <Grid.Column width={16}>
                        {/* <Route exact path="/" component={} /> */}
                        <Route path="/jobSeeker" component={JobSeekerList} />
                        <Route exact path="/jobAdvertisement" component={JobAdvertisementList} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default Dashboard
