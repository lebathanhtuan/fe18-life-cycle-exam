import { useState, useEffect } from 'react';
import { Row, Col, Card, Button } from 'antd';

import history from '../utils/history';
import { productList } from '../constants/product';

function ProductDetailPage(props) {
  const { match } = props;
  const productId = parseInt(match.params.id);

  const [productData, setProductData] = useState({});
  console.log('🚀 ~ file: ProductDetail.jsx ~ line 12 ~ ProductDetailPage ~ productData', productData);
  
  useEffect(() => {
    console.log('Mới vào detail');
  }, []);
  
  useEffect(() => {
    console.log('Update detail');
    const productDetail = productList.find((product) => product.id === productId);
    setProductData(productDetail);
  }, [productId]);
  
  useEffect(() => {
    return () => {
      console.log('Rời khỏi detail');
    }
  }, []);

  function renderProductList() {
    return productList.map((productItem, productIndex) => {
      if (productIndex > 3) return null;
      return (
        <Col span={6} key={productIndex}>
          <Card
            size="small"
            title={productItem.name}
            onClick={() => history.push(`/product/${productItem.id}`)}
            style={{ cursor: 'pointer' }}
          >
            <div>{productItem.price.toLocaleString()}</div>
          </Card>
        </Col>
      )
    })
  }

  if (!productData.id) return <div>Loading...</div>
  return (
    <>
      <Button onClick={() => history.goBack()}>
        Quay lại
      </Button>
      <div>{productData.name}</div>
      <div>{productData.price.toLocaleString()}</div>
      <Button onClick={() => history.push('/login')}>
        Đăng nhập để mua
      </Button>
      <div>Sản phẩn tương tự</div>
      <div style={{ padding: 16 }}>
        <Row gutter={[16, 16]}>
          {renderProductList()}
        </Row>
      </div>
    </>
  );
}

export default ProductDetailPage;
