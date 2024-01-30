import { BrowserRouter, Route, Routes } from '@modern-js/runtime/router';
import InventoryPage from './_InventoryPage';

export default (props: { basename: string }) => {
  const { basename } = props;

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route index element={InventoryPage()} />
        <Route path={'path'} element={<div>Inventory Route</div>} />
      </Routes>
    </BrowserRouter>
  );
};
