from .base_agent import BaseQAAgent

class PatientScorecard(BaseQAAgent):
    def run(self, input_data: dict) -> dict:
        return {
            "patient_id": input_data.get("patient_id", "unknown"),
            "score": 0.92,
            "issues": input_data.get("issues", [])
        }
