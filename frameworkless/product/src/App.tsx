import { Component } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ProductPage from './_ProductPage';

interface IAppProps {
  history: any;
  basename: string;
}

const defaultHistory = createBrowserHistory();

class App extends Component<IAppProps> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() { }

  render() {
    return (
      <Router navigator={(this.props as any).history || defaultHistory} location={(this.props as any).history?.location || defaultHistory.location} >
        <Routes>
          <Route path="/product/" element={<ProductPage />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
