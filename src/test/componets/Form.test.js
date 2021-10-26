import { render, screen, fireEvent } from '@testing-library/react';
import Form from '../../components/Form';


test('sobre el componente Formulario', () => {

    const handleLogin = jest.fn();

    render(<Form handleLogin={handleLogin} />)

    const contentEmail = screen.getByPlaceholderText('email')
    const contentPassword = screen.getByPlaceholderText('password')
    const contentSubmit = screen.getByRole('button', {name:/Iniciar Sesion/i})

    fireEvent.change(contentEmail, {
        target: {value:'amigas@amiga.com'}
    })

    fireEvent.change(contentPassword, {
        target: {value:'12345678'}
    })

   
    expect(handleLogin).not.toHaveBeenCalled()

    fireEvent.submit(contentSubmit)

    expect(handleLogin).toHaveBeenCalled()

    expect(handleLogin).toHaveBeenCalledWith('amigas@amiga.com','12345678')
    
})