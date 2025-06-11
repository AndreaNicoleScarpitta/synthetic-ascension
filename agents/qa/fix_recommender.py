from .base_agent import BaseQAAgent

class FixRecommender(BaseQAAgent):
    def run(self, input_data: dict) -> dict:
        return {
            "fixes": [
                {
                    "issue": "label_note_conflict",
                    "suggestion": "Regenerate note with stricter context prompt"
                }
            ]
        }
