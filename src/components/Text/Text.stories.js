import React from 'react';
import Text from './index';
import '../../index.scss';

export default {
  title: 'Text',
  component: Text
};

const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  tag: 'p',
  fontSize: '2rem',
  content: 'Hello World'
};
