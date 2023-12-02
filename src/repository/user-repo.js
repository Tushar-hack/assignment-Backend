import User from '../Models/User.js';
import CRUDRepository from './CRUd-Repository.js';

class UserRepository extends CRUDRepository {
    constructor () {
        super(User);
    }
}

export default UserRepository;
