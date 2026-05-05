from ml_service.config.model_config import MODEL_CONFIG


def merge_params(algorithm: str, user_params: dict):
    """
    Merge user-provided params with default model config.
    User params override defaults.
    """
    default_params = MODEL_CONFIG.get(algorithm, {}).get("params", {})

    if user_params is None:
        user_params = {}

    final_params = {**default_params, **user_params}
    return final_params