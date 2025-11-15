// routes/publicRoutes.jsx
import CommonErrorPage from '../components/404/CommonErrorPage'
import MainLayout from '../pages/BaseLayout'
import Home from '../pages/Home/Home'

export const publicRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: '*',
    element: (
      <CommonErrorPage
        contentMessage='Sorry, the page you are looking for does not exist.'
        titleError='404'
        titleMessage='OPS! Page not found'
      />
    ),
  },
]
