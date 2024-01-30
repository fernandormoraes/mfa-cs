import { BrowserRouter, Route, Routes } from '@modern-js/runtime/router';
import Dashboard from './_dashboard';

export default (props: { basename: string }) => {
  const { basename } = props;

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route index element={Dashboard()} />
        <Route path={'path'} element={<div>Dashboard route</div>} />
      </Routes>
    </BrowserRouter>
  );
};
