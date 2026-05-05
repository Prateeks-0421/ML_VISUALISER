from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.metrics import confusion_matrix


def run_decision_tree(X, y, params):
    test_size = params["test_size"]
    max_depth = params["max_depth"]
    criterion = params["criterion"]

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=test_size, random_state=42
    )

    model = DecisionTreeClassifier(
        max_depth=max_depth,
        criterion=criterion
    )

    model.fit(X_train, y_train)

    predictions = model.predict(X_test)

    return {
        "model": "Decision Tree",
        "accuracy": float(accuracy_score(y_test, predictions)),
        "confusion_matrix": confusion_matrix(y_test, predictions).tolist()
    }