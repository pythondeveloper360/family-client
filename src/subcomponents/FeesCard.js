import "../App.css";
const Card = ({ serial, name, date, pay }) => {
  return (
    <>
      <tr className="fees-tr">
        <td className="info">{serial}</td>
        <td className="info">{pay}</td>
        <td className="info">{name}</td>
        <td className="info">{date}</td>
      </tr>
    </>
  );
};
export default Card;
