import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import Profile from './Profile/Profile';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import { data, friends, user, transactions } from '../data/index';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics stats={data} title={'Upload stats'} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};