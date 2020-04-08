import React from 'react';

import useStyles from './style';
import { Container, Grid, Typography } from '@material-ui/core';

import Map from '../Home/component/Map';
import { Header, InputComponent } from 'Components';
import Button from './components/Button';
import { useHistory } from 'react-router-dom';
import EmailIcon from '@material-ui/icons/Email';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
const Layout = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid className={classes.root}>
      <Header />
      <Container maxWidth='lg'>
        <div className={classes.map}>
          <Map />
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} xl={6} lg={6}>
            <Typography variant='h3' className={classes.contactTitle}>
              Get in Touch
            </Typography>
            <InputComponent
              placeholder='Enter Message'
              id='outlined-multiline-static'
              multiline
              rows='5'
              type='text'
            />
            <div className={classes.textfield}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} xl={6} lg={6}>
                  <InputComponent placeholder='Enter Your Name' type='text' />
                </Grid>
                <Grid item xs={12} sm={12} xl={6} lg={6}>
                  <InputComponent placeholder='Enter Your Email' type='email' />
                </Grid>
              </Grid>
            </div>
            <div className={classes.textfield}>
              <InputComponent placeholder='Enter Your Subject' type='text' />
            </div>
            <div className={classes.textfield}>
              <Button
                style={{
                  letterSpacing: '3px',
                  fontWeight: 'bold',
                  fontFamily: 'Roboto',
                }}
              >
                Send Message
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} xl={6} lg={6}>
            <div className={classes.deatils}>
              <EmailIcon className={classes.icon} />
              <Typography className={classes.typography} variant='span'>
                docotoai@gmail.com
              </Typography>
              <Typography className={classes.typography1} variant='h6'>
                Send us your query anytime!
              </Typography>
            </div>
            <div className={classes.deatil}>
              <PhoneAndroidIcon className={classes.icon} />
              <Typography className={classes.typography} variant='span'>
                Buttonwood, California.
              </Typography>
              <Typography className={classes.typography1} variant='h6'>
                Rosemead, CA 91770
              </Typography>
            </div>
            <div className={classes.deatil}>
              <LocalHospitalIcon className={classes.icon} />
              <Typography className={classes.typography} variant='span'>
                00 (440) 9865 562
              </Typography>
              <Typography className={classes.typography1} variant='h6'>
                Mon to Fri 9am to 6pm
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Layout;
