import { Flex } from "antd";
import { useSelector } from "react-redux";
import { dataList } from "../../store/dataSlice";
import ChecklistSectionWrapper from "./checklistSectionWrapper";
import getDisplayName from "./getDisplayName";

import styles from "./checklistDisplayLayout.module.css";

const ChecklistDisplayLayout = () => {
  const lists = useSelector(dataList);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.checklistContainer}>
        {Object.entries(lists).map(([key, value]) => {
          return (
              <ChecklistSectionWrapper
                listName={getDisplayName(key)}
                listData={value}
              />
          );
        })}
      </div>
    </div>
  );
};

export default ChecklistDisplayLayout;
