import React, { Component } from "react";
import { Icon } from "@blueprintjs/core";
import Key from "./Key";

export default class TransactionTable extends Component {
  render() {
    if (Object.keys(this.props.block.transactions).length === 0)
      return <p>This block contains no transactions.</p>

    return (
      <table>
        <thead>
          <tr>
            <th>Transaction Hash</th>
            <th>Sender Public Key</th>
            <th />
            <th>Receiver Public Key</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(this.props.block.transactions).map(tx => {
            return (
              <tr key={tx.hash}>
                <td>
                  <textarea
                    className="pt-input"
                    spellCheck={false}
                    style={{ width: "200px", height: "100px" }}
                    value={tx.hash}
                    readOnly
                  />
                </td>
                <td>
                  <Key value={tx.inputPublicKey} />
                </td>
                <td>
                  <Icon iconName="pt-icon-arrow-right" />
                </td>
                <td>
                  <Key value={tx.outputPublicKey} />
                </td>
                <td>{tx.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}