import { useState } from 'react';
import { Space, Button, Tabs } from 'antd';

import TabA from './TabA';
import TabB from './TabB';

function AboutPage() {
  const [tabSelected, setTabSelected] = useState('A');
  const [formValues, setFormValues] = useState({
    option: '1',
    title: '',
  });

  return (
    <>
      <div>About Page</div>
      <Space>
        <Button
          type={tabSelected === 'A' ? 'primary' : 'default'}
          onClick={() => setTabSelected('A')}
        >
          A
        </Button>
        <Button
          type={tabSelected === 'B' ? 'primary' : 'default'}
          onClick={() => setTabSelected('B')}
        >
          B
        </Button>
      </Space>
      {tabSelected === 'A'
        ? <TabA formValues={formValues} setFormValues={setFormValues} />
        : <TabB formValues={formValues} setFormValues={setFormValues} />
      }
    </>
  );
}

export default AboutPage;
