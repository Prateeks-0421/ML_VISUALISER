from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score


def run_linear_regression(X, y, params):
    test_size = params["test_size"]

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=test_size, random_state=42
    )

    model = LinearRegression()
    model.fit(X_train, y_train)

    predictions = model.predict(X_test)

    return {
        "model": "Linear Regression",
        "mse": float(mean_squared_error(y_test, predictions)),
        "r2_score": float(r2_score(y_test, predictions))
    }