import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

import InvertedButton from './InvertedButton';

const styles = () => ({
	section: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		padding: '38px 0',
		textAlign: 'center'
	},
	innerContainer: {
		width: '70%',
		margin: '0 auto'
	},
	sectionText: {
		fontSize: '28px',
		fontWeight: 400,
		lineHeight: 1.5
	},
	heroBtn: {
		display: 'flex',
		justifyContent: 'center',
		marginTop: '16px'
	},
	invertedBtn: {
		color: '#21412a',
		backgroundColor: 'transparent',
		border: '2px #21412a solid',
		boxShadow: 'none'
	},
	white: {
		color: '#fff'
	}
});

// prettier-ignore
class TextSection extends Component {	// eslint-disable-line react/prefer-stateless-function
	render() {
		const {
			classes,
			sectionTitle,
			text,
			btnLink,
			btnText,
			textColor,
			bgColor,
			borderColor
		} = this.props;

		const Button = (
			<Grid item className={classes.heroBtn} xs={12}>
				<InvertedButton
					href={btnLink}
					title={btnText}
					className={classes.invertedBtn}
					color="secondary"
					style={{ width: '192px' }}
				>
					{btnText}
				</InvertedButton>
			</Grid>
		);

		return (
			<div
				className={classes.section}
				style={{
					backgroundColor: bgColor,
					borderTop: `2px solid ${borderColor}`,
					borderBottom: `2px solid ${borderColor}`
				}}
			>
				<div className={classes.innerContainer}>
					<Typography variant="display2" gutterBottom style={{ color: textColor }}>
						{sectionTitle}
					</Typography>

					<Typography
						className={classes.sectionText}
						variant="body1"
						gutterBottom
						style={{ color: textColor }}
					>
						{text}
					</Typography>
					{btnLink && btnText ? Button : null}
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(TextSection);
