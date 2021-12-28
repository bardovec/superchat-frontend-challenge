import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '40px',
  },
  author: {
    textTransform: 'uppercase',
    color: 'white',
    borderRadius: '10px',
    padding: '10px',

  },
  projectName: {
    textTransform: 'uppercase',
    marginRight: '10px',
    color: 'rgb(158, 69, 87)',
  },
  projectDescript: {
    textAlign: 'center',
    marginTop: '40px',
    color: 'rgb(153, 128, 225)',
  },
  contrib: {
    fontSize: '20px',
    padding: '0 30px ',
    marginBottom: '20px',
  },

  // media: {
  //     height: 0,
  //     paddingTop: '56.25%',
  //     backgroundColor: 'red',
  //     backgroundBlendMode: 'darken',
  // },
  // border: {
  //     border: 'solid',
  // },
  // fullHeightCard: {
  //     height: '100%',
  // },
  // card: {
  //     display: 'flex',
  //     flexDirection: 'column',
  //     justifyContent: 'space-between',
  //     borderRadius: '15px',
  //     height: '100%',
  //     position: 'relative',
  // },
  // overlay: {
  //
  //     position: 'absolute',
  //     top: '20px',
  //     left: '20px',
  //     color: 'white',
  // },
  // overlay2: {
  //     position: 'absolute',
  //     top: '20px',
  //     right: '20px',
  //     color: 'white',
  // },
  // grid: {
  //     display: 'flex',
  // },
  // details: {
  //     display: 'flex',
  //     justifyContent: 'space-between',
  //     margin: '20px',
  // },
  // title: {
  //     padding: '0 16px',
  // },
  // cardActions: {
  //     padding: '0 16px 8px 16px',
  //     display: 'flex',
  //     justifyContent: 'space-between',
  // },
});
