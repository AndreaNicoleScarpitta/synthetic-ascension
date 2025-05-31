# models/models.py

import uuid
from datetime import datetime
from typing import Any, Dict, Optional
from sqlmodel import SQLModel, Field
from sqlalchemy import Column
from sqlalchemy.dialects.postgresql import JSONB

class Patient(SQLModel, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    demographics: Dict[str, str] = Field(sa_column=Column(JSONB, nullable=False))
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class GenerationJob(SQLModel, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    request_payload: Dict[str, Any] = Field(sa_column=Column(JSONB, nullable=False))
    status: str = Field(default="pending")
    started_at: datetime = Field(default_factory=datetime.utcnow)
    ended_at: Optional[datetime] = Field(default=None)

class AgentRun(SQLModel, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    job_id: uuid.UUID = Field(foreign_key="generationjob.id")
    agent_name: str
    input: Dict[str, Any] = Field(sa_column=Column(JSONB, nullable=False))
    output: Dict[str, Any] = Field(sa_column=Column(JSONB, nullable=False))
    ran_at: datetime = Field(default_factory=datetime.utcnow)

class Encounter(SQLModel, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    patient_id: uuid.UUID = Field(foreign_key="patient.id")
    type: str
    period_start: datetime
    period_end: Optional[datetime] = Field(default=None)
    location: Dict[str, Any] = Field(sa_column=Column(JSONB, nullable=False))
    reason: str
    created_at: datetime = Field(default_factory=datetime.utcnow)

class Condition(SQLModel, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    patient_id: uuid.UUID = Field(foreign_key="patient.id")
    code: str
    clinical_status: str
    onset: datetime
    abatement: Optional[datetime] = Field(default=None)
    created_at: datetime = Field(default_factory=datetime.utcnow)

class Observation(SQLModel, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    patient_id: uuid.UUID = Field(foreign_key="patient.id")
    code: str
    value: Dict[str, Any] = Field(sa_column=Column(JSONB, nullable=False))
    status: str
    issued: datetime
    created_at: datetime = Field(default_factory=datetime.utcnow)
