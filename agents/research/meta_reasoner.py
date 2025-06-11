from .base_agent import BaseAgent
from datetime import datetime

class MetaReasoner(BaseAgent):
    def run(self, input_data: dict) -> dict:
        # Extract inputs
        literature = input_data.get("literature", {}).get("evidence_items", [])
        rwd = input_data.get("rwd", {}).get("evidence_items", [])
        regulatory = input_data.get("regulatory", {}).get("evidence_items", [])

        # Very naive conflict detector
        conflicts = []
        for lit in literature:
            for reg in regulatory:
                if "metformin" in lit["content"].get("recommended_drug", "").lower() \
                   and "metformin" in reg["content"].get("banned_drugs", []):
                    conflicts.append({
                        "field": "metformin",
                        "issue": "Banned in regulatory data but recommended in literature",
                        "confidence": 0.85,
                        "recommendation": "Verify drug guidelines by region"
                    })

        return {
            "conflict_flags": conflicts,
            "missing_data_calls": [],
            "research_rerun_required": len(conflicts) > 0,
            "timestamp": datetime.utcnow().isoformat()
        }
