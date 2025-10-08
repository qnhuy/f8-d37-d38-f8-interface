import styles from './HOCDemo.module.scss'
import UserProfile from '../../components/UserProfile'
import ProductList from '../../components/ProductList'

const HOCDemo = () => {
    return <div className={styles.hocDemoContainer}>
        <UserProfile />
        <ProductList />
    </div>
}

export default HOCDemo