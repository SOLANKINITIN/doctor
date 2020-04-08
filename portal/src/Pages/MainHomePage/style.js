import { makeStyles } from '@material-ui/core';

import Banner from './Asset/banner_background.png';
import About_bg from './Asset/about_bg.png';
import Contact_bg from './Asset/Contact_us.png';

// const userHeight = window.innerHeight;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
  },

  // Header_seciton
  header_banner: {
    height: '100vh',
    background: `url(${Banner})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  header_content: {
    display: 'flex',
    minHeight: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner_text_inner: {
    marginTop: '8rem',
    [theme.breakpoints.only('xs')]: {
      marginTop: '0rem',
    },
    [theme.breakpoints.only('sm')]: {
      marginTop: '3rem',
    },
  },
  banner_text: {
    [theme.breakpoints.only('xs')]: {
      padding: '1.5rem',
      textAlign: 'Center',
      padding: 0,
    },
    [theme.breakpoints.only('sm')]: {
      padding: '1.8rem',
      textAlign: 'Center',
    },
  },

  banner_text_small: {
    fontSize: '16px',
    textTransform: 'capitalize',
    fontWeight: 500,
    color: '#242429',
    margin: 0,
    fontFamily: 'Poppins,sans-serif',
    [theme.breakpoints.only('xs')]: {
      fontSize: '14px',
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: '15px',
    },
  },
  banner_title_tag: {
    fontSize: '50px',
    textTransform: 'capitalize',
    marginBottom: '12px',
    lineHeight: '1.2',
    color: '#242429',
    fontWeight: 'bold',
    fontFamily: 'Playfair Display,serif',
    [theme.breakpoints.only('xs')]: {
      fontSize: '25px',
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: '28px',
    },
  },

  banner_text_innerText: {
    fontSize: '15px',
    lineHeight: '30px',
    fontFamily: 'Roboto,sans-serif',
    color: '#242429',
    [theme.breakpoints.only('xs')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.only('sm')]: {
      textAlign: 'center',
    },
  },
  banner_img: {
    height: '100%',
    width: '100%',
    [theme.breakpoints.only('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.only('sm')]: {
      display: 'none',
    },
  },

  //Abouts_As
  about_us_section: {
    position: 'relative',
    zIndex: 99,
    background: `url(${About_bg})`,
    backgroundSize: '50% 90%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left bottom',
    [theme.breakpoints.only('xs')]: {
      background: `none`,
    },
    [theme.breakpoints.only('sm')]: {
      background: `none`,
    },
  },
  about_us_image: {
    [theme.breakpoints.only('xs')]: {
      padding: 0,
      margin: '0 auto',
    },
  },
  About_us_image: {
    [theme.breakpoints.only('xs')]: {
      height: '300px',
      width: '300px',
    },
    [theme.breakpoints.only('sm')]: {
      height: '380px',
      width: '380px',
    },
  },

  about_us_text_content: {
    padding: theme.spacing() * 8,
    [theme.breakpoints.only('xs')]: {
      padding: theme.spacing() * 2,
    },
    [theme.breakpoints.only('sm')]: {
      padding: theme.spacing() * 3.5,
    },
  },
  about_us_text_tag: {
    fontSize: '42px',
    fontWeight: '600',
    marginBottom: '24px',
    position: 'relative',
    color: '#242429',
    fontFamily: 'Playfair Display,Serif',
  },
  about_us_text_small: {
    lineHeight: '1.929',
    marginBottom: '35px',
  },
  about_us_services_card: {
    marginTop: theme.spacing() * 7,
  },
  about_us_card: {
    textAlign: 'center',
    border: 'none',
    borderRadius: '5px',
    boxShadow: '0 0  0px 1px #d3d3d3',
  },
  connected_icon: {
    fontSize: '2rem',
    color: '#649bff',
    paddingTop: '0.5rem',
  },

  //Services_Sections
  services_tag: {
    marginTop: theme.spacing() * 12,
    fontSize: '48px',
    color: '#242429',
    lineHeight: '40px',
    fontWeight: '900',
    position: 'relative',
    marginBottom: '28px',
    fontFamily: 'Playfair Display,serif',
  },
  service_item: {
    marginTop: theme.spacing() * 10,
  },
  service_item_single: {
    position: 'relative',
    transition: '1s',
    textAlign: 'center',
  },

  single_feature_icon_span: {
    marginBottom: theme.spacing() * 2,
    zIndex: 1,
    width: theme.spacing() * 5,
    height: theme.spacing() * 5,
    backgroundColor: '#f0f4f6',
    borderRadius: '50%',
    display: 'block',
    padding: 0,
    textAlign: 'Center',
    margin: '0 auto',
  },

  single_feature_icon: {
    marginTop: '0.5rem',
  },
  single_feature_tag: {
    fontWeight: '700',
    fontSize: theme.spacing() * 2,
    color: '#242429',
    fontFamily: 'Roboto,Serif',
  },
  service_text_innerText: {
    fontSize: '15px',
    lineHeight: '30px',
    fontFamily: 'Roboto,sans-serif',
    color: '#242429',
  },
  service_image_sec: {
    paddingRight: '15px',
    paddingLeft: '15px',
    marginTop: theme.spacing() * 15,
    textAlign: 'center',
    [theme.breakpoints.only('xs')]: {
      marginTop: theme.spacing() * 10,
      padding: 0,
      margin: '0 auto',
    },
  },
  service_image: {
    height: '350px',
    width: '350px',
    [theme.breakpoints.only('xs')]: {
      height: '300px',
      width: '300px',
    },
    [theme.breakpoints.only('sm')]: {
      height: '300px',
      width: '300px',
    },
  },

  // contact_us
  // contact_us_background: {
  //   position: "relative",
  //   zIndex: 99,
  //   background: `url(${Contact_bg})`,
  //   backgroundSize: "50% 90%",
  //   backgroundRepeat: "no-repeat",
  //   backgroundPosition: "Right center",
  //   [theme.breakpoints.only("xs")]: {
  //     background: `none`
  //   },
  //   [theme.breakpoints.only("sm")]: {
  //     background: `none`
  //   }
  // },
  // section_images: {
  //   height: "500px",
  //   width: "500px",
  //   position: "relative",
  //   left: "6rem"
  // },
  // contact_us_images: {
  //   height: "100%",
  //   width: "100%",
  //   [theme.breakpoints.only("xs")]: {
  //     display: `none`
  //   },
  //   [theme.breakpoints.only("sm")]: {
  //     dipsplay: `none`
  //   },
  //   position: "absolute"
  // }
}));

export default useStyles;
