import React from 'react';
import NextButton from './index';
import { MemoryRouter } from 'react-router-dom';
import '../../index.scss';

export default {
  title: 'NextButton',
  component: NextButton
};

const Template = (args) => <MemoryRouter><NextButton {...args} /></MemoryRouter>;

export const Default = Template.bind({});
Default.args = {
  onClick: () => console.log('hello world')
};
