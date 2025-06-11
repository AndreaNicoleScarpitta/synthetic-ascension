from .base_agent import BaseAgent
from datetime import datetime

class QAAdversarialAgent(BaseAgent):
    def run(self, input_data: dict) -> dict:
        # Very basic logic — you can expand later
        flags = []

        competitor = input_data.get("competitor", {}).get("known_cohorts", [])
        if "Rural teens" not in competitor:
            flags.append({
                "agent": "CompetitorScanAgent",
                "issue": "Missing cohort coverage for rural teens",
                "confidence": 0.72,
                "recommendation": "Include pediatric populations in literature search"
            })

        return {
            "flags": flags,
            "safe_to_continue": len(flags) == 0,
            "timestamp": datetime.utcnow().isoformat()
        }
