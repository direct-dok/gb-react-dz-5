import React from 'react';
import { useState } from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


// My Components 
import ChatList from '../ChatList'
import AddChat from '../AddChat';

const useStyles = makeStyles({
  caption: {
    fontSize: '4em',
    lineHeight: '1em', 
    margin: '0 0 30px 0'
  }, 
  chatContainer: {
    marginTop: '60px'
  }, 
  addButton: {
    position: 'fixed', 
    right: '50px', 
    bottom: '50px', 
    background: '#80167a',

    '&:hover': {
      background: '#4d0549'
    }
  }
})

const Home = (props) => {

  const classes = useStyles()
  const [ chats, setChats ] = useState(props.chats)
  

  return (
    <>
      <Container maxWidth="sm">
        <Typography component="h1" className={classes.caption}>
        Comfortable. Safely. Reliable.
        </Typography>
        <Typography variant="body1">
          On our social network, you will get a fast, easy and secure messaging experience and the ability to make calls completely free of charge *. Available on phones around the world.
        </Typography>
      </Container>

      <Container maxWidth="lg" className={classes.chatContainer}>

        <ChatList chats={props.chats} />

      </Container>
      <AddChat addChat={props.addChat} />
    </>
  );
}

export default Home;
