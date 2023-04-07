import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Detail = () => {
  const [users, setUsers] = useState({});
  const { id } = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${id.replace(':', '')}`;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.log('Error fetching user:', error);
      }
    };
    fetchUsers();
  }, [id, url]);

  return (
    <>
      <h1>Detail Dentist {users.id} </h1>
      <table>
        <thead>
          <tr className='tableCategories'>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr className='tableData'>
            <td>{users?.name}</td>
            <td>{users?.email}</td>
            <td>{users?.phone}</td>
            <td>{users?.website}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Detail;
