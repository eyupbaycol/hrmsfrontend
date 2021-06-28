import React from 'react'
import Nav from '../Layouts/Nav'

import { Route } from "react-router";
import JobAdvertisementList from './JobAdvertisementList';
import JobSeekerList from './JobSeekerList';

function Dashboard() {
    return (
        <div>
            <Route path="/jobSeeker" component={JobSeekerList} />
            <Route exact path="/jobAdvertisement" component={JobAdvertisementList} />
        </div>
    )
}

export default Dashboard
