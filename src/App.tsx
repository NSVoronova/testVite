import './App.css';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

import Header from './components/Header/Header';

const App = () => (
  <MantineProvider>
    <Header />
  </MantineProvider>
);

export default App;
