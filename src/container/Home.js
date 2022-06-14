import React from 'react';

function Home({ Data }) {

    let datafilter = Data.filter((fd, fi) => fd.salary > 25000);

    return (
        <div>
            <h1 align="center">Employee Data</h1>
            <table border="1px" width="750px" align="center" cellSpacing="0" cellPadding="0">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Joining Date</th>
                    <th>Salary</th>
                </tr>
                {
                    datafilter.map((fdata, findex) => {
                        let { id, name, joining_date, salary} = fdata;
                        return (
                            <tr key={findex}>
                                <td align="center">{id}</td>
                                <td align="center">{name}</td>
                                <td align="center">{joining_date}</td>
                                <td align="center">{salary}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    );
}

export default Home;