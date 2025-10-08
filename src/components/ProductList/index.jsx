import styles from './ProductList.module.scss'
import withLoading from "../../hoc/withLoading";

const ProductList = withLoading(() => {
    const products = [
        { name: 'iPhone 17 Plus', imgUrl: 'https://iphone17.vn/wp-content/uploads/2024/11/600_16x_2_1.jpg' },
        { name: 'Samsung S25 Ultra', imgUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTBnsV4DsZCKPtTJUnph2PpWy-lf_aZczKdsaLXb6Ml07_yQGrtSRVetC1VFC6pmfidrJ1xSfO7z_jCEWTatchHjvMUGjoY5oJijTOvx-Nxi2I3adR40Wj75-KkLcc2uPGcTLqE0g&usqp=CAc' },
        { name: 'Xiaomi 17 Pro Max', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc736daH-NnDqPTebt9S1yQu9l55euHqcxGg&s' },
    ];
    return <div className={styles.productContainer}>
        <h3 className={styles.title}>Own Products</h3>
        <ul className={styles.productList}>
            {products.map((product, index) => <li key={index} className={styles.productItem}>
                <img className={styles.productImg} src={product.imgUrl} alt="" />
                <p className={styles.productName}>{product.name}</p>
            </li>)}
        </ul>
    </div>
})

export default ProductList