import { useState } from "react";
import { Space, Button } from 'antd';

import './App.css';
import 'antd/dist/antd.css';

function App() {
  const [pageSelected, setPageSelected] = useState('/home');

  function renderPage() {
    switch (pageSelected) {
      case '/home': {
        return (
          <div>Đây là trang home</div>
        )
      }
      case '/list': {
        return (
          <div>Đây là trang list</div>
        )
      }
      case '/detail': {
        return (
          <div>Đây là trang detail</div>
        )
      }
      case '/profile': {
        return (
          <div>Đây là trang profile</div>
        )
      }
      default: {
        return (
          <div>Đây là trang home</div>
        )
      }
    }
  }

  return (
    <div className="App">
      <Space size={32}>
        <Button onClick={() => setPageSelected('/home')}>Home</Button>
        <Button onClick={() => setPageSelected('/list')}>List</Button>
        <Button onClick={() => setPageSelected('/detail')}>Detail</Button>
        <Button onClick={() => setPageSelected('/profile')}>Profile</Button>
      </Space>
      <div>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
