import { Meteor } from 'meteor/meteor';

import methods from './methods/index';
import publications from './publications/index';
import accounts from './configs/accounts';

accounts();

methods();
publications();
