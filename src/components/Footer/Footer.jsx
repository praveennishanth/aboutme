import React from 'react';
import PropTypes from 'prop-types';
import {
    List, ListItem, withStyles
} from 'material-ui';

import { footerStyle } from 'variables/styles';

class Footer extends React.Component{
    render(){
        const { classes } = this.props;
        return (
            <footer className={classes.footer}>
                <div className={classes.container}>
                    <div className={classes.left}>
                        <List className={classes.list}>
                            <ListItem className={classes.inlineBlock}>
                                <a href="#Facebook" className={classes.block}>
                                <i class="fab fa-instagram"></i>
                                </a>
                            </ListItem>
                            <ListItem className={classes.inlineBlock}>
                                <a href="#Instagram" className={classes.block}>Instagram</a>
                            </ListItem>
                            <ListItem className={classes.inlineBlock}>
                                <a href="#Linkedin" className={classes.block}>Linkedin</a>
                            </ListItem>
                            <ListItem className={classes.inlineBlock}>
                                <a href="#Google" className={classes.block}>Google</a>
                            </ListItem>
                        </List>
                    </div>
                    <p className={classes.right}>
                        <span>
                            &copy; {1900 + (new Date()).getYear()} <a href="http://www.praveennishanth.com" className={classes.a}>Praveen Nishanth</a>, made with love for a better Design
                        </span>
                    </p>
                </div>
            </footer>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);
