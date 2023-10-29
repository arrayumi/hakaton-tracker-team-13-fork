import mainStudentCv from "./index.module.css";
import downloadIcon from "../../../../../images/download.svg";
import { useSelector } from "../../../../../services/hooks";
import WorkExpItem from "../work-expirience-item";
import { workExp } from "../../../../../constants/applicantsList";

export default function MainStudentCv() {
  const selectedCard = useSelector(
    (state) => state.applicants.selectedCardData
  );
  const workExp: Array<workExp> = selectedCard.workExpirience;

  return (
    <div className={mainStudentCv.wrapper}>
      <div className={mainStudentCv.downloadSection}>
        <p className={mainStudentCv.text}>
          Место для ссылки на резюме и портфолио (если кандидат добавил ранее)
        </p>
        <button className={mainStudentCv.button}>
          <img alt="иконка скачивания" src={downloadIcon} />
          <p className={mainStudentCv.buttonText}>Скачать резюме</p>
        </button>
      </div>
      <div className={mainStudentCv.experience}>
        <h2 className={mainStudentCv.title}>Опыт работы:</h2>
        <ul className={mainStudentCv.experienceList}>
          {workExp
            ? workExp.map((element: workExp, index) => {
                return <WorkExpItem key={index} workExp={element} />;
              })
            : "Опыт работы не указан"}
        </ul>
      </div>
    </div>
  );
}
