import styles from './ItemContainer.module.css';
import Item from './Item';

export default function ItemContainer({ meals }) {
    return (
        <div className={styles.container}>

            {meals.map((product) => (
                <Item product={product} key={product.id} />
            ))
            }
        </div >
    );
}
