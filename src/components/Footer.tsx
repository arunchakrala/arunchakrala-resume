const Footer: React.FC = () => (
  <footer style={{
    width: '100vw',
    background: '#122032',
    color: '#a8b2d1',
    textAlign: 'center',
    padding: '16px 0',
    fontSize: '1rem'
  }}>
    © {new Date().getFullYear()} Arun Chakrala | Built with React & Vite
  </footer>
);

export default Footer;
