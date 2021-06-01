import axios from 'axios';
import React, { useEffect, useState } from 'react'

import SortButton from './SortButton.js'

const TopLinks = () => {

    const [topUrl, setTopUrl] = useState([]);
    let tableId = 1;
    const [sortConfig, setSortConfig] = useState(null)

    const sortItems = () => {
        let sortableItems = [...topUrl]
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending'
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending'
                }

                return 0;
            });
        }

        return sortableItems;
    }

    const requestSort = (key) => {
        let direction = 'ascending'
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending'
        }

        setSortConfig({ key, direction });
    }


    useEffect(async () => {

        try {
            const result = await axios.get('http://localhost:3000/api/url')
            setTopUrl(result.data)
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <div className="table text-base text-blue-600 mt-1 max-w pb-2">
            <table className="table-fixed border border-black">
                <thead className="bg-yellow-600 text-white font-mono">
                    <tr className="border border-black">
                        <th className="border border-black">Traffic Rank
                        <SortButton handleClick={() => requestSort('rank')} />
                        </th>
                        <th>Full Link
                        <SortButton handleClick={() => requestSort('full')} />
                        </th>
                        <th>Short Link
                        <SortButton handleClick={() => requestSort('short')} />
                        </th>
                        <th>Visits
                        <SortButton handleClick={() => requestSort('clicks')} />
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {topUrl.map(item => {
                        return (<tr key={item._id} className="border border-black">
                            <td>{tableId++}</td>
                            <td>{item.full}</td>
                            <td>{item.short}</td>
                            <td>{item.clicks}</td>
                        </tr>)
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default TopLinks
