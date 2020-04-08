import React from 'react';

import useStyles from './style';
import { Container, Grid, Typography, Card } from '@material-ui/core';

import Button from './components/Button';
import Footer from 'Components/Footer';

//React-Reveal
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
//icon
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import FastForwardOutlinedIcon from '@material-ui/icons/FastForwardOutlined';

import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import FaceIcon from '@material-ui/icons/Face';

//images
import BannerLeftImage from './Asset/undraw_directions_x53j.svg';
import ServiceImage from './Asset/service.png';
import Aboutus from './Asset/top_service.png';
import Header from './components/Header';

import { useHistory } from 'react-router-dom';

const Layout = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <Header />

      <header className={classes.header_banner}>
        <Container maxWidth='lg'>
          <div className={classes.header_content}>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={6}>
                <Fade left>
                  <div className={classes.banner_text}>
                    <div className={classes.banner_text_inner}>
                      <p className={classes.banner_text_small}>
                        Provide Best Doctor And Hospital Near By You.
                      </p>
                      <h2 className={classes.banner_title_tag}>
                        We Are Here To & Help You{' '}
                      </h2>
                      <p className={classes.banner_text_innerText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore molestias unde necessitatibus? Nobis molestias
                        tempore mollitia impedit totam facere sequi.
                      </p>
                      <Button
                        style={{
                          letterSpacing: '3px',
                          fontWeight: 'bold',
                          fontFamily: 'Roboto',
                        }}
                        onClick={() => history.push('/home')}
                      >
                        Start Here
                      </Button>
                    </div>
                  </div>
                </Fade>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Fade right>
                  <div className={classes.banner_image_inner}>
                    <img
                      src={BannerLeftImage}
                      alt='banner_image'
                      className={classes.banner_img}
                    />
                  </div>
                </Fade>
              </Grid>
            </Grid>
          </div>
        </Container>
      </header>

      {/* aboutAs */}
      <section className={classes.about_us_section}>
        <div className={classes.about_us_background}>
          <Container maxWidth='lg'>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={6} sm={12}>
                <div className={classes.about_us_image}>
                  <img
                    src={Aboutus}
                    alt='about_us'
                    className={classes.About_us_image}
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6} lg={6} sm={12}>
                <div className={classes.about_us_text_content}>
                  <h1 className={classes.about_us_text_tag}>About Us</h1>
                  <p className={classes.about_us_text_small}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Praesentium quam facere ipsam esse eaque nulla eius, qui
                    excepturi iusto sapiente. Sit eaque hic sequi pariatur.
                  </p>
                  <Button>Learn More</Button>
                  <div className={classes.about_us_services_card}>
                    <Grid container spacing={1}>
                      <Grid item xs={12} md={4} lg={4} sm={12}>
                        <Card className={classes.about_us_card}>
                          <span>
                            <PeopleAltIcon className={classes.connected_icon} />
                          </span>
                          <h2 classname={classes.connected_Number}>25</h2>
                          <p className={classes.connected_tag}>
                            Connnected User
                          </p>
                        </Card>
                      </Grid>
                      <Grid item xs={12} md={4} lg={4} sm={12}>
                        <Card className={classes.about_us_card}>
                          <span>
                            <LocalHospitalIcon
                              className={classes.connected_icon}
                            />
                          </span>
                          <h2 classname={classes.connected_Number}>4</h2>
                          <p className={classes.connected_tag}>
                            Connnected Hospitals
                          </p>
                        </Card>
                      </Grid>
                      <Grid item xs={12} md={4} lg={4} sm={12}>
                        <Card className={classes.about_us_card}>
                          <span>
                            <FaceIcon className={classes.connected_icon} />
                          </span>
                          <h2 classname={classes.connected_Number}>17</h2>
                          <p className={classes.connected_tag}>
                            Connnected Doctors
                          </p>
                        </Card>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </section>

      {/* Our_service_section */}
      <Zoom>
        <section className={classes.our_Services}>
          <Typography align='center' className={classes.services_tag}>
            Our Services
          </Typography>
          <div className={classes.our_Services_content}>
            <Container maxWidth='lg'>
              <Grid container spacing={2}>
                <Grid item xs={12} lg={4}>
                  <div className={classes.service_item}>
                    <div className={classes.service_item_single}>
                      <span className={classes.single_feature_icon_span}>
                        <LocalHospitalOutlinedIcon
                          className={classes.single_feature_icon}
                        />
                      </span>
                      <h4 className={classes.single_feature_tag}>
                        Help To find Best Hospital
                      </h4>
                      <p className={classes.service_text_innerText}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Excepturi, consequatur deleniti commodi alias
                        quidem molestias?
                      </p>
                    </div>
                    <div className={classes.service_item_single}></div>
                  </div>

                  <div className={classes.service_item}>
                    <div className={classes.service_item_single}>
                      <span className={classes.single_feature_icon_span}>
                        <SearchOutlinedIcon
                          className={classes.single_feature_icon}
                        />
                      </span>
                      <h4 className={classes.single_feature_tag}>
                        Help to Find Best Doctor
                      </h4>
                      <p className={classes.service_text_innerText}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Excepturi, consequatur deleniti commodi alias
                        quidem molestias?
                      </p>
                    </div>
                    <div className={classes.service_item_single}></div>
                  </div>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <div className={classes.service_image_sec}>
                    <img
                      src={ServiceImage}
                      alt='service-image'
                      className={classes.service_image}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <div className={classes.service_item}>
                    <div className={classes.service_item_single}>
                      <span className={classes.single_feature_icon_span}>
                        <ChatBubbleOutlineOutlinedIcon
                          className={classes.single_feature_icon}
                        />
                      </span>
                      <h4 className={classes.single_feature_tag}>
                        Talk With Our Virtual Agent
                      </h4>
                      <p className={classes.service_text_innerText}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Excepturi, consequatur deleniti commodi alias
                        quidem molestias?
                      </p>
                    </div>
                    <div className={classes.service_item_single}></div>
                  </div>

                  <div className={classes.service_item}>
                    <div className={classes.service_item_single}>
                      <span className={classes.single_feature_icon_span}>
                        <FastForwardOutlinedIcon
                          className={classes.single_feature_icon}
                        />
                      </span>
                      <h4 className={classes.single_feature_tag}>
                        High Perfomance
                      </h4>
                      <p className={classes.service_text_innerText}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Excepturi, consequatur deleniti commodi alias
                        quidem molestias?
                      </p>
                    </div>
                    <div className={classes.service_item_single}></div>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
        </section>
      </Zoom>

      {/* contact_us */}
      {/* <section className={classes.contact_us}>
        <div className={classes.contact_us_background}>
          <Container maxWidth="lg">
            <Grid spacing={2} container>
              <Grid item sm={12} md={6} xs={12}>
                
              </Grid>
              <Grid item sm={12} md={6} xs={12}>
                <div className={classes.section_images}>
                  <img
                    src={Contact_us}
                    alt="Contact_img"
                    className={classes.contact_us_images}
                  />
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </section> */}
      {/* end_contact_us */}
      <Footer />
    </div>
  );
};

export default Layout;
