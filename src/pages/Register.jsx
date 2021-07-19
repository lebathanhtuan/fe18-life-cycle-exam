import { Form, Input, Select, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-title">
          <h2>Register</h2>
        </div>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={(values) => console.log(values)}
        >
          <Form.Item
            label="Tên"
            name="name"
            rules={[{ required: true, message: "Bạn chưa nhập tên!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Bạn chưa nhập email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Giới tính"
            name="gender"
            rules={[{ required: true, message: "Bạn chưa nhập giới tính!" }]}
          >
            <Select>
              <Select.Option value="male">Nam</Select.Option>
              <Select.Option value="female">Nữ</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: "Bạn chưa nhập mật khẩu!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Xác nhận mật khẩu"
            name="prePassword"
            rules={[{ required: true, message: "Bạn chưa xác nhận mật khẩu!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="agree"
            valuePropName="checked"
          >
            <Checkbox>Đồng ý với các điều khoản</Checkbox>
          </Form.Item>

          <div style={{ display: 'inline-block', marginBottom: 16 }}>
            Bạn đã có tài khoản?&nbsp;
            <Link to="/login">
              Đăng nhập
            </Link>
          </div>

          <Button type="primary" htmlType="submit" block>
            Đăng kí
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default RegisterPage;
