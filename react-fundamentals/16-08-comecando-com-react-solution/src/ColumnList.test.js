import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ColumnList from './ColumnList';

it('renderiza corretamente', () => {
  expect(shallow(<ColumnList />)).toMatchSnapshot()
})

it('renderiza toda a árvore do componente, Done', () => {
  expect(render(<ColumnList title='Done' />)).toMatchSnapshot()
})

it('renderiza toda a árvore do componente, To Do', () => {
  expect(render(<ColumnList title='To Do' />)).toMatchSnapshot()
})

it('ao submeter o formulário, chama addTask', () => {
  const addTask = jest.fn();
  const test = mount(
    <ColumnList
      title='To Do'
      addTask={addTask}
    />
  );
  //console.log(test.find('button').html()) // <button type="submit">Add Task</button>
  test.find('form').simulate('submit')
  expect(addTask).toHaveBeenCalledTimes(1);
})

it('renderiza lista de elementos', () => {
  const test = mount(
    <ColumnList
      title='To Do'
      items={[{ id: 'kjdkjgd', title: 'Meu teste', status: 'To Do' }]}
    />
  );
  expect(test.find('li').length).toBe(1)
})

describe('usuário interage com lista', () => {
  it('usuário seleciona elemento da lista', () => {
    const updateTask = jest.fn();
    const test = mount(
      <ColumnList
        title='To Do'
        items={[{ id: 'kjdkjgd', title: 'Meu teste', status: 'To Do' }]}
        updateTask={updateTask}
      />
    );
    test.find('li').find('input').simulate('change')
    expect(updateTask).toHaveBeenCalledTimes(1)
  })
})

