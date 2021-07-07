import { Component } from "react";
import "../App.css"
import Card from "../subcomponents/FeesCard";
class Fees extends Component {
  constructor() {
    super();
    this.state = {
      fees: [
        { serial: "001607680", name: "Hanzala", date: "12-12-12", pay: "6550" },
      ],
    };
  }
  render() {
    return (
      <>
        <table>
            <th className = 'info'>Serial</th>
            <th className = 'info'>Pay</th>
            <th className = 'info'>Name</th>
            <th className = 'info'>Date</th>
          {this.state.fees.map((fee) => (
            <Card
              serial={fee.serial}
              name={fee.name}
              date={fee.date}
              pay={fee.pay}
            />
          ))}
        <td>
            <input type = 'text' className = 'infoget'/>
        </td>
        <td>
            <input type = 'text' className = 'infoget'/>
        </td>
        <td>
            <button className = 'infoget'>Done</button>
        </td>
        </table>
      </>
    );
  }
}
export default Fees;
