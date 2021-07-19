import { useState, useEffect } from 'react';
import { Row, Col, Card } from 'antd';
import { Link } from "react-router-dom";
import { productList } from '../constants/product';

function HomePage(props) {
  const [count, setCount] = useState(0);

  // Mounting: Khởi tạo
  useEffect(() => {
    // Câu lệnh
  }, []);

  // Updation: Cập nhật
  useEffect(() => {
    // Câu lệnh phụ thuộc props hoặc state bỏ trong mảng của tham số thứ 2
  }, [
    // props 1,
    // props 2,
    // state 1,
  ]);

  // Unmounting: Rời khỏi
  useEffect(() => {
    return () => {
      // Câu lệnh
    }
  }, []);

  useEffect(() => {
    console.log('Mới vào home');
  }, []);

  useEffect(() => {
    return () => {
      console.log('Rời khỏi home');
    }
  }, []);

  function renderProductList() {
    return productList.map((productItem, productIndex) => {
      return (
        <Col span={6} key={productIndex}>
          <Link to={`/product/${productItem.id}`}>
            <Card
              size="small"
              title={productItem.name}
            >
              <div>{productItem.price.toLocaleString()}</div>
            </Card>
          </Link>
        </Col>
      )
    })
  }

  return (
    <div>
      <div>Home Page</div>
      <div style={{ padding: 16 }}>
        <Row gutter={[16, 16]}>
          {renderProductList()}
        </Row>
      </div>
    </div>
  );
}

export default HomePage;
