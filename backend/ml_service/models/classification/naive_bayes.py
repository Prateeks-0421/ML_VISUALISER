from sklearn.naive_bayes import GaussianNB
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, confusion_matrix


def run_naive_bayes(X, y, params):
    test_size = params["test_size"]
    var_smoothing = params["var_smoothing"]

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=test_size, random_state=42
    )

    model = GaussianNB(var_smoothing=var_smoothing)

    model.fit(X_train, y_train)

    predictions = model.predict(X_test)

    return {
        "model": "Naive Bayes",
        "accuracy": float(accuracy_score(y_test, predictions)),
        "confusion_matrix": confusion_matrix(y_test, predictions).tolist()
    }