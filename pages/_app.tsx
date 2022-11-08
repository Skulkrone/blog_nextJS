import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from 'next/app'
import Container from '../components/Container/Container'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}
