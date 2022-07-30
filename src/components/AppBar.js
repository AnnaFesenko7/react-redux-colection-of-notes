import { useSelector } from 'react-redux';
import Navigation from './Navigation';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

export default function AppBar() {
  return (
    <header style={styles.header}>
      <Navigation />
    </header>
  );
}
