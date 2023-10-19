const InvTableBody = (props) => {
    const investments = props.data;
    if(investments.length === 0){
        return(
            <tbody>
                <tr>
                    <td>YEAR NUMBER</td>
                    <td>TOTAL SAVINGS END OF YEAR</td>
                    <td>INTEREST GAINED IN YEAR</td>
                    <td>TOTAL INTEREST GAINED</td>
                    <td>TOTAL INVESTED CAPITAL</td>
                </tr>
            </tbody>
        )
    }else{
        return (
            <tbody>
                
                {
                    investments.map( (item) => {
                        return(
                        <tr key={item.year}>
                            <td>{item.year}</td>
                            <td>{item.savingsEndOfYear}</td>
                            <td>{item.yearlyInterest}</td>
                            <td>{item.totalInterest}</td>
                            <td>{item.InvCapital}</td>
                        </tr>)
                        
                    } )
                }

            </tbody>
        );
    }     
}

export default InvTableBody;