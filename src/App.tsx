import Footer from './components/Footer/Footer';
import Input from './components/Input/Input';
import List from './components/List/List';

import styles from './App.module.css';

const App = () => {
  return (
    <>
      <header className={styles.title}>todos Jampad</header>
      <div className={styles.content}>
        <Input />
        <List />
        <Footer />
      </div>
    </>
  );
};

export default App;
