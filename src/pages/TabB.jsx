import { useEffect } from 'react';
import { Input } from 'antd';

function TabB(props) {
  const { formValues, setFormValues } = props;

  useEffect(() => {
    if (formValues.option === '2') {
      setFormValues({
        ...formValues,
        title: 'Đã chọn 2',
      })
    } else {
      setFormValues({
        ...formValues,
        title: '',
      })
    }
  }, [formValues.option]);

  useEffect(() => {
    return () => {
      console.log('Rời khỏi tab B')
      setFormValues({
        ...formValues,
        option: '1',
      })
    }
  }, []);

  return (
    <Input
      value={formValues.title}
      onChange={(e) => {
        setFormValues({
          ...formValues,
          title: e.target.value,
        })
      }}
      placeholder="Nhập vào đây...."
    />
  );
}

export default TabB;
