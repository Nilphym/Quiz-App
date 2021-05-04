import React from 'react';
import LinkButton from './index';
import { MemoryRouter } from 'react-router-dom';
import '../../index.scss';

export default {
  title: 'LinkButton',
  component: LinkButton
};

const Template = (args) => <MemoryRouter><LinkButton {...args} /></MemoryRouter>;

export const Default = Template.bind({});
Default.args = {
  destination: '/',
  content: 'start',
  fontSize: '3rem',
  roundSize: '15rem'
};
