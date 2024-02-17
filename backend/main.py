from fastapi import FastAPI
from pydantic import BaseModel
app = FastAPI()

class Task(BaseModel):
  name: str
  description: str | None

@app.get('/api')
def get_item():
  return {'message': 'Hello World'}