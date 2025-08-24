import ButtonProject from "../../Components/button-project";
import Link from "../../Components/link";

export default function TrainingML() {

    return (
        <ButtonProject
            title="2025 - Training Machine Learning Models"
            github="https://github.com/bonefteofil/Training-ML-ICI"
        >
            During my practical training at the <Link  text="National Institute for Research & Development in Informatics" href="https://www.ici.ro/en/" /> from Bucharest, I
            was assigned the task of training several machine learning models, starting with simpler ones and progressing to more customizable approaches. The scripts for each model are provided as Jupyter notebooks for easier experimentation.<br />
            <br />Project Structure:<br />
            - <Link text="Ultralytics YOLOv8" href="https://docs.ultralytics.com/models/yolov8/" /> used to become familiar with the training process.<br />
            - <Link text="Titanic dataset" href="https://www.kaggle.com/c/titanic" /> downloaded from Kaggle.<br />
            - <Link text="SkLearn" href="https://scikit-learn.org/stable/" /> to experiment with multiple models using the Titanic dataset.<br />
            - <Link text="PyTorch" href="https://docs.pytorch.org/tutorials/beginner/basics/quickstart_tutorial.html" /> for training on the same dataset with greater control over hyperparameters.
        </ButtonProject>
    );
}