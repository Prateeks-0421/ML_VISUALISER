from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import train, datasets

app = FastAPI(title="ML GUI Backend")

# CORS (for React frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routes
app.include_router(train.router, prefix="/api")
app.include_router(datasets.router, prefix="/api")


@app.get("/")
def root():
    return {"message": "ML GUI Backend Running"}