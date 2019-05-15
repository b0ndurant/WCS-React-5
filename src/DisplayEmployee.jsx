import  React  from  'react';

const  DisplayEmployee = ({ employee }) => {
    return (
        <div  className="DisplayEmployee">
            <ul>
                <li>Gender : {employee.gender}</li>
                
                <li>E-mail : {employee.email}</li>
                
            </ul>
        </div>
    );
};

export  default  DisplayEmployee;