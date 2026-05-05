MODEL_CONFIG = {
    "linear_regression": {
        "params": {
            "test_size": 0.2
        }
    },

    "logistic_regression": {
        "params": {
            "C": 1.0,
            "max_iter": 1000,
            "solver": "lbfgs",
            "test_size": 0.2
        }
    },

    "knn": {
        "params": {
            "n_neighbors": 5,
            "metric": "minkowski",
            "test_size": 0.2
        }
    },

    "decision_tree": {
        "params": {
            "max_depth": 5,
            "criterion": "gini",
            "test_size": 0.2
        }
    },

    "svm": {
        "params": {
            "C": 1.0,
            "kernel": "rbf",
            "gamma": "scale",
            "test_size": 0.2
        }
    },

    "naive_bayes": {
        "params": {
            "var_smoothing": 1e-9,
            "test_size": 0.2
        }
    }
}