import TravelCardType from "../../types/TravelCard"
import travels from '../../data/travels';
import TravelCard from '../TravelCard/TravelCard';

const TravelList: React.FC = () => {
    return (
        <div className='travels'>
            {travels.map((travel: TravelCardType, index: number) => (
                <TravelCard key={index} {...travel}/>
            ))}
        </div>
    );
}

export default TravelList;