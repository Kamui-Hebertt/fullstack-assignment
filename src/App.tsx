import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function App(): JSX.Element {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}
