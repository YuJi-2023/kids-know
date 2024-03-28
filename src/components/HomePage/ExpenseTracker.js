import React from "react";
import Container from "react-bootstrap/Container";

const ExpenseTracker = () => {
  return (
    <>
      <Container>
        <h3 className="text-center mb-4 text-primary">My Expense Tracker</h3>
        <div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Subject</th>
                <th></th>
              </tr>
            </thead>
          </table>
        </div>
      </Container>
    </>
  );
};

export default ExpenseTracker;
