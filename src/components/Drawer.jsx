import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';
import SearchIcon from 'material-ui-icons/Search';
import OpenInNewIcon from 'material-ui-icons/OpenInNew';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import DrawerItem from './DrawerItem';
import {
	studentMenu,
	aboutMenu,
	academicsMenu,
	admissionsMenu,
	faithMenu
} from '../data/drawerMenu';

const styles = theme => ({
	list: {
		width: 265
	},
	listFull: {
		width: 'auto'
	},
	formControl: {
		margin: theme.spacing.unit
	},
	drawerImg: {
		margin: '0 auto',
		cursor: 'pointer'
	},
	externalLink: {
		textDecoration: 'none',
		color: 'inherit'
	},
	inputLabelFocused: {
		color: '#998643'
	},
	inputInkbar: {
		'&:after': {
			backgroundColor: '#998643'
		}
	}
});

class TemporaryDrawer extends Component {
	static defaultProps = {
		open: PropTypes.bool.isRequired,
		toggleDrawer: PropTypes.func.isRequired
	};
	state = {
		openItems: true,
		search: ''
	};

	handleClick = () => {
		this.setState({ openItems: !this.state.openItems });
	};

	handleSearchChange = e => {
		this.setState({ search: e.target.value });
	};

	render() {
		const { classes, toggleDrawer, open } = this.props;

		return (
			<Drawer open={open} onClose={toggleDrawer}>
				<div tabIndex={0} role="button">
					<div className={classes.list}>
						<List>
							<ListItem>
								<Link to="/">
									<img
										className={classes.drawerImg}
										width="200"
										src="/images/fus-logo.svg"
										alt="logo"
									/>
								</Link>
							</ListItem>
							<ListItem>
								<FormControl className={classes.formControl}>
									<InputLabel
										FormControlClasses={{
											focused: classes.inputLabelFocused
										}}
										htmlFor="search"
									>
										Search
									</InputLabel>
									<Input
										id="search"
										variant="text"
										classes={{
											inkbar: classes.inputInkbar
										}}
										value={this.state.search}
										onChange={this.handleSearchChange}
										endAdornment={
											<InputAdornment position="end">
												<IconButton>
													<SearchIcon />
												</IconButton>
											</InputAdornment>
										}
									/>
								</FormControl>
							</ListItem>
							<DrawerItem
								toggleDrawer={toggleDrawer}
								primaryText="About"
								submenuItems={aboutMenu}
								isOpen={this.props.drawerItems.about}
								expandItem={this.props.expandItem}
								itemId="about"
							/>
							<DrawerItem
								toggleDrawer={toggleDrawer}
								primaryText="Academics"
								submenuItems={academicsMenu}
								isOpen={this.props.drawerItems.academics}
								expandItem={this.props.expandItem}
								itemId="academics"
							/>
							<DrawerItem
								toggleDrawer={toggleDrawer}
								expandItem={this.props.expandItem}
								itemId="admissions"
								primaryText="Admissions"
								submenuItems={admissionsMenu}
								isOpen={this.props.drawerItems.admissions}
							/>
							<DrawerItem
								toggleDrawer={toggleDrawer}
								expandItem={this.props.expandItem}
								itemId="evangelization"
								primaryText="Evangelization"
								submenuItems={faithMenu}
								isOpen={this.props.drawerItems.evangelization}
							/>
							<DrawerItem
								toggleDrawer={toggleDrawer}
								expandItem={this.props.expandItem}
								itemId="faith-and-life"
								primaryText="Student Life"
								submenuItems={studentMenu}
								isOpen={this.props.drawerItems['faith-and-life']}
							/>
							<Divider />
							<a
								className={classes.externalLink}
								href="https://accessfus.franciscan.edu"
								target="_blank"
								rel="noopener noreferrer"
							>
								<ListItem button>
									<ListItemIcon>
										<OpenInNewIcon />
									</ListItemIcon>
									<ListItemText inset primary="AccessFUS" />
								</ListItem>
							</a>
							<a
								className={classes.externalLink}
								href="http://alumni.franciscan.edu/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<ListItem button>
									<ListItemIcon>
										<OpenInNewIcon />
									</ListItemIcon>
									<ListItemText inset primary="Alumni" />
								</ListItem>
							</a>
							<a
								className={classes.externalLink}
								href="http://www.franciscanathletics.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<ListItem button>
									<ListItemIcon>
										<OpenInNewIcon />
									</ListItemIcon>
									<ListItemText inset primary="Athletics" />
								</ListItem>
							</a>
							<a
								className={classes.externalLink}
								href="http://www.steubenvilleconferences.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<ListItem button>
									<ListItemIcon>
										<OpenInNewIcon />
									</ListItemIcon>
									<ListItemText inset primary="Conferences" />
								</ListItem>
							</a>
							<a
								className={classes.externalLink}
								href="http://giving.franciscan.edu/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<ListItem button>
									<ListItemIcon>
										<OpenInNewIcon />
									</ListItemIcon>
									<ListItemText inset primary="Give" />
								</ListItem>
							</a>
						</List>
					</div>
				</div>
			</Drawer>
		);
	}
}

export default withStyles(styles)(TemporaryDrawer);
