import './store-list.css'
import { InputText } from 'primereact/inputtext';
import { OrderList } from 'primereact/orderlist';
import React, { useState, useEffect } from 'react';

function StoreList(){

    // const items = [{
    //     id: '1000',
    //     code: 'f230fh0g3',
    //     name: 'Bamboo Watch',
    //     description: 'Product Description',
    //     image: 'bamboo-watch.jpg',
    //     price: 65,
    //     category: 'Accessories',
    //     quantity: 24,
    //     inventoryStatus: 'INSTOCK',
    //     rating: 5
    // }];
    const [products, setProducts] = useState([]);

    const itemTemplate = (item) => {
        return (
            <div className="flex flex-wrap p-2 align-items-center gap-3">
                <img className="w-4rem shadow-2 flex-shrink-0 border-round" src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`} alt={item.name} />
                <div className="flex-1 flex flex-column gap-2 xl:mr-8">
                    <span className="font-bold">{item.name}</span>
                    <div className="flex align-items-center gap-2">
                        <i className="pi pi-tag text-sm"></i>
                        <span>{item.category}</span>
                    </div>
                </div>
                <span className="font-bold text-900">${item.price}</span>
            </div>
        );
    };
    

    return (
        <>
            <span className="title">
            <InputText value={'test'}  className='m-3'/>
            <div className="card xl:flex xl:justify-content-center">
            <OrderList dataKey="id" value={products}  header="Products"></OrderList>
        </div>
            </span>
        </>
    )
}

export default StoreList;