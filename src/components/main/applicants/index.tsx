import React, { useEffect } from "react";
import { useDispatch, useSelector } from "../../../services/hooks";
import {
  setSelectedCardData,
  setUserModalVisibility,
} from "../../../services/reducers/applicants";
import applicantsPage from "./index.module.css";
import page from "../index.module.css";
import ApplicantsCard from "./applicants-card";
import BasicModal from "../../modal/modal";
import StudentModal from "./applicant-modal";
import ApplicantsFilter from "./applicants-filter";
import { TApplicant, TVacancy } from "../../../utils/types";
import { setSelectedDropDownVacancy } from "../../../services/reducers/applicants";

const Applicants: React.FC<{}> = (): JSX.Element => {
  const dispatch = useDispatch();
  const isUserModalVisible = useSelector(
    (state) => state.applicants.isUserModalVisible
  );

  useEffect(() => {
    dispatch(setSelectedDropDownVacancy({} as TVacancy));
  }, []);

  const applicants = useSelector((state) => state.applicants.applicants);
  const shownApplicants = useSelector(
    (state) => state.applicants.shownApplicants
  );

  function closeUserModal() {
    dispatch(setUserModalVisibility(false));
  }

  function openUserModal(card: TApplicant) {
    dispatch(setUserModalVisibility(true));
    dispatch(setSelectedCardData(card));
  }
  return (
    <div className={`${page.pageElement} ${applicantsPage.container}`}>
      <h2 className={applicantsPage.title}>Соискатели</h2>
      <ApplicantsFilter />
      {applicants.length > 0 ? (
        <ul className={applicantsPage.list}>
          {shownApplicants.map((element: TApplicant) => {
            return (
              <li key={element.id} onClick={() => openUserModal(element)}>
                <ApplicantsCard applicant={element} />
              </li>
            );
          })}
        </ul>
      ) : (
        <div className={applicantsPage.notFoundContainer}>
          Ничего не найдено
        </div>
      )}
      <BasicModal closePopup={closeUserModal} isVisible={isUserModalVisible}>
        <StudentModal />
      </BasicModal>
    </div>
  );
};

export default Applicants;
