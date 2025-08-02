import ButtonProject from "../../components/button-project";
import Link from "../../components/link";

export default function TrainingML() {

    return (
        <ButtonProject
            title="2025 - Training Machine Learning Models"
            github="https://github.com/bonefteofil/Training-ML-ICI"
        >
            During my practical training at the <Link  text="National Institute for Research & Development in Informatics" href="https://www.ici.ro/en/" /> from Bucharest, I was assigned a task to train several machine learning models: <br />
            - <Link text="Ultralitycs YOLOv8" href="https://docs.ultralytics.com/models/yolov8/" /> for familiarizing with the training process <br />
            - <Link text="SkLearn" href="https://scikit-learn.org/stable/" /> to train on Titanic data from <Link text="Kaggle" href="https://www.kaggle.com/c/titanic" /> <br />
        </ButtonProject>
    );
}