import React from 'react'
import AdminPanelSideBar from '../Layouts/AdminPanelSideBar'
import { Route } from "react-router";
import ConfAdvertisementList from './ConfAdvertisementList';
import { Grid } from 'semantic-ui-react'
export default function AdminDashBoard() {
    return (
        <div>
            <Grid divided='vertically'>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <AdminPanelSideBar />
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <Route path="/confAdvertisementList" component={ConfAdvertisementList} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
