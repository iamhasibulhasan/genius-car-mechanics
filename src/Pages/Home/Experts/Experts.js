import React, { useEffect, useState } from 'react';
import Expert from './../Expert/Expert';

const Experts = () => {
    const [experts, setExperts] = useState([]);

    useEffect(() => {
        fetch('experts.json')
            .then(res => res.json())
            .then(data => setExperts(data))
    }, []);
    return (
        <div className="my-5 text-center" id="experts">
            <h1 className="text-warning mb-3">Our Experts</h1>
            <div className="row g-0">
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