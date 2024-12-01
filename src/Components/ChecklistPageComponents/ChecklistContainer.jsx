import ChecklistElement from "./ChecklistElement/ChecklistElement/ChecklistElement";
import Title from "./Title/Title";
import { typeOfHeader } from "../../constants/userOptionsModel";
import RadioButton from "./ChecklistElement/RadioButton/RadioButton";
import ChecklistLabel from "./ChecklistElement/Label/ChecklistElementLabel";
import RadioButtonAndLabelContainer from "./ChecklistElement/RadioButtonAndLabelContainer/RadioButtonAndLabelContainer";
import styles from './ChecklistContainer.module.css';
//Notes on using this component:
// 1. The arrayOfItems prop is an array of names that will be displayed as list items.
// 2. The headerTitle prop is the title of the container eg "Documents".
// 3. The subHeaderTitle prop is the sub title of the smaller container eg "Noha's Electronics".
// 4. The headerTitle can be any string found in the userOptionsModel.js file with the name of the checklistPageTitles object.

export default function ChecklistContainer({
  arrayOfItems,
  headerTitle="",
  subHeaderTitle = "",
}) {
  return (
    <div className={styles.containerLayout}>
      {headerTitle && <Title title={headerTitle} type={typeOfHeader.HEADER} />}
      {subHeaderTitle && (
        <Title title={subHeaderTitle} type={typeOfHeader.SUB_HEADER} />
      )}
        {arrayOfItems?.map((el, i) => (
          <ChecklistElement key={Math.random() * i}>
            <RadioButtonAndLabelContainer>
              <RadioButton name={el.itemName} />
              <ChecklistLabel elementLabel={el.itemName} />
            </RadioButtonAndLabelContainer>
          </ChecklistElement>
        ))}
    </div>
  );
}
