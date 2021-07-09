import React from 'react';
import {
    render,
    screen
} from '@testing-library/react';
import Conta from './Conta';

describe('Componente de Transação do extrato', () => {
    it('O snapshot do componente deve permanecer sempre o mesmo', () => {
        const {
            container
        } = render( <
            Conta saldo = {
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