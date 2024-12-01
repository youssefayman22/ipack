import { useSelector } from "react-redux";
import ChecklistDisplayLayout from "../Components/ChecklistPageComponents/checklistDisplayLayout";
import Layout from "../Components/HomePageLayout/layout";
import Subheader from "../Components/HomePageLayout/Subheader/Subheader";
import {
  checklistTitle,
  checklistSubtitle,
  LandingHeaderImage,
} from "../constants/textConstants";
import { userDataSelector } from "../store/userDataSlice";
import ExportToPDF from "../Components/ExportToPdf/ExportToPdf";
function ChecklistPage() {
  // We will pass this component as a prop
  // On other pages, we will do the same, but modify the props as needed
  const {name} = useSelector(userDataSelector);

  const subheaderComponent = (
    <Subheader
      titleText={name+checklistTitle}
      subtitleText={checklistSubtitle}
      imageName={LandingHeaderImage}
    />
  );

  return (
    <ExportToPDF buttonText="Print/Export as PDF">
      <Layout subheaderComponent={subheaderComponent}>
        <ChecklistDisplayLayout />
      </Layout>
    </ExportToPDF>
  );
}

export default ChecklistPage;
