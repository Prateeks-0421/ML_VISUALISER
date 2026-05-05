# from ml_service.datasets.dataset_loader import load_dataset

# from ml_service.datasets.loaders import load_dataset
from ml_service.datasets.loaders.load_datasets import load_dataset
from app.utils.helpers import merge_params

# Import ALL models (final structure)
from ml_service.models.regression.linear_regression import run_linear_regression
from ml_service.models.classification.logistic_regression import run_logistic
from ml_service.models.classification.knn import run_knn
from ml_service.models.classification.decision_tree import run_decision_tree
from ml_service.models.classification.svm import run_svm
from ml_service.models.classification.naive_bayes import run_naive_bayes


def train_model(algorithm: str, dataset: str, user_params: dict):
    """
    Main training entry point.
    """
    # Load dataset
    X, y = load_dataset(dataset)

    # Merge parameters
    params = merge_params(algorithm, user_params)

    # Route to correct model
    if algorithm == "linear_regression":
        return run_linear_regression(X, y, params)

    elif algorithm == "logistic_regression":
        return run_logistic(X, y, params)

    elif algorithm == "knn":
        return run_knn(X, y, params)

    elif algorithm == "decision_tree":
        return run_decision_tree(X, y, params)

    elif algorithm == "svm":
        return run_svm(X, y, params)

    elif algorithm == "naive_bayes":
        return run_naive_bayes(X, y, params)

    else:
        raise ValueError(f"Unsupported algorithm: {algorithm}")