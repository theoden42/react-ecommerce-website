import React, {useContext} from 'react'
import {ProductContext} from '../contexts/ProductContext'

const Home = () => {
    const { products } = useContext(ProductContext);
    console.log(products);
    <section className=''>

    </section>
}

export default Home