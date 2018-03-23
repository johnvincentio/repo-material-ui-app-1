import React from 'react';
import Card, { CardMedia, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import withStyles from 'material-ui/styles/withStyles';
import Grid from 'material-ui/Grid';

import Masonry from 'react-masonry-component';

import Layout from '../components/Layout';
import Hero from '../components/Hero';

import ProfileCard from '../components/ProfileCard';
import ListCard from '../components/ListCard';
import TextSection from '../components/TextSection';
import eventsData from '../data/listData';

const styles = theme => ({
	white: {
		color: '#fff'
	},
	card: {
		width: '100%'
	},
	media: {
		minHeight: 280,
		[theme.breakpoints.up('xl')]: {
			minHeight: 1366
		},
		[theme.breakpoints.up('lg')]: {
			minHeight: '400px'
		}
	},
	gridItemFix: {
		width: '100%',
		padding: '16px',
		[theme.breakpoints.down('sm')]: {
			padding: '8px'
		}
	},
	contentContainer: {
		width: '100%',
		maxWidth: '70%',
		margin: '0 auto',
		[theme.breakpoints.down('md')]: {
			maxWidth: '85%'
		},
		[theme.breakpoints.down('sm')]: {
			maxWidth: '95%'
		}
	},
	listItem: {
		paddingLeft: 0,
		paddingRight: 0,
		alignItems: 'start'
	},
	avatar: {
		width: '80px',
		height: '80px',
		borderRadius: 0
	},
	avatarBig: {
		width: '200px',
		height: '200px',
		[theme.breakpoints.down('sm')]: {
			width: '100px',
			height: '100px'
		}
	},
	listItemTextBig: {
		fontSize: '34px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '24px'
		}
	},
	videoIframe: {
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: 0,
		left: 0,
		border: 'none'
	},
	videoIframeContainer: {
		width: '100%',
		height: 0,
		overflow: 'hidden',
		position: 'relative',
		paddingBottom: '56.25%'
	}
});

console.log('eventsData ', eventsData);

const IndexPage = ({ classes }) => (
	<Layout>
		<Hero
			backgroundImg="/images/biology-students.jpg"
			titleText="Franciscan University of Steubenville"
			subtitleText={<span>Academically Excellent &#8226; Passionately Catholic</span>}
			primaryBtnText="Apply"
			primaryBtnLink="https://franciscanuniversity.force.com/portal"
			secondaryBtnText="Inquire"
			secondaryBtnLink="https://franciscan.secure.force.com/form?formid=217772"
			tertiaryBtnText="Visit"
			tertiaryBtnLink="https://franciscan.secure.force.com/events"
		/>
		<TextSection
			sectionTitle="Our Vision"
			text=" To educate, evangelize, and send forth joyful disciples to restore all things in Christ."
			btnLink="/about/our-mission"
			btnText="Learn More"
		/>
		<TextSection
			sectionTitle="15 to 1 Student to Faculty Ratio"
			bgColor="#21412a"
			textColor="#fff"
			borderColor="#998643"
		/>
		<div className={classes.contentContainer}>
			<Masonry>
				<Grid item className={classes.gridItemFix} xs={12} sm={6} md={6} lg={6}>
					<Card className={`${classes.card} ${classes.videoIframeContainer}`}>
						<iframe
							className={classes.videoIframe}
							src="https://www.youtube.com/embed/HpzwoD2oVSQ?modestbranding=1&rel=0&color=white"
							frameBorder="0"
							allow="encrypted-media"
							allowFullScreen
						/>
					</Card>
				</Grid>

				<Grid item className={classes.gridItemFix} xs={12} sm={6} md={6} lg={6}>
					<ProfileCard
						profileImg="https://www.franciscan.edu/uploadedImages/Content/Faculty_and_Students/Students/Noah_Fisher_landing_v2.jpg"
						profileImgTitle="Noah Fisher"
						profileType="Student Profile"
						profileName="Noah Fisher"
						content="I first learned about Franciscan from some people at my parish
                who studied here. They recommended I check it out, but I wasn’t
                so sure. When I visited, though, I was blown away by the people
                I met; they were so genuine and helpful. They were the biggest
                reason I decided to come to Franciscan."
						profileLink="/studentprofiles/noah-fisher"
					/>
				</Grid>

				<Grid item className={classes.gridItemFix} xs={12} sm={6} lg={6}>
					<ProfileCard
						profileImg="https://www.franciscan.edu/uploadedImages/Content/Faculty_and_Students/Alumni_Profiles/IMG_1132.JPG"
						profileImgTitle="Maggie McDermott"
						profileType="Alumni Profile"
						profileName="Maggie McDermott"
						content="My choice to say Yes to giving my all even in those trying moments can be attributed to the growth and education I received at Franciscan."
						profileLink="/alumni-outcomes/mcdermott-maggie"
					/>
				</Grid>
				<Grid item className={classes.gridItemFix} xs={12} sm={6}>
					<ListCard listTitle="Events" itemsArray={eventsData} />
				</Grid>
				<Grid item className={classes.gridItemFix} xs={12} sm={6} lg={6}>
					<ProfileCard
						profileImg="https://www.franciscan.edu/uploadedImages/Content/Faculty_and_Students/Faculty/Education/boury.jpg?n=1668"
						bgPosY="20%"
						profileImgTitle="Dr. Tiffany Boury"
						profileType="Faculty Profile"
						profileName="Dr. Tiffany Boury"
						content="Associate Professor of Education"
						profileLink="/faculty/boury-tiffany"
					/>
				</Grid>
				<Grid item className={classes.gridItemFix} xs={12} sm={6} lg={6}>
					<Card className={classes.card}>
						<CardMedia
							className={classes.media}
							image="/images/adventure2-800w.jpg"
							title="Austria Campus"
						/>
						<CardContent>
							<Typography type="display1">Austria</Typography>
						</CardContent>
					</Card>
				</Grid>

				<Grid item className={classes.gridItemFix} xs={12} sm={6} md={6} lg={6}>
					<Card className={`${classes.card} ${classes.videoIframeContainer}`}>
						<iframe
							className={classes.videoIframe}
							src="https://www.youtube.com/embed/HzfPBp3lHTU?modestbranding=1&rel=0&color=white"
							frameBorder="0"
							allow="encrypted-media"
							allowFullScreen
						/>
					</Card>
				</Grid>
			</Masonry>
		</div>
	</Layout>
);

export default withStyles(styles)(IndexPage);
