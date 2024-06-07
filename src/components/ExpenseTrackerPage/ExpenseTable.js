import React from "react";
import { Table } from "react-bootstrap";

const ExpenseTable = ({ expenses }) => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Catergory</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
              <td>{expense.date}</td>
              <td>{expense.description}</td>
            </tr>
          ))}
          {/* <tr>
            <td>2</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr> */}
          <tr>
            <td>Total</td>
            <td colSpan={4}>
              {expenses
                .reduce(
                  (total, expense) => total + parseFloat(expense.amount),
                  0
                )
                .toFixed(2)}
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default ExpenseTable;
