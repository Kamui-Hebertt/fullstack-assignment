import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';

export default function App(): JSX.Element {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
