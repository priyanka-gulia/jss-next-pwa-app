import { Text, RichText, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

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
const Header = ({ fields }: HeaderProps): JSX.Element => (
  //   <div className="Header is-text-align-right is-masked-light">
  //     <div className="media" style={{ backgroundImage: `url(priyanka-white.png)` }}></div>
  //     <div className="content-wrap">
  //       <div className="content">
  //         <h1 className="text soft-pink">
  //           Hi, I am Priyanka Senior Sitecore Developer based in Vadodara.
  //         </h1>
  //         <p>
  //           I am specialized in the software development arena. For the last 6 years, I have been
  //           developing web applications using C#, .NET MVC, JavaScript/jQuery, AngularJS and SQL
  //           Server.
  //         </p>
  //         <p>
  //           I{' '}
  //           <a className="link-1" href="https://in.linkedin.com/in/priyanka-gulia" target="_blank">
  //             work
  //           </a>
  //           , sometimes
  //           <a
  //             className="link-1"
  //             href="https://www.upwork.com/freelancers/~01a9400badb5a2ec20"
  //             target="_blank"
  //           >
  //             freelance
  //           </a>{' '}
  //           and push
  //           <a className="link-1" href="https://github.com/priyanka-gulia" target="_blank">
  //             code
  //           </a>
  //           .
  //         </p>
  //         <p>
  //           For collaboration or questions;
  //           <a className="link-2" href="mailto:priyankaguliya@gmail.com">
  //             priyankaguliya@gmail.com
  //           </a>
  //         </p>
  //       </div>
  //     </div>
  //   </div>
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
    </div>
  </div>
);

export default withDatasourceCheck()<HeaderProps>(Header);
