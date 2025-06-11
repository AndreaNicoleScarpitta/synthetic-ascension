from agents.research.base_agent import BaseAgent
from datetime import datetime

class RegulatoryConstraintAgent(BaseAgent):
    def run(self, input_data: dict) -> dict:
        return {
            "banned_interventions": ["Avandia"],
            "requirements": ["ethics board approval for minors"],
            "source": "Kenya MOH Guidelines 2023",
            "version": "v1.2",
            "parsed_at": datetime.utcnow().isoformat()
        }
