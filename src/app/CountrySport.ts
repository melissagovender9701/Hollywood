import {Tournament} from './tournament';
import {Country} from './country';

export interface CountrySport{
    sportid : number;
    country : Country;
    tournaments : Tournament[];
}