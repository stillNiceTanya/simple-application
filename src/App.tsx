import Footer from './components/Footer/Footer';
import Input from './components/Input/Input';
import List from './components/List/List';

import './App.scss';

const App = () => {
  return (
    <>
      <header className='header__title'>todos Jampad</header>
      <div className='content-wrapper'>
        <Input />
        <List />
        <Footer />
      </div>
    </>
  );
};

export default App;
