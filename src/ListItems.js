import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SearchIcon from '@material-ui/icons/Search';
import StorefrontIcon from '@material-ui/icons/Storefront';

  
export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon  className="Mui-selected big-icon"/>
      </ListItemIcon>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SearchIcon className="big-icon" />
      </ListItemIcon>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StorefrontIcon className="big-icon" />
      </ListItemIcon>
    </ListItem>
    
  </div>
);

