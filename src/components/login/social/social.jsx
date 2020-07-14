import React from 'react';
import { FacebookIcon, GitHubIcon, GoogleIcon } from './icons';
import { List } from '@material-ui/core';
import LoginStrategy from './login-strategy';
import { useSocialStyles } from './social-styles';

const Social = () => {
  const classes = useSocialStyles();
  return (
    <div className={classes.socialWrapper}>
      <div className={classes.social}>
        <List component='ul'>
          <LoginStrategy
            icon={<FacebookIcon />}
            text={'login with facebook'}
            url={'/api/auth/facebook'}
          />

          <LoginStrategy
            icon={<GitHubIcon />}
            text={'login with github'}
            url={'/api/auth/github'}
          />

          <LoginStrategy
            icon={<GoogleIcon />}
            text={'login with google'}
            url={'/api/auth/google'}
          />
        </List>
      </div>
    </div>
  );
};

export default Social;
