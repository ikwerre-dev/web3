import React from 'react';

const TableforTokens = ({ item, index }) => {
    const color = item.type === "Buy" ? "text-success" : "text-danger";
    const bg = item.type === "Buy" ? "#0EA5E9" : "#48C774";

    return (
        <tr>
            <td className='d-flex gap-2'>
                <div className="box" style={{backgroundColor: bg}}></div> {item.status}
            </td>
            <td className={color}>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.volume}</td>
            <td>{item.date}</td>
            <td>{item.transactionID}</td>
        </tr>
    );
}

export default TableforTokens;
