import { BrowserRouter, Route, Routes } from '@modern-js/runtime/router';
import ProductPage from './_ProductPage';

export default (props: { basename: string }) => {
  const { basename } = props;

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route index element={ProductPage()} />
        <Route path={'path'} element={<div>Product Route</div>} />
      </Routes>
    </BrowserRouter>
  );
};
