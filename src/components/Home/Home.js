import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


// My Components 
import ChatList from '../ChatList'
import AddChat from '../AddChat';

// Action Creator 
import { addNewChat } from '../../store/actionCreators/add_chats_action'

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

const Home = ({chats, addChat}) => {

  const classes = useStyles()


  const addChats = (name, status, message) => {
    console.log('addChat', name, status, message)
    const obj = {
      id: chats.length + 2, 
      status: status, 
      name: name, 
      avatar: '', 
      message: message
    }
    addChat(obj)
  }


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

        <ChatList chats={chats} />

      </Container>
      <AddChat addChat={addChats} />

    </>
  );
}

const mapStateToProps = (store) => {
  return {
    chats: store.chats.chats
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addChat: (payload) => dispatch(addNewChat(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
