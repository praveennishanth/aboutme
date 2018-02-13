import React from 'react';
import {
    Grid, InputLabel,
} from 'material-ui';

import {
    ProfileCard, RegularCard, Button, CustomInput, ItemGrid
} from 'components';

import avatar from 'assets/img/faces/profile.jpg';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Grid container>
                    <ItemGrid xs={12} sm={12} md={12}>
                        <ProfileCard
                            avatar={avatar}
                            subtitle="APP DEVELOPER"
                            title="Praveen Nishanth"
                            description="React | Redux | Node | Javascript | SQL"
                            footer={
                                <Button color="primary" round>Coming Soon</Button>
                            }
                        />
                    </ItemGrid>
                </Grid>
            </div>
        );
    }
}

export default Home;
