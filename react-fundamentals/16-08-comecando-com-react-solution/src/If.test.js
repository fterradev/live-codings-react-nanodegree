import React from 'react';
import { shallow } from 'enzyme';
import If from './If';

it('renderiza corretamente', () => {
  const test = (
    <If test={true}>
      <span>Olá, teste</span>
    </If>
  )
  expect(shallow(test)).toMatchSnapshot()
})

it('renderiza corretamente sem elementos filhos', () => {
  const test = (
    <If test={false}>
      <span>Olá, teste</span>
    </If>
  )
  expect(shallow(test)).toMatchSnapshot()
})