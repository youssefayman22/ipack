
import PageBody from "./PageBody/PageBody";

/**
 * Layout component
 *
 * To change the icon in the corner (if needed), pass it's name in a string as a prop, otherwise leave empty
 *
 * Refer to `imageImports.js` for the names of icons
 *
 * @param {JSX.Element} subheaderComponent - Send the subheader with your desired title, subtitle, and icon directly as a prop
 * @param {string} imageName - Determines which icon to display in the page body (leave empty if not needed)
 * @returns {JSX.Element} The rendered layout
 */

function Layout({children, subheaderComponent, cornerImageName}) {
  return (
    <>
      {subheaderComponent}
      <PageBody imageName={cornerImageName}>
      {children}
      </PageBody>
    </>
  );
}

export default Layout;
