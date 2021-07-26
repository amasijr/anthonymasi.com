import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  degree: {
    fontSize: '0.9rem',
  },
  educationItem: {
    marginTop: theme.spacing(2),
  },
  subtitle: {
    display: 'block',
    fontSize: '0.9rem',
  },
  years: {
    display: 'block',
    fontSize: '0.75rem',
  },
}));

function EducationItem(props) {
  const classes = useStyles();
  const {
    degree, school, startYear, endYear,
  } = props;

  return (
    <div className={classes.educationItem}>
      <strong className={classes.degree}>{degree}</strong>
      <span className={classes.subtitle}>{school}</span>
      <span className={classes.years}>
        {startYear}
        {' '}
        -
        {' '}
        {endYear}
      </span>
    </div>
  );
}

EducationItem.propTypes = {
  degree: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  startYear: PropTypes.number.isRequired,
  endYear: PropTypes.number,
};

EducationItem.defaultProps = {
  endYear: null,
};

export default EducationItem;
