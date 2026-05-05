from fastapi import APIRouter
from pydantic import BaseModel
from typing import Dict, Any

from app.services.training_service import train_model

router = APIRouter()


class TrainRequest(BaseModel):
    algorithm: str
    dataset: str
    params: Dict[str, Any] = {}


@router.post("/train")
def train(req: TrainRequest):
    try:
        result = train_model(
            algorithm=req.algorithm,
            dataset=req.dataset,
            user_params=req.params
        )
        return result

    except Exception as e:
        return {
            "error": str(e)
        }