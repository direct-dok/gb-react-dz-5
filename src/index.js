import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

import { Provider } from 'react-redux'
import { store } from './store/store'

import './index.css';


const chats = [
  {id: 1, status: 'Death threats, suspicious roadblocks, missing witnesses and moved bodies revealed in leaked documents obtained exclusively by CNN', name: 'Alex', avatar: '/img/avatar/1.jpg', message: 'Even though Israel is a small country it is always in the news.'},
  {id: 2, status: 'Drinking a little each week protects your heart if you have a cardiovascular condition, study finds', name: 'Noah', avatar: '/img/avatar/2.jpg', message: 'The news continues to report on Jews moving to Israel, on the technology invented there, but also on conflict, wars and tensions with surrounding people.'},
  {id: 3, status: '"This is not the general population -- the study applies to people who have already had something happen that relates to cardiovascular health," ', name: 'Liam', avatar: '/img/avatar/3.jpg', message: 'Why? A look at Israel’s history in the book of Genesis in the Bible reveals that 4000 years ago a man, who is now very well known'},
  {id: 4, status: 'Gakidou, who is senior director of organizational development and training at the Institute for Health Metrics and Evaluation at the University of Washington.', name: 'Mason', avatar: '/img/avatar/4.jpg', message: 'This ancient man is Abraham (also known as Abram).'},
  {id: 5, status: 'And what they find is that if you continue to drink after you\'ve had a cardiac event, it\'s not that bad for you', name: 'Elena', avatar: '/img/avatar/5.jpg', message: 'We can take his story seriously because the places and cities he visited are mentioned in other old writings.'},
  {id: 6, status: 'When compared with people who do not drink at all, the study found drinking up to 105 grams of alcohol each week', name: 'Vika', avatar: '/img/avatar/6.jpg', message: 'I will make you into a great nation, and I will bless you'},
  {id: 7, status: 'the equivalent of just over a bottle of wine or a six-pack of medium strength beer -- appeared to protect people who had already', name: 'Anatoly', avatar: '/img/avatar/7.jpg', message: 'I will make your name great, and you will be a blessing'},
  {id: 8, status: 'That\'s much less than the recommended upper drinking limit set by the World Health Organization for men and women', name: 'Emily', avatar: '/img/avatar/8.jpg', message: 'Most of us wonder if there is a God and if He really is the God of the Bible.'},
  {id: 9, status: 'However, the most benefit came from drinking less than half that amount, according to the study published Monday in the journal BMC Medicine.', name: 'Lily', avatar: '/img/avatar/9.jpg', message: 'The earliest copy of Genesis found in the Dead Sea Scrolls is dated 200-100 B.C.'},
  {id: 10, status: 'Our findings suggest that people with CVD (cardiovascular disease) may not need to stop drinking in order to prevent additional heart', name: 'Sophie', avatar: '/img/avatar/10.jpg', message: 'Surprisingly Abraham really did nothing important in his life.'},
  {id: 11, status: 'But this finding would not apply to everyone, as drinking alcohol raises the risk for certain diseases such as cirrhosis', name: 'Alice', avatar: '/img/avatar/11.jpg', message: 'Surprisingly Abraham really did nothing important in his life.'},
  {id: 12, status: 'If your main health condition risk is cancer, then the safest level of drinking is probably zero', name: 'Amelia', avatar: '/img/avatar/12.jpg', message: 'Surprisingly Abraham really did nothing important in his life.'},
  {id: 13, status: 'In what researchers are calling the largest study to date to examine the risk of alcohol use in people with existing cardiovascular disease', name: 'Ariel', avatar: '/img/avatar/13.jpg', message: 'Surprisingly Abraham really did nothing important in his life.'},
  {id: 14, status: 'Results from an additional 12 studies was added to the analysis to make a combined sample of over 48,000 people', name: 'Daniel', avatar: '/img/avatar/14.jpg', message: 'Surprisingly Abraham really did nothing important in his life.'},
  {id: 15, status: 'The new study found the lowest risk occurred when people with existing heart conditions drank from 6 to 8 grams of alcohol per day', name: 'James', avatar: '/img/avatar/15.jpg', message: 'Surprisingly Abraham really did nothing important in his life.'},
  {id: 16, status: 'But when people drank a bit less -- only 6 grams of alcohol a day -- the benefit almost doubled.', name: 'Alexander', avatar: '/img/avatar/16.jpg', message: 'Surprisingly Abraham really did nothing important in his life.'},
  {id: 17, status: 'They had a 50% lower risk of having another heart attack, stroke or episode of angina than those who did not drink', name: 'Michael', avatar: '/img/avatar/17.jpg', message: 'Surprisingly Abraham really did nothing important in his life.'},
  {id: 18, status: 'In the United States, that would be about a half a glass of regular beer or wine or 0.75 ounces of distilled spirits', name: 'Ethan', avatar: '/img/avatar/18.jpg', message: 'Surprisingly Abraham really did nothing important in his life.'},
  {id: 19, status: 'In the UK, where a standard unit of alcohol is 10 milliliters or 8 grams, it\'s a bit more complicated', name: 'Jacob', avatar: '/img/avatar/19.jpg', message: 'Surprisingly Abraham really did nothing important in his life.'},
  {id: 20, status: 'For decades, a "drink a day" was considered fine by public health standards because many similar studies over the years found a positive', name: 'Charley', avatar: '/img/avatar/20.jpg', message: 'Surprisingly Abraham really did nothing important in his life.'},
]

