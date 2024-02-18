from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional
app = FastAPI()

class Task(BaseModel):
  name: str
  description: Optional[str] = None

@app.get('/api')
def get_item():
  task = Task(name = 'asdf')
  return {'message': task}