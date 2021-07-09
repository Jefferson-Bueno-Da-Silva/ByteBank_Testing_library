import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App, { calcularNovoSaldo } from './App';

describe('componente principal', () => {

    describe('Quando eu abro o app do banco', () => {
        it('Mostra o nome do banco', () => {
            render(<App />);
            const expectText = screen.getByText('ByteBank')
            expect(expectText).toBeInTheDocument();
        })
    
        it('Mostra saldo', () => {
            render(<App />);
            const expectText = screen.getByText('Saldo:')
            expect(expectText).toBeInTheDocument();
        })
    
        test('Mostra Botão "Realizar operação"', () => {
            render(<App />);
            const expectText = screen.getByText('Realizar operação')
            expect(expectText).toBeInTheDocument();
        })
    })

    describe('Quando eu realizo a transação', () => {
        it('que é saque, o valor deve diminuir', () => {
            const valores = {
                transacao: 'saque',
                valor: 50
            }
            const novoSaldo = calcularNovoSaldo(valores, 150);

            expect(novoSaldo).toBe(100);
            expect(novoSaldo).not.toBe(150);
        });

        it('que é saque, a transação deve ser realizada', () => {
            render(<App />);
            
            const saldo = screen.getByText("R$ 1000");
            const transacao = screen.getByLabelText('Saque')
            const valor = screen.getByTestId("valor");
            const botaoTransacao = screen.getByText("Realizar operação");
            
            expect(saldo.textContent).toBe("R$ 1000");

            fireEvent.click(transacao, {target: { value: 'saque'}});
            fireEvent.change(valor, {target: { value: 10}});
            fireEvent.click(botaoTransacao)

            expect(saldo.textContent).toBe("R$ 990");
        });
    })
    
})