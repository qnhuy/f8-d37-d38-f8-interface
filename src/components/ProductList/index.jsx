import styles from './ProductList.module.scss'
import withLoading from '../../hoc/withLoading'
import iphone16Plus from '../../images/iphone-16plus.jpg'
import oppoA6Pro from '../../images/oppo-a6pro.jpg'
import samsunGalaxyA60 from '../../images/samsung-galaxy-a06.jpg'

const ProductList = withLoading(() => {
  const products = [
    {
      name: 'iPhone 16 Plus',
      imgUrl: iphone16Plus,
    },
    {
      name: 'Oppo A6 Pro',
      imgUrl: oppoA6Pro,
    },
    {
      name: 'Samsung Galaxy A60',
      imgUrl: samsunGalaxyA60,
    },
  ]
  return (
    <div className={styles.productContainer}>
      <h3 className={styles.title}>Own Products</h3>
      <ul className={styles.productList}>
        {products.map((product, index) => (
          <li key={index} className={styles.productItem}>
            <img className={styles.productImg} src={product.imgUrl} alt='' />
            <p className={styles.productName}>{product.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
})

export default ProductList
