import React from 'react';
import Button from './index';
import '../../index.scss';

export default {
  title: 'Button',
  component: Button
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: () => console.log('hello world'),
  content: 'Hello World',
  fontSize: '2rem',
  width: '5rem'
};
