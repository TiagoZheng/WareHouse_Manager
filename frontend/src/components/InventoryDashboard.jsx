import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import React, {useEffect, useState} from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';

const InventoryDashboard = () => {

    // State to hold the list of products fetched from the backend
    const[products, setProducts] = useState([]);

    // useEffect runs once when the component mounts


    return (
        <div className='mx-4'>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>No</TableCell>
                            <TableCell>Product</TableCell>
                            <TableCell>ID</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Quantity</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                        <TableRow key={product._id}>
                            <TableCell>{product.productName}</TableCell>
                            <TableCell>{product.productId}</TableCell>
                            <TableCell>{product.category}</TableCell>
                            <TableCell>{product.location}</TableCell>
                            <TableCell>{product.available}</TableCell>
                            <TableCell>{product.reserved}</TableCell>
                            <TableCell>{product.inTransit}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default InventoryDashboard