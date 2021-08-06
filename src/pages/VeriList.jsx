import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import 'semantic-ui-css/semantic.min.css'
import { Table } from 'semantic-ui-react'
import BarChart from '../components/BarChart'
import Veriservices from '../services/veriservice'

export default function VeriList() {
    const [veriLists, setVeri] = useState([])


    useEffect(() => {
        let veriService = new Veriservices()
        veriService.getVeriler().then(result => setVeri(result.data.data))
    }, [])
    return (
        <div>
            <Table striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Çok Memnun</Table.HeaderCell>
                        <Table.HeaderCell>Memnun Değil</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        veriLists.map((veri) => (
                            <Table.Row key={veri.id}>
                                <Table.Cell>
                                    {veri.cokMemnun ? "True" : "False"}
                                </Table.Cell>
                                <Table.Cell>
                                    {veri.memnunDegil ? "True" : "False"}
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>

            <BarChart/>

        </div>
    )
}
