import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import CompanyPage from './pages/Company';
import ShopPage from './pages/Shop';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: 'products', element: <ProductsPage /> },
			{ path: 'company', element: <CompanyPage /> },
			{ path: 'shop', element: <ShopPage /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
