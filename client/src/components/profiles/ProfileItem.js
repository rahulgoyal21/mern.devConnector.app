import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getGithubProfileImage } from '../../actions/profile';

const ProfileItem = ({
  profile: { user, status, company, location, skills, githubusername }
}) => {
  const [imgUrl, setImgUrl] = useState('');
  useEffect(() => {
    async function getData() {
      try {
        const response = await getGithubProfileImage(githubusername);
        setImgUrl(response);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [githubusername]);
  return (
    <div className='profile bg-light'>
      <img src={imgUrl} alt='' className='round-img' />
      <div>
        <h2>{user?.name}</h2>
        <p>
          {status} {company && <span> at {company}</span>}
        </p>
        <p className='my-1'>{location && <span> {location}</span>}</p>
        <Link to={`/profile/${user?._id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className='text-primary'>
            <i className='fas fa-check'>&nbsp;{skill}</i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileItem;
