'use client';
import styles from "./page.module.css";
import ProductsMain from "./Components/ProductsMain";
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    const {email} = useSelector(state=> state.user )
    console.log("user", email)
   return (<>
    <main className={styles.main}>
        {/* <h2>{ user.email }</h2> */}
        <ProductsMain></ProductsMain>
    </main>
    </>);
}
