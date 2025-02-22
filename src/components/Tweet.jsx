import ProfileImage from './ProfileImage';
import User from './User';
import Timestamp from './Timestamp';
import Message from './Message';
import Actions from './Actions';

function Tweet({ tweet }) {
  const { user } = tweet;
  return (
    <div className='tweet'>
      <ProfileImage image={user.image} />
      <div className='body'>
        <div className='top'>
          <User name={user.name} handle={user.handle} />
          <Timestamp time={tweet.timestamp} />
        </div>
        <Message message={tweet.message} />
        <Actions />
      </div>
      <i class='fas fa-ellipsis-h'></i>
    </div>
  );
}

export default Tweet;
