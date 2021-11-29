import { Autobind } from "@utils/decorators";
import React, { Component } from "react";
import { Table } from "antd";
import { ColumnsType } from 'antd/lib/table';

const columns: ColumnsType<any> = [
  {
    title: "Name",
    dataIndex: "name",
    filterSearch: true,
    onFilter: (value: string, record: Record<string, any>) => record.name.includes(value),
    width: "30%",
    sorter: (a: any, b: any) => a.name.localeCompare(b.name),
  },
  {
    title: "Age",
    dataIndex: "age",
    sorter: (a: any, b: any) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value: string, record: Record<string, any>) => record.address.startsWith(value),
    filterSearch: true,
    sorter: (a: any, b: any) => a.age - b.age,
    width: "40%",
  },
] as ColumnsType<any>;

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];

export class TrucksDashboard extends Component {
  @Autobind
  tableRenderer() {
    return <Table columns={columns} dataSource={data} />;
  }

  render() {
    return <div>{this.tableRenderer()}</div>;
  }
}
