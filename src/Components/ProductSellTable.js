import React, { useState } from "react";
import abstract from "./photos/abstract.jpg";
import sarphens from "./photos/sarphens.png";
import "./ProductSellTable.css";

const ProductSellTable = () => {
    const [products, setProducts] = useState([
        { 
            productName: (
                <div className="flex gap-3">
                    <img className="rounded w-15 h-10" src={abstract} alt="abstract-image" />
                    <div>
                        <h3 className="font-bold">Abstract 3D</h3>
                        <p className="tracking-tighter text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            ),
            stock: "32 in stock", 
            price: "$ 45.99", 
            totalSales: 20 
        },
        { 
            productName: (
                <div className="flex gap-3">
                    <img className="rounded w-15 h-10" src={sarphens} alt="sarphens-image" />
                    <div>
                        <h3 className="font-bold">Sarphens illustration</h3>
                        <p className="tracking-tighter text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            ), 
            stock: "32 in stock", 
            price: "$ 45.99", 
            totalSales: 20  
        },
        { 
            productName: (
                <div className="flex gap-3">
                    <img className="rounded w-15 h-10" src={abstract} alt="abstract-image" />
                    <div>
                        <h3 className="font-bold">Abstract 3D</h3>
                        <p className="tracking-tighter text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            ),
            stock: "32 in stock", 
            price: "$ 45.99", 
            totalSales: 20 
        },
        { 
            productName: (
                <div className="flex gap-3">
                    <img className="rounded w-15 h-10" src={sarphens} alt="sarphens-image" />
                    <div>
                        <h3 className="font-bold">Sarphens illustration</h3>
                        <p className="tracking-tighter text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            ), 
            stock: "32 in stock", 
            price: "$ 45.99", 
            totalSales: 20  
        }
    ]);

    return (
        <div className="table-container">
            <table className="sell-table">
                <thead className="border-b-2 border-slate-300">
                    <tr className="text-left">
                        <th className="font-medium pb-1">Product Name</th>
                        <th className="font-medium  text-center">Stock</th>
                        <th className="font-medium  text-center">Price</th>
                        <th className="font-medium  text-center">Total Sales</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((product, index) => (
                        <tr key={index} className="odd:bg-white even:bg-slate-200 ">
                            <td className="py-2">
                                <div className="product-info-container">
                                    {product.productName}
                                </div>
                            </td>
                            <td className="p-2 px-3 text-center">{product.stock}</td>
                            <td className="p-2 text-center font-bold">{product.price}</td>
                            <td className="p-2 text-center">{product.totalSales}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductSellTable;
