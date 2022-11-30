import Alert from 'react-bootstrap/Alert';
import '../stylesheets/links.css';
import '../stylesheets/reset.css';

export function LinksExample() {
  return (
    <>
      {['info'].map((variant) => (
        <Alert key={variant} variant={variant}>
          Si desea leer más sobre el sistema solar, clickee {' '}
          <Alert.Link href="https://www.nationalgeographic.com.es/ciencia/sistema-solar-que-es-como-se-formo-y-datos-principales_18430" target="_blank">este link.</Alert.Link>
        </Alert>
      ))}
    </>
  );
}

