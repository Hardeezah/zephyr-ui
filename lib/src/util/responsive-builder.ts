import React, { useState, useEffect, ReactElement } from 'react';

interface ResponsiveBuilderProps {
  mobile: ReactElement;
  tablet: ReactElement;
  desktop: ReactElement;
}

const ResponsiveBuilder: React.FC<ResponsiveBuilderProps> = ({ mobile, tablet, desktop }) => {
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDeviceType('mobile');
      } else if (width < 1024) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderContent = (): ReactElement => {
    switch (deviceType) {
      case 'mobile':
        return mobile;
      case 'tablet':
        return tablet;
      case 'desktop':
      default:
        return desktop;
    }
  };

  return renderContent();
};

export default ResponsiveBuilder;