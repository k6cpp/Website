import Head from "next/head";

const noContent = () => <div>No Content</div>;

const Template = props => {
  let Title = props.title || "No Title";
  let Content = props.content || noContent;
  let InPageTitle = props.inPageTitle || Title;
  return (
    <div>
      <Head>
        <meta content="IE=edge" http-equiv="X-UA-Compatible" />
        <title>{Title}</title>
        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport"
        />
        {/* Header Links from /common/2018/assets/includes/header-links.shtml May 7, 2019 */}
        <link
          crossorigin="anonymous"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
          integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
          rel="stylesheet"
        />
        <script
          crossorigin="anonymous"
          defer="defer"
          integrity="sha384-d84LGg2pm9KhR4mCAs3N29GQ4OYNy+K+FBHX8WhimHpPm86c839++MDABegrZ3gn"
          src="https://pro.fontawesome.com/releases/v5.0.13/js/all.js"
        />
        <link
          href="https://www.cpp.edu/common/2018/assets/css/cpp-base-styles.css"
          rel="stylesheet"
        />{" "}
        <link
          href="https://www.cpp.edu/common/2018/assets/css/cpp-extended-styles.css"
          rel="stylesheet"
        />{" "}
        <link
          href="https://customer.cludo.com/assets/10000600/10000921/cludo-search.min.css"
          rel="stylesheet"
          type="text/css"
        />
        {/* End Pull */}
      </Head>
      {/* Nav from /common/2018/assets/includes/university-branding-nav-2018.shtml May 7, 2019 */}
      <header class="fixed-top" title="Cal Poly Pomona Search">
        <nav
          class="navbar navbar-expand transparent cpp-logobar-min"
          id="cpp-logobar"
        >
          <div class="navbar-nav mr-auto">
            <a
              class="logo align-middle"
              href="https://www.cpp.edu/index.shtml"
              id="cpp-header-logo-link"
            >
              {" "}
              <img
                alt="Cal Poly Pomona with Octagon"
                id="cpp-logo-octo"
                src="https://www.cpp.edu/common/2018/assets/img/cpp-octo-web.svg"
              />{" "}
            </a>{" "}
            <a class="sr-only" href="#main" id="skip-to-nav">
              Skip To Main Content
            </a>
          </div>
          <form
            autocomplete="off"
            class="center-search row justify-content-center"
            id="searchcpp"
            method="get"
            role="search"
          >
            <label class="sr-only" for="searchbar">
              SEARCH Box
            </label>{" "}
            <input
              class="search-query_new"
              id="searchbar"
              maxlength="256"
              name="cludoquery"
              placeholder="What can we help you find?"
              title="search"
              type="text"
            />{" "}
            <button
              alt="SEARCH"
              class="button"
              id="searchbutton"
              title="SEARCH"
              type="submit"
              value="submit"
            >
              {" "}
              <i class="fas fa-search" />{" "}
              <span class="sr-only">Submit Search</span>{" "}
            </button>
            <div
              aria-expanded="false"
              class="show dropdown-toggle"
              data-toggle="dropdown"
              id="shcontainer"
            >
              <div
                aria-labelledby="suggestedh2"
                class="dropdown-menu dropdown-menu-right"
                id="searchhelp"
              >
                <h2 id="suggestedh2">Popular Searches</h2>
                <ul id="autocomplete-results" />
              </div>
            </div>
          </form>
        </nav>
      </header>
      {/* End Pull */}
      <header title={InPageTitle}>
        <div id="dept-title">{InPageTitle}</div>
      </header>
      <main class="container flex-grow">
        <Content />
      </main>
      {/* Footer from /common/2018/assets/includes/footer.shtml May 7, 2019 */}
      <footer class="container-fluid" id="main-footer">
        <div class="row">
          <div class="col-lg col-md col-sm-6 address text-left">
            <img
              alt="cal poly pomona"
              class="footer-logo"
              src="https://www.cpp.edu/common/2018/assets/img/cpp-white.png"
            />
            <p>3801 West Temple Avenue,Pomona, CA 91768</p>
            <div class="copyright">
              <p class="copyright-text">
                Â©2019 California State Polytechnic University, Pomona
              </p>
              <p class="copyright-text">All Rights Reserved</p>
            </div>
          </div>
          <div class="col-lg col-md-7 col-sm-6 footer-links">
            <a
              href="https://www.cpp.edu/&#126;aboutcpp/index.shtml"
              title="Cpp About"
            >
              About Cal Poly Pomona
            </a>{" "}
            <a
              aria-label="Cpp Feedback"
              href="https://www.cpp.edu/website-feedback.php"
              title="Cpp Feedback"
            >
              Feedback
            </a>{" "}
            <a
              aria-label="Cpp Privacy"
              href="https://www.cpp.edu/privacy.shtml"
              title="footer - Privacy"
            >
              Privacy
            </a>{" "}
            <a href="https://www.cpp.edu/accessibility.shtml">Accessibility</a>{" "}
            <a href="https://www.cpp.edu/file-viewers.shtml">
              Document Readers
            </a>
          </div>
        </div>
        <div class="row" id="csu-footer">
          <a
            href="https://www2.calstate.edu"
            title="California state university"
          >
            <img
              alt="california state university"
              src="https://www.cpp.edu/common/2018/assets/img/csu-wordmark-horizontal.png"
            />
          </a>
        </div>

        <script
          src="https://code.jquery.com/jquery-3.2.1.min.js"
          integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
          crossorigin="anonymous"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossorigin="anonymous"
        />
        <script
          src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossorigin="anonymous"
        />
        <script src="https://www.cpp.edu/common/2018/assets/js/cpp.js" />
      </footer>
      {/* End Pull */}
    </div>
  );
};

const MakePage = (Title, Page) => () => (
  <div>
    <Template title={Title} content={Page} />
  </div>
);

export default MakePage;
