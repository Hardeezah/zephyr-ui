import React, { ReactElement } from 'react';
interface ResponsiveBuilderProps {
    mobile: ReactElement;
    tablet: ReactElement;
    desktop: ReactElement;
}
declare const ResponsiveBuilder: React.FC<ResponsiveBuilderProps>;
export default ResponsiveBuilder;
