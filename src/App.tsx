import './App.scss';
import React from 'react';
import Footer from './components/Footer/Footer';
import Input from './components/Input/Input';
import List from './components/List/List';

const App: React.FC = () => {
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
