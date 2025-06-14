const Footer = () => {
  const CURRENTYEAR = new Date().getFullYear();
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-x-12 gap-y-3 border-t border-surface py-4 text-center md:justify-center ">
      <p className="text-xl">&copy; {CURRENTYEAR} Expense T</p>
      <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        <p>
          Made With &#x2665;&#xfe0f; from{" "}
          <a href="https://github.com/Afolabiyinka" target="_blank">
            Olayinka
          </a>
        </p>
      </ul>
    </footer>
  );
};

export default Footer;
