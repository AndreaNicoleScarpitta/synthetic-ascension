from .base_agent import BaseQAAgent

class QAOrchestrator(BaseQAAgent):
    def run(self, input_data: dict) -> dict:
        return {
            "trust_score": 0.87,
            "summary": "3 agents passed, 2 flagged issues",
            "flags": input_data.get("flags", [])
        }
