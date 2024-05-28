import React from 'react';

const Divider = () => {
    return (
        <div style={{ display:'flex' , flexDirection:'row' , alignItems:'center' , justifyItems:'center' , paddingRight:'10%' , paddingLeft:'10%' }}>
        <div style={{ borderBottom: '1px solid black', margin: '1rem 0' , width:'100%' }} />
        </div>
    );
};

export default Divider;