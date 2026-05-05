from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, confusion_matrix


def run_logistic(X, y, params):
    test_size = params["test_size"]
    C = params["C"]
    max_iter = params["max_iter"]
    solver = params["solver"]

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=test_size, random_state=42
    )

    model = LogisticRegression(
        C=C,
        max_iter=max_iter,
        solver=solver
    )

    model.fit(X_train, y_train)

    predictions = model.predict(X_test)

    return {
        "model": "Logistic Regression",
        "accuracy": float(accuracy_score(y_test, predictions)),
        "confusion_matrix": confusion_matrix(y_test, predictions).tolist()
    }