import Image from "next/image";
import styles from "./page.module.css";
import ProductsMain from "./Components/ProductsMain";
export default function Home() {

   return (<>
    <main className={styles.main}>
        <ProductsMain></ProductsMain>
    </main>
    </>);
}
