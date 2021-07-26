import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';

const useStyles = makeStyles((theme) => ({
  details: {
    float: 'right',
    fontSize: '0.9rem',
  },
  skillBox: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  skillList: {
    marginTop: theme.spacing(1),
    paddingLeft: 0,
    fontSize: '0.9rem',
    listStyle: 'none',
  },
  title: {
    color: '#666666',
    display: 'block',
    fontSize: '0.9rem',
  },
}));

function SkillItem(props) {
  const classes = useStyles();
  const { title, skills } = props;

  return (
    <div className={classes.skillBox}>
      <strong className={classes.title}>{title}</strong>
      <ul className={classes.skillList}>
        {skills.map((skill) => <li>{skill}</li>)}
      </ul>
    </div>
  );
}

SkillItem.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SkillItem;
