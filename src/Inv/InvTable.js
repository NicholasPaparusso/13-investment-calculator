import style from './InvTable.module.css'
import InvTableBody from './InvTableBody'
const InvTable = (props) => {
    return (
      <table className={style.result}>
        <thead>
            <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <InvTableBody data={props.data}/>
    </table>
    );
}

export default InvTable;