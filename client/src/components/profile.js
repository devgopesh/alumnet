import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import classes from './profile.module.css';

const profile = () => {
    return(
        <Container>
            <div className = {classes.profile}>
            <Row>
        		<Col lg={3} md={3} sm={3} xs={3}>
        			<div className = {classes.profilesidebar}>
        				<div className = {classes.profileusertitle}>
        					<div className={classes.profileusertitlename}>
        						Param Singh
        					</div>
        					<div className={classes.profileusertitlejob}>
        						Developer
        					</div>
        				</div>
        				<div className = {classes.profileuserbuttons}>
            				<Button variant="primary" size="sm" id = "firstbutton">
                                follow
                            </Button>
                            <Button variant="danger" size="sm" id = "secondbutton">
                                message
                            </Button>
        				</div>
        				<div className = {classes.profileusermenu}>
        					<ul>
        						<li>
        							<a href="#">
        							<i className="glyphicon glyphicon-home"></i>
        							Overview </a>
        						</li>
        						<li>
        							<a href="#">
        							<i class="glyphicon glyphicon-user"></i>
        							Rooms </a>
        						</li>
        						<li>
        							<a href="#" target="_blank">
        							<i class="glyphicon glyphicon-ok"></i>
        							Github </a>
        						</li>
        						<li>
        							<a href="#">
        							<i class="glyphicon glyphicon-flag"></i>
        							LinkdIn </a>
        						</li>
        					</ul>
        				</div>
        			</div>
        		</Col>
        		<Col lg={9} md={9} sm={9} xs={9}>
                    <div className = {classes.profilecontent}>
        			   Some user related content goes here...
                    </div>
        		</Col>
        	</Row>	
        	</div>
        </Container>
    );
}

export default profile;