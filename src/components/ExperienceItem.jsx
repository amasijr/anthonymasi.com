import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  details: {
    color: '#666666',
    display: 'block',
    fontSize: '0.8rem',
  },
  experienceItem: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    paddingRight: theme.spacing(3),
  },
  responsibilities: {
    fontSize: '0.9rem',
    paddingLeft: theme.spacing(4),
  },
  role: {
    fontSize: '0.9rem',
  },
}));

function ExperienceItem(props) {
  const classes = useStyles();
  const {
    role, company, yearStart, yearEnd, summary, responsibilities,
  } = props;

  return (
    <div className={classes.experienceItem}>
      <b className={classes.role}>{role}</b>
      <span className={classes.details}>
        {company}
        {' '}
        {yearStart !== yearEnd ? `${yearStart} - ${yearEnd || 'present'}` : yearStart}
      </span>
      {summary ? <p>{summary}</p> : ''}
      {responsibilities ? (
        <ul className={classes.responsibilities}>
          {responsibilities.map((resp) => <li>{resp}</li>)}
        </ul>
      ) : ''}
    </div>
  );
}

ExperienceItem.propTypes = {
  role: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  yearStart: PropTypes.number.isRequired,
  yearEnd: PropTypes.number,
  summary: PropTypes.string,
  responsibilities: PropTypes.arrayOf(PropTypes.string),
};

ExperienceItem.defaultProps = {
  yearEnd: null,
  summary: null,
  responsibilities: [],
};

export default ExperienceItem;
