from fastapi import APIRouter

router = APIRouter()

@router.get("/datasets")
def get_datasets():
    return {
        "datasets": [
            {"id": "iris", "name": "Iris"},
            {"id": "wine", "name": "Wine"},
            {"id": "breast_cancer", "name": "Breast Cancer"},
            {"id": "diabetes", "name": "Diabetes"},
            {"id": "california_housing", "name": "California Housing"}
        ]
    }