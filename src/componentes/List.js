import React from 'react';

export const List = ({list})=>{


    return <div style={{display:'flex',justifyContent:'center',overflow:'scroll',height: list.length < 20 ? '' : '1000px'}}>
        <table style={{width:'90%'}}>
            <tbody>
                {list.map(item=><tr >
                    <td style={{borderBottom:'solid 1px gray',textAlign:'left'}}>
                        {item.name}
                    </td>
                    <td style={{borderBottom:'solid 1px gray',textAlign:'left'}}>
                        {item.description}
                    </td>
                </tr>)}
            </tbody>
        </table>
    </div>
}