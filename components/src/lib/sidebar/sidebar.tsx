'use client';

import React, { useState, useCallback } from 'react';
import { Button, Drawer, Menu } from '@daylix-ui/components';
import { useDetectClickOutside } from '@daylix-ui/hooks';
import { useTranslations } from 'next-intl';
import { Info } from 'lucide-react';

const Sidebar: React.FC = () => {
  const t = useTranslations('sideBar.menu');

  const [visible, setVisible] = useState(false);

  const toggleVisible = useCallback(() => {
    setVisible(prev => !prev);
  }, []);

  const closeDrawer = useCallback(() => {
    setVisible(false);
  }, []);

  const ref = useDetectClickOutside({
    onTriggered: closeDrawer,
    disableKeys: true,
  });

  return (
    <>
      <Button shape="square" onClick={toggleVisible}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </Button>
      <Drawer
        className="w-0 z-[1]"
        open={visible}
        onClickOverlay={toggleVisible}
        side={
          <Menu ref={ref as React.LegacyRef<HTMLUListElement>} className="menu-lg p-4 w-80 h-full bg-base-200 text-base-content">
            <Menu.Item>
              <a>
                <Info size={28} strokeWidth={1.5} />
                {t('about')}
              </a>
            </Menu.Item>
          </Menu>
        }
      />
    </>
  );
};

export default Sidebar;
