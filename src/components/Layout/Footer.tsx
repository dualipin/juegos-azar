const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content mt-auto items-center p-4">
      <aside className="grid-flow-col items-center">
        <p>
          <span>Copyright © {new Date().getFullYear()}</span> &nbsp;
          <a
            className="link"
            href="https://dualipin.vercel.app/"
            rel="noopener noreferrer"
          >
            Martin Sanchez
          </a>
        </p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a
          className="link"
          href="https://github.com/dualipin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="link"
          href="https://www.linkedin.com/in/mrtnsnry/"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
