import { Chance } from 'chance';

const chance = Chance();

// console.log(chance.name({ middle: true }));
const fakeUser = () => chance.name({ middle: true });
export default fakeUser;
