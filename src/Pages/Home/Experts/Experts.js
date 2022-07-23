import React from 'react';
import expert1 from '../../../Images/experts/expert-1.jpg'
import expert2 from '../../../Images/experts/expert-2.jpg'
import expert3 from '../../../Images/experts/expert-3.jpg'
import expert4 from '../../../Images/experts/expert-4.jpg'
import expert5 from '../../../Images/experts/expert-5.jpg'
import expert6 from '../../../Images/experts/expert-6.png'
import Expert from '../Expert/Expert';

const Experts = () => {

    const experts = [
        { id: 1, name: 'volvo', Image: expert1 },
        { id: 2, name: 'volvo1', Image: expert2 },
        { id: 3, name: 'volvo2', Image: expert3 },
        { id: 4, name: 'volvo3', Image: expert4 },
        { id: 5, name: 'volvo4', Image: expert5 },
        { id: 6, name: 'volvo5', Image: expert6 }
    ]
    return (
        <div id='experts' className='container'>
            <h1 className='mt-5 services-title'>Our Experts</h1>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;