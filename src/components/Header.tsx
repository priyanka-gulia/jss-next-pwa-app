import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import PushNotification from './PushNotification';
import InstallCustomPWA from './InstallCustomPWA';

type HeaderProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    content: Field<string>;
  };
};

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const Header = ({}: HeaderProps): JSX.Element => (
  <div className="main">
    <div className="page-wrapper" style={{ backgroundImage: `url(priyanka-white.png)` }}></div>
    <div className="page-content">
      <h1 className="text-right">
        Hi, I am Priyanka <br /> Senior Sitecore Developer <br /> based in Vadodara.
      </h1>
      <p className="text-right description">
        I am specialized in the software development arena. For the last 6 years, I have been
        developing web applications using C#, .NET MVC, Sitecore, JavaScript/jQuery, NextJS and SQL
        Server.
      </p>
      <p className="text-right">
        I <a href="#">work</a>, sometimes <a href="#">freelance</a> and push <a href="#">code</a>
      </p>
      <p className="text-right mb-0">For collaboration or questions;</p>
      <a className="link-2" href="mailto:priyankaguliya@gmail.com">
        priyankaguliya@gmail.com
      </a>
      <div className="mt-5">
        <PushNotification />
      </div>
      <div>
        <InstallCustomPWA />
      </div>
    </div>
  </div>
);

export default withDatasourceCheck()<HeaderProps>(Header);