// const defaultState = {
//   chats: [
//     {id: 1, status: 'Death threats, suspicious roadblocks, missing witnesses and moved bodies revealed in leaked documents obtained exclusively by CNN', name: 'Alex', avatar: '/img/avatar/1.jpg', message: 'Even though Israel is a small country it is always in the news.'},
//     {id: 2, status: 'Drinking a little each week protects your heart if you have a cardiovascular condition, study finds', name: 'Noah', avatar: '/img/avatar/2.jpg', message: 'The news continues to report on Jews moving to Israel, on the technology invented there, but also on conflict, wars and tensions with surrounding people.'},
//     {id: 3, status: '"This is not the general population -- the study applies to people who have already had something happen that relates to cardiovascular health," ', name: 'Liam', avatar: '/img/avatar/3.jpg', message: 'Why? A look at Israel’s history in the book of Genesis in the Bible reveals that 4000 years ago a man, who is now very well known'},
//     {id: 4, status: 'Gakidou, who is senior director of organizational development and training at the Institute for Health Metrics and Evaluation at the University of Washington.', name: 'Mason', avatar: '/img/avatar/4.jpg', message: 'This ancient man is Abraham (also known as Abram).'},
//     {id: 5, status: 'And what they find is that if you continue to drink after you\'ve had a cardiac event, it\'s not that bad for you', name: 'Elena', avatar: '/img/avatar/5.jpg', message: 'We can take his story seriously because the places and cities he visited are mentioned in other old writings.'},
//     {id: 6, status: 'When compared with people who do not drink at all, the study found drinking up to 105 grams of alcohol each week', name: 'Vika', avatar: '/img/avatar/6.jpg', message: 'I will make you into a great nation, and I will bless you'},
//     {id: 7, status: 'the equivalent of just over a bottle of wine or a six-pack of medium strength beer -- appeared to protect people who had already', name: 'Anatoly', avatar: '/img/avatar/7.jpg', message: 'I will make your name great, and you will be a blessing'},
//     {id: 8, status: 'That\'s much less than the recommended upper drinking limit set by the World Health Organization for men and women', name: 'Emily', avatar: '/img/avatar/8.jpg', message: 'Most of us wonder if there is a God and if He really is the God of the Bible.'},
//     {id: 9, status: 'However, the most benefit came from drinking less than half that amount, according to the study published Monday in the journal BMC Medicine.', name: 'Lily', avatar: '/img/avatar/9.jpg', message: 'The earliest copy of Genesis found in the Dead Sea Scrolls is dated 200-100 B.C.'},
//     {id: 10, status: 'Our findings suggest that people with CVD (cardiovascular disease) may not need to stop drinking in order to prevent additional heart', name: 'Sophie', avatar: '/img/avatar/10.jpg', message: 'Surprisingly Abraham really did nothing important in his life.'},
//     {id: 11, status: 'But this finding would not apply to everyone, as drinking alcohol raises the risk for certain diseases such as cirrhosis', name: 'Alice', avatar: '/img/avatar/11.jpg', message: 'Surprisingly Abraham really did nothing important in his life.'},
//     {id: 12, status: 'If your main health condition risk is cancer, then the safest level of drinking is probably zero', name: 'Amelia', avatar: '/img/avatar/12.jpg', message: 'Surprisingly Abraham really did nothing important in his life.'},
//     {id: 13, status: 'In what researchers are calling the largest study to date to examine the risk of alcohol use in people with existing cardiovascular disease', name: 'Ariel', avatar: '/img/avatar/13.jpg', message: 'Surprisingly Abraham really did nothing important in his life.'},
//     {id: 14, status: 'Results from an additional 12 studies was added to the analysis to make a combined sample of over 48,000 people', name: 'Daniel', avatar: '/img/avatar/14.jpg', message: 'Surprisingly Abraham really did nothing important in his life.'},
//     {id: 15, status: 'The new study found the lowest risk occurred when people with existing heart conditions drank from 6 to 8 grams of alcohol per day', name: 'James', avatar: '/img/avatar/15.jpg', message: 'Surprisingly Abraham really did nothing important in his life.'},
//     {id: 16, status: 'But when people drank a bit less -- only 6 grams of alcohol a day -- the benefit almost doubled.', name: 'Alexander', avatar: '/img/avatar/16.jpg', message: 'Surprisingly Abraham really did nothing important in his life.'},
//     {id: 17, status: 'They had a 50% lower risk of having another heart attack, stroke or episode of angina than those who did not drink', name: 'Michael', avatar: '/img/avatar/17.jpg', message: 'Surprisingly Abraham really did nothing important in his life.'},
//     {id: 18, status: 'In the United States, that would be about a half a glass of regular beer or wine or 0.75 ounces of distilled spirits', name: 'Ethan', avatar: '/img/avatar/18.jpg', message: 'Surprisingly Abraham really did nothing important in his life.'},
//     {id: 19, status: 'In the UK, where a standard unit of alcohol is 10 milliliters or 8 grams, it\'s a bit more complicated', name: 'Jacob', avatar: '/img/avatar/19.jpg', message: 'Surprisingly Abraham really did nothing important in his life.'},
//     {id: 20, status: 'For decades, a "drink a day" was considered fine by public health standards because many similar studies over the years found a positive', name: 'Charley', avatar: '/img/avatar/20.jpg', message: 'Surprisingly Abraham really did nothing important in his life.'}
//   ], 
//   count: 0
// }


// action = { type: "", payload: "" }

// const countReducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {...state, count: state.count + action.payload}
//     case "DECREMENT":
//       return {...state, count: state.count - action.payload}
//     default: 
//       return state
//   }
// }

// const userReducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case "ADD_USER":
//       return {...state, count: state.count + action.payload}
//     case "GET_USER":
//       return {...state, count: state.count - action.payload}
//     default: 
//       return state
//   }
// }





ReactDOM.render(
      <Provider store={store}>
        <App />
        {/* <App /> */}
      </Provider>
      , 
      document.getElementById('root')
);


