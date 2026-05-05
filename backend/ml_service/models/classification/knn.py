from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, confusion_matrix


def run_knn(X, y, params):
    test_size = params["test_size"]
    k = params["n_neighbors"]
    metric = params["metric"]

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=test_size, random_state=42
    )

    model = KNeighborsClassifier(
        n_neighbors=k,
        metric=metric
    )

    model.fit(X_train, y_train)

    predictions = model.predict(X_test)

    return {
        "model": "KNN",
        "accuracy": float(accuracy_score(y_test, predictions)),
        "confusion_matrix": confusion_matrix(y_test, predictions).tolist()
    }