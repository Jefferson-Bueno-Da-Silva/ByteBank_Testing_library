import React from 'react';
import { render, screen } from '@testing-library/react';
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
    })
    
})