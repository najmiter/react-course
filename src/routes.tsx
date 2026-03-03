import { BrowserRouter, Route, Routes } from 'react-router';
import { ErrorBoundary } from 'react-error-boundary';
import HomePage from '@/pages/home';
import AboutPage from '@/pages/about';
import ProductsPage from './pages/products';
import Product from './pages/product';
import MainLayout from './components/layouts/main-layout';
import ProductLayout from './components/layouts/product-layout';
import NotFoundPage from './pages/not-found';
import CheckoutPage from './pages/checkout';
import { Suspense } from 'react';
import ErrorPage from './pages/error';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* / */}
          <Route index element={<HomePage />} />
          {/* /about */}
          <Route path="about" element={<AboutPage />} />

          {/* /checkout */}
          <Route path="checkout" element={<CheckoutPage />} />

          <Route path="products" element={<ProductLayout />}>
            {/* /products */}
            <Route index element={<ProductsPage />} />
            {/* /products/123 */}
            <Route
              path=":id"
              element={
                <ErrorBoundary FallbackComponent={ErrorPage} onReset={() => console.log('Resetting...')}>
                  <Suspense
                    fallback={
                      <div className="grid w-full place-content-center h-svh">
                        <div className="border border-t-transparent border-white rounded-full animate-spin size-5" />
                      </div>
                    }>
                    <Product />
                  </Suspense>
                </ErrorBoundary>
              }
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
