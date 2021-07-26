import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import HttpsIcon from '@material-ui/icons/Https';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';

import AwardItem from './components/AwardItem';
import EducationItem from './components/EducationItem';
import ExperienceItem from './components/ExperienceItem';
import SkillItem from './components/SkillItem';

import config from './config.json';

const useStyles = makeStyles((theme) => ({
  summary: {
    textAlign: 'justify',
  },
  title: {
    fontSize: '2rem',
  },
  tagline: {
    color: '#666666',
    fontSize: '1.25rem',
    marginBottom: theme.spacing(1),
  },
  heading: {
    fontSize: '1.5rem',
  },
  category: {
    display: 'block',
    marginBottom: '1rem',
    width: '100%',
  },
  contactBox: {
    fontSize: '1rem',
  },
  content: {
    margin: '0 auto',
    marginTop: theme.spacing(2),
    padding: theme.spacing(4),
    width: '80%',
  },
  fullWidth: {
    width: '100%',
  },
  iconRow: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    fontSize: '0.9rem',
    width: '100%',
    paddingLeft: theme.spacing(0),
  },
  icon: {
    color: '#000034',
    marginRight: '3px',
  },
  right: {
  },
  divider: {
    backgroundColor: '#e5e5e5',
    border: 'none',
    height: '1px',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  footer: {
    alignItems: 'center',
    borderTop: '1px solid #eeeeee',
    color: '#444444',
    flexWrap: 'wrap',
    fontSize: '0.8rem',
    paddingTop: theme.spacing(2),
    width: '100%',
    textAlign: 'center',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Paper className={classes.content} elevation={5}>
      <header>
        <Grid container>
          <Grid item md={9} xs={12}>
            <Grid item xs={12}>
              <Typography variant="h1" component="h1" className={classes.title}>{config.name}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3" component="h2" className={classes.tagline}>{config.role}</Typography>
            </Grid>
          </Grid>
          <Grid container item xs={12} md={3} className={classes.contactBox}>
            <div className={classes.iconRow}>
              <MailIcon fontSize="inherit" className={classes.icon} />
              {config.email}
            </div>
            <div className={classes.iconRow}>
              <HttpsIcon fontSize="inherit" className={classes.icon} />
              {config.fingerprint}
            </div>
            <div className={classes.iconRow}>
              <LocationOnIcon fontSize="inherit" className={classes.icon} />
              {config.location}
            </div>
          </Grid>
        </Grid>
        <hr className={classes.divider} />
        <Grid container>
          <Typography variant="h2" className={classes.heading}>About</Typography>
          {config.summary ? <p className={classes.summary}>{config.summary}</p> : ''}
        </Grid>
        <hr className={classes.divider} />
      </header>
      <main>
        <Grid container>
          <Grid container item xs={12} md={9} className={classes.left}>
            <div className={classes.category}>
              <Typography variant="h2" className={classes.heading}>Professional Experience</Typography>
              {config.experience.map((job) => (
                <ExperienceItem
                  role={job.role}
                  company={job.company}
                  yearStart={job.yearStart}
                  yearEnd={job.yearEnd}
                  summary={job.summary}
                  responsibilities={job.responsibilities}
                />
              ))}
            </div>
          </Grid>
          <Grid container item xs={12} md={3} className={classes.right}>
            <div className={classes.category}>
              <Typography variant="h2" className={classes.heading}>Education</Typography>
              {config.education.map((edu) => (
                <EducationItem
                  school={edu.school}
                  degree={edu.degree}
                  startYear={edu.startYear}
                  endYear={edu.endYear}
                />
              ))}
            </div>
            <div className={classes.category}>
              <Typography variant="h2" className={classes.heading}>Awards</Typography>
              {config.awards.map((award) => (
                <AwardItem
                  name={award.name}
                  issuer={award.issuer}
                  year={award.year}
                />
              ))}
            </div>
            <div className={classes.category}>
              <Typography variant="h2" className={classes.heading}>Skills</Typography>
              {config.skills.map((obj) => <SkillItem title={obj.title} skills={obj.skills} />)}
            </div>
          </Grid>
        </Grid>
      </main>
      <footer>
        <Grid xs={12} className={classes.footer}>
          <MailIcon fontSize="inherit" className={classes.icon} />
          {config.email}
        </Grid>
      </footer>
    </Paper>
  );
}

export default App;
