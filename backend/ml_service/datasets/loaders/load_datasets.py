from sklearn.datasets import (
    load_iris,
    load_wine,
    load_breast_cancer,
    load_diabetes,
    fetch_california_housing
)


def load_dataset(name: str):
    name = name.lower()

    if name == "iris":
        data = load_iris()
    elif name == "wine":
        data = load_wine()
    elif name == "breast_cancer":
        data = load_breast_cancer()
    elif name == "diabetes":
        data = load_diabetes()
    elif name == "california_housing":
        data = fetch_california_housing()
    else:
        raise ValueError(f"Dataset '{name}' not supported")

    return data.data, data.target