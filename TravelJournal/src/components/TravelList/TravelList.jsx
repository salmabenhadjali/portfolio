import travels from '../../data/travels.js';
import TravelCard from '../TravelCard/TravelCard';

function TravelList () {
    return (
        <div className='travels'>
            {travels.map((travel, index) => (
                <TravelCard key={index} {...travel}/>
            ))}
        </div>
    );
}

export default TravelList;