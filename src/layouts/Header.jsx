import { Space, Button } from 'antd';
import { Link } from "react-router-dom";

function Header(props) {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  function handleLogout() {
    localStorage.removeItem('userInfo');
  }

  return (
    <div className="header-container">
      <div style={{ fontSize: 24 }}>LOGO</div>
      <Space>
        <Link to="/">
          <Button type="link">Home</Button>
        </Link>
        <Link to="/about">
          <Button type="link">About</Button>
        </Link>
      </Space>
      {userInfo
        ? (
          <Space>
            <h3 style={{ margin: 0 }}>{userInfo.name}</h3>
            <Button
              type="primary"
              onClick={() => handleLogout()}
            >
              Đang xuất
            </Button>
          </Space>
        )
        : (
          <Link to="/login">
            <Button type="primary">Đăng nhập</Button>
          </Link>
        )
      }
    </div>
  );
}

export default Header;
