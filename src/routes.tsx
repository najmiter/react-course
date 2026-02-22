import { BrowserRouter, Route, Routes } from 'react-router';

import HomePage from '@/pages/home';
import AboutPage from '@/pages/about';
import ProductsPage from './pages/products';
import Product from './pages/product';
import MainLayout from './components/layouts/main-layout';
import ProductLayout from './components/layouts/product-layout';
import NotFoundPage from './pages/not-found';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* / */}
          <Route index element={<HomePage />} />
          {/* /about */}
          <Route path="about" element={<AboutPage />} />

          <Route path="products" element={<ProductLayout />}>
            {/* /products */}
            <Route index element={<ProductsPage />} />
            {/* /products/123 */}
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
