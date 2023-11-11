import { Footer } from './components/Footer';
import { Input } from './components/Input';
import { List } from './components/List';

import styles from './App.module.css';

const App = () => (
  <>
    <header className={styles.title}>todos</header>
    <div className={styles.content}>
      <Input />
      <List />
      <Footer />
    </div>
  </>
);

export default App;
