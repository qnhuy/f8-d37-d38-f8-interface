// import { useState } from "react"

import styles from './CustomHookDemo.module.scss'
import useApi from "../../hooks/useApi";
import useToggle from "../../hooks/useToogle";

// function useCounter() {
//     const [counter, setCounter] = useState(0)
//     const increase = () => setCounter(counter + 1)

//     return { counter, increase }
// }

// const CustomHooksDemo = () => {
//     const countHandler = useCounter()

//     return <div >
//         <h1>Custom Hook</h1>
//         <button onClick={countHandler.increase}>Value: {countHandler.counter}</button>
//     </div>
// }

const CustomHooksDemo = () => {
    function capitalizeFirstLetter(str) {
        if (str.length === 0) {
            return ""; // Handle empty strings
        }
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return <div className={styles.customHookContainer}>
        {function PostList() {
            const { data, loading, error, refetch } = useApi('https://jsonplaceholder.typicode.com/posts?_limit=20');
            const [showPosts, togglePosts, setShowPost] = useToggle(true)

            if (loading) return <div className='loader'></div>
            if (error) return <div>Error: {error}</div>

            return (
                <div className={styles.sectionWrap}>
                    <div className={styles.buttons}>
                        <button className="primary-btn" onClick={refetch}>Refetch Posts</button>
                        <button className="primary-btn" onClick={togglePosts}>{showPosts ? 'Hidden' : 'Visible'}</button>
                        <button className="primary-btn" onClick={() => setShowPost(false)}>Hide Posts</button>
                    </div>

                    <ul className={styles.list}>
                        {showPosts && data?.map(post => <li className={styles.item} key={post.id}>{capitalizeFirstLetter(post.title)}</li>)}
                    </ul>
                </div>
            );
        }()}

        {function UserList() {
            const { data, loading, error, refetch } = useApi('https://jsonplaceholder.typicode.com/users');
            const [showUsers, toggleUsers, setShowUsers] = useToggle(true)

            if (loading) return <div className='loader'></div>
            if (error) return <div>Error: {error}</div>

            return (
                <div className={styles.sectionWrap}>
                    <div className={styles.buttons}>
                        <button className="primary-btn" onClick={refetch}>Refetch Usernames</button>
                        <button className="primary-btn" onClick={toggleUsers}>{showUsers ? 'Hidden' : 'Visible'}</button>
                        <button className="primary-btn" onClick={() => setShowUsers(false)}>Hide Usernames</button>
                    </div>

                    <ul className={styles.list}>
                        {showUsers && data?.map(user => <li className={styles.item} key={user.id}>{user.username}</li>)}
                    </ul>
                </div>
            );
        }()}
    </div>
}

export default CustomHooksDemo