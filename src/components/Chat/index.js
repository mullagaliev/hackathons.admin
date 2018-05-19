import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';


const ChatForm = styled.form`
  position: relative;
  margin-bottom: 40px;
  textarea{
    min-width: calc(100%);
    max-width: calc(100%);
    border: 1px solid #DFDDDD;
    border-radius: 4px;
    min-height: 160px;
    line-height: 1;
    padding: 10px 10px;
    margin-bottom: 10px;
  }
  button{
    width: 100px;
    position: absolute;
    right: 0;
    bottom: -5px;
    height: 30px;
    background: #2CCB70;
    border-radius: 2px;
    border: 0;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0;
  }
  .ChatInput__info{
    display: block;
    position: relative;
    top: -10px;
    opacity: 0.5;
    font-size: 14px;
  }
`;

const ChatMessageList = styled.div`
  display: flex;
  flex-flow: column nowrap;
  & > *{
    background-color: #F0F0F0;
    margin-bottom: 10px;
    padding: 20px;
    border-radius: 6px;
    .ChatMessage__title{
      display: block;
      margin-bottom: 10px;
      opacity: 0.7;
    }
    .ChatMessage__text{
      margin: 0;
    }
  }
`;

class Chat extends Component {
  state = {
    messages: []
  };

  handlerSend = (e) => {
    e.preventDefault();
    console.log(this.refs.message.value);
    const text = this.refs.message.value;
    if (text) {
      this.refs.message.value = '';
      let messages = this.state.messages;
      messages.unshift({
        "postTimestamp": moment().format('X'),
        "content": text
      });

      this.setState({ messages })
    }
  };

  render() {
    const { messages } = this.state;
    return (
        <div className='Segment'>
          {/*<div className='Segment__title'>*/}
          {/*Chat*/}
          {/*</div>*/}
          <div className='Segment__inside'>
            <ChatForm onSubmit={this.handlerSend}>
              <textarea placeholder='Your message' name="message" ref="message"/>
              <span className='ChatInput__info'>* Message delivery may take up to 20 seconds</span>
              <button type="submit">Send</button>
            </ChatForm>
            {
              messages.length > 0 ? <Fragment>
                <h2>History</h2>
                <ChatMessageList>
                  {
                    messages.map((message, key) => {
                      return (<div key={key}>
                        <span
                            className='ChatMessage__title'>{moment(message.postTimestamp, 'X').format('HH:mm:ss DD/MM/YYYY')}</span>
                        <p className='ChatMessage__text'>
                          {message.content}
                        </p>
                      </div>);
                    })
                  }
                </ChatMessageList>
              </Fragment> : null
            }
          </div>
        </div>
    );
  }
}

Chat.propTypes = {};
Chat.defaultProps = {};

export default Chat;
