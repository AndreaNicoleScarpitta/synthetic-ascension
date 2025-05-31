# agents/generator.py

import sys
import uuid
from datetime import datetime
from typing import Dict

from sqlmodel import Session
from db import engine
from models.models import GenerationJob, AgentRun, Patient, Encounter

def generate_patients_and_encounters(condition: str, count: int):
    print(f"▶ Starting job: condition={condition}, count={count}")
    with Session(engine) as session:
        # 1) Create a new generation job
        job = GenerationJob(
            request_payload={"condition": condition, "count": count},
            status="pending",
            started_at=datetime.utcnow(),
            ended_at=None,
        )
        session.add(job)
        session.commit()   # populate job.id
        print(f"  • Created GenerationJob {job.id}")

        # 2) Generate each record
        for i in range(count):
            record: Dict = {
                "demographics": {
                    "age": str(30 + i),
                    "gender": "M" if i % 2 == 0 else "F"
                },
                "encounter": {
                    "type": "outpatient",
                    "period_start": datetime.utcnow().isoformat(),
                    "location": {"clinic": "A", "room": str(100 + i)},
                    "reason": condition,
                }
            }

            # 3) Log the agent run
            agent_run = AgentRun(
                job_id=job.id,
                agent_name="synthetic-ehr-agent",
                input={"condition": condition, "iteration": i},
                output=record,
                ran_at=datetime.utcnow()
            )
            session.add(agent_run)
            session.commit()
            print(f"  • Logged AgentRun {agent_run.id}")

            # 4a) Insert Patient
            p = Patient(demographics=record["demographics"])
            session.add(p)
            session.commit()
            print(f"    – Inserted Patient {p.id}")

            # 4b) Insert Encounter
            enc = record["encounter"]
            e = Encounter(
                patient_id=p.id,
                type=enc["type"],
                period_start=datetime.fromisoformat(enc["period_start"]),
                location=enc["location"],
                reason=enc["reason"],
                created_at=datetime.utcnow()
            )
            session.add(e)
            session.commit()
            print(f"    – Inserted Encounter {e.id}")

        # 5) Mark job as completed
        job.status = "completed"
        job.ended_at = datetime.utcnow()
        session.add(job)
        session.commit()
        print(f"✔ Job {job.id} completed")
        return job.id

if __name__ == "__main__":
    # CLI usage: python -m agents.generator <condition> <count>
    if len(sys.argv) >= 3:
        cond = sys.argv[1]
        cnt = int(sys.argv[2])
    else:
        cond, cnt = "hypertension", 3

    generate_patients_and_encounters(cond, cnt)
