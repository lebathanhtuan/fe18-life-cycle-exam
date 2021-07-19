import { useEffect } from 'react';
import { Select } from 'antd';

function TabA(props) {
  const { formValues, setFormValues } = props;

  useEffect(() => {
    console.log('Mới vào tab A')
  }, [])

  useEffect(() => {
    return () => {
      console.log('rời khỏi tab A')
    }
  }, [])

  return (
    <Select
      onChange={(values) => {
        setFormValues({
          ...formValues,
          option: values,
        })
      }}
      value={formValues.option}
      style={{ width: '100%' }}
    >
      <Select.Option value={'1'}>Option 1</Select.Option>
      <Select.Option value={'2'}>Option 2</Select.Option>
    </Select>
  );
}

export default TabA;
