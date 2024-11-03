import TravelCard from '../types/TravelCard';

declare module "../../data/travels" {
    const travels: TravelCard[];
    export default travels;
}