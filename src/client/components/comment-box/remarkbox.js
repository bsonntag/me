// @flow

import { iframeResizer } from 'iframe-resizer';
import React, { Component } from 'react';

type Props = {
  className?: string,
  remarkboxKey: string,
  style?: Object,
  threadFragment?: string,
  threadUri: string,
};

class Remarkbox extends Component<Props> {

  iframe: ?HTMLIFrameElement = null;

  onRef = (iframe: ?HTMLIFrameElement) => {
    this.iframe = iframe;
  };

  getUrl(): string {
    const { remarkboxKey, threadUri } = this.props;

    return `https://my.remarkbox.com/embed?rb_owner_key=${remarkboxKey}&thread_uri=${encodeURIComponent(threadUri)}`;
  }

  componentDidMount() {
    if (!this.iframe) {
      return;
    }

    const { threadFragment } = this.props;

    iframeResizer({
      checkOrigin: ['https://my.remarkbox.com'],
      inPageLinks: true,
      initCallback: event => {
        if (threadFragment) {
          event.iFrameResizer.moveToAnchor(threadFragment);
        }
      },
    }, this.iframe);
  }

  render() {
    const { className, style } = this.props;

    return (
      <iframe
        className={className}
        frameBorder={0}
        ref={this.onRef}
        scrolling={'no'}
        src={this.getUrl()}
        style={style}
        tabIndex={0}
        title={'Remarkbox'}
      />
    );
  }

}

export default Remarkbox;
