import React from 'react';
import {
    fireEvent,
    render,
    screen
} from '@testing-library/react';
import Conta from './Conta';

describe('Componente de Transação do extrato', () => {
    it('O snapshot do componente deve permanecer sempre o mesmo', () => {
        const {
            container
        } = render( <Conta
                saldo = {
                    100
                }
                realizarTransacao = {
                    () => {}
                }
            />
        )
        expect(container.firstChild).toMatchSnapshot();
    });
});

describe('Componente de conta', () => {
    it('Exibir o saldo da conta com a formatação monetária', () => {
        render(<Conta saldo={1000}/>)
        const saldo = screen.getByTestId('saldo-conta');

        expect(saldo.textContent).toBe('R$ 1000');
    });

    it('Chama a função de realizar transação quando o botão é pressionado', () => {
        const realizarTransacao = jest.fn();
        render(<Conta saldo={1000} realizarTransacao={realizarTransacao} />);

        const botaoTransacao = screen.getByText("Realizar operação");
        fireEvent.click(botaoTransacao);

        expect(
            realizarTransacao
        ).toHaveBeenCalled();
    });
});