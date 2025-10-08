// import { useEffect, useState } from "react"

import styles from './RenderPropsDemo.module.scss'
import DataFetcher from "../../components/DataFetcher"
import clsx from 'clsx';

// function Counter({ children }) {
//     const [counter, setCounter] = useState(0)
//     const increase = () => setCounter(counter + 1)

//     return children(counter, increase)
// }

// function List({ data = [], children }) {
//     const handleClick = () => {
//         console.log('Clicked!')
//     }

//     return <ul>
//         {data.map(item => children({ item, handleClick }))}
//     </ul>
// }

// const RenderPropsDemo = () => {
//     const [users, setUsers] = useState([])

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response => response.json())
//             .then(userList => setUsers(userList))
//     }, [])

//     return <div>
//         <h1>Data fetcher</h1>
//         <Counter>
//             {({ counter, increase }) => <button onClick={increase}>Increase {counter}</button>}
//         </Counter>

//         <List data={users}>
//             {({ item, handleClick }) => <li onClick={handleClick}>{item.name}</li>}
//         </List>
//     </div>
// }

const RenderPropsDemo = () => {
    return <div className={styles.renderPropsContainer}>
        <DataFetcher
            url='https://jsonplaceholder.typicode.com/posts?_limit=10'
        >
            {({ data, loading, error }) => {
                if (loading) return <span className='loader'></span>;
                if (error) return <div>Error: {error}</div>;

                return <div className={clsx(styles.posts, styles.sectionWrap)}>
                    <h3 className={styles.title}>Posts</h3>
                    <ul className={styles.list}>
                        {data?.map((post, index) => <li className={styles.item} key={post.id}>{index + 1}. {post.title}</li>)}
                    </ul>
                </div>
            }}
        </DataFetcher>

        <DataFetcher url="https://jsonplaceholder.typicode.com/users?_limit=10">
            {({ data, loading, error }) => {
                if (loading) return <span className='loader'></span>;
                if (error) return <div>Error: {error}</div>;

                return <div className={styles.sectionWrap}>
                    <h3 className={styles.title}>Users</h3>
                    <ul className={styles.list}>
                        {data?.map((user, index) => <li className={styles.item} key={user.id}>{index + 1}. {user.name} - {user.email}</li>)}
                    </ul>
                </div>
            }}
        </DataFetcher>

    </div>
}

export default RenderPropsDemo