import { Component } from 'react';

class MicroFrontend extends Component<MicroFrontendProps> {
  componentDidMount() {
    const { name, host, document } = this.props as MicroFrontendProps;
    const scriptId = `micro-frontend-script-${name}`;

    if (document.getElementById(scriptId)) {
      this.renderMicroFrontend();
      return;
    }

    fetch(`${host}/asset-manifest.json`)
      .then(res => res.json())
      .then(manifest => {
        const script = document.createElement('script');
        script.id = scriptId;
        script.crossOrigin = '';
        script.src = `${host}${manifest.files['main.js']}`;
        script.onload = this.renderMicroFrontend;
        document.head.appendChild(script);
      });
  }

  componentWillUnmount() {
    const { name, window } = this.props as MicroFrontendProps;

    window[`unmount${name}`](`${name}-container`);
  }

  renderMicroFrontend = () => {
    const { name, window, history } = this.props as MicroFrontendProps;

    window[`render${name}`](`${name}-container`, history);
  };

  render() {
    return <div><main id={`${(this.props as MicroFrontendProps).name}-container`} /></div>;
  }
}

interface MicroFrontendProps {
  name: string;
  host: any;
  document: any;
  window: any;
  history: any;
}

export default MicroFrontend;
