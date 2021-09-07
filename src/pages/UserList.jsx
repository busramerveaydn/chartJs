import React, { useEffect, useState } from 'react'
import UserServices from '../services/userService'
import {Table } from 'semantic-ui-react'
export default function UserList() {
    //bir aksiyon çağırmak için kullanılır.
    // userList adında yenir bir state değişkenş tanımlandı.
    const [userLists, setUser] = useState([])

    //component yüklendiğinde yapılması istenen kod yazılır.
    //veriler getiriliyor
    useEffect(() => {
        let userService = new UserServices()
        userService.getUsers().then(result => setUser(result.data.data))    
    }, [])



    return (
        <div>
            <Table striped>
                <Table.Header>
                    <Table.Row color={'red'}>
                    <Table.HeaderCell>Adı</Table.HeaderCell>
                        <Table.HeaderCell>Soyadı</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        userLists.map((user) => (
                            <Table.Row key={user.id}>
                                <Table.Cell>{user.userName}</Table.Cell>
                                <Table.Cell>{user.userSurname}</Table.Cell>
                            </Table.Row>
                        ))}
                </Table.Body>
            </Table>
        </div>
    )
}
