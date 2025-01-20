'use client';

import React, { useState, useCallback } from 'react';
import { Button, Drawer } from '@daylix-ui/components';
import { Menu } from '@daylix-ui/components';

const Sidebar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = useCallback(() => {
    setVisible(prev => !prev);
  }, []);

  return (
    <>
      <Button shape="square" onClick={toggleVisible}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </Button>
      <Drawer
        className="w-0"
        open={visible}
        onClickOverlay={toggleVisible}
        side={
          <Menu className="p-4 w-80 h-full bg-base-200 text-base-content">
            <Menu.Item>
              <a>Sidebar Item 1</a>
            </Menu.Item>
            <Menu.Item>
              <a>Sidebar Item 2</a>
            </Menu.Item>
          </Menu>
        }
      />
    </>
  );
};

export default Sidebar;
