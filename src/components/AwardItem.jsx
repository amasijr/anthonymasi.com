import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  awardItem: {
    marginTop: theme.spacing(1),
  },
  name: {
    fontSize: '0.9rem',
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

function AwardItem(props) {
  const classes = useStyles();
  const { name, issuer, year } = props;

  return (
    <div className={classes.awardItem}>
      <strong className={classes.name}>{name}</strong>
      <span className={classes.subtitle}>{issuer}</span>
      <span className={classes.years}>{year}</span>
    </div>
  );
}

AwardItem.propTypes = {
  name: PropTypes.string.isRequired,
  issuer: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default AwardItem;
