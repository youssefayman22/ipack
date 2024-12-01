import FormContainer from "../Components/Form/FormContainer";
import Layout from "../Components/HomePageLayout/layout";
import Subheader from "../Components/HomePageLayout/Subheader/Subheader";
import {
  LandingTitle,
  LandingSubtitle,
  LandingHeaderImage,
  LandingBodyImage,
} from "../constants/textConstants";

function LandingPage() {
  // We will pass this component as a prop
  // On other pages, we will do the same, but modify the props as needed
  const subheaderComponent = (
    <Subheader
      titleText={LandingTitle}
      subtitleText={LandingSubtitle}
      imageName={LandingHeaderImage}
    />
  );

  return (
    <Layout
      subheaderComponent={subheaderComponent}
      cornerImageName={LandingBodyImage}
    >
      <FormContainer />
    </Layout>
  );
}

export default LandingPage;
