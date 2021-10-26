import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

beforeEach(() => render(<App />))

test('sobre el componente App', () => {

  const contentEmail = screen.getByPlaceholderText('email')
  const contentPassword = screen.getByPlaceholderText('password')
  const contentSubmit = screen.getByRole('button', {name:/Iniciar Sesion/i})

  expect(contentEmail).toBeInTheDocument()
  expect(contentPassword).toBeInTheDocument()
  expect(contentSubmit).toBeInTheDocument()

  
 // click
  fireEvent.submit(contentSubmit)
  
  const titleByText = screen.getByText('Bienvenida')
  expect(titleByText).toBeInTheDocument()
  

});