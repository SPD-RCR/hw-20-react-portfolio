import linkedin from './assets/img/linkedin.svg';
import github from './assets/img/github.svg';

const Footer = () => (
  <footer className="footer text-center">
    <a href={"https://www.linkedin.com/in/robert-george-0186a213/"} target={"LinkedIn"}><img src={ linkedin } height="32" width="32" alt="LinkedIn icon"></img></a> <a href={"https://github.com/SPD-RCR"} target={"GitHub"}><img src={ github } height="32" width="32" alt="GitHub icon"></img></a>
  </footer>
)

export default Footer;
