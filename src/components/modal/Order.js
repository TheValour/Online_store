import { useRef, useState } from 'react';
import classes from './Order.module.css';
import Submit from './Submit';

const Order = (props) => {
    // const [sub, setSub] = useState(false);

    const nameRef = useRef();
    const streetRef = useRef();
    const postalRef = useRef();
    const cityRef = useRef();

    function confirmHandler(event) {
        //setSub(true);
        event.preventDefault();
        props.submitOrderHandler({
            name: nameRef.current.value,
            street: streetRef.current.value,
            postal: postalRef.current.value,
            city: cityRef.current.value,
        })
        nameRef.current.value = '';
        streetRef.current.value = '';
        postalRef.current.value = '';
        cityRef.current.value = '';
        props.onCancel();
        //setSub(false);
    }

    return (
        <>

            <form className={classes.form} onSubmit={confirmHandler}>
                <div className={classes.control}>
                    <label htmlFor='name'>Your Name</label>
                    <input type='text' id='name' ref={nameRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='street'>Street</label>
                    <input type='text' id='street' ref={streetRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='postal'>Postal Code</label>
                    <input type='text' id='postal' ref={postalRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='city'>City</label>
                    <input type='text' id='city' ref={cityRef} />
                </div>
                <div className={classes.actions}>
                    <button type='button' onClick={props.onCancel}>
                        Cancel
                    </button>
                    <button className={classes.submit} >Confirm</button>
                </div>
            </form>

        </>
    );
};

export default Order;