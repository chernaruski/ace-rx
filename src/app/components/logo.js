'use strict';

import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ChatIcon from 'material-ui/svg-icons/communication/chat';

export default class Logo extends Component {
  render() {
    return (
      <AppBar
        showMenuIconButton={false}
        title={
          'TUZACH.IN'
        }
        iconElementRight={
          <IconButton
            className='chat-mode-switch'
            onTouchTap={e => {
              e.preventDefault();
              this.props.togglePlaylistMode();
            }}
          >
            <ChatIcon />
          </IconButton>}
      />
    );
  }
}

Logo.propTypes = {
  playlistMode: PropTypes.bool.isRequired,
  togglePlaylistMode: PropTypes.func.isRequired
};
